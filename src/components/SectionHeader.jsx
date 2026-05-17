function SectionHeader({ eyebrow, title, description }) {
  return (
    <div className="mb-6">
      {eyebrow && <p className="text-sm text-emerald-400 mb-2">{eyebrow}</p>}

      <h2 className="text-2xl font-semibold mb-2">{title}</h2>

      {description && <p className="text-zinc-500 max-w-3xl">{description}</p>}
    </div>
  );
}

export default SectionHeader;
