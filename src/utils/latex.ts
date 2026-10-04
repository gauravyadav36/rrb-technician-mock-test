import jsPDF from 'jspdf';
import type { Question, StudyNote, SubjectName } from '../types';

export function buildLatexDocument(title: string, sections: string[]) {
  return `
\\documentclass[12pt,a4paper]{article}
\\usepackage[margin=1in]{geometry}
\\usepackage{amsmath,amssymb}
\\begin{document}
\\title{${title}}
\\maketitle
${sections.join('\n')}\\end{document}
  `.trim();
}

export function downloadTextFile(filename: string, content: string) {
  const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = filename;
  link.click();
  URL.revokeObjectURL(url);
}

export function generateQuestionPaperPdf(questions: Question[]) {
  const doc = new jsPDF({ unit: 'pt', format: 'a4' });
  let y = 48;
  doc.setFontSize(18);
  doc.text('RRB Technician Grade 3 – Question Paper', 42, y);
  y += 32;

  questions.forEach((q, idx) => {
    if (y > 760) {
      doc.addPage();
      y = 48;
    }
    doc.setFontSize(11);
    const cleanQuestion = (q.question || '').replace(/\$|\\/g, '');
    doc.text(`${idx + 1}. ${cleanQuestion}`, 42, y, { maxWidth: 500 });
    y += 18;
    q.options.forEach((option) => {
      doc.text(`${option.id}. ${option.text.replace(/\$|\\/g, '')}`, 54, y);
      y += 16;
    });
    y += 8;
  });

  doc.save('rrb_question_paper.pdf');
}

export function generateAnswerKeyPdf(questions: Question[]) {
  const doc = new jsPDF({ unit: 'pt', format: 'a4' });
  let y = 48;
  doc.setFontSize(18);
  doc.text('RRB Technician Grade 3 – Answer Key', 42, y);
  y += 28;

  questions.forEach((q, idx) => {
    if (y > 760) {
      doc.addPage();
      y = 48;
    }
    const correct = q.options.find((opt) => opt.isCorrect)?.id ?? 'N/A';
    doc.setFontSize(11);
    doc.text(`${idx + 1}. Correct answer: ${correct}`, 42, y);
    y += 18;
    const explanation = (q.explanation || '').replace(/\$|\\/g, '');
    const wrapped = doc.splitTextToSize(explanation, 500);
    doc.text(wrapped, 54, y);
    y += wrapped.length * 14 + 10;
  });

  doc.save('rrb_answer_key.pdf');
}

export function generateNotesPdf(notes: StudyNote[]) {
  const doc = new jsPDF({ unit: 'pt', format: 'a4' });
  let y = 48;
  doc.setFontSize(18);
  doc.text('RRB Technician Grade 3 – Study Notes', 42, y);
  y += 26;

  notes.forEach((subjectNotes) => {
    if (y > 740) {
      doc.addPage();
      y = 48;
    }
    doc.setFontSize(14);
    doc.text(subjectNotes.subject, 42, y);
    y += 22;

    subjectNotes.topics.forEach((topic) => {
      if (y > 740) {
        doc.addPage();
        y = 48;
      }
      doc.setFontSize(11);
      doc.text(`• ${topic.title}`, 48, y);
      y += 16;
      topic.content.forEach((line) => {
        const wrapped = doc.splitTextToSize(line.replace(/\$|\\/g, ''), 480);
        doc.text(wrapped, 58, y);
        y += wrapped.length * 13 + 6;
      });
      y += 6;
    });
  });

  doc.save('rrb_study_notes.pdf');
}

export function makeLatexSourceForNotes(notes: StudyNote[]) {
  const sections = notes.map((subjectNotes) => {
    const topicSections = subjectNotes.topics
      .map((topic) => `\\subsection*{${topic.title}}\\begin{itemize}${topic.content
        .map((line) => `\\item ${line.replace(/&&/g, '\\&')}`)
        .join('')}\\end{itemize}`)
      .join('\n');
    return `\\section*{${subjectNotes.subject}}\n${topicSections}`;
  });

  return buildLatexDocument('RRB Technician Grade 3 Study Notes', sections);
}
