export default function CompactProject({ project, accentClass = 'text-[var(--color-aiml-2)]' }) {
  const { title, description, stack, metric, github, demo, image } = project

  return (
    <div className="border border-[var(--color-border)] rounded-xl bg-[var(--color-bg-card)] p-5.5 flex flex-col">
      <div className="h-24 rounded-lg mb-4 overflow-hidden bg-[repeating-linear-gradient(45deg,#0d0f13,#0d0f13_8px,#0a0c10_8px,#0a0c10_16px)] flex items-center justify-center">
        {image ? (
          <img src={image} alt={`${title} screenshot`} className="w-full h-full object-cover" loading="lazy" />
        ) : (
          <span className="font-mono text-[10px] text-[var(--color-text-dim)]">screenshot placeholder</span>
        )}
      </div>

      <div className="font-display text-base font-semibold mb-1.5">{title}</div>
      <p className="text-[var(--color-text-muted)] text-[13.5px] flex-1">{description}</p>

      <div className="flex flex-wrap gap-1.5 mt-3.5">
        {stack.slice(0, 4).map((s) => (
          <span key={s} className={`font-mono text-[10.5px] ${accentClass} border border-[var(--color-border-soft)] px-2 py-0.5 rounded-full`}>
            {s}
          </span>
        ))}
      </div>

      {metric && (
        <div className="font-mono text-[11px] text-[var(--color-text-dim)] mt-3">{metric}</div>
      )}

      <div className="flex gap-2 mt-4">
        {github && (
          <a href={github} target="_blank" rel="noopener noreferrer"
            className="font-mono text-[11px] px-3 py-1.5 rounded-md border border-[var(--color-border)] text-[var(--color-text-muted)] hover:border-[var(--color-text)] hover:text-[var(--color-text)] transition-colors">
            ↗ GitHub
          </a>
        )}
        {demo && (
          <a href={demo} target="_blank" rel="noopener noreferrer"
            className="font-mono text-[11px] px-3 py-1.5 rounded-md border border-[var(--color-border)] text-[var(--color-text-muted)] hover:border-[var(--color-text)] hover:text-[var(--color-text)] transition-colors">
            ↗ Live demo
          </a>
        )}
      </div>
    </div>
  )
}
