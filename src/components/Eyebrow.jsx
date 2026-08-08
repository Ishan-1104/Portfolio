export default function Eyebrow({ children, accentClass = 'text-[var(--color-aiml-1)]' }) {
  return (
    <div className={`font-mono text-[12.5px] tracking-[0.14em] uppercase flex items-center gap-2.5 mb-4 ${accentClass}`}>
      <span className={`w-5 h-px ${accentClass.replace('text-', 'bg-')}`} />
      {children}
    </div>
  )
}
