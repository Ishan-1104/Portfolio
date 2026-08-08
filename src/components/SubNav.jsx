import { Link } from 'react-router-dom'

export default function SubNav({ track, links, otherTrackPath, otherTrackLabel }) {
  const accent = track === 'aiml' ? 'text-[var(--color-aiml-1)]' : 'text-[var(--color-sde-1)]'
  const borderAccent = track === 'aiml' ? 'hover:border-[var(--color-aiml-1)] hover:text-[var(--color-aiml-1)]' : 'hover:border-[var(--color-sde-1)] hover:text-[var(--color-sde-1)]'

  return (
    <nav className="sticky top-0 z-50 bg-[var(--color-bg)]/85 backdrop-blur-md border-b border-[var(--color-border-soft)]">
      <div className="max-w-[1120px] mx-auto px-7 py-4 flex items-center justify-between">
        <div className="font-mono text-sm flex items-center gap-2.5">
          <span className={`w-2 h-2 rounded-full ${track === 'aiml' ? 'bg-[var(--color-aiml-1)] shadow-[0_0_12px_var(--color-aiml-1)]' : 'bg-[var(--color-sde-1)] shadow-[0_0_12px_var(--color-sde-1)]'}`} />
          Ishan Chhaparwal
          <span className={`text-[11px] tracking-wider border border-[var(--color-border)] rounded-full px-2.5 py-0.5 ml-1 ${accent}`}>
            {track === 'aiml' ? 'AI/ML' : 'SDE'}
          </span>
        </div>
        <div className="flex items-center gap-6 text-sm text-[var(--color-text-muted)]">
          <Link to="/" className="hover:text-[var(--color-text)] flex items-center gap-1.5">
            &larr; Home
          </Link>
          {links.map((l) => (
            <a key={l.href} href={l.href} className="hidden sm:inline hover:text-[var(--color-text)]">
              {l.label}
            </a>
          ))}
          <Link
            to={otherTrackPath}
            className={`font-mono text-xs border border-[var(--color-border)] rounded-lg px-4 py-2.5 transition-colors ${borderAccent}`}
          >
            {otherTrackLabel}
          </Link>
        </div>
      </div>
    </nav>
  )
}
