import { QUESTION_BANK } from '../data/questionBank';
import type { Question } from '../types';

export default function QuizEngine({
  subject,
  onFinish,
}: {
  subject: string;
  onFinish: (result: { score: number; correct: number; wrong: number; total: number }) => void;
}) {
  const questions = (QUESTION_BANK as Record<string, Question[]>)[subject] ?? [];

  return (
    <div className="text-white">
      <p>Loaded {questions.length} questions for {subject}.</p>
    </div>
  );
}
