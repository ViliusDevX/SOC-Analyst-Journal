function QuestionsCard({ question }) {
  return (
    <article className="border border-zinc-800 bg-zinc-950 rounded-2xl p-6">
      <div className="flex flex-wrap justify-between gap-3 mb-4">
        <div>
          <span className="text-sm text-emerald-400">Question #{question.id}</span>
          <p className="text-xs text-zinc-500 mt-1">{question.difficulty}</p>
        </div>

        <div className="flex flex-wrap gap-2">
          <span className="text-xs bg-zinc-900 border border-zinc-800 px-3 py-1 rounded-full">
            {question.topic}
          </span>
          <span className="text-xs bg-amber-950 text-amber-300 border border-amber-900 px-3 py-1 rounded-full">
            {question.status}
          </span>
        </div>
      </div>

      <h3 className="text-lg font-semibold mb-4 leading-relaxed">{question.question}</h3>

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
        <p className="text-zinc-300">{question.myAnswer}</p>
      </div>
    </article>
  );
}

export default QuestionsCard;
