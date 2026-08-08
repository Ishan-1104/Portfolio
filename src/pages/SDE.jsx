import SubNav from '../components/SubNav.jsx'
import Eyebrow from '../components/Eyebrow.jsx'
import Highlight from '../components/Highlight.jsx'
import FeaturedProject from '../components/FeaturedProject.jsx'
import SkillGroup from '../components/SkillGroup.jsx'
import Footer from '../components/Footer.jsx'
import { sdeFeatured } from '../data/projects.js'
import { certifications, sdeSkills } from '../data/content.js'

export default function SDE() {
  return (
    <div className="theme-sde">
      <SubNav
        track="sde"
        links={[
          { href: '#projects', label: 'Projects' },
          { href: '#certs', label: 'Certifications' },
          { href: '#skills', label: 'Skills' },
        ]}
        otherTrackPath="/aiml"
        otherTrackLabel="View AI/ML side"
      />

      {/* Hero */}
      <header className="max-w-[1120px] mx-auto px-7 pt-20 pb-14">
        <div className="font-mono text-[13px] uppercase tracking-wider text-[var(--color-sde-2)] mb-5">
          Full Stack · MERN &amp; Next.js
        </div>
        <h1 className="font-display font-semibold text-[36px] sm:text-6xl leading-[1.05] max-w-[820px]">
          Shipping{' '}
          <span className="bg-gradient-to-r from-[var(--color-sde-1)] to-[var(--color-sde-2)] bg-clip-text text-transparent">
            production web apps
          </span>
          , end to end.
        </h1>
        <p className="mt-6 text-[17px] text-[var(--color-text-muted)] max-w-[600px]">
          Full Stack Developer specializing in React.js, Node.js, Express.js and MongoDB, with experience building scalable web applications and AI-powered products. Comfortable across authentication, database design, and responsive UI — from first commit to deployed URL.
        </p>
        <div className="flex gap-3.5 flex-wrap mt-9">
          <a href="/resumes/Ishan_Chhaparwal_SDE_CV.pdf" download
            className="font-mono text-[13px] px-5 py-3 rounded-lg bg-[var(--color-sde-1)] text-[#0A0C10] hover:opacity-90 transition-opacity">
            Download SDE Resume ↓
          </a>
          <a href="#projects" className="font-mono text-[13px] px-5 py-3 rounded-lg border border-[var(--color-border)] text-[var(--color-text)] hover:border-[var(--color-sde-1)] hover:text-[var(--color-sde-1)] transition-colors">
            See projects
          </a>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 border-t border-l border-[var(--color-border-soft)] mt-16">
          {[
            ['3+', 'full-stack apps shipped'],
            ['99.9%', 'uptime on deployed apps'],
            ['450+', 'DSA problems solved'],
            ['1', 'IBM certification'],
          ].map(([v, l]) => (
            <div key={l} className="border-r border-b border-[var(--color-border-soft)] p-5.5">
              <div className="font-display text-[26px] font-semibold">{v}</div>
              <div className="font-mono text-[12.5px] text-[var(--color-text-dim)] mt-1">{l}</div>
            </div>
          ))}
        </div>
      </header>

      {/* Featured Projects */}
      <section id="projects" className="border-t border-[var(--color-border-soft)] py-20">
        <div className="max-w-[1120px] mx-auto px-7">
          <Eyebrow accentClass="text-[var(--color-sde-1)]">Selected Work</Eyebrow>
          <h2 className="font-display text-[28px] sm:text-[42px] font-semibold mb-3">Projects</h2>
          <p className="text-[var(--color-text-muted)] max-w-[560px] mb-10">
            Full-stack builds — auth, databases and deploys, not just UI.
          </p>
          {sdeFeatured.map((p) => (
            <FeaturedProject key={p.title} project={p} accentClass="text-[var(--color-sde-2)]" glowColor="var(--color-sde-1)" />
          ))}
        </div>
      </section>

      {/* Certifications */}
      <section id="certs" className="border-t border-[var(--color-border-soft)] py-20">
        <div className="max-w-[1120px] mx-auto px-7">
          <Eyebrow accentClass="text-[var(--color-sde-1)]">Certifications</Eyebrow>
          <h2 className="font-display text-[28px] sm:text-[42px] font-semibold mb-10">Certifications &amp; Achievements</h2>
          {certifications.map((c) => (
            <Highlight key={c.title} {...c} borderClass="border-l-[var(--color-sde-1)]" tagClass="text-[var(--color-sde-1)]" />
          ))}
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="border-t border-[var(--color-border-soft)] py-20">
        <div className="max-w-[1120px] mx-auto px-7">
          <Eyebrow accentClass="text-[var(--color-sde-1)]">Toolkit</Eyebrow>
          <h2 className="font-display text-[28px] sm:text-[42px] font-semibold mb-10">Skills</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {sdeSkills.map((s) => (
              <SkillGroup key={s.title} {...s} accentClass="text-[var(--color-sde-1)]" />
            ))}
          </div>
        </div>
      </section>

      <Footer resumePath="/resumes/Ishan_Chhaparwal_SDE_CV.pdf" accentClass="hover:text-[var(--color-sde-1)]" />
    </div>
  )
}
