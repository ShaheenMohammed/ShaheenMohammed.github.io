/**
 * Signal Field: an ink-black Swiss-editorial portfolio where Signal Lime is reserved for active routes, status, and interaction feedback.
 * Layout rule: sweeping left-weighted statements + slim technical metadata rail; no generic centered card grid.
 */
import { FormEvent, useState } from "react";
import {
  ArrowDown,
  ArrowUpRight,
  Braces,
  Check,
  Code2,
  Copy,
  Database,
  FileCode2,
  Github,
  Layers3,
  LockKeyhole,
  Terminal,
} from "lucide-react";
import { toast } from "sonner";

const githubUrl = "https://github.com/ShaheenMohammed";
const resumeUrl = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663761909950/difVaRsNnIGhTDhz.pdf";

const stack = [
  { label: "C#", icon: Code2 },
  { label: "JavaScript", icon: Braces },
  { label: "MongoDB", icon: Database },
  { label: "OAuth 2.0", icon: LockKeyhole },
  { label: "HTML", icon: FileCode2 },
];

const projects = [
  {
    id: "01",
    name: "BadAndBoujie",
    title: "Inventory, catalog, and cart workflows.",
    description:
      "A public business application focused on keeping inventory in view while supporting shopping-cart implementation.",
    stack: ["C#", "Inventory", "Cart"],
    visual: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663761909950/FzJRtNPSBycxftuW.jpg",
    repo: "https://github.com/ShaheenMohammed/BadAndBoujie",
    type: "SYSTEMS / BUSINESS",
  },
  {
    id: "02",
    name: "BlogSite",
    title: "A writing system backed by MongoDB Atlas.",
    description:
      "A public blog site using MongoDB Atlas as its database, built to keep publishing structure close to the content it serves.",
    stack: ["HTML", "MongoDB Atlas", "Content"],
    visual: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663761909950/TFwvTiBJEVHBzdbK.jpg",
    repo: "https://github.com/ShaheenMohammed/BlogSite",
    type: "WEB / DATA",
  },
  {
    id: "03",
    name: "Secrets",
    title: "Private sharing, considered as a system.",
    description:
      "A public website exploring secret sharing with OAuth 2.0 and encrypted user information stored in a database.",
    stack: ["OAuth 2.0", "Encryption", "Database"],
    visual: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663761909950/ElIYWmEWruFPfxMg.jpg",
    repo: "https://github.com/ShaheenMohammed/Secrets",
    type: "AUTH / SECURITY",
  },
];

const skills = [
  { number: "01", name: "JavaScript", area: "Browser interfaces & logic", level: 86 },
  { number: "02", name: "C#", area: "Application development", level: 81 },
  { number: "03", name: "MongoDB Atlas", area: "Document data systems", level: 78 },
  { number: "04", name: "OAuth 2.0", area: "Identity & access flows", level: 76 },
  { number: "05", name: "HTML / CSS", area: "Semantic front-end foundations", level: 88 },
  { number: "06", name: "Algorithms", area: "Problem-solving practice", level: 72 },
];

const notes = [
  {
    number: "NOTE // 01",
    category: "AUTHENTICATION",
    title: "Authentication is a product decision, not just a redirect flow.",
    excerpt:
      "A short technical note in development on making identity feel safe and understandable in the interface.",
  },
  {
    number: "NOTE // 02",
    category: "DATA DESIGN",
    title: "What a small content model can teach a large interface.",
    excerpt:
      "An upcoming reflection on structuring content and data so the front end stays simple under change.",
  },
  {
    number: "NOTE // 03",
    category: "ENGINEERING",
    title: "Progress comes from solving the smaller hard parts well.",
    excerpt:
      "A future note on algorithm practice, implementation habits, and working through technical uncertainty.",
  },
];

function SectionLabel({ index, children }: { index: string; children: React.ReactNode }) {
  return (
    <div className="section-label" aria-label={`${index} ${children}`}>
      <span>{index}</span>
      <i />
      <span>{children}</span>
    </div>
  );
}

export default function Home() {
  const [isCopied, setIsCopied] = useState(false);

  const handleDraft = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const draft = `Portfolio enquiry for Shaheen Mohammed\n\nFrom: ${formData.get("name")} (${formData.get("email")})\n\n${formData.get("message")}`;

    try {
      await navigator.clipboard.writeText(draft);
      setIsCopied(true);
      toast.success("Message draft copied. Continue the conversation on GitHub.");
    } catch {
      toast.message("Draft ready. Copy your message and continue via GitHub.");
    }
  };

  return (
    <div className="min-h-screen overflow-x-clip bg-[#080a09] text-[#f0f2eb]">
      <header className="site-header">
        <a href="#top" className="brand" aria-label="Shaheen Mohammed — back to top">
          <img src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663761909950/exYzyiQVClyFFoGY.png" alt="" />
          <span>SHAHEEN<br />MOHAMMED</span>
        </a>
        <nav className="primary-nav" aria-label="Primary navigation">
          <a href="#work">Work</a>
          <a href="#capabilities">Capabilities</a>
          <a href="#notes">Notes</a>
          <a href="#contact">Contact</a>
        </nav>
        <a className="header-github" href={githubUrl} target="_blank" rel="noreferrer">
          <Github size={15} aria-hidden="true" />
          <span>GitHub</span>
          <ArrowUpRight size={14} aria-hidden="true" />
        </a>
      </header>

      <main id="top">
        <section className="hero" aria-labelledby="hero-title">
          <img className="hero-art" src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663761909950/ZoFqetGnsdGdUxjz.jpg" alt="" />
          <div className="hero-shade" />
          <div className="hero-utility hero-utility-left">
            <span className="status-dot" />
            AVAILABLE FOR COLLABORATION
          </div>
          <div className="hero-utility hero-utility-right">FULL-STACK DEVELOPER / 2026</div>
          <div className="hero-content">
            <div className="hero-copy">
              <p className="eyebrow">Independent developer / Building clear systems</p>
              <h1 id="hero-title">Shaheen<br /><em>Mohammed.</em></h1>
              <p className="hero-intro">
                I build practical software across the stack—where thoughtful interfaces,
                data-aware back ends, and dependable product flows meet.
              </p>
              <div className="hero-actions">
                <a className="signal-button" href="#work">
                  <span>Explore selected work</span><ArrowDown size={17} aria-hidden="true" />
                </a>
                <a className="text-button" href={githubUrl} target="_blank" rel="noreferrer">
                  <Github size={17} aria-hidden="true" />
                  <span>Visit GitHub</span>
                </a>
              </div>
            </div>
            <aside className="hero-aside" aria-label="Developer focus">
              <span className="aside-kicker">CURRENT FOCUS</span>
              <p>Useful interfaces.<br />Sound foundations.<br />Honest systems.</p>
              <div className="hero-aside-rule" />
              <span className="aside-note">Scroll to trace the work ↓</span>
            </aside>
          </div>
          <div className="stack-strip" aria-label="Technology stack">
            <span className="stack-title">WORKING WITH</span>
            {stack.map(({ label, icon: Icon }) => (
              <div className="stack-item" key={label}>
                <Icon size={18} strokeWidth={1.65} aria-hidden="true" />
                <span>{label}</span>
              </div>
            ))}
          </div>
        </section>

        <section id="work" className="section work-section" aria-labelledby="work-title">
          <div className="section-topline">
            <SectionLabel index="01">SELECTED WORK</SectionLabel>
            <p className="section-top-note">PUBLIC REPOSITORIES / NO UNVERIFIED DEMOS</p>
          </div>
          <div className="section-lede-row">
            <h2 id="work-title">Builds that begin<br />with <em>usefulness.</em></h2>
            <p>
              This selection draws directly from Shaheen&apos;s public repositories. Each project
              links to its source; live demos are intentionally omitted where none are publicly verified.
            </p>
          </div>
          <div className="projects-list">
            {projects.map((project) => (
              <article className="project-card" key={project.name}>
                <div className="project-card-visual">
                  <img src={project.visual} alt="" />
                  <span className="project-number">{project.id}</span>
                  <span className="project-type">{project.type}</span>
                </div>
                <div className="project-card-body">
                  <div className="project-card-header">
                    <h3>{project.name}</h3>
                    <a className="icon-link" href={project.repo} target="_blank" rel="noreferrer" aria-label={`Open ${project.name} source repository`}>
                      <ArrowUpRight size={20} />
                    </a>
                  </div>
                  <h4>{project.title}</h4>
                  <p>{project.description}</p>
                  <div className="project-footer">
                    <div className="tag-list">{project.stack.map((item) => <span key={item}>{item}</span>)}</div>
                    <a href={project.repo} target="_blank" rel="noreferrer" className="source-link">View source <ArrowUpRight size={14} /></a>
                  </div>
                </div>
              </article>
            ))}
          </div>
          <a className="github-band" href={githubUrl} target="_blank" rel="noreferrer">
            <span><Terminal size={20} aria-hidden="true" /> Open source index</span>
            <strong>Explore all public repositories <ArrowUpRight size={18} aria-hidden="true" /></strong>
          </a>
        </section>

        <section id="capabilities" className="section capabilities-section" aria-labelledby="capabilities-title">
          <div className="capabilities-rail">
            <SectionLabel index="02">CAPABILITIES</SectionLabel>
            <h2 id="capabilities-title">A working<br /><em>toolset.</em></h2>
            <p>
              A developing full-stack practice shaped by public work in application logic,
              browser interfaces, data persistence, and identity-aware flows.
            </p>
            <div className="capability-stamp">
              <Layers3 size={21} strokeWidth={1.35} />
              <span>STACK<br />MAP / 01</span>
            </div>
          </div>
          <div className="skills-matrix" aria-label="Skills proficiency matrix">
            <div className="matrix-header"><span>TECHNOLOGY</span><span>FOCUS</span><span>PROFICIENCY</span></div>
            {skills.map((skill) => (
              <div className="skill-row" key={skill.name}>
                <span className="skill-id">{skill.number}</span>
                <strong>{skill.name}</strong>
                <span className="skill-area">{skill.area}</span>
                <div className="skill-meter" aria-label={`${skill.name} proficiency ${skill.level}%`}>
                  <i style={{ width: `${skill.level}%` }} />
                  <b>{skill.level}</b>
                </div>
              </div>
            ))}
            <p className="matrix-footnote">Self-reported proficiency based on published projects and active practice.</p>
          </div>
        </section>

        <section id="notes" className="section notes-section" aria-labelledby="notes-title">
          <div className="section-topline">
            <SectionLabel index="03">WRITING / IN PROGRESS</SectionLabel>
            <span className="notes-state"><span className="status-dot" /> EDITORIAL PIPELINE</span>
          </div>
          <div className="notes-heading">
            <h2 id="notes-title">Technical notes<br />worth <em>keeping.</em></h2>
            <p>
              A growing writing area for implementation observations, engineering questions,
              and the decisions that sit behind the code.
            </p>
          </div>
          <div className="notes-list">
            {notes.map((note) => (
              <article className="note-card" key={note.number}>
                <div className="note-card-top"><span>{note.number}</span><span>{note.category}</span></div>
                <h3>{note.title}</h3>
                <p>{note.excerpt}</p>
                <span className="coming-soon">IN DEVELOPMENT <ArrowUpRight size={14} /></span>
              </article>
            ))}
          </div>
        </section>

        <section id="contact" className="contact-section" aria-labelledby="contact-title">
          <div className="contact-panel">
            <div className="contact-copy">
              <SectionLabel index="04">CONTACT</SectionLabel>
              <h2 id="contact-title">Let&apos;s make the<br />next thing <em>useful.</em></h2>
              <p>
                Share the context, constraint, or system you&apos;re working on. This form prepares a message draft for your clipboard; continue the conversation through GitHub.
              </p>
              <a href={githubUrl} target="_blank" rel="noreferrer" className="text-button contact-github"><Github size={17} /> Visit Shaheen on GitHub <ArrowUpRight size={15} /></a>
            </div>
            <form className="contact-form" onSubmit={handleDraft}>
              <label><span>Your name</span><input name="name" placeholder="Name" autoComplete="name" required /></label>
              <label><span>Email address</span><input name="email" type="email" placeholder="you@company.com" autoComplete="email" required /></label>
              <label><span>What are you building?</span><textarea name="message" placeholder="A little context goes a long way." required rows={4} /></label>
              <button className="signal-button form-submit" type="submit">
                {isCopied ? <Check size={17} aria-hidden="true" /> : <Copy size={16} aria-hidden="true" />}
                <span>{isCopied ? "Draft copied" : "Copy message draft"}</span>
              </button>
            </form>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="footer-mark"><span className="footer-index">SM / 2026</span><img src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663761909950/exYzyiQVClyFFoGY.png" alt="" /></div>
        <p>Built as a clear signal for<br />the work ahead.</p>
        <div className="footer-links">
          <a href={resumeUrl} target="_blank" rel="noreferrer">Download profile <ArrowDown size={14} /></a>
          <a href={githubUrl} target="_blank" rel="noreferrer">GitHub <ArrowUpRight size={14} /></a>
        </div>
      </footer>
    </div>
  );
}
