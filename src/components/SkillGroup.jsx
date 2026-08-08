export default function SkillGroup({ title, tags, accentClass = 'text-[var(--color-aiml-1)]' }) {
  return (
    <div className="border border-[var(--color-border)] rounded-lg p-5.5 bg-[var(--color-bg-card)]">
      <h4 className={`font-mono text-xs uppercase tracking-wider mb-3.5 ${accentClass}`}>{title}</h4>
      <div className="flex flex-wrap gap-2">
        {tags.map((t) => (
          <span key={t} className="text-[13px] text-[var(--color-text-muted)] bg-[var(--color-bg-raised)] border border-[var(--color-border-soft)] px-2.5 py-1 rounded-md">
            {t}
          </span>
        ))}
      </div>
    </div>
  )
}
