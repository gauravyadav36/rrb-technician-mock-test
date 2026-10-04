export type SubjectName = 'Mathematics' | 'General Intelligence & Reasoning' | 'General Science' | 'General Awareness';

export type Option = {
  id: string;
  text: string;
  isCorrect: boolean;
};

export type Question = {
  id: string;
  subject: SubjectName;
  topic: string;
  difficulty: 'easy' | 'medium' | 'hard';
  question: string;
  options: Option[];
  explanation: string;
};

export type AttemptRecord = {
  id: string;
  subjectMode: string;
  startedAt: string;
  finishedAt: string;
  score: number;
  total: number;
  correct: number;
  wrong: number;
  unattempted: number;
  percentage: number;
  sectionBreakdown: Record<string, number>;
};

export type NoteTopic = {
  title: string;
  label: string;
  content: string[];
  formulas?: string[];
};

export type StudyNote = {
  subject: SubjectName;
  title: string;
  topics: NoteTopic[];
};
