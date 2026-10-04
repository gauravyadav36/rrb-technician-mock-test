export default function About() {
  return (
    <div className="container py-8">
      <div className="section-card p-8">
        <h1 className="text-3xl font-bold text-white">About the Exam</h1>
        <div className="mt-5 space-y-4 text-slate-300">
          <p>The RRB Technician Grade 3 exam is designed to test aptitude, technical reasoning, and general awareness with objective MCQs.</p>
          <p>The full mock test model follows the official pattern: 100 questions in 90 minutes, with negative marking of 1/3 per wrong answer.</p>
          <p>Qualifying marks are as follows: UR/EWS 40%, OBC/SC 30%, and ST 25%.</p>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          <div className="rounded-xl border border-slate-700 bg-slate-900/40 p-5">
            <h2 className="text-xl font-semibold text-white">Subjects</h2>
            <ul className="mt-3 space-y-2 text-sm text-slate-300">
              <li>• Mathematics – 25 questions</li>
              <li>• General Intelligence & Reasoning – 25 questions</li>
              <li>• General Science – 40 questions</li>
              <li>• General Awareness – 10 questions</li>
            </ul>
          </div>
          <div className="rounded-xl border border-slate-700 bg-slate-900/40 p-5">
            <h2 className="text-xl font-semibold text-white">Features</h2>
            <ul className="mt-3 space-y-2 text-sm text-slate-300">
              <li>• Unlimited randomized mock tests</li>
              <li>• Timed exam experience</li>
              <li>• PDF question papers and answer keys</li>
              <li>• Searchable study notes and formula revision</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
