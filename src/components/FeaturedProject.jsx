import RichText from './RichText.jsx'

export default function FeaturedProject({ project, accentClass = 'text-[var(--color-aiml-2)]', chipBorder = 'border-[var(--color-border)]', glowColor = 'var(--color-aiml-1)' }) {
  const { title, tagline, period, stack, bullets, github, demo, demoLabel, embeddable = true, image } = project

  return (
    <article className="border border-[var(--color-border)] rounded-2xl bg-[var(--color-bg-card)] overflow-hidden mb-7">
      <div className="p-7 pb-0">
        <div className="flex justify-between items-start gap-5 flex-wrap">
          <div>
            <div className="font-display text-[22px] font-semibold">{title}</div>
            <p className="text-[var(--color-text-muted)] mt-2.5 max-w-[640px] text-[15px]">{tagline}</p>
          </div>
          {period && <div className="font-mono text-xs text-[var(--color-text-dim)] whitespace-nowrap mt-1.5">{period}</div>}
        </div>

        <div className="flex flex-wrap gap-2 mt-4.5">
          {stack.map((s) => (
            <span key={s} className={`font-mono text-[11.5px] ${accentClass} border ${chipBorder} px-2.5 py-1 rounded-full bg-[var(--color-bg-raised)]`}>
              {s}
            </span>
          ))}
        </div>

        <ul className="mt-4.5 pl-4.5 space-y-2 list-disc marker:text-[var(--color-text-dim)]">
          {bullets.map((b, i) => (
            <li key={i} className="text-[var(--color-text-muted)] text-[14.5px]">
              <RichText text={b} />
            </li>
          ))}
        </ul>

        <div className="flex gap-3 mt-5.5 flex-wrap pb-7">
          {github && (
            <a href={github} target="_blank" rel="noopener noreferrer"
              className="font-mono text-xs inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg border border-[var(--color-border)] text-[var(--color-text-muted)] hover:border-[var(--color-text)] hover:text-[var(--color-text)] transition-colors">
              ↗ GitHub
            </a>
          )}
          {demo && (
            <a href={demo} target="_blank" rel="noopener noreferrer"
              className="font-mono text-xs inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg border border-[var(--color-border)] text-[var(--color-text-muted)] hover:border-[var(--color-text)] hover:text-[var(--color-text)] transition-colors">
              ↗ Open live demo
            </a>
          )}
        </div>
      </div>

      {/* Demo frame — live iframe when embeddable, launch card when a platform blocks embedding, placeholder when no demo exists */}
      <div className="border-t border-[var(--color-border)] bg-black">
        <div className="font-mono text-[11px] text-[var(--color-text-dim)] px-7 py-2.5 flex justify-between items-center bg-[var(--color-bg-raised)] border-b border-[var(--color-border)]">
          <span>{demo ? `LIVE DEMO — ${demoLabel}` : 'DEMO'}</span>
          <span>{demo ? (embeddable ? 'may take a few seconds to load' : 'opens in a new tab') : 'coming soon'}</span>
        </div>

        {demo && embeddable && (
          <iframe
            src={demo}
            loading="lazy"
            title={`${title} live demo`}
            sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
            className="w-full h-[460px] border-0 block bg-[var(--color-bg-raised)]"
          />
        )}

        {demo && !embeddable && (
          <a
            href={demo}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex flex-col overflow-hidden bg-[var(--color-bg-raised)]"
          >
            {/* fake browser chrome, to read as a device preview rather than empty space */}
            <div className="relative flex items-center gap-2 px-4 py-2.5 border-b border-[var(--color-border)] bg-[#0d0f13]">
              <span className="w-2.5 h-2.5 rounded-full bg-[#3a3f4a]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#3a3f4a]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#3a3f4a]" />
              <span className="ml-3 font-mono text-[10.5px] text-[var(--color-text-dim)] bg-[var(--color-bg)] border border-[var(--color-border-soft)] rounded-full px-3 py-1 truncate">
                {demoLabel}
              </span>
            </div>

            <div className="relative h-[300px] flex flex-col items-center justify-center gap-5 overflow-hidden">
              {image && (
                <img
                  src={image}
                  alt=""
                  aria-hidden="true"
                  className="absolute inset-0 w-full h-full object-cover object-top opacity-45 blur-[1px] scale-105 transition-transform duration-700 group-hover:scale-110"
                />
              )}
              <div
                className="absolute inset-0 transition-transform duration-700 group-hover:scale-110"
                style={
                  image
                    ? {
                        backgroundImage: `linear-gradient(180deg, ${glowColor}00 0%, var(--color-bg-raised) 92%), radial-gradient(circle at 25% 20%, ${glowColor}55 0%, transparent 55%)`,
                        opacity: 0.85,
                      }
                    : {
                        backgroundImage: `radial-gradient(circle at 25% 20%, ${glowColor}40 0%, transparent 50%), radial-gradient(circle at 78% 75%, ${glowColor}26 0%, transparent 55%), radial-gradient(rgba(255,255,255,0.07) 1px, transparent 1px)`,
                        backgroundSize: 'auto, auto, 22px 22px',
                        opacity: 0.9,
                      }
                }
              />
              <div className="relative flex items-center justify-center">
                <span
                  className="absolute inline-flex h-16 w-16 rounded-full opacity-40 animate-ping"
                  style={{ backgroundColor: glowColor }}
                />
                <span
                  className="relative w-16 h-16 rounded-full border-2 flex items-center justify-center bg-[var(--color-bg)] transition-transform duration-300 group-hover:scale-110"
                  style={{ borderColor: glowColor }}
                >
                  <svg width="22" height="22" viewBox="0 0 16 16" fill="none" style={{ color: glowColor }} className="transition-transform group-hover:translate-x-0.5">
                    <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </div>
              <div className={`relative text-center px-6 ${image ? 'py-3 rounded-xl bg-[var(--color-bg)]/70 backdrop-blur-sm' : ''}`}>
                <div className="font-display text-[15px] font-semibold text-[var(--color-text)]">Try the live demo</div>
                <div className="font-mono text-[11px] text-[var(--color-text-dim)] mt-1.5">opens {demoLabel} in a new tab</div>
              </div>
            </div>
          </a>
        )}

        {!demo && (
          <div className="relative h-[280px] flex items-center justify-center overflow-hidden bg-[var(--color-bg-raised)]">
            <div
              className="absolute inset-0 opacity-50"
              style={{
                backgroundImage: `radial-gradient(circle at 30% 25%, ${glowColor}20 0%, transparent 55%), radial-gradient(rgba(255,255,255,0.05) 1px, transparent 1px)`,
                backgroundSize: 'auto, 22px 22px',
              }}
            />
            <span className="relative font-mono text-xs text-[var(--color-text-dim)]">demo preview goes here</span>
          </div>
        )}
      </div>
    </article>
  )
}
