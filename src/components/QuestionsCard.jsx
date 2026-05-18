function QuestionsCard({ question, showReview }) {
  const reviewStyles = {
  correct:
    "border-green-500 bg-green-950/20 shadow-green-500/20",

  partial:
    "border-yellow-500 bg-yellow-950/20 shadow-yellow-500/20",

  incorrect:
    "border-red-500 bg-red-950/20 shadow-red-500/20",

  unreviewed:
    "border-zinc-800",
  };  

  const reviewLabels = {
  correct: "Correct",
  partial: "Partially Correct",
  incorrect: "Incorrect",
  unreviewed: "Unreviewed",
  };

  const review = question.review || "unreviewed";

  return (
    <article
      className={`border bg-zinc-950 rounded-2xl p-6 transition-all duration-500 ${
        showReview
          ? `${reviewStyles[review]} shadow-lg`
          : "border-zinc-800"
      }`}
    >
      <div className="flex flex-wrap justify-between gap-3 mb-4">
        <div>
          <span className="text-sm text-emerald-400">
            Question #{question.id}
          </span>
        </div>

        <div className="flex flex-wrap gap-2">
          <span className="text-xs bg-zinc-900 border border-zinc-800 px-3 py-1 rounded-full">
            {question.topic}
          </span>

          <span className="text-xs bg-amber-950 text-amber-300 border border-amber-900 px-3 py-1 rounded-full">
            {question.status}
          </span>

          {showReview && (
            <span
              className={`text-xs px-3 py-1 rounded-full border ${
                review === "correct"
                  ? "bg-green-950 text-green-300 border-green-800"
                  : review === "partial"
                  ? "bg-yellow-950 text-yellow-300 border-yellow-800"
                  : review === "incorrect"
                  ? "bg-red-950 text-red-300 border-red-800"
                  : "bg-zinc-900 border-zinc-700"
              }`}>
              {reviewLabels[review]}
            </span>
          )}
        </div>
      </div>

      <h3 className="text-lg font-semibold mb-4 leading-relaxed whitespace-pre-line">
        {question.question}
      </h3>

      <div className="space-y-2 mb-5">
        {question.options.map((option, index) => (
          <p
            key={option}
            className="text-sm text-zinc-400 bg-black border border-zinc-800 rounded-lg px-3 py-2"
          >
            {String.fromCharCode(65 + index)}. {option}
          </p>
        ))}
      </div>

      <div className="border-t border-zinc-800 pt-4">
        <p className="text-sm text-zinc-500 mb-1">My Answer</p>

        <p className="text-zinc-300">
          {question.myAnswer}
        </p>
      </div>
    </article>
  );
}

export default QuestionsCard;