import { questions } from "./data/questions";
import { scenarios } from "./data/scenarios";

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-6xl mx-auto px-6 py-10">
        <header className="mb-12">
          <p className="text-sm text-emerald-400 mb-2">
            Cybersecurity Portfolio
          </p>

          <h1 className="text-5xl font-bold mb-4">
            SOC Analyst Journal
          </h1>

          <p className="text-zinc-400 max-w-3xl">
            A practical learning journal for CySA+, SOC analysis, incident
            response, detection logic, and future SOC simulator development.
          </p>
        </header>

        <section className="mb-14">
          <h2 className="text-2xl font-semibold mb-6">
            Practice Questions
          </h2>

          <div className="grid gap-5 md:grid-cols-2">
            {questions.map((item) => (
              <article
                key={item.id}
                className="border border-zinc-800 bg-zinc-950 rounded-2xl p-6"
              >
                <div className="flex justify-between gap-4 mb-4">
                  <span className="text-sm text-emerald-400">
                    Question #{item.id}
                  </span>

                  <span className="text-xs bg-zinc-900 border border-zinc-800 px-3 py-1 rounded-full">
                    {item.topic}
                  </span>
                </div>

                <h3 className="text-lg font-semibold mb-4 leading-relaxed">
                  {item.question}
                </h3>

                <div className="space-y-2 mb-5">
                  {item.options.map((option, index) => (
                    <p
                      key={option}
                      className="text-sm text-zinc-400 bg-black border border-zinc-800 rounded-lg px-3 py-2"
                    >
                      {String.fromCharCode(65 + index)}. {option}
                    </p>
                  ))}
                </div>

                <div className="border-t border-zinc-800 pt-4">
                  <p className="text-sm text-zinc-500 mb-1">
                    My Answer
                  </p>

                  <p className="text-zinc-300">
                    {item.myAnswer}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-6">
            SOC Scenarios
          </h2>

          <div className="grid gap-6">
            {scenarios.map((scenario) => (
              <article
                key={scenario.id}
                className="border border-zinc-800 bg-zinc-950 rounded-2xl p-6"
              >
                <div className="flex justify-between gap-4 mb-3">
                  <h3 className="text-xl font-semibold">
                    Scenario #{scenario.id}: {scenario.title}
                  </h3>

                  <span className="text-sm bg-red-950 text-red-300 border border-red-900 px-3 py-1 rounded-full">
                    {scenario.severity}
                  </span>
                </div>

                <p className="text-zinc-400 mb-5">
                  {scenario.summary}
                </p>

                <div className="grid gap-5 md:grid-cols-2">
                  <div>
                    <h4 className="font-semibold mb-3">
                      Evidence
                    </h4>

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
                    <h4 className="font-semibold mb-3">
                      My Analysis
                    </h4>

                    <ul className="space-y-2">
                      {scenario.myAnalysis.map((item) => (
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
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;