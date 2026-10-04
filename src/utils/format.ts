import katex from 'katex';
import 'katex/dist/katex.min.css';
import type { SubjectName } from '../types';

export function renderLatexInline(text: string) {
  try {
    return katex.renderToString(text, { throwOnError: false, displayMode: false, output: 'htmlAndMathml' });
  } catch {
    return text;
  }
}

export function renderLatexBlock(text: string) {
  try {
    return katex.renderToString(text, { throwOnError: false, displayMode: true, output: 'htmlAndMathml' });
  } catch {
    return text;
  }
}

export const SUBJECTS: Array<SubjectName | 'Full Length'> = [
  'Full Length',
  'Mathematics',
  'General Intelligence & Reasoning',
  'General Science',
  'General Awareness',
];

export function formatSubjectLabel(subject: string) {
  return subject === 'Full Length' ? 'Full Length (100 Qs)' : subject;
}
