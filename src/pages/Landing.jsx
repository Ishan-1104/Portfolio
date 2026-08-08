import PhotoPlaceholder from '../components/PhotoPlaceholder.jsx'
import PathCard from '../components/PathCard.jsx'
import Eyebrow from '../components/Eyebrow.jsx'
import Footer from '../components/Footer.jsx'
import { bio, education, highlights, socials } from '../data/content.js'

export default function Landing() {
  return (
    <div>
      {/* Top nav */}
      <nav className="sticky top-0 z-50 bg-[var(--color-bg)]/85 backdrop-blur-md border-b border-[var(--color-border-soft)]">
        <div className="max-w-[1120px] mx-auto px-7 py-4 flex items-center justify-between">
          <div className="font-mono text-sm">Ishan Chhaparwal</div>
          <div className="flex items-center gap-5 text-sm text-[var(--color-text-muted)]">
            <a href={`mailto:${socials.email}`} className="hover:text-[var(--color-text)]">Email</a>
            <a href={socials.github} target="_blank" rel="noopener noreferrer" className="hover:text-[var(--color-text)]">GitHub</a>
            <a href={socials.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-[var(--color-text)]">LinkedIn</a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <header className="max-w-[1120px] mx-auto px-7 pt-16 sm:pt-20 pb-16">
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-10">
          <PhotoPlaceholder />
          <div className="text-center sm:text-left">
            <h1 className="font-display font-bold text-[40px] sm:text-6xl leading-[1.02] tracking-tight">
              Ishan Chhaparwal
            </h1>
            <p className="font-mono text-[var(--color-aiml-2)] text-sm sm:text-base mt-4">
              AI/ML Developer &amp; Full Stack Developer
            </p>
            <p className="text-[var(--color-text-muted)] text-base sm:text-lg mt-4 max-w-[560px]">
              I build agentic AI systems — and ship them as real, full-stack products.
            </p>

            <div className="flex flex-wrap justify-center sm:justify-start gap-3 mt-8">
              <a href="/resumes/Ishan_Chhaparwal_CV_AIML.pdf" download
                className="font-mono text-[13px] px-5 py-3 rounded-lg border border-[var(--color-aiml-1)] text-[var(--color-aiml-1)] hover:bg-[var(--color-aiml-1)] hover:text-[#0A0C10] transition-colors">
                Download AI/ML Resume ↓
              </a>
              <a href="/resumes/Ishan_Chhaparwal_SDE_CV.pdf" download
                className="font-mono text-[13px] px-5 py-3 rounded-lg border border-[var(--color-sde-1)] text-[var(--color-sde-1)] hover:bg-[var(--color-sde-1)] hover:text-[#0A0C10] transition-colors">
                Download SDE Resume ↓
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Choose your path */}
      <section className="max-w-[1120px] mx-auto px-7 pb-24">
        <Eyebrow>Two sides, one builder</Eyebrow>
        <h2 className="font-display text-[28px] sm:text-4xl font-semibold mb-10">Choose a path to explore</h2>
        <div className="flex flex-col md:flex-row gap-6">
          <PathCard
            to="/aiml"
            theme="aiml"
            trackLabel="AI/ML"
            title={<>AI/ML<br />Developer</>}
            hook="Agentic systems, RAG pipelines & recommendation engines — published research, a filed patent, 7+ shipped projects."
            tags={['LangGraph', 'LangChain', 'RAG', 'Hugging Face']}
            stats={[
              { value: '7+', label: 'AI systems shipped' },
              { value: '1', label: 'paper published' },
              { value: '1', label: 'patent filed' },
            ]}
          />
          <PathCard
            to="/sde"
            theme="sde"
            trackLabel="SDE"
            title={<>Full Stack<br />Developer</>}
            hook="Production web apps with React, Node & MongoDB — real auth, real uptime, real users."
            tags={['React.js', 'Node.js', 'Express', 'MongoDB']}
            stats={[
              { value: '3+', label: 'full-stack apps' },
              { value: '99.9%', label: 'uptime' },
              { value: '1', label: 'IBM certified' },
            ]}
          />
        </div>
      </section>

      {/* About */}
      <section className="max-w-[1120px] mx-auto px-7 py-20 border-t border-[var(--color-border-soft)]">
        <Eyebrow>About</Eyebrow>
        <h2 className="font-display text-[28px] sm:text-4xl font-semibold mb-8">Who I am</h2>
        <div className="max-w-[720px] space-y-5">
          {bio.map((p, i) => (
            <p key={i} className="text-[var(--color-text-muted)] text-[15.5px] leading-relaxed">{p}</p>
          ))}
        </div>
      </section>

      {/* Education */}
      <section className="max-w-[1120px] mx-auto px-7 py-20 border-t border-[var(--color-border-soft)]">
        <Eyebrow>Education</Eyebrow>
        <h2 className="font-display text-[28px] sm:text-4xl font-semibold mb-8">Where I studied</h2>
        <div className="border border-[var(--color-border)] rounded-xl bg-[var(--color-bg-card)] p-7 flex flex-col sm:flex-row sm:items-center justify-between gap-3 max-w-[720px]">
          <div>
            <div className="font-display text-lg font-semibold">{education.degree}</div>
            <div className="text-[var(--color-text-muted)] text-sm mt-1">{education.school}</div>
          </div>
          <div className="text-right">
            <div className="font-mono text-sm text-[var(--color-aiml-2)]">CGPA {education.cgpa}</div>
            <div className="font-mono text-xs text-[var(--color-text-dim)] mt-1">{education.period}</div>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="max-w-[1120px] mx-auto px-7 py-20 border-t border-[var(--color-border-soft)]">
        <Eyebrow>Trust signals</Eyebrow>
        <h2 className="font-display text-[28px] sm:text-4xl font-semibold mb-10">Highlights</h2>
        <div className="grid grid-cols-2 sm:grid-cols-5 border-t border-l border-[var(--color-border-soft)]">
          {highlights.map((h) => (
            <div key={h.label} className="border-r border-b border-[var(--color-border-soft)] p-6">
              <div className="font-display text-3xl font-semibold">{h.value}</div>
              <div className="font-mono text-[12px] text-[var(--color-text-dim)] mt-1.5">{h.label}</div>
            </div>
          ))}
        </div>
      </section>

      <Footer accentClass="hover:text-[var(--color-aiml-1)]" />
    </div>
  )
}
