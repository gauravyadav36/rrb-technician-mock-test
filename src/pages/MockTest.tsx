import { useMemo, useState } from 'react';
import { QUESTION_BANK } from '../data/questionBank';
import { buildExamSet, scoreAttempt, shuffle } from '../utils/randomization';
import { useQuizContext } from '../context/QuizContext';
import { formatSubjectLabel, SUBJECTS } from '../utils/format';
import { generateAnswerKeyPdf, generateQuestionPaperPdf, downloadTextFile, makeLatexSourceForNotes } from '../utils/latex';
import type { Question } from '../types';

const TOTAL_TIME_SECONDS = 90 * 60;

export default function MockTest() {
  const { addAttempt } = useQuizContext();
  const [mode, setMode] = useState<string>('Full Length');
  const [questions, setQuestions] = useState<Question[]>(() => buildExamSet('Full Length', QUESTION_BANK, 100));
  const [selectedAnswers, setSelectedAnswers] = useState<Record<string, string | null>>({});
  const [currentIndex, setCurrentIndex] = useState(0);
  const [timeLeft, setTimeLeft] = useState(TOTAL_TIME_SECONDS);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const startNewTest = (nextMode: string) => {
    const bank = QUESTION_BANK as Record<string, Question[]>;
    const nextQuestions = nextMode === 'Full Length' ? buildExamSet(nextMode, bank, 100) : buildExamSet(nextMode, bank, 25);
    setQuestions(nextQuestions);
    setSelectedAnswers({});
    setCurrentIndex(0);
    setTimeLeft(TOTAL_TIME_SECONDS);
    setIsSubmitted(false);
    setMode(nextMode);
  };

  useMemo(() => {
    const timer = window.setInterval(() => {
      if (!isSubmitted) {
        setTimeLeft((prev) => {
          if (prev <= 1) {
            window.clearInterval(timer);
            handleSubmit();
            return 0;
          }
          return prev - 1;
        });
      }
    }, 1000);

    return () => window.clearInterval(timer);
  }, [isSubmitted]);

  const currentQuestion = questions[currentIndex];

  const handleSubmit = () => {
    if (isSubmitted) return;
    const result = scoreAttempt(questions, selectedAnswers);
    const attempt = {
      id: crypto.randomUUID(),
      subjectMode: mode,
      startedAt: new Date().toISOString(),
      finishedAt: new Date().toISOString(),
      score: Number(result.score.toFixed(2)),
      total: questions.length,
      correct: result.correct,
      wrong: result.wrong,
      unattempted: result.unattempted,
      percentage: Number(result.percentage.toFixed(1)),
      sectionBreakdown: {
        Mathematics: mode === 'Full Length' ? 25 : 0,
        Reasoning: mode === 'Full Length' ? 25 : 0,
        GeneralScience: mode === 'Full Length' ? 40 : 0,
        GeneralAwareness: mode === 'Full Length' ? 10 : 0,
      },
    };
    addAttempt(attempt);
    setIsSubmitted(true);
    generateAnswerKeyPdf(questions);
  };

  const minutes = String(Math.floor(timeLeft / 60)).padStart(2, '0');
  const seconds = String(timeLeft % 60).padStart(2, '0');

  if (isSubmitted) {
    const result = scoreAttempt(questions, selectedAnswers);
    return (
      <div className="container py-10">
        <div className="section-card p-8">
          <h2 className="text-3xl font-bold text-white">Result Summary</h2>
          <p className="mt-2 text-slate-300">Mode: {mode}</p>
          <div className="mt-6 grid gap-4 md:grid-cols-4">
            <div className="rounded-xl border border-slate-700 p-4"><p className="text-slate-400">Score</p><strong className="text-2xl text-white">{result.score.toFixed(1)}</strong></div>
            <div className="rounded-xl border border-slate-700 p-4"><p className="text-slate-400">Correct</p><strong className="text-2xl text-white">{result.correct}</strong></div>
            <div className="rounded-xl border border-slate-700 p-4"><p className="text-slate-400">Wrong</p><strong className="text-2xl text-white">{result.wrong}</strong></div>
            <div className="rounded-xl border border-slate-700 p-4"><p className="text-slate-400">Accuracy</p><strong className="text-2xl text-white">{result.percentage.toFixed(1)}%</strong></div>
          </div>

          <div className="mt-8 space-y-4">
            {questions.map((q, idx) => {
              const selected = selectedAnswers[q.id];
              const correct = q.options.find((opt) => opt.isCorrect)?.id ?? 'N/A';
              const isCorrect = selected && q.options.some((opt) => opt.id === selected && opt.isCorrect);
              return (
                <div key={q.id} className="rounded-xl border border-slate-700 bg-slate-900/50 p-4">
                  <p className="font-semibold text-white">{idx + 1}. {q.question.replace(/\$|\\/g, '')}</p>
                  <p className="mt-2 text-sm text-slate-300">Your answer: {selected ?? 'Unanswered'} | Correct: {correct}</p>
                  <p className="mt-2 text-sm text-slate-300">Explanation: {q.explanation}</p>
                  <p className={`mt-2 text-sm font-medium ${isCorrect ? 'text-emerald-400' : 'text-rose-400'}`}>
                    {isCorrect ? 'Correct' : 'Incorrect / Unattempted'}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            <button className="accent-button" onClick={() => startNewTest(mode)}>Retake</button>
            <button className="secondary-button" onClick={() => generateQuestionPaperPdf(questions)}>Download Question Paper</button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container py-8">
      <div className="mb-6 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <div className="flex flex-wrap gap-3">
          {SUBJECTS.map((subject) => (
            <button
              key={subject}
              onClick={() => startNewTest(subject)}
              className={`rounded-full border px-4 py-2 text-sm ${mode === subject ? 'border-blue-500 bg-blue-500/10 text-white' : 'border-slate-700 bg-slate-900 text-slate-200'} `}
            >
              {formatSubjectLabel(subject)}
            </button>
          ))}
        </div>

        <div className={`rounded-lg border px-4 py-2 text-lg font-semibold ${timeLeft < 600 ? 'border-amber-500 bg-amber-500/10 text-amber-300' : 'border-slate-700 bg-slate-900 text-white'}`}>
          Time Left: {minutes}:{seconds}
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-[1fr_260px]">
        <div className="section-card p-6">
          {currentQuestion && (
            <>
              <div className="mb-5 flex items-center justify-between gap-3">
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-blue-300">{currentQuestion.subject}</p>
                  <p className="mt-2 text-sm text-slate-400">Question {currentIndex + 1} of {questions.length}</p>
                </div>
                <span className="rounded-full bg-slate-800 px-3 py-1 text-xs text-slate-300">{currentQuestion.topic}</span>
              </div>

              <h2 className="text-2xl font-semibold leading-relaxed text-white">{currentQuestion.question.replace(/\$|\\/g, '')}</h2>

              <div className="mt-6 space-y-3">
                {currentQuestion.options.map((option) => {
                  const isSelected = selectedAnswers[currentQuestion.id] === option.id;
                  return (
                    <button
                      key={option.id}
                      onClick={() => {
                        setSelectedAnswers((prev) => ({ ...prev, [currentQuestion.id]: option.id }));
                      }}
                      className={`question-option flex w-full items-center gap-3 rounded-xl border p-4 text-left ${isSelected ? 'border-blue-500 bg-blue-500/10' : 'border-slate-700 bg-slate-950/40'}`}
                    >
                      <span className="flex h-8 w-8 items-center justify-center rounded-full border border-slate-600 text-sm font-semibold">{option.id}</span>
                      <span className="text-base text-slate-100">{option.text.replace(/\$|\\/g, '')}</span>
                    </button>
                  );
                })}
              </div>
            </>
          )}

          <div className="mt-8 flex flex-wrap items-center justify-between gap-3">
            <div className="flex gap-3">
              <button className="secondary-button" disabled={currentIndex === 0} onClick={() => setCurrentIndex((prev) => Math.max(prev - 1, 0))}>Previous</button>
              <button className="secondary-button" disabled={currentIndex >= questions.length - 1} onClick={() => setCurrentIndex((prev) => Math.min(prev + 1, questions.length - 1))}>Next</button>
            </div>
            <button className="accent-button" onClick={handleSubmit}>Submit Test</button>
          </div>
        </div>

        <aside className="section-card p-5">
          <h3 className="text-lg font-semibold text-white">Question Map</h3>
          <div className="mt-4 grid grid-cols-5 gap-2">
            {questions.map((question, idx) => {
              const answered = !!selectedAnswers[question.id];
              return (
                <button
                  key={question.id}
                  onClick={() => setCurrentIndex(idx)}
                  className={`flex h-10 items-center justify-center rounded-md border text-sm ${idx === currentIndex ? 'border-blue-500 bg-blue-500/10 text-white' : answered ? 'border-emerald-500 bg-emerald-500/10 text-emerald-300' : 'border-slate-700 bg-slate-900 text-slate-300'}`}
                >
                  {idx + 1}
                </button>
              );
            })}
          </div>
        </aside>
      </div>
    </div>
  );
}
