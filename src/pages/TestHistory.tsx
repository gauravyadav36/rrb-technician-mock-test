import { useEffect, useState } from 'react';
import { useQuizContext } from '../context/QuizContext';

export default function TestHistory() {
  const { history } = useQuizContext();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <div className="container py-8">
      <div className="section-card p-6">
        <h1 className="text-3xl font-bold text-white">Test History</h1>
        <p className="mt-2 text-slate-300">Track your scores, accuracy, and recent attempts.</p>

        {history.length === 0 ? (
          <div className="mt-6 rounded-xl border border-dashed border-slate-600 p-8 text-center text-slate-300">
            No attempts yet. Start your first mock test to build your learning trend.
          </div>
        ) : (
          <div className="mt-6 overflow-x-auto">
            <table className="w-full min-w-[700px] border-separate border-spacing-y-2 text-left text-sm text-slate-200">
              <thead>
                <tr>
                  <th className="px-3 py-2">Mode</th>
                  <th className="px-3 py-2">Score</th>
                  <th className="px-3 py-2">Correct</th>
                  <th className="px-3 py-2">Wrong</th>
                  <th className="px-3 py-2">Accuracy</th>
                  <th className="px-3 py-2">Date</th>
                </tr>
              </thead>
              <tbody>
                {history.map((attempt) => (
                  <tr key={attempt.id} className="rounded-lg bg-slate-900/50">
                    <td className="rounded-l-lg px-3 py-3">{attempt.subjectMode}</td>
                    <td className="px-3 py-3">{attempt.score.toFixed(1)}</td>
                    <td className="px-3 py-3">{attempt.correct}</td>
                    <td className="px-3 py-3">{attempt.wrong}</td>
                    <td className="px-3 py-3">{attempt.percentage.toFixed(1)}%</td>
                    <td className="rounded-r-lg px-3 py-3">{new Date(attempt.finishedAt).toLocaleDateString()}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
