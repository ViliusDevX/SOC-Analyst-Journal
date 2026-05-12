import { useState } from "react";
import ReactMarkdown from "react-markdown";
import { entries } from "./data/entries";

function App() {
  const [selectedEntry, setSelectedEntry] = useState(null);

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-5xl mx-auto px-6 py-10">
        <header className="mb-10">
          <p className="text-sm text-zinc-500 mb-2">Cybersecurity Portfolio</p>

          <h1 className="text-5xl font-bold mb-4">
            SOC Analyst Journal
          </h1>

          <p className="text-zinc-400 max-w-2xl">
            Documenting my progression toward CySA+, SOC analysis,
            incident response, and detection engineering.
          </p>
        </header>

        {!selectedEntry && (
          <main>
            <h2 className="text-2xl font-semibold mb-6">
              Journal Entries
            </h2>

            <div className="grid gap-4">
              {entries.map((entry) => (
                <article
                  key={entry.id}
                  className="border border-zinc-800 bg-zinc-950 rounded-xl p-6"
                >
                  <div className="flex justify-between gap-4 mb-3">
                    <h3 className="text-xl font-semibold">
                      Entry #{entry.id}: {entry.title}
                    </h3>

                    <span className="text-sm text-zinc-500">
                      {entry.date}
                    </span>
                  </div>

                  <p className="text-zinc-400 mb-4">
                    {entry.summary}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-5">
                    {entry.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-sm bg-zinc-900 border border-zinc-800 px-3 py-1 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <button
                    onClick={() => setSelectedEntry(entry)}
                    className="bg-white text-black px-4 py-2 rounded-lg font-medium hover:opacity-80 transition cursor-pointer"
                  >
                    Read Entry
                  </button>
                </article>
              ))}
            </div>
          </main>
        )}

        {selectedEntry && (
          <main>
            <button
              onClick={() => setSelectedEntry(null)}
              className="mb-6 text-zinc-400 hover:text-white transition cursor-pointer"
            >
              ← Back to entries
            </button>

            <article className="border border-zinc-800 bg-zinc-950 rounded-xl p-6">
              <h2 className="text-3xl font-bold mb-2">
                Entry #{selectedEntry.id}: {selectedEntry.title}
              </h2>

              <p className="text-zinc-500 mb-6">
                {selectedEntry.date}
              </p>

              <div className="prose prose-invert max-w-none">
                <ReactMarkdown>
                  {selectedEntry.content}
                </ReactMarkdown>
              </div>
            </article>
          </main>
        )}
      </div>
    </div>
  );
}

export default App;