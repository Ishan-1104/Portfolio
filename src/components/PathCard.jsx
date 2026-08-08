import { Link } from 'react-router-dom'

export default function PathCard({ to, trackLabel, title, hook, tags, stats, theme }) {
  const isAiml = theme === 'aiml'
  const accent1 = isAiml ? 'var(--color-aiml-1)' : 'var(--color-sde-1)'
  const accent2 = isAiml ? 'var(--color-aiml-2)' : 'var(--color-sde-2)'

  return (
    <Link
      to={to}
      className="group relative flex-1 border border-[var(--color-border)] rounded-2xl p-9 overflow-hidden transition-transform duration-300 hover:-translate-y-1"
      style={{ background: 'var(--color-bg-card)' }}
    >
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-0"
        style={{
          background: `radial-gradient(circle at 25% 15%, ${accent1}22 0%, transparent 55%), radial-gradient(circle at 85% 90%, ${accent2}1a 0%, transparent 50%)`,
        }}
      />
      <div className="relative">
        <div className="font-mono text-[11.5px] tracking-[0.14em] uppercase mb-4" style={{ color: accent2 }}>
          {trackLabel}
        </div>
        <h3 className="font-display text-3xl sm:text-4xl font-bold leading-[1.05] mb-4">{title}</h3>
        <p className="text-[var(--color-text-muted)] text-[15px] mb-6 max-w-[360px]">{hook}</p>

        <div className="flex flex-wrap gap-2 mb-7">
          {tags.map((t) => (
            <span key={t} className="font-mono text-[11px] text-[var(--color-text-dim)] border border-[var(--color-border-soft)] px-2.5 py-1 rounded-full">
              {t}
            </span>
          ))}
        </div>

        <div className="flex gap-5 mb-8 flex-wrap">
          {stats.map((s) => (
            <div key={s.label}>
              <div className="font-display text-lg font-semibold">{s.value}</div>
              <div className="font-mono text-[10.5px] text-[var(--color-text-dim)]">{s.label}</div>
            </div>
          ))}
        </div>

        <span
          className="inline-flex items-center gap-2.5 font-mono text-[13px] px-5 py-3 rounded-lg border transition-colors"
          style={{ borderColor: 'var(--color-border)', color: 'var(--color-text)' }}
        >
          Explore {trackLabel} work
          <svg width="15" height="15" viewBox="0 0 16 16" fill="none" className="transition-transform group-hover:translate-x-1">
            <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
      </div>
    </Link>
  )
}
