"use client";

import { motion } from "framer-motion";
import {
  ArrowDown,
  ArrowUpRight,
  FileText,
  Github,
  Gitlab,
  Mail,
  MapPin,
} from "lucide-react";
import { experience, projects, skills } from "@/data/portfolio";
import { profileImage } from "@/data/profileImage";

const reveal = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.18 },
  transition: { duration: 0.65, ease: "easeOut" },
};

const featured = projects[0];
const selected = projects.slice(1, 5);

export default function Portfolio() {
  return (
    <main className="site-shell">
      <header className="topbar">
        <nav className="container nav">
          <a href="#top" className="wordmark" aria-label="Oussama Moustarzik home">
            Oussama<span>.</span>
          </a>
          <div className="nav-links">
            <a href="#work">Work</a>
            <a href="#experience">Experience</a>
            <a href="#about">About</a>
            <a href="/cv">CV</a>
          </div>
          <a className="nav-contact" href="mailto:oussamamoustarzik7@gmail.com">
            Contact <ArrowUpRight size={15} />
          </a>
        </nav>
      </header>

      <section id="top" className="hero">
        <div className="container hero-grid">
          <motion.div
            className="hero-copy"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="hero-status">
              <span className="status-dot" /> Available for selected opportunities
            </div>
            <p className="hero-role">SOFTWARE & AI ENGINEER</p>
            <h1>
              I design intelligent systems that are built to <em>work in the real world.</em>
            </h1>
            <p className="hero-intro">
              I&apos;m <strong>Oussama Moustarzik</strong>, an engineer focused on production AI,
              scalable backend systems, RAG, automation and modern digital products.
            </p>
            <div className="hero-actions">
              <a className="btn btn-dark" href="#work">
                View selected work <ArrowDown size={17} />
              </a>
              <a className="btn btn-light" href="/cv" target="_blank" rel="noreferrer">
                <FileText size={17} /> View CV
              </a>
            </div>
            <div className="hero-links">
              <a href="https://github.com/Epsilonzerr" target="_blank" rel="noreferrer">
                <Github size={17} /> GitHub
              </a>
              <a href="https://gitlab.com/OussamaMoustarzik" target="_blank" rel="noreferrer">
                <Gitlab size={17} /> GitLab
              </a>
              <span><MapPin size={17} /> Casablanca, Morocco</span>
            </div>
          </motion.div>

          <motion.div
            className="portrait-block"
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.75, delay: 0.08 }}
          >
            <div className="portrait-frame">
              <img
                src={profileImage}
                alt="Oussama Moustarzik"
              />
              <div className="portrait-overlay" />
              <div className="portrait-label">
                <span>Production-minded engineer</span>
                <small>AI · Backend · Systems</small>
              </div>
            </div>
            <div className="portrait-note">
              <span>Currently</span>
              <p>Building production AI systems at Telexcel.</p>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="signal-strip">
        <div className="container signal-grid">
          <div><span>01</span><strong>Production AI</strong><p>LLMs, speech, RAG and automated decision workflows.</p></div>
          <div><span>02</span><strong>Backend engineering</strong><p>FastAPI, distributed workers, databases and cloud infrastructure.</p></div>
          <div><span>03</span><strong>Private GitLab activity</strong><p>Most professional code lives in private repositories; GitHub showcases selected public work.</p></div>
        </div>
      </section>

      <section id="work" className="work-section">
        <div className="container">
          <motion.div {...reveal} className="section-head section-head-light">
            <div>
              <p className="section-kicker">SELECTED WORK</p>
              <h2>Projects where architecture and AI meet.</h2>
            </div>
            <p>
              I prefer showing the problem, the system and the engineering choices — not just screenshots.
            </p>
          </motion.div>

          <motion.article {...reveal} className="featured-project">
            <div className="featured-copy">
              <div className="project-eyebrow">
                <span>01</span>
                <span>{featured.label}</span>
                <span>Private production project</span>
              </div>
              <h3>{featured.name}</h3>
              <p className="featured-description">{featured.description}</p>
              <div className="feature-points">
                {featured.highlights.map((item) => <span key={item}>{item}</span>)}
              </div>
              <div className="tech-line">
                {featured.stack.map((item) => <span key={item}>{item}</span>)}
              </div>
            </div>

            <div className="featured-visual" aria-label="CallQualify system overview">
              <div className="visual-header">
                <span>CallQualify</span>
                <small>AI qualification pipeline</small>
              </div>
              <div className="system-flow">
                <div><small>01</small><strong>Audio</strong><span>Call ingestion</span></div>
                <i>→</i>
                <div><small>02</small><strong>Speech</strong><span>Transcription</span></div>
                <i>→</i>
                <div><small>03</small><strong>AI</strong><span>Structured analysis</span></div>
                <i>→</i>
                <div><small>04</small><strong>Decision</strong><span>Qualification</span></div>
              </div>
              <div className="visual-footer">
                <span>FastAPI</span><span>PostgreSQL</span><span>Redis</span><span>AWS</span>
              </div>
            </div>
          </motion.article>

          <div className="project-rows">
            {selected.map((project, index) => (
              <motion.article {...reveal} className="project-row" key={project.name}>
                <div className="row-number">0{index + 2}</div>
                <div className="row-title">
                  <span>{project.label}</span>
                  <h3>{project.name}</h3>
                </div>
                <p>{project.description}</p>
                <div className="row-tech">{project.stack.slice(0, 4).map((item) => <span key={item}>{item}</span>)}</div>
                <a
                  className="row-link"
                  href={project.href}
                  target={project.href.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer"
                  aria-label={`Open ${project.name}`}
                >
                  <ArrowUpRight size={20} />
                </a>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="about-section">
        <div className="container about-layout">
          <motion.div {...reveal} className="about-title">
            <p className="section-kicker dark">ABOUT</p>
            <h2>Engineering beyond the demo.</h2>
          </motion.div>
          <motion.div {...reveal} className="about-body">
            <p className="about-lead">
              I like AI when it becomes part of a reliable product — connected to real data,
              real workflows and clear business outcomes.
            </p>
            <p>
              My work sits between software engineering and applied AI: APIs, databases, background workers,
              retrieval systems, intelligent automation and the interfaces that make them useful.
            </p>
            <p>
              I care about maintainability, system design, observability and shipping end-to-end solutions.
            </p>
          </motion.div>
        </div>

        <div className="container principles">
          <motion.div {...reveal}><span>01</span><h3>Design the system</h3><p>Start with architecture, data flow and failure modes before adding complexity.</p></motion.div>
          <motion.div {...reveal}><span>02</span><h3>Make AI measurable</h3><p>Structured outputs, evaluation loops and production feedback matter more than demos.</p></motion.div>
          <motion.div {...reveal}><span>03</span><h3>Ship useful products</h3><p>Backend, AI and interface should feel like one coherent product.</p></motion.div>
        </div>
      </section>

      <section id="experience" className="experience-section">
        <div className="container">
          <motion.div {...reveal} className="section-head compact">
            <div><p className="section-kicker dark">EXPERIENCE</p><h2>Where I&apos;ve been building.</h2></div>
          </motion.div>

          <div className="experience-list">
            {experience.map((item, index) => (
              <motion.article {...reveal} key={item.role}>
                <div className="exp-index">0{index + 1}</div>
                <div className="exp-period">{item.period}</div>
                <div className="exp-main">
                  <h3>{item.role}</h3>
                  <span>{item.company}</span>
                  <p>{item.description}</p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="toolbox-section">
        <div className="container toolbox-layout">
          <motion.div {...reveal}>
            <p className="section-kicker">TOOLBOX</p>
            <h2>Technologies I use to build.</h2>
          </motion.div>
          <motion.div {...reveal} className="skill-cloud">
            {skills.map((skill) => <span key={skill}>{skill}</span>)}
          </motion.div>
        </div>
      </section>

      <section id="contact" className="contact-section-new">
        <div className="container contact-layout">
          <motion.div {...reveal}>
            <p className="section-kicker">CONTACT</p>
            <h2>Have something worth building?</h2>
            <p>Open to software engineering, AI engineering and selected freelance opportunities.</p>
          </motion.div>
          <motion.div {...reveal} className="contact-actions-new">
            <a href="mailto:oussamamoustarzik7@gmail.com" className="contact-primary">
              <Mail size={19} /> oussamamoustarzik7@gmail.com <ArrowUpRight size={18} />
            </a>
            <div className="contact-secondary">
              <a href="https://github.com/Epsilonzerr" target="_blank" rel="noreferrer"><Github size={18} /> GitHub</a>
              <a href="https://gitlab.com/OussamaMoustarzik" target="_blank" rel="noreferrer"><Gitlab size={18} /> GitLab</a>
              <a href="/cv" target="_blank" rel="noreferrer"><FileText size={18} /> CV</a>
            </div>
          </motion.div>
        </div>
      </section>

      <footer className="footer-new">
        <div className="container">
          <span>© 2026 Oussama Moustarzik</span>
          <span>Software · AI · Systems</span>
        </div>
      </footer>
    </main>
  );
}
