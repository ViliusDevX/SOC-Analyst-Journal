import { useState } from "react";
import scenarios from "../data/scenario-lab/all_scenarios.json";

function ScenarioLab() {
  const [scenarioIndex, setScenarioIndex] = useState(0);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);

  const scenario = scenarios[scenarioIndex];
  const question = scenario.questions[questionIndex];

  const isCorrect = selectedAnswer === question.correctAnswer;
  const isLastQuestion = questionIndex === scenario.questions.length - 1;
  const isLastScenario = scenarioIndex === scenarios.length - 1;

  const getOptionLetter = (index) => String.fromCharCode(65 + index);

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
      return;
    }

    if (!isLastScenario) {
      setScenarioIndex(scenarioIndex + 1);
      setQuestionIndex(0);
      setScore(0);
      return;
    }

    setScenarioIndex(0);
    setQuestionIndex(0);
    setScore(0);
  };

  return (
    <section className="space-y-6">
      <div>
        <p className="text-sm text-emerald-400 mb-2">
          Free SOC Practice
        </p>

        <h1 className="text-4xl md:text-5xl font-bold mb-3">
          Scenario Lab
        </h1>

        <p className="text-zinc-400 max-w-3xl">
          Review realistic SOC evidence, answer one investigation question at a
          time, and check your reasoning.
        </p>
      </div>

      <article className="border border-zinc-800 bg-zinc-950 rounded-2xl p-6 md:p-8">
        <div className="flex flex-wrap justify-between gap-4 mb-6">
          <div>
            <p className="text-sm text-emerald-400 mb-1">
              Scenario {scenarioIndex + 1} of {scenarios.length}
            </p>

            <h2 className="text-2xl font-semibold">
              {scenario.title}
            </h2>
          </div>

          <div className="flex flex-wrap gap-2 h-fit">
            <span className="text-sm bg-zinc-900 border border-zinc-800 px-3 py-1 rounded-full">
              {scenario.category}
            </span>

            <span className="text-sm bg-zinc-900 border border-zinc-800 px-3 py-1 rounded-full">
              {scenario.difficulty}
            </span>

            <span className="text-sm bg-emerald-950 text-emerald-300 border border-emerald-800 px-3 py-1 rounded-full">
              Score: {score} / {scenario.questions.length}
            </span>
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1fr_1fr]">
          <section className="bg-black border border-zinc-800 rounded-xl p-5">
            <h3 className="font-semibold mb-4">
              Scenario Evidence
            </h3>

            <div className="space-y-5">
              {scenario.sections.map((section) => (
                <div key={section.title}>
                  <h4 className="text-sm font-semibold text-emerald-400 mb-2">
                    {section.title}
                  </h4>

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
            <div className="flex justify-between gap-4 mb-4">
              <p className="text-sm text-emerald-400">
                Question {questionIndex + 1} of {scenario.questions.length}
              </p>

              <p className="text-sm text-zinc-500">
                Correct: {question.correctAnswer}
              </p>
            </div>

            <h3 className="text-xl font-semibold mb-5 leading-relaxed">
              {question.question}
            </h3>

            <div className="space-y-3">
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
                    className={`w-full text-left text-sm border cursor-pointer rounded-lg px-4 py-3 transition ${
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
              ) : (
                <button
                  onClick={handleNextQuestion}
                  className="border border-zinc-700 px-5 py-3 rounded-xl font-semibold hover:border-emerald-400 hover:text-emerald-400 transition cursor-pointer"
                >
                  {isLastQuestion ? "Next Scenario" : "Next Question"}
                </button>
              )}
            </div>
          </section>
        </div>
      </article>
    </section>
  );
}

export default ScenarioLab;