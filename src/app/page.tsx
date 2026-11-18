import Image from "next/image";
import { ArrowDown, ArrowRight, ArrowUpRight, Github, Linkedin, Mail, Sparkles, Code2, Layers3, Database, Terminal, Award } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { Navbar } from "@/components/navbar";
import { ExperienceMotion } from "@/components/experience-motion";

const skills = [
  { title: "Languages", items: ["Java", "Python", "JavaScript", "TypeScript", "SQL"], icon: Code2 },
  { title: "Backend", items: ["Spring Boot", "REST APIs", "JDBC", "Node.js"], icon: Layers3 },
  { title: "CS Fundamentals", items: ["DSA", "OOP", "DBMS", "Operating Systems", "Computer Networks"], icon: Terminal },
  { title: "Frontend", items: ["Next.js", "React", "HTML", "CSS", "Tailwind CSS"], icon: Sparkles },
  { title: "Data & Tools", items: ["MySQL", "PostgreSQL", "Redis", "MongoDB", "Git", "Docker"], icon: Database }
];

const projects = [
  { number: "01", name: "RetailHub", type: "Enterprise SaaS · POS & Retail", description: "A multi-tenant retail management platform concept covering point of sale, inventory, billing, branches and operational workflows.", stack: ["Python", "PostgreSQL", "ReactJS (JavaScript)", "SaaS", "IndexedDB"], status: "In development" },
  { number: "02", name: "ShikshaSaathi", type: "Education technology · Tutor platform", description: "A home-tutor platform helping parents and students discover and connect with suitable tutors, with tutor profiles, requests, reviews, subscriptions and role-based access.", stack: ["Java", "Spring Boot", "MySQL", "REST APIs", "Bootstrap"], status: "In development" },
  { number: "03", name: "Clinic Management System", type: "Healthcare operations · Multi-location", description: "A clinic operations platform for managing locations, doctors, appointments, queues, patient visits, prescriptions and billing.", stack: ["Next.js", "Prisma", "PostgreSQL", "Redis"], status: "In development" }
];

export default function Home() {
  return (
    <main>
      <Navbar />
      <section id="home" className="hero section-wrap">
        <div className="hero-orb orb-one" /><div className="hero-orb orb-two" /><div className="hero-3d-scene" aria-hidden="true"><span className="scene-ring scene-ring-one"/><span className="scene-ring scene-ring-two"/><span className="scene-core"/></div>
        <div className="hero-copy">
          <Reveal><div className="eyebrow"><span className="status-dot" /> AVAILABLE FOR SOFTWARE OPPORTUNITIES</div></Reveal>
          <Reveal delay={0.08}><p className="hello">HELLO, I&apos;M</p><h1>Akash <span>Kumar</span></h1></Reveal>
          <Reveal delay={0.16}><h2>Building digital products<br/><em>with purpose & precision.</em></h2></Reveal>
          <Reveal delay={0.24}><p className="hero-description">MCA student and aspiring software developer building web applications with Java, Spring Boot, REST APIs and relational databases. Interested in backend engineering, Python and practical AI applications.</p></Reveal>
          <Reveal delay={0.32}><div className="hero-actions"><a className="button button-primary magnetic" href="#projects">Explore my work <ArrowUpRight size={17}/></a><a className="button button-ghost magnetic" href="/Akash-Kumar-Resume.pdf" download>Download resume <ArrowDown size={16}/></a></div></Reveal>
          <Reveal delay={0.4}><div className="social-row"><a href="https://github.com/akashkumar3111" target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={18}/></a><a href="https://www.linkedin.com/in/akashkumar3111/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={18}/></a>
          <a href="mailto:akash.kumar3111.ak@gmail.com" aria-label="Email"><Mail size={18}/></a>
          <span className="social-caption">Delhi NCR, India · Open to opportunities</span></div></Reveal>
        </div>
        <Reveal delay={0.18} className="portrait-column">
          <div className="portrait-frame">
            <div className="portrait-grid" />
            <div className="portrait-photo"><Image src="/images/akash-cinematic-portrait.png" alt="Akash Kumar — professional portrait" fill priority sizes="(max-width: 850px) 80vw, 40vw" style={{objectFit:"cover", objectPosition:"center top"}} /></div>
            <div className="portrait-ring ring-a" /><div className="portrait-ring ring-b" />
            
            <div className="portrait-index">01 / CREATIVE DEVELOPER</div>
          </div>
        </Reveal>
        <a className="scroll-cue" href="#about"><ArrowDown size={15}/> SCROLL TO EXPLORE</a>
      </section>

      <section id="about" className="section section-wrap">
        <Reveal><div className="section-kicker">01 / ABOUT</div><div className="section-heading-row"><h2>Curious mind.<br/><span>Builder&apos;s mindset.</span></h2><p className="section-intro">I enjoy turning complex problems into clear, reliable and useful software experiences.</p></div></Reveal>
        <div className="about-grid"><Reveal className="about-card glass-card"><Sparkles className="card-icon"/><h3>My approach</h3><p>I care about the details behind a product: its architecture, data, usability, performance and the people it serves. I like learning by designing and building real projects.</p></Reveal><Reveal delay={0.1} className="about-note"><span className="quote-mark">“</span><p>Learning continuously.<br/>Building intentionally.<br/><em>Improving every day.</em></p><span className="note-caption">AKASH KUMAR · SOFTWARE DEVELOPER</span></Reveal></div>
      </section>

      <section className="stats-strip section-wrap" aria-label="Portfolio highlights">
        <div className="stat-item"><strong data-count="3">03</strong><span>FEATURED PROJECTS</span></div>
        <div className="stat-item"><strong data-count="5">05</strong><span>CORE TECH AREAS</span></div>
        <div className="stat-item"><strong data-count="2027">2027</strong><span>MCA GRADUATION</span></div>
        <div className="stat-item"><strong>∞</strong><span>LEARNING MODE</span></div>
      </section>

      <section id="skills" className="section section-wrap">
        <Reveal><div className="section-kicker">02 / TOOLKIT</div><div className="section-heading-row"><h2>Tools I use to<br/><span>make things work.</span></h2><p className="section-intro">A growing toolkit across application development, backend engineering and data.</p></div></Reveal>
        <div className="skills-grid">{skills.map((group, i) => { const Icon = group.icon; return <Reveal key={group.title} delay={i * 0.07} className="skill-card glass-card"><div className="skill-card-top"><Icon size={21}/><span>0{i+1}</span></div><h3>{group.title}</h3><div className="tag-list">{group.items.map(item => <span className="tag" key={item}>{item}</span>)}</div></Reveal>; })}</div>
      </section>

      <section id="projects" className="section section-wrap">
        <Reveal><div className="section-kicker">03 / SELECTED WORK</div><div className="section-heading-row"><h2>Ideas becoming<br/><span>real-world products.</span></h2><p className="section-intro">A selection of projects that reflect my interest in solving practical problems with software.</p></div></Reveal>
        <div className="project-list">{projects.map((project, i) => <Reveal key={project.number} delay={i * 0.08} className="project-card"><div className="project-number">{project.number}</div><div className="project-main"><div className="project-meta">{project.type}</div><h3>{project.name}</h3><p>{project.description}</p><div className="tag-list">{project.stack.map(s => <span className="tag" key={s}>{s}</span>)}</div><span className="project-status"><span className="status-dot"/> {project.status}</span></div><div className="project-link"><ArrowUpRight size={22}/></div></Reveal>)}</div>
      </section>

      <section id="experience" className="section section-wrap">
        <Reveal><div className="section-kicker">04 / JOURNEY</div><div className="section-heading-row"><h2>Learning by<br/><span>doing the work.</span></h2><p className="section-intro">My academic path and hands-on learning journey in technology.</p></div></Reveal>
        <div className="timeline timeline-progress"><Reveal className="timeline-item"><span className="timeline-year">2025 — 2027</span><div><h3>Master of Computer Applications</h3><p>Institute of Technology & Science, Mohan Nagar, Ghaziabad</p><span className="timeline-detail">Currently pursuing · MCA</span></div></Reveal><Reveal delay={0.08} className="timeline-item"><span className="timeline-year">Aug 2026</span><div><h3>AI / Technical Intern</h3><p>LoQal AI Academy · ITS Mohan Nagar, Ghaziabad</p><span className="timeline-detail">21-day practical program: Ubuntu/Linux, DSA, SQL, Python, Apache, Streamlit and AI interaction fundamentals</span></div></Reveal><Reveal delay={0.16} className="timeline-item"><span className="timeline-year">2018 — 2021</span><div><h3>Bachelor of Arts · Political Science</h3><p>M.J.P. Rohilkhand University, Bareilly</p><span className="timeline-detail">M.J.P. Rohilkhand University · 2021</span></div></Reveal></div>
      </section>

      <section id="highlights" className="section section-wrap">
        <Reveal><div className="section-kicker">05 / RESEARCH & RECOGNITION</div><div className="section-heading-row"><h2>Always learning.<br/><span>Always exploring.</span></h2><p className="section-intro">Research interests and credentials from my learning journey.</p></div></Reveal>
        <div className="about-grid">
          <Reveal className="about-card glass-card"><Sparkles className="card-icon"/><h3>Research in progress</h3><p><b>Grasshopper Optimization Algorithm (GOA) for Vehicle Routing Problem (VRP).</b><br/>Exploring metaheuristic optimization, route optimization and algorithm design for combinatorial problems.</p></Reveal>
          <Reveal delay={0.1} className="about-card glass-card"><Award className="card-icon"/><h3>Certifications & achievements</h3><div className="credential-list"><p><b>Generative AI Literacy</b> — Gold Category · FutureSkills Prime, NASSCOM · Oct 2026</p><p><b>Data Processing and Visualisation</b> — Bronze Category · FutureSkills Prime, NASSCOM · Oct 2026</p><p><b>MERN Stack Workshop</b> — ITS Mohan Nagar · Jul 2026</p><p><b>Python Bootcamp</b> — ShapeMySkills / Ducat · Dec 2025</p><p><b>FIESTA Hackathon 2026</b> — Participant · ITS Mohan Nagar</p></div></Reveal>
        </div>
      </section>

      <section id="contact" className="section section-wrap contact-section">
        <Reveal><div className="contact-panel"><div className="contact-glow"/><div className="section-kicker">06 / CONTACT</div><h2>Have an idea?<br/><span>Let&apos;s build it.</span></h2><p>I&apos;m interested in software development opportunities, collaborative projects and conversations about technology.</p>
        
        <a
  className="button button-primary"
  href="https://mail.google.com/mail/?view=cm&fs=1&to=akash.kumar3111.ak@gmail.com&su=Portfolio%20Inquiry"
  target="_blank"
  rel="noreferrer"
>
  Start a conversation <ArrowUpRight size={17}/>
</a>
        
        <div className="contact-foot"><span>AKASH.KUMAR3111.AK@GMAIL.COM · +91 88620 52856</span><span>DELHI NCR, INDIA</span></div></div></Reveal>
      </section>
      <ExperienceMotion />      <footer className="footer section-wrap"><span>© {new Date().getFullYear()} Akash Kumar. Designed & built with curiosity.</span><a href="#home">Back to top ↑</a></footer>
    </main>
  );
}
