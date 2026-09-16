"use client";

import { motion } from "framer-motion";
import {
  ArrowDown,
  ArrowUpRight,
  BrainCircuit,
  Code2,
  FileText,
  Github,
  Gitlab,
  Layers3,
  Mail,
  Network,
  Sparkles,
  TerminalSquare,
} from "lucide-react";
import { experience, projects, skills } from "@/data/portfolio";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.18 },
  transition: { duration: 0.55, ease: "easeOut" },
};

export default function Portfolio() {
  return (
    <main>
      <header className="nav-shell">
        <nav className="nav wrap">
          <a href="#top" className="brand" aria-label="Home">OM<span>.</span></a>
          <div className="nav-links">
            <a href="#about">About</a><a href="#projects">Projects</a><a href="#experience">Experience</a><a href="/cv">CV</a><a href="#contact">Contact</a>
          </div>
          <a className="nav-cta" href="#contact">Let&apos;s talk <ArrowUpRight size={15} /></a>
        </nav>
      </header>

      <section id="top" className="hero wrap">
        <div className="ambient ambient-one" /><div className="ambient ambient-two" />
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65 }} className="hero-copy">
          <div className="eyebrow"><span className="status-dot" /> Available for selected opportunities</div>
          <p className="kicker">SOFTWARE ENGINEER · AI ENGINEER</p>
          <h1>I build intelligent systems that turn <span>complexity into products.</span></h1>
          <p className="hero-text">I&apos;m <strong>Oussama Moustarzik</strong>, a software and AI engineer focused on scalable backend systems, AI-powered applications, RAG, intelligent automation and modern web products.</p>
          <div className="hero-actions">
            <a className="button primary" href="#projects">Explore my work <ArrowDown size={17} /></a>
            <a className="button ghost" href="/cv" target="_blank" rel="noreferrer"><FileText size={17} /> View CV</a>
            <a className="button ghost" href="#contact">Contact me <ArrowUpRight size={17} /></a>
          </div>
          <div className="social-row">
            <a href="https://github.com/Epsilonzerr" target="_blank" rel="noreferrer"><Github size={18} /> GitHub</a>
            <a href="https://gitlab.com/OussamaMoustarzik" target="_blank" rel="noreferrer"><Gitlab size={18} /> GitLab</a>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, delay: 0.08 }} className="hero-panel hero-profile-panel">
          <div className="profile-photo-wrap">
            <img className="profile-photo" src="https://raw.githubusercontent.com/Epsilonzerr/oussama-portfolio/main/public/profile.jpg" alt="Oussama Moustarzik" />
            <div className="profile-photo-shade" />
            <div className="profile-caption"><span>Oussama Moustarzik</span><small>Software & AI Engineer</small></div>
          </div>
          <div className="profile-code">
            <div className="panel-top"><span /><span /><span /></div>
            <div className="code-line"><span className="muted">01</span><span className="pink">const</span> engineer = &#123;</div>
            <div className="code-line indent"><span className="muted">02</span>name: <span className="green">&quot;Oussama Moustarzik&quot;</span>,</div>
            <div className="code-line indent"><span className="muted">03</span>focus: [<span className="green">&quot;AI&quot;</span>, <span className="green">&quot;Backend&quot;</span>, <span className="green">&quot;RAG&quot;</span>],</div>
            <div className="code-line indent"><span className="muted">04</span>stack: [<span className="green">&quot;Python&quot;</span>, <span className="green">&quot;FastAPI&quot;</span>, <span className="green">&quot;Next.js&quot;</span>],</div>
            <div className="code-line indent"><span className="muted">05</span>mindset: <span className="green">&quot;build → learn → improve&quot;</span>,</div>
            <div className="code-line"><span className="muted">06</span>&#125;;</div>
            <div className="terminal-card"><TerminalSquare size={19} /><div><small>CURRENT FOCUS</small><strong>Production AI systems & intelligent developer tools</strong></div></div>
          </div>
        </motion.div>
      </section>

      <section id="about" className="section wrap"><motion.div {...fadeUp}><div className="section-label">01 / ABOUT</div><div className="about-grid"><h2>Engineering beyond the prompt.</h2><div className="about-copy"><p>I enjoy building systems where <strong>software engineering and AI meet</strong>: robust APIs, reliable data flows, retrieval pipelines, autonomous workflows and clean user experiences.</p><p>My approach is product-oriented. I care about architecture, observability, maintainability and the quality of the final experience — not only whether a model can generate an answer.</p></div></div><div className="value-grid"><article><BrainCircuit /><h3>Applied AI</h3><p>LLMs, RAG, prompt systems, speech processing and intelligent workflows.</p></article><article><Layers3 /><h3>Backend systems</h3><p>APIs, databases, workers, queues, caching and production-oriented architecture.</p></article><article><Network /><h3>System design</h3><p>Microservices, GraphRAG, distributed components and end-to-end technical design.</p></article><article><Code2 /><h3>Product delivery</h3><p>From technical concept to usable interfaces, deployment and iteration.</p></article></div></motion.div></section>

      <section className="section skills-section wrap"><motion.div {...fadeUp}><div className="section-label">02 / TOOLBOX</div><h2 className="medium-heading">Technologies I work with.</h2><div className="skills">{skills.map((skill) => <span key={skill}>{skill}</span>)}</div></motion.div></section>

      <section id="projects" className="section wrap"><motion.div {...fadeUp}><div className="section-label">03 / SELECTED WORK</div><div className="section-heading-row"><h2 className="medium-heading">Projects with real technical depth.</h2><p>AI systems, developer tooling, automation and distributed software.</p></div></motion.div><div className="project-list">{projects.map((project, index) => (<motion.article key={project.name} {...fadeUp} className="project-card"><div className="project-index">0{index + 1}</div><div className="project-main"><div className="project-meta"><span>{project.label}</span>{project.privateProject && <span>Private / Case study</span>}</div><h3>{project.name}</h3><p>{project.description}</p><div className="highlights">{project.highlights.map((item) => <span key={item}>{item}</span>)}</div><div className="project-stack">{project.stack.map((item) => <span key={item}>{item}</span>)}</div></div><a className="project-link" href={project.href} target={project.href.startsWith("http") ? "_blank" : undefined} rel="noreferrer"><ArrowUpRight size={22} /></a></motion.article>))}</div></section>

      <section id="experience" className="section wrap"><motion.div {...fadeUp}><div className="section-label">04 / EXPERIENCE</div><h2 className="medium-heading">Building, learning, shipping.</h2><div className="timeline">{experience.map((item) => (<article key={item.role}><div className="period">{item.period}</div><div><h3>{item.role}</h3><span className="company">{item.company}</span><p>{item.description}</p></div></article>))}</div></motion.div></section>

      <section id="contact" className="contact-section wrap"><motion.div {...fadeUp} className="contact-card"><div className="contact-icon"><Sparkles size={23} /></div><p className="section-label">05 / CONTACT</p><h2>Have an ambitious project?<br /><span>Let&apos;s build it.</span></h2><p className="contact-text">I&apos;m open to software engineering, AI engineering and selected freelance opportunities.</p><div className="contact-actions"><a className="button primary" href="mailto:"><Mail size={17} /> Email me</a><a className="button ghost" href="/cv" target="_blank" rel="noreferrer"><FileText size={17} /> View CV</a><a className="button ghost" href="https://github.com/Epsilonzerr" target="_blank" rel="noreferrer"><Github size={17} /> GitHub</a><a className="button ghost" href="https://gitlab.com/OussamaMoustarzik" target="_blank" rel="noreferrer"><Gitlab size={17} /> GitLab</a></div><p className="contact-note">Professional work is primarily carried out in private GitLab repositories; GitHub contains selected public projects.</p></motion.div></section>

      <footer className="footer wrap"><span>© 2026 Oussama Moustarzik</span><span>Software · AI · Systems</span></footer>
    </main>
  );
}
