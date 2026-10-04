const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '../');
const publicDir = path.join(root, 'public');

if (!fs.existsSync(publicDir)) fs.mkdirSync(publicDir, { recursive: true });
const subjectFiles = ['mathematics.json', 'reasoning.json', 'science.json', 'awareness.json'];
subjectFiles.forEach((file) => {
  const full = path.join(publicDir, 'questions', file);
  fs.mkdirSync(path.dirname(full), { recursive: true });
  fs.writeFileSync(full, JSON.stringify({ metadata: { version: '1.0.0' }, questions: [] }, null, 2));
});

const wasmDir = path.join(publicDir, 'wasmtex', '2025');
fs.mkdirSync(wasmDir, { recursive: true });
fs.writeFileSync(path.join(wasmDir, '.keep'), '');
