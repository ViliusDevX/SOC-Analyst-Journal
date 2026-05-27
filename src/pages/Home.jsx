import { Link } from "react-router-dom";
import { journeyEntries } from "../data/my-journey";

function Home() {
  const totalQuestions = journeyEntries.reduce(
    (total, entry) =>
      total + (Array.isArray(entry.questions) ? entry.questions.length : 0),
    0
  );

  const totalScenarios = journeyEntries.reduce(
    (total, entry) =>
      total + (Array.isArray(entry.scenarios) ? entry.scenarios.length : 0),
    0
  );

  return (
    <section className="min-h-[calc(100vh-120px)] flex flex-col justify-between">
      <div className="pt-16">
        <p className="text-sm text-emerald-400 mb-3 animate-pulse">
          Cybersecurity Portfolio
        </p>

        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
          Welcome to SOC Analyst Journal
        </h1>

        <p className="text-zinc-400 max-w-3xl text-lg mb-8">
          A learning project documenting my CySA+ preparation, SOC scenarios,
          raw analyst answers, and frontend development journey.
        </p>

        <div className="flex flex-wrap gap-4">
          <Link
            to="/journey"
            className="bg-emerald-400 text-black px-5 py-3 rounded-xl font-semibold hover:bg-emerald-300 transition"
          >
            My Journey
          </Link>

          <Link
            to="/about"
            className="border border-zinc-700 px-5 py-3 rounded-xl font-semibold hover:border-emerald-400 hover:text-emerald-400 transition"
          >
            About Me
          </Link>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 pb-6">
        <div className="border border-zinc-800 bg-zinc-950 rounded-2xl p-6 hover:border-emerald-500 transition">
          <p className="text-sm text-zinc-500 mb-2">Practice Volume</p>

          <h2 className="text-3xl font-bold mb-2">
            {totalQuestions} Questions, {totalScenarios} Scenarios
          </h2>

          <p className="text-zinc-400">
            Structured from raw CySA+ / SOC analyst practice files.
          </p>
        </div>

        <div className="border border-zinc-800 bg-zinc-950 rounded-2xl p-6 hover:border-emerald-500 transition">
          <p className="text-sm text-zinc-500 mb-2">Journal Progress</p>

          <h2 className="text-3xl font-bold mb-2">
            {journeyEntries.length} Entries
          </h2>

          <p className="text-zinc-400">
            Each entry tracks raw answers, investigation scenarios, and learning progress.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Home;