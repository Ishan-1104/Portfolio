import { education, socials } from '../data/content.js'

export default function Footer({ resumePath, accentClass = 'hover:text-[var(--color-aiml-1)]' }) {
  return (
    <footer className="border-t border-[var(--color-border-soft)] py-12">
      <div className="max-w-[1120px] mx-auto px-7 flex items-center justify-between flex-wrap gap-4">
        <small className="text-[var(--color-text-dim)] font-mono text-xs">
          {education.degree}, {education.school} · CGPA {education.cgpa} · {education.period}
        </small>
        <div className="flex items-center gap-6 text-[13.5px] text-[var(--color-text-muted)]">
          <a href={`mailto:${socials.email}`} className={accentClass}>{socials.email}</a>
          <a href={socials.linkedin} target="_blank" rel="noopener noreferrer" className={accentClass}>LinkedIn</a>
          <a href={socials.github} target="_blank" rel="noopener noreferrer" className={accentClass}>GitHub</a>
          {resumePath && (
            <a href={resumePath} download className={accentClass}>Resume ↓</a>
          )}
        </div>
      </div>
    </footer>
  )
}
