import { useState } from "react";
import { journeyEntries } from "../data/my-journey";
import QuestionsCard from "../components/QuestionsCard";
import ScenarioCard from "../components/ScenarioCard";

function MyJourney() {
  const [selectedEntry, setSelectedEntry] = useState(null);

  if (selectedEntry) {
    return (
      <section>
        <button
          onClick={() => setSelectedEntry(null)}
          className="mb-6 text-zinc-400 hover:text-white transition hover:cursor-pointer"
        >
          ← Back to entries
        </button>

        <div className="mb-10 ">
          <p className="text-sm text-emerald-400 mb-2">
            Entry #{selectedEntry.id}
          </p>

          <h1 className="text-4xl font-bold mb-3">
            {selectedEntry.title}
          </h1>

          <p className="text-zinc-400 max-w-3xl">
            {selectedEntry.summary}
          </p>
        </div>

        <section className="mb-14">
          <h2 className="text-2xl font-semibold mb-6">
            Practice Questions
          </h2>

          <div className="grid gap-5 md:grid-cols-2">
            {selectedEntry.questions.map((question) => (
              <QuestionsCard key={question.id} question={question} />
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-6">
            SOC Scenarios
          </h2>

          <div className="grid gap-6">
            {selectedEntry.scenarios.map((scenario) => (
              <ScenarioCard key={scenario.id} scenario={scenario} />
            ))}
          </div>
        </section>
      </section>
    );
  }

  return (
    <section>
      <h1 className="text-4xl font-bold mb-4">My Journey</h1>

      <p className="text-zinc-400 mb-8">
        Select one of my raw CySA+ / SOC practice entries.
      </p>

      <div className="grid gap-5 md:grid-cols-2">
        {journeyEntries.map((entry) => (
          <button
            key={entry.id}
            onClick={() => setSelectedEntry(entry)}
            className="text-left border border-zinc-800 bg-zinc-950 rounded-2xl p-6 hover:border-emerald-500 transition hover:cursor-pointer"
          >
            <p className="text-sm text-emerald-400 mb-2">
              Entry #{entry.id}
            </p>

            <h2 className="text-2xl font-semibold mb-2">
              {entry.title}
            </h2>

            <p className="text-zinc-500 mb-4">
              {entry.summary}
            </p>

            <div className="flex flex-wrap gap-2">
              <span className="text-xs bg-zinc-900 border border-zinc-800 px-3 py-1 rounded-full">
                {entry.status}
              </span>

              <span className="text-xs bg-zinc-900 border border-zinc-800 px-3 py-1 rounded-full">
                {entry.questions.length} Questions
              </span>

              <span className="text-xs bg-zinc-900 border border-zinc-800 px-3 py-1 rounded-full">
                {entry.scenarios.length} Scenarios
              </span>
            </div>
          </button>
        ))}
      </div>
    </section>
  );
}

export default MyJourney;