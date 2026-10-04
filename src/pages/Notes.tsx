import { renderLatexBlock } from '../utils/format';

const DEFAULT_OPEN = 'number-system';

export default function Notes() {
  const [query, setQuery] = useState('');
  const [openTopic, setOpenTopic] = useState(DEFAULT_OPEN);

  const filtered = SAMPLE_NOTES.map((section) => ({
    ...section,
    topics: section.topics.filter((topic) => {
      const haystack = `${section.subject} ${topic.title} ${topic.content.join(' ')}`.toLowerCase();
      return haystack.includes(query.toLowerCase());
    })
  })).filter((section) => section.topics.length > 0);

  return (
    <div className="container py-8">
      <div className="section-card p-5">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-blue-300">Study Notes</p>
            <h1 className="mt-2 text-3xl font-bold text-white">Quick revision material</h1>
          </div>
          <div className="flex gap-3">
            <button className="secondary-button" onClick={() => generateNotesPdf(SAMPLE_NOTES)}>Download PDF</button>
            <button className="secondary-button" onClick={() => downloadTextFile('rrb_notes_latex.tex', makeLatexSourceForNotes(SAMPLE_NOTES))}>Download LaTeX</button>
          </div>
        </div>

        <input
          aria-label="Search notes"
          className="mt-5 w-full rounded-xl border border-slate-700 bg-slate-950/60 px-4 py-3 text-slate-100 outline-none ring-0"
          value={query}
          placeholder="Search a topic, concept, or formula…"
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>

      <div className="mt-8 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="space-y-4">
          {filtered.length === 0 && (
            <div className="section-card p-5 text-slate-300">No matching notes found.</div>
          )}

          {filtered.map((section) => (
            <div key={section.subject} className="section-card p-5">
              <h2 className="text-xl font-semibold text-white">{section.subject}</h2>
              <div className="mt-4 space-y-3">
                {section.topics.map((topic) => {
                  const isOpen = openTopic === topic.label;
                  return (
                    <div key={topic.label} className="rounded-xl border border-slate-700 bg-slate-900/40">
                      <button
                        className="flex w-full items-center justify-between px-4 py-3 text-left text-white"
                        onClick={() => setOpenTopic(isOpen ? '' : topic.label)}
                      >
                        <span>{topic.title}</span>
                        <span>{isOpen ? '−' : '+'}</span>
                      </button>
                      {isOpen && (
                        <div className="space-y-3 border-t border-slate-700 px-4 py-4 text-slate-200">
                          {topic.content.map((line) => (
                            <p key={line}>{line}</p>
                          ))}
                          {topic.formulas?.length ? (
                            <div className="space-y-2">
                              {topic.formulas.map((formula) => (
                                <div key={formula} dangerouslySetInnerHTML={{ __html: renderLatexBlock(formula) }} />
                              ))}
                            </div>
                          ) : null}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        <aside className="space-y-4">
          <div className="section-card p-5">
            <h3 className="text-lg font-semibold text-white">Formula Sheet</h3>
            <div className="mt-4 space-y-3">
              {FORMULA_SHEET.map((formula) => (
                <div key={formula} dangerouslySetInnerHTML={{ __html: renderLatexBlock(formula) }} />
              ))}
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
