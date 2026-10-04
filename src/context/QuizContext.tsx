import { createContext, useContext, useMemo, useState } from 'react';
import type { AttemptRecord, SubjectName } from '../types';

const DEFAULT_HISTORY: AttemptRecord[] = [];

type QuizContextValue = {
  history: AttemptRecord[];
  setHistory: (next: AttemptRecord[]) => void;
  addAttempt: (attempt: AttemptRecord) => void;
  selectedSubject: SubjectName | 'Full Length';
  setSelectedSubject: (subject: SubjectName | 'Full Length') => void;
};

const QuizContext = createContext<QuizContextValue | undefined>(undefined);

export function QuizProvider({ children }: { children: React.ReactNode }) {
  const [history, setHistory] = useState<AttemptRecord[]>(() => {
    const raw = localStorage.getItem('rrb-tech-history');
    if (!raw) return DEFAULT_HISTORY;
    try {
      return JSON.parse(raw) as AttemptRecord[];
    } catch {
      return DEFAULT_HISTORY;
    }
  });

  const [selectedSubject, setSelectedSubject] = useState<SubjectName | 'Full Length'>('Full Length');

  const value = useMemo<QuizContextValue>(() => ({
    history,
    setHistory,
    addAttempt: (attempt) => {
      const next = [attempt, ...history].slice(0, 30);
      setHistory(next);
      localStorage.setItem('rrb-tech-history', JSON.stringify(next));
    },
    selectedSubject,
    setSelectedSubject,
  }), [history, selectedSubject]);

  return <QuizContext.Provider value={value}>{children}</QuizContext.Provider>;
}

export function useQuizContext() {
  const ctx = useContext(QuizContext);
  if (!ctx) throw new Error('QuizContext not found');
  return ctx;
}
