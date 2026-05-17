function ScenarioCard({ scenario }) {
  return (
    <article className="border border-zinc-800 bg-zinc-950 rounded-2xl p-6 md:p-8">
      <div className="flex flex-wrap justify-between gap-4 mb-3">
        <div>
          <p className="text-sm text-emerald-400 mb-1">
            Scenario #{scenario.id}
          </p>
          <h3 className="text-2xl font-semibold">{scenario.title}</h3>
        </div>

      </div>

      <p className="text-zinc-400 mb-6 max-w-4xl">
        {scenario.summary}
      </p>

      <div className="grid gap-5 lg:grid-cols-2">
        <div>
          <h4 className="font-semibold mb-3">Evidence</h4>
          <ul className="space-y-2">
            {scenario.evidence.map((item) => (
              <li
                key={item}
                className="text-sm text-zinc-400 bg-black border border-zinc-800 rounded-lg px-3 py-2"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-3">My Raw Answers</h4>
          <ul className="space-y-2">
            {scenario.myAnswers.map((item) => (
              <li
                key={item}
                className="text-sm text-zinc-300 bg-black border border-zinc-800 rounded-lg px-3 py-2"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </article>
  );
}

export default ScenarioCard;