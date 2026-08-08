export default function Highlight({ tag, title, description, borderClass = 'border-l-[var(--color-aiml-1)]', tagClass = 'text-[var(--color-aiml-1)]' }) {
  return (
    <div className={`border border-[var(--color-border)] border-l-[3px] ${borderClass} rounded-lg p-6 bg-[var(--color-bg-card)] mb-4`}>
      <span className={`font-mono text-[11px] uppercase tracking-wider ${tagClass}`}>{tag}</span>
      <h4 className="font-display text-lg font-semibold mt-2 mb-2">{title}</h4>
      <p className="text-[var(--color-text-muted)] text-[14.5px]">{description}</p>
    </div>
  )
}
