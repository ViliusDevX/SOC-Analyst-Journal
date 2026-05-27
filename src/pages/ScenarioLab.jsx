import { useState } from "react";
import scenarios from "../data/scenario-lab/all_scenarios.json";

function ScenarioLab() {
  const [searchTerm, setSearchTerm] = useState("");
  const [difficultyFilter, setDifficultyFilter] = useState("All");
  const [categoryFilter, setCategoryFilter] = useState("All");

  const [selectedScenario, setSelectedScenario] = useState(null);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);

  const difficulties = ["All", ...new Set(scenarios.map((s) => s.difficulty))];
  const categories = ["All", ...new Set(scenarios.map((s) => s.category))];

  const filteredScenarios = scenarios.filter((scenario) => {
    const matchesSearch =
      scenario.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      scenario.category.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesDifficulty =
      difficultyFilter === "All" || scenario.difficulty === difficultyFilter;

    const matchesCategory =
      categoryFilter === "All" || scenario.category === categoryFilter;

    return matchesSearch && matchesDifficulty && matchesCategory;
  });

  const startScenario = (scenario) => {
    setSelectedScenario(scenario);
    setQuestionIndex(0);
    setSelectedAnswer("");
    setShowResult(false);
    setScore(0);
  };

  const backToDashboard = () => {
    setSelectedScenario(null);
    setQuestionIndex(0);
    setSelectedAnswer("");
    setShowResult(false);
    setScore(0);
  };

  const getOptionLetter = (index) => String.fromCharCode(65 + index);

  if (selectedScenario) {
    const question = selectedScenario.questions[questionIndex];
    const isCorrect = selectedAnswer === question.correctAnswer;
    const isLastQuestion =
      questionIndex === selectedScenario.questions.length - 1;

    const handleCheckAnswer = () => {
      if (!selectedAnswer) return;

      if (isCorrect) {
        setScore(score + 1);
      }

      setShowResult(true);
    };

    const handleNextQuestion = () => {
      setSelectedAnswer("");
      setShowResult(false);

      if (!isLastQuestion) {
        setQuestionIndex(questionIndex + 1);
      }
    };

    return (
      <section className="space-y-6">
        <button
          onClick={backToDashboard}
          className="text-zinc-400 hover:text-emerald-400 transition cursor-pointer"
        >
          ← Back to Scenario Lab
        </button>

        <article className="border border-zinc-800 bg-zinc-950 rounded-2xl p-6 md:p-8">
          <div className="flex flex-wrap justify-between gap-4 mb-6">
            <div>
              <p className="text-sm text-emerald-400 mb-1">
                Scenario Practice
              </p>

              <h1 className="text-3xl font-bold">
                {selectedScenario.title}
              </h1>
            </div>

            <div className="flex flex-wrap gap-2 h-fit">
              <span className="text-sm bg-zinc-900 border border-zinc-800 px-3 py-1 rounded-full">
                {selectedScenario.category}
              </span>

              <span className="text-sm bg-zinc-900 border border-zinc-800 px-3 py-1 rounded-full">
                {selectedScenario.difficulty}
              </span>

              <span className="text-sm bg-emerald-950 text-emerald-300 border border-emerald-800 px-3 py-1 rounded-full">
                Score: {score} / {selectedScenario.questions.length}
              </span>
            </div>
          </div>

          <div className="grid gap-6 lg:grid-cols-[1fr_1fr]">
            <section className="bg-black border border-zinc-800 rounded-xl p-5">
              <h2 className="font-semibold mb-4">
                Scenario Evidence
              </h2>

              <div className="space-y-5">
                {selectedScenario.sections.map((section) => (
                  <div key={section.title}>
                    <h3 className="text-sm font-semibold text-emerald-400 mb-2">
                      {section.title}
                    </h3>

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
              </div>
            </section>

            <section className="bg-black border border-zinc-800 rounded-xl p-5">
              <p className="text-sm text-emerald-400 mb-3">
                Question {questionIndex + 1} of{" "}
                {selectedScenario.questions.length}
              </p>

              <h2 className="text-xl font-semibold mb-5 leading-relaxed">
                {question.question}
              </h2>

              <div className="space-y-3 ">
                {question.options.map((option, index) => {
                  const letter = getOptionLetter(index);
                  const isSelected = selectedAnswer === letter;
                  const isCorrectOption =
                    showResult && letter === question.correctAnswer;
                  const isWrongSelected =
                    showResult && isSelected && !isCorrect;

                  return (
                    <button
                      key={option}
                      onClick={() => setSelectedAnswer(letter)}
                      disabled={showResult}
                      className={`w-full text-left text-sm border rounded-lg px-4 py-3 transition cursor-pointer ${
                        isCorrectOption
                          ? "border-green-500 bg-green-950/30 text-green-300"
                          : isWrongSelected
                          ? "border-red-500 bg-red-950/30 text-red-300"
                          : isSelected
                          ? "border-emerald-500 bg-emerald-950/20 text-white"
                          : "border-zinc-800 bg-zinc-950 text-zinc-400 hover:border-emerald-500"
                      }`}
                    >
                      {letter}. {option}
                    </button>
                  );
                })}
              </div>

              {showResult && (
                <div className="mt-5 border-t border-zinc-800 pt-4">
                  <p
                    className={`text-sm font-semibold mb-2 ${
                      isCorrect ? "text-green-400" : "text-red-400"
                    }`}
                  >
                    {isCorrect ? "Correct" : "Incorrect"}
                  </p>

                  <p className="text-sm text-zinc-400 leading-relaxed">
                    {question.explanation}
                  </p>
                </div>
              )}

              <div className="flex justify-end mt-6">
                {!showResult ? (
                  <button
                    onClick={handleCheckAnswer}
                    disabled={!selectedAnswer}
                    className="bg-emerald-400 text-black px-5 py-3 rounded-xl font-semibold hover:bg-emerald-300 disabled:opacity-40 disabled:cursor-not-allowed transition cursor-pointer"
                  >
                    Check Answer
                  </button>
                ) : isLastQuestion ? (
                  <button
                    onClick={backToDashboard}
                    className="border border-zinc-700 px-5 py-3 rounded-xl font-semibold hover:border-emerald-400 hover:text-emerald-400 transition"
                  >
                    Finish Scenario
                  </button>
                ) : (
                  <button
                    onClick={handleNextQuestion}
                    className="border border-zinc-700 px-5 py-3 rounded-xl font-semibold hover:border-emerald-400 hover:text-emerald-400 transition cursor-pointer"
                  >
                    Next Question
                  </button>
                )}
              </div>
            </section>
          </div>
        </article>
      </section>
    );
  }

  return (
    <section className="space-y-8">
      <div>
        <p className="text-sm text-emerald-400 mb-2">Free SOC Practice</p>

        <h1 className="text-4xl md:text-5xl font-bold mb-3">
          Scenario Lab
        </h1>

        <p className="text-zinc-400 max-w-3xl">
          Browse realistic SOC investigation scenarios, filter by category or
          difficulty, and practice alert triage step by step.
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-[280px_1fr]">
        <aside className="border border-zinc-800 bg-zinc-950 rounded-2xl p-5 h-fit">
          <h2 className="text-xl font-semibold mb-5">Filters</h2>

          <div className="space-y-5">
            <div>
              <label className="block text-sm text-zinc-400 mb-2">
                Search
              </label>

              <input
                type="text"
                placeholder="Search scenarios..."
                value={searchTerm}
                onChange={(event) => setSearchTerm(event.target.value)}
                className="w-full bg-black border border-zinc-800 rounded-xl px-4 py-3 text-sm text-white placeholder:text-zinc-600 focus:outline-none focus:border-emerald-500"
              />
            </div>

            <div>
              <label className="block text-sm text-zinc-400 mb-2">
                Difficulty
              </label>

              <select
                value={difficultyFilter}
                onChange={(event) => setDifficultyFilter(event.target.value)}
                className="w-full bg-black border border-zinc-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-emerald-500"
              >
                {difficulties.map((difficulty) => (
                  <option key={difficulty} value={difficulty}>
                    {difficulty}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm text-zinc-400 mb-2">
                Category
              </label>

              <select
                value={categoryFilter}
                onChange={(event) => setCategoryFilter(event.target.value)}
                className="w-full bg-black border border-zinc-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-emerald-500"
              >
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>

            <button
              onClick={() => {
                setSearchTerm("");
                setDifficultyFilter("All");
                setCategoryFilter("All");
              }}
              className="w-full border border-zinc-700 rounded-xl px-4 py-3 text-sm text-zinc-300 hover:border-emerald-500 hover:text-emerald-400 transition cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        </aside>

        <main>
          <div className="flex flex-wrap items-center justify-between gap-4 mb-5">
            <div>
              <h2 className="text-2xl font-semibold">Available Scenarios</h2>

              <p className="text-sm text-zinc-500 mt-1">
                Showing {filteredScenarios.length} of {scenarios.length}
              </p>
            </div>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {filteredScenarios.map((scenario) => (
              <article
                key={scenario.id}
                className="border border-zinc-800 bg-zinc-950 rounded-2xl p-6 hover:border-emerald-500 transition"
              >
                <div className="flex flex-wrap justify-between gap-3 mb-4">
                  <span className="text-sm text-emerald-400">
                    {scenario.category}
                  </span>

                  <span className="text-xs bg-zinc-900 border border-zinc-800 px-3 py-1 rounded-full">
                    {scenario.difficulty}
                  </span>
                </div>

                <h3 className="text-xl font-semibold mb-3">
                  {scenario.title}
                </h3>

                <p className="text-zinc-400 text-sm leading-relaxed mb-5">
                  {scenario.summary ||
                    "Practice analyzing SOC evidence and choosing the best investigation steps."}
                </p>

                <div className="flex flex-wrap gap-2 mb-5">
                  <span className="text-xs bg-black border border-zinc-800 px-3 py-1 rounded-full text-zinc-400">
                    {scenario.questions.length} Questions
                  </span>

                  <span className="text-xs bg-black border border-zinc-800 px-3 py-1 rounded-full text-zinc-400">
                    ~10 min
                  </span>
                </div>

                <button
                  onClick={() => startScenario(scenario)}
                  className="w-full bg-emerald-400 text-black px-4 py-3 rounded-xl font-semibold hover:bg-emerald-300 transition cursor-pointer"
                >
                  Start Investigation
                </button>
              </article>
            ))}
          </div>
        </main>
      </div>
    </section>
  );
}

export default ScenarioLab;