function ScenarioCard({ scenario }) {
  return (
    <article className="border border-zinc-800 bg-zinc-950 rounded-2xl p-6 md:p-8">
      <div className="flex flex-wrap justify-between gap-4 mb-6">
        <div>
          <p className="text-sm text-emerald-400 mb-1">
            Scenario #{scenario.id}
          </p>

          <h3 className="text-2xl font-semibold">
            {scenario.title}
          </h3>
        </div>

        <div className="flex flex-wrap gap-2 h-fit">
          <span className="text-sm bg-zinc-900 border border-zinc-800 px-3 py-1 rounded-full">
            {scenario.category}
          </span>

          <span className="text-sm bg-amber-950 text-amber-300 border border-amber-900 px-3 py-1 rounded-full">
            {scenario.status}
          </span>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-[1.4fr_1fr]">
        <section className="bg-black border border-zinc-800 rounded-xl p-5">
          <h4 className="font-semibold mb-4 text-zinc-100">
            Scenario Prompt
          </h4>

          <div className="space-y-6">
            {scenario.sections.map((section) => (
              <div key={section.title}>
                <h5 className="text-sm font-semibold text-emerald-400 mb-2">
                  {section.title}
                </h5>

                <ul className="space-y-2">
                  {section.items.map((item) => (
                    <li
                      key={item}
                      className="text-sm text-zinc-400 leading-relaxed"
                    >
                      - {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            <div>
              <h5 className="text-sm font-semibold text-emerald-400 mb-2">
                Tasks
              </h5>

              <ol className="space-y-2 list-decimal list-inside">
                {scenario.tasks.map((task) => (
                  <li
                    key={task}
                    className="text-sm text-zinc-400 leading-relaxed"
                  >
                    {task}
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        <section className="bg-black border border-zinc-800 rounded-xl p-5">
          <h4 className="font-semibold mb-4 text-zinc-100">
            My Raw Answers
          </h4>

          <ol className="space-y-3 list-decimal list-inside">
            {scenario.myAnswers.map((answer) => (
              <li
                key={answer}
                className="text-sm text-zinc-300 leading-relaxed bg-zinc-950 border border-zinc-800 rounded-lg px-3 py-2"
              >
                {answer}
              </li>
            ))}
          </ol>
        </section>
      </div>
    </article>
  );
}

export default ScenarioCard;