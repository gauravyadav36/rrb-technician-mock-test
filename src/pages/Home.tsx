import { Link } from 'react-router-dom';
import { SUBJECTS } from '../utils/format';

export default function Home() {
  return (
    <div className="container py-10">
      <section className="section-card grid gap-8 p-8 md:grid-cols-[1.3fr_0.7fr]">
        <div>
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-blue-300">Railway Technician Grade 3</p>
          <h1 className="text-4xl font-bold leading-tight text-white md:text-5xl">Unlimited mock tests and notes for exam-ready preparation.</h1>
          <p className="mt-5 max-w-xl text-base text-slate-300">
            Practice full-length 100-question mocks, revise chapter notes, and generate PDF downloads for papers, answer keys, and quick-reference formulas — all directly in your browser.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link to="/mock-test" className="accent-button">Take Full Mock Test</Link>
            <Link to="/notes" className="secondary-button">Open Study Notes</Link>
          </div>
        </div>

        <div className="rounded-2xl border border-slate-700 bg-slate-950/60 p-5">
          <h2 className="mb-4 text-xl font-semibold text-white">Exam Pattern</h2>
          <ul className="space-y-3 text-sm text-slate-300">
            <li className="flex justify-between border-b border-slate-700 pb-2"><span>Mathematics</span><strong>25</strong></li>
            <li className="flex justify-between border-b border-slate-700 pb-2"><span>Reasoning</span><strong>25</strong></li>
            <li className="flex justify-between border-b border-slate-700 pb-2"><span>General Science</span><strong>40</strong></li>
            <li className="flex justify-between border-b border-slate-700 pb-2"><span>General Awareness</span><strong>10</strong></li>
            <li className="flex justify-between"><span>Total</span><strong>100</strong></li>
          </ul>
        </div>
      </section>

      <section className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {SUBJECTS.map((subject) => (
          <div key={subject} className="section-card p-5">
            <h3 className="mb-2 font-semibold text-lg text-white">{subject}</h3>
            <p className="text-sm text-slate-300">
              {subject === 'Full Length' ? '100 questions • 90 minutes • negative marking' : 'Practice subject-specific questions and revision notes.'}
            </p>
          </div>
        ))}
      </section>
    </div>
  );
}
