"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowDown, ArrowUpRight, Check, Download, Github, Linkedin, Mail, Menu, Phone, X } from "lucide-react";

const navItems = ["About", "Skills", "Projects", "Experience", "Education", "Certifications", "Contact"];
const skillGroups = [
  ["Programming", "Java", "JavaScript", "TypeScript", "SQL"],
  ["Core Java", "OOP", "Collections", "Exception Handling", "Java 8 Streams", "Lambda Expressions", "DSA"],
  ["Backend", "Spring Boot", "REST APIs", "Webhooks", "MVC Architecture"],
  ["Frontend", "HTML5", "CSS3", "React", "Next.js 15", "Tailwind CSS", "shadcn/ui"],
  ["Databases", "MySQL", "PostgreSQL", "Firebase Realtime Database"],
  ["Tools", "Git", "GitHub", "Postman", "IntelliJ IDEA", "Eclipse", "Android Studio"],
];
const projects = [
  { number: "01", title: "WhatsApp Auto-Reply Chatbot", description: "A Spring Boot backend service that processes incoming WhatsApp messages through webhooks and handles automated FAQ responses.", tags: ["Java", "Spring Boot", "REST API", "Webhooks"], accent: "blue", icon: "↗" },
  { number: "02", title: "Quiz Android Application", description: "An Android quiz application with an interactive UI and Firebase-backed quiz content and score data.", tags: ["Java", "Android SDK", "XML", "Firebase"], accent: "cyan", icon: "?" },
  { number: "03", title: "Java GUI Calculator", description: "A desktop calculator supporting standard arithmetic operations through a focused event-driven Swing interface.", tags: ["Java", "Swing"], accent: "purple", icon: "=" },
];

function SectionLabel({ children }: { children: React.ReactNode }) { return <p className="section-label">{children}</p>; }

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);
  return (
    <main>
      <nav className="navbar" aria-label="Primary navigation">
        <a className="logo" href="#home" onClick={closeMenu}>AJ<span>.</span></a>
        <div className="nav-links">{navItems.map((item) => <a key={item} href={`#${item.toLowerCase()}`}>{item}</a>)}</div>
        <div className="nav-actions"><a className="resume-button small" href="/resume.pdf" download><Download size={15} /> Resume</a><button className="mobile-menu" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? "Close menu" : "Open menu"}>{menuOpen ? <X /> : <Menu />}</button></div>
        <AnimatePresence>{menuOpen && <motion.div className="mobile-links" initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}>{navItems.map((item) => <a key={item} href={`#${item.toLowerCase()}`} onClick={closeMenu}>{item}</a>)}<a href="/resume.pdf" download onClick={closeMenu}>Download Resume</a></motion.div>}</AnimatePresence>
      </nav>

      <section className="hero section-container" id="home">
        <div className="hero-copy"><div className="availability"><span /> Open to Software Developer opportunities</div><h1>Hi, I&apos;m <span>Anujkumar</span> Jha.</h1><p className="hero-subtitle">Java Backend &amp; Full Stack Developer</p><p className="hero-description">I build backend services, REST APIs and full-stack applications using Java and modern web technologies.</p><div className="hero-buttons"><a className="primary-button" href="#projects">View Projects <ArrowDown size={17} /></a><a className="secondary-button" href="#contact">Contact Me <ArrowUpRight size={17} /></a><a className="icon-button" href="https://github.com/jha-8anuj" target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={18} /></a><a className="icon-button" href="https://www.linkedin.com/in/anuj-jha-58934933a/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={18} /></a></div></div>
        <div className="hero-visual" aria-hidden="true"><div className="grid-orb"></div><div className="glow glow-blue"></div><div className="glow glow-purple"></div><div className="code-card"><div className="code-dots"><i /><i /><i /><span>backend.java</span></div><p><span className="code-purple">public</span> <span className="code-blue">class</span> <span className="code-yellow">Developer</span> &#123;</p><p className="indent"><span className="code-purple">public</span> <span className="code-blue">void</span> <span className="code-yellow">build</span>() &#123;</p><p className="indent2"><span className="code-purple">return</span> <span className="code-green">&quot;ideas → products&quot;</span>;</p><p className="indent">&#125;</p><p>&#125;</p></div><div className="hero-orbit one"></div><div className="hero-orbit two"></div></div>
      </section>

      <section className="marquee"><span>JAVA</span><b>✦</b><span>SPRING BOOT</span><b>✦</b><span>NEXT.JS</span><b>✦</b><span>TYPESCRIPT</span><b>✦</b><span>REST APIs</span><b>✦</b><span>JAVA</span><b>✦</b><span>SPRING BOOT</span><b>✦</b><span>NEXT.JS</span></section>

      <section className="section-container content-section" id="about"><div className="section-head"><SectionLabel>01 / About me</SectionLabel><h2>Good software starts with <span>curiosity.</span></h2></div><div className="about-grid"><p className="about-lead">I&apos;m a 2026 B.Sc. Computer Science graduate interested in Java backend development, APIs, databases and full-stack applications.</p><div className="about-body"><p>My foundation is in Core Java, object-oriented programming and data structures. I enjoy taking those fundamentals into practical projects — designing REST endpoints, connecting data sources and shaping interfaces that feel clear to use.</p><p>Currently, I&apos;m working as a Software Developer Intern at <strong>DigitioHub Technologies Pvt. Ltd.</strong>, contributing to frontend features with Next.js, TypeScript and shadcn/ui alongside testing, debugging and documentation.</p></div></div></section>

      <section className="section-container content-section" id="skills"><div className="section-head"><SectionLabel>02 / Skills</SectionLabel><h2>A practical <span>toolkit.</span></h2></div><div className="skill-grid">{skillGroups.map(([title, ...items]) => <div className="skill-group" key={title}><h3>{title}</h3><div className="skill-pills">{items.map((skill) => <span key={skill}>{skill}</span>)}</div></div>)}</div><div className="learning-note"><span>Currently learning</span><p>Spring MVC · Spring Security · Spring Data JPA · Hibernate</p></div></section>

      <section className="projects-section" id="projects"><div className="section-container content-section"><div className="section-head"><SectionLabel>03 / Projects</SectionLabel><h2>Selected <span>work.</span></h2></div><div className="project-grid">{projects.map((project) => <article className={`project-card ${project.accent}`} key={project.number}><div className="project-top"><span>{project.number}</span><div className="project-symbol">{project.icon}</div></div><div className="project-illustration"><div className="illustration-line" /><div className="illustration-core">{project.number === "01" ? "API" : project.number === "02" ? "QUIZ" : "42"}</div></div><h3>{project.title}</h3><p>{project.description}</p><div className="tag-list">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div></article>)}</div></div></section>

      <section className="section-container content-section" id="experience"><div className="section-head"><SectionLabel>04 / Experience</SectionLabel><h2>Learning by <span>doing.</span></h2></div><div className="timeline-item"><div className="timeline-date">SEP 2026 — PRESENT</div><div><h3>Software Developer Intern</h3><p className="muted">DigitioHub Technologies Pvt. Ltd. · Ambarnath, Thane</p><p>Working with the software development team on assigned development activities. Building frontend features using Next.js, TypeScript and shadcn/ui, while contributing to testing, debugging, documentation and team collaboration.</p></div><span className="timeline-dot" /></div></section>

      <section className="section-container content-section split-section" id="education"><div><SectionLabel>05 / Education</SectionLabel><h2>Built on <span>strong foundations.</span></h2></div><div className="resume-list"><div><small>MAY 2023 — APR 2026</small><h3>B.Sc. Computer Science</h3><p>Model College, Dombivli <b>·</b> CGPA 6 / 10</p></div><div><small>JAN 2021 — JAN 2023</small><h3>Higher Secondary Certificate</h3><p>SK Bose Jr. College, Dombivli <b>·</b> 51%</p></div></div></section>

      <section className="section-container content-section split-section" id="certifications"><div><SectionLabel>06 / Certifications</SectionLabel><h2>Always <span>learning.</span></h2></div><div className="resume-list"><div><small>JAN — FEB 2026</small><h3>Java Development Certificate</h3><p>TechnoHacks Solutions Pvt. Ltd.</p></div><div><small>DEC 2025 — JAN 2026</small><h3>Full Stack Development Certificate</h3><p>TechnoHacks Solutions Pvt. Ltd.</p></div></div></section>

      <section className="contact-section" id="contact"><div className="section-container contact-inner"><SectionLabel>07 / Contact</SectionLabel><h2>Let&apos;s build something <span>useful.</span></h2><p>I&apos;m open to Software Developer opportunities where I can contribute, learn fast and grow with a product-minded team.</p><div className="contact-actions"><a className="primary-button" href="mailto:jhaanuj842@gmail.com"><Mail size={17} /> Email me</a><a className="secondary-button" href="tel:+919082405725"><Phone size={17} /> Call me</a></div><div className="contact-links"><a href="mailto:jhaanuj842@gmail.com">jhaanuj842@gmail.com <ArrowUpRight size={15} /></a><a href="https://github.com/jha-8anuj" target="_blank" rel="noreferrer">GitHub <ArrowUpRight size={15} /></a><a href="https://www.linkedin.com/in/anuj-jha-58934933a/" target="_blank" rel="noreferrer">LinkedIn <ArrowUpRight size={15} /></a></div></div></section>
      <footer className="footer section-container"><span>Anujkumar Jha</span><span>Full Stack Developer</span><span>© {new Date().getFullYear()}</span></footer>
    </main>
  );
}
