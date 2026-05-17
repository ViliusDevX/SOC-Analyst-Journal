import { questions } from "./data/questions";
import { scenarios } from "./data/scenarios";
import QuestionsCard from "./components/QuestionsCard";
import ScenarioCard from "./components/ScenarioCard";
import SectionHeader from "./components/SectionHeader";

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-6xl mx-auto px-6 py-10">
        <header className="mb-12">
          <p className="text-sm text-emerald-400 mb-2">Cybersecurity Portfolio</p>

          <h1 className="text-5xl font-bold mb-4">SOC Analyst Journal</h1>

          <p className="text-zinc-400 max-w-3xl">
            A practical learning journal for CySA+, SOC analysis, incident response,
            detection logic, and future SOC simulator development.
          </p>
        </header>

        <section className="mb-14">
          <SectionHeader
            eyebrow="Section 1"
            title="Practice Questions"
            description="CySA+ / SOC analyst multiple-choice questions with raw answer status tracking."
          />

          <div className="grid gap-5 md:grid-cols-2">
            {questions.map((question) => (
              <QuestionsCard key={question.id} question={question} />
            ))}
          </div>
        </section>

        <section>
          <SectionHeader
            eyebrow="Section 2"
            title="SOC Scenarios"
            description="Larger investigation cards for attack-chain analysis, evidence, and response practice."
          />

          <div className="grid gap-6">
            {scenarios.map((scenario) => (
              <ScenarioCard key={scenario.id} scenario={scenario} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
