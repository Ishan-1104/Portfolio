import SubNav from '../components/SubNav.jsx'
import Eyebrow from '../components/Eyebrow.jsx'
import Highlight from '../components/Highlight.jsx'
import FeaturedProject from '../components/FeaturedProject.jsx'
import CompactProject from '../components/CompactProject.jsx'
import SkillGroup from '../components/SkillGroup.jsx'
import Footer from '../components/Footer.jsx'
import { aimlFeatured, aimlCompact } from '../data/projects.js'
import { publicationPatent, aimlSkills } from '../data/content.js'

export default function AIML() {
  return (
    <div className="theme-aiml">
      <SubNav
        track="aiml"
        links={[
          { href: '#projects', label: 'Projects' },
          { href: '#publication', label: 'Research' },
          { href: '#skills', label: 'Skills' },
        ]}
        otherTrackPath="/sde"
        otherTrackLabel="View SDE side"
      />

      {/* Hero */}
      <header className="max-w-[1120px] mx-auto px-7 pt-20 pb-14">
        <div className="font-mono text-[13px] uppercase tracking-wider text-[var(--color-aiml-2)] mb-5">
          AI / ML · Generative AI · Agentic Systems
        </div>
        <h1 className="font-display font-semibold text-[36px] sm:text-6xl leading-[1.05] max-w-[820px]">
          Building AI that{' '}
          <span className="bg-gradient-to-r from-[var(--color-aiml-1)] to-[var(--color-aiml-2)] bg-clip-text text-transparent">
            reasons, retrieves &amp; acts
          </span>{' '}
          — not just predicts.
        </h1>
        <p className="mt-6 text-[17px] text-[var(--color-text-muted)] max-w-[600px]">
          Results-driven AI/ML Developer with hands-on experience shipping production-grade AI systems — multi-agent architectures, RAG pipelines, and recommendation engines — using Python, TensorFlow, LangChain, LangGraph and Hugging Face Transformers. Author of a published research paper and a filed ML patent.
        </p>
        <div className="flex gap-3.5 flex-wrap mt-9">
          <a href="/resumes/Ishan_Chhaparwal_CV_AIML.pdf" download
            className="font-mono text-[13px] px-5 py-3 rounded-lg bg-[var(--color-aiml-1)] text-[#0A0C10] hover:opacity-90 transition-opacity">
            Download AI/ML Resume ↓
          </a>
          <a href="#projects" className="font-mono text-[13px] px-5 py-3 rounded-lg border border-[var(--color-border)] text-[var(--color-text)] hover:border-[var(--color-aiml-1)] hover:text-[var(--color-aiml-1)] transition-colors">
            See projects
          </a>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 border-t border-l border-[var(--color-border-soft)] mt-16">
          {[
            ['7+', 'AI systems shipped'],
            ['1', 'research paper published'],
            ['1', 'ML patent filed'],
            ['450+', 'DSA problems solved'],
          ].map(([v, l]) => (
            <div key={l} className="border-r border-b border-[var(--color-border-soft)] p-5.5">
              <div className="font-display text-[26px] font-semibold">{v}</div>
              <div className="font-mono text-[12.5px] text-[var(--color-text-dim)] mt-1">{l}</div>
            </div>
          ))}
        </div>
      </header>

      {/* Publication & Patent */}
      <section id="publication" className="border-t border-[var(--color-border-soft)] py-20">
        <div className="max-w-[1120px] mx-auto px-7">
          <Eyebrow accentClass="text-[var(--color-aiml-1)]">Publication &amp; Patent</Eyebrow>
          <h2 className="font-display text-[28px] sm:text-[42px] font-semibold mb-3">Research &amp; IP</h2>
          <p className="text-[var(--color-text-muted)] max-w-[560px] mb-10">
            Two credentials most portfolios at this stage don't have — a published paper and a filed patent, both in applied ML/NLP.
          </p>
          {publicationPatent.map((p) => (
            <Highlight key={p.title} {...p} borderClass="border-l-[var(--color-aiml-1)]" tagClass="text-[var(--color-aiml-1)]" />
          ))}
        </div>
      </section>

      {/* Featured Projects */}
      <section id="projects" className="border-t border-[var(--color-border-soft)] py-20">
        <div className="max-w-[1120px] mx-auto px-7">
          <Eyebrow accentClass="text-[var(--color-aiml-1)]">Selected Work</Eyebrow>
          <h2 className="font-display text-[28px] sm:text-[42px] font-semibold mb-3">Featured Projects</h2>
          <p className="text-[var(--color-text-muted)] max-w-[560px] mb-10">
            Three systems that show the range: agent orchestration, self-critiquing pipelines, and RAG.
          </p>
          {aimlFeatured.map((p) => (
            <FeaturedProject key={p.title} project={p} accentClass="text-[var(--color-aiml-2)]" />
          ))}

          <h3 className="font-display text-2xl font-semibold mt-16 mb-6">More Projects</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {aimlCompact.map((p) => (
              <CompactProject key={p.title} project={p} accentClass="text-[var(--color-aiml-2)]" />
            ))}
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="border-t border-[var(--color-border-soft)] py-20">
        <div className="max-w-[1120px] mx-auto px-7">
          <Eyebrow accentClass="text-[var(--color-aiml-1)]">Toolkit</Eyebrow>
          <h2 className="font-display text-[28px] sm:text-[42px] font-semibold mb-10">Skills</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {aimlSkills.map((s) => (
              <SkillGroup key={s.title} {...s} accentClass="text-[var(--color-aiml-1)]" />
            ))}
          </div>
        </div>
      </section>

      <Footer resumePath="/resumes/Ishan_Chhaparwal_CV_AIML.pdf" accentClass="hover:text-[var(--color-aiml-1)]" />
    </div>
  )
}
