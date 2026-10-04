const date = new Date().toISOString();

const questions = {
  mathematics: {
    metadata: { version: '1.0.0', totalQuestions: 10, lastUpdated: date },
    questions: []
  },
  reasoning: {
    metadata: { version: '1.0.0', totalQuestions: 10, lastUpdated: date },
    questions: []
  },
  science: {
    metadata: { version: '1.0.0', totalQuestions: 10, lastUpdated: date },
    questions: []
  },
  awareness: {
    metadata: { version: '1.0.0', totalQuestions: 10, lastUpdated: date },
    questions: []
  }
};

export default questions;
