export function shuffle<T>(items: T[]): T[] {
  const copy = [...items];
  for (let i = copy.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

export function getSubjectQuestions(subject: string, bank: Record<string, any[]>) {
  const normalized = subject === 'Full Length' ? Object.values(bank).flat() : bank[subject] ?? [];
  return shuffle(normalized);
}

export function buildExamSet(subject: string, bank: Record<string, any[]>, count = 100) {
  const questions = getSubjectQuestions(subject, bank);
  return questions.slice(0, Math.min(count, questions.length));
}

export function scoreAttempt(questions: any[], answers: Record<string, string | null>) {
  let correct = 0;
  let wrong = 0;
  let unattempted = 0;

  for (const question of questions) {
    const selected = answers[question.id] ?? null;
    if (!selected) {
      unattempted += 1;
      continue;
    }

    const isCorrect = question.options.some((opt: any) => opt.id === selected && opt.isCorrect);
    if (isCorrect) correct += 1;
    else wrong += 1;
  }

  const score = correct - wrong / 3;
  const maxScore = questions.length;
  const percentage = maxScore === 0 ? 0 : (score / maxScore) * 100;

  return {
    correct,
    wrong,
    unattempted,
    score,
    percentage,
  };
}
