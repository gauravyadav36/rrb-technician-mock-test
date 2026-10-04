export interface QuestionBankMeta { version: string; totalQuestions: number; lastUpdated: string; }
export interface QuestionBankFile {
  metadata: QuestionBankMeta;
  questions: any[];
}

export const questionBankSeed: QuestionBankFile = {
  metadata: {
    version: '1.0.0',
    totalQuestions: 100,
    lastUpdated: '2026-10-04',
  },
  questions: [],
};
