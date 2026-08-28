import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useSpring, useTransform } from 'framer-motion';
import {
  ArrowUpRight,
  Mail,
  Zap,
  Terminal,
  Globe,
  MapPin,
  Smartphone,
  Briefcase,
  GraduationCap,
  Award,
  Star,
  CheckCircle2,
  Code2,
  Layers,
  Sparkles,
  ExternalLink,
  Copy,
  Check,
  Cpu,
  Database,
  Server,
  Layout,
  Flame,
  ArrowRight,
  FolderGit2
} from 'lucide-react';
import realPhoto from './assets/notion_hoodie_avatar.jpg';
import anvaImg from './assets/notion_minimal_anva.jpg';
import solargridImg from './assets/notion_minimal_solargrid.jpg';
import fridayImg from './assets/notion_minimal_friday.jpg';
import './App.css';

// Notion-Style Page Loader Component
const NotionPageLoader = ({ onComplete }) => {
  const [progress, setProgress] = useState(20);

  useEffect(() => {
    const t1 = setTimeout(() => setProgress(60), 100);
    const t2 = setTimeout(() => setProgress(90), 250);
    const t3 = setTimeout(() => {
      setProgress(100);
      setTimeout(onComplete, 180);
    }, 480);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, [onComplete]);

  return (
    <motion.div
      className="notion-loader-overlay"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.3, ease: 'easeInOut' } }}
    >
      <div className="notion-top-progress-bar">
        <div className="notion-progress-indicator" style={{ width: `${progress}%` }}></div>
      </div>

      <div className="notion-loader-inner">
        <div className="notion-spinner-wrap">
          <svg className="notion-cube-svg" viewBox="0 0 100 100" fill="currentColor">
            <path d="M19.4 16.5l48.8-6.1c5.8-.7 7.7.9 9.8 4.2l12.4 19.2c1.7 2.7 1.2 5.5-1.9 5.8l-40.4 5c-3.1.4-5.3-1.6-6.8-4.3l-10-17.7c-1.5-2.7-.4-4.8 2.2-5.1l25.8-3.2-31.5 3.9c-2.6.3-4.5 2.1-4.8 4.7l-4.2 46.9c-.4 4.5 1.5 6.9 6.2 6.3l52.6-6.6c4.7-.6 7.4-3.5 7.8-8l3.9-44.1c.3-3.6-1.5-5.9-4.8-5.5l-50 6.2c-3.3.4-5.5-1.5-7-4.2l-8.5-14.7z" />
          </svg>
          <div className="notion-pulsing-dot"></div>
        </div>
        <div className="notion-loader-text">Loading portfolio...</div>
      </div>
    </motion.div>
  );
};

// Social Icon Components
const GithubIcon = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
  </svg>
);

const LinkedinIcon = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

const LeetCodeIcon = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M13.483 0a1.374 1.374 0 0 0-.961.414l-4.593 4.593a1.381 1.381 0 0 0 0 1.954l1.954 1.954a1.381 1.381 0 0 0 1.954 0L14.717 6.04a1.374 1.374 0 0 0 0-1.953l-4.593-4.593l-.641-.493a1.374 1.374 0 0 0-1.02-.274H13.48zM7.332 5.034a1.374 1.374 0 0 0-.961.414L1.778 10.04a1.381 1.381 0 0 0 0 1.954l1.954 1.954a1.381 1.381 0 0 0 1.954 0l4.593-4.593a1.374 1.374 0 0 0 0-1.953L5.686 5.448l-.641-.414a1.374 1.374 0 0 0-.961.414l-.752.752a1.374 1.374 0 0 0 0 1.953l1.954 1.954a1.374 1.374 0 0 0 1.954 0l1.101-1.101L7.332 5.034z" />
    <path d="M16.668 18.966a1.374 1.374 0 0 0 .961-.414l4.593-4.593a1.381 1.381 0 0 0 0-1.954l-1.954-1.954a1.381 1.381 0 0 0-1.954 0l-4.593 4.593a1.374 1.374 0 0 0 0 1.953l1.954 1.506l.641.414a1.374 1.374 0 0 0 .961.414l.752-.752a1.374 1.374 0 0 0 0-1.953l-1.954-1.954a1.381 1.381 0 0 0-1.954 0l-1.101 1.101l1.101 1.101zM10.517 24a1.374 1.374 0 0 0 .961-.414l4.593-4.593a1.381 1.381 0 0 0 0-1.954l-1.954-1.954a1.381 1.381 0 0 0-1.954 0L7.136 19.345a1.374 1.374 0 0 0 0 1.953l4.593 4.593l.641.493a1.374 1.374 0 0 0 1.02.274H10.517z" />
  </svg>
);

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 90, damping: 28, restDelta: 0.0001 });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('ashokgumma20@gmail.com');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const projects = [
    {
      id: "anva",
      title: "ANVA",
      subtitle: "AI-Powered Learning, Video Collaboration & Placement Platform",
      badge: "FEATURED PLATFORM",
      description: "A full-stack learning platform combining AI study tools, an interactive multi-language code compiler, and real-time video/chat collaboration.",
      metrics: [
        { label: "Architecture", val: "Full-Stack MERN + Realtime" },
        { label: "AI Engines", val: "Flashcards & Study AI" },
        { label: "Realtime", val: "Stream Video & Chat" }
      ],
      features: [
        "AI study studio with smart flashcard generation and contextual assistance",
        "Online multi-language code compiler with instant execution",
        "Real-time 1-on-1 and group video calling with screen share (Stream SDK)",
        "Role-Based Access Control (RBAC), moderation dashboard, and analytics"
      ],
      tags: ["React.js", "Node.js", "Express.js", "MongoDB", "Clerk Auth", "Stream SDK", "Tailwind CSS"],
      image: anvaImg,
      liveLink: "https://anva-akzm.onrender.com/",
      githubLink: "https://github.com/Ashok-Gumma/Anva"
    },
    {
      id: "solargrid",
      title: "SolarGrid",
      subtitle: "Solar Operations ERP & CRM Platform",
      badge: "ENTERPRISE ERP",
      description: "An end-to-end ERP & CRM operations system for solar wholesale and installations, managing client pipelines, inventory tracking, delivery challans, and technician dispatches.",
      metrics: [
        { label: "Backend", val: "Node / Express / Postgres" },
        { label: "Security", val: "Role-Based Access (RBAC)" },
        { label: "Pipeline", val: "Lead-to-Installation" }
      ],
      features: [
        "Complete CRM pipeline from lead qualification to final invoice generation",
        "Real-time warehouse inventory management with automated delivery challans",
        "Installation lifecycle management and technician service ticketing",
        "Granular role-based permissions (Admin, Sales, Operations, Field)"
      ],
      tags: ["React / Next.js", "Node.js", "Express.js", "PostgreSQL", "REST APIs", "RBAC", "Tailwind CSS"],
      image: solargridImg,
      liveLink: "https://solar-grid-three.vercel.app/",
      githubLink: "https://github.com/Ashok-Gumma/solarGrid"
    },
    {
      id: "friday",
      title: "FRIDAY",
      subtitle: "Adaptive Contextual AI Assistant",
      badge: "AI APPLICATION",
      description: "An adaptive conversational AI assistant that tailors tone, recommendations, and dialogue flows based on persistent user context and memory.",
      metrics: [
        { label: "Core Focus", val: "Contextual AI & Memory" },
        { label: "Auth", val: "Google OAuth 2.0" },
        { label: "Stack", val: "MERN Stack Architecture" }
      ],
      features: [
        "Context-aware prompt architecture with persistent user session memory",
        "Personalized onboarding with preference and mood tracking",
        "Secure Google OAuth 2.0 authentication and protected API endpoints"
      ],
      tags: ["React.js", "Node.js", "Express.js", "MongoDB", "Google OAuth", "REST APIs"],
      image: fridayImg,
      liveLink: "https://as-you-wish-q2lj.onrender.com/",
      githubLink: "https://github.com/Ashok-Gumma/Friday"
    }
  ];

  const skillCategories = [
    {
      title: "Frontend Engineering",
      icon: <Layout size={18} />,
      skills: ["React.js", "Next.js", "JavaScript (ES6+)", "TypeScript", "Tailwind CSS", "Framer Motion", "Responsive Design"]
    },
    {
      title: "Backend & Systems",
      icon: <Server size={18} />,
      skills: ["Node.js", "Express.js", "RESTful APIs", "JWT Auth", "Clerk Auth", "Google OAuth", "RBAC Architecture"]
    },
    {
      title: "Databases & Storage",
      icon: <Database size={18} />,
      skills: ["PostgreSQL", "MongoDB", "MySQL", "Relational Schema Design", "Query Optimization"]
    },
    {
      title: "Realtime & Workflows",
      icon: <Zap size={18} />,
      skills: ["Stream Video / Chat", "WebSockets / WebRTC", "ERP / CRM Workflows", "Business Automation"]
    },
    {
      title: "DevOps & Tooling",
      icon: <FolderGit2 size={18} />,
      skills: ["Git & GitHub", "Postman", "Vercel", "Render", "AWS (EC2/S3)", "Vite"]
    }
  ];

  const fadeUp = {
    hidden: { opacity: 0, y: 28 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }
  };

  return (
    <div className="portfolio-root">
      {/* Notion Page Loader */}
      <AnimatePresence>
        {isLoading && <NotionPageLoader onComplete={() => setIsLoading(false)} />}
      </AnimatePresence>

      {/* Top Scroll Indicator */}
      <motion.div className="top-scroll-line" style={{ scaleX }} />

      {/* Modern Sticky Navigation */}
      <header className="site-header">
        <div className="nav-container">
          <a href="#hero" className="nav-brand">
            <div className="nav-avatar-wrap">
              <img src={realPhoto} alt="Ashok Shankar Gumma" />
            </div>
            <div className="nav-brand-text">
              <span className="brand-name">Ashok Shankar Gumma</span>
              <span className="brand-role">Full-Stack & AI Developer</span>
            </div>
          </a>

          <nav className="nav-menu">
            <a href="#projects" className="nav-link">Projects</a>
            <a href="#skills" className="nav-link">Skills</a>
            <a href="#experience" className="nav-link">Experience</a>
            <a href="#about" className="nav-link">About</a>
            <a href="#contact" className="nav-cta-btn">
              Get in touch <ArrowUpRight size={14} />
            </a>
          </nav>
        </div>
      </header>

      <main>
        {/* =========================================================
            1. HERO SECTION (High-Impact Recruiter First Impression)
            ========================================================= */}
        <section id="hero" className="hero-section">
          <div className="main-container">
            <div className="hero-content">
              {/* Availability Badge */}
              <motion.div
                className="availability-pill"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <span className="pulse-dot"></span>
                <span>Available for Full-Stack & Software Engineering Roles</span>
              </motion.div>

              {/* Greeting Tag */}
              <motion.div
                className="hero-greeting"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.05 }}
              >
                <span>Hey, I'm Ashok Shankar Gumma</span>
              </motion.div>

              {/* Main Headline */}
              <motion.h1
                className="hero-headline"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1 }}
              >
                Full-Stack Developer building modern web apps, scalable backends & AI tools.
              </motion.h1>

              {/* Bio Summary */}
              <motion.p
                className="hero-description"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
              >
                B.Tech CSE (AI) student with hands-on experience architecting full-stack platforms like <strong>ANVA</strong> & <strong>SolarGrid</strong>. Passionate about clean code, intuitive UI design, and production-grade systems.
              </motion.p>

              {/* Quick Action CTAs */}
              <motion.div
                className="hero-actions-row"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.3 }}
              >
                <a href="#projects" className="btn-primary">
                  Explore Projects <ArrowRight size={16} />
                </a>
                <a href="https://github.com/Ashok-Gumma" target="_blank" rel="noreferrer" className="btn-secondary">
                  <GithubIcon size={16} /> GitHub Profile
                </a>
                <a href="#contact" className="btn-subtle">
                  <Mail size={16} /> Contact Me
                </a>
              </motion.div>

              {/* Recruiter Quick Metrics Bento */}
              <motion.div
                className="hero-metrics-grid"
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <div className="metric-card">
                  <div className="metric-icon-wrap"><Layers size={18} /></div>
                  <div className="metric-info">
                    <span className="metric-title">3+ Full-Stack Apps</span>
                    <span className="metric-sub">ANVA, SolarGrid, FRIDAY</span>
                  </div>
                </div>

                <div className="metric-card">
                  <div className="metric-icon-wrap"><Cpu size={18} /></div>
                  <div className="metric-info">
                    <span className="metric-title">Full-Stack Architecture</span>
                    <span className="metric-sub">React, Next.js, Node, PostgreSQL</span>
                  </div>
                </div>

                <div className="metric-card">
                  <div className="metric-icon-wrap"><Briefcase size={18} /></div>
                  <div className="metric-info">
                    <span className="metric-title">Work Experience</span>
                    <span className="metric-sub">Full Stack Intern @ Zetheta</span>
                  </div>
                </div>

                <div className="metric-card">
                  <div className="metric-icon-wrap"><GraduationCap size={18} /></div>
                  <div className="metric-info">
                    <span className="metric-title">Parul University</span>
                    <span className="metric-sub">B.Tech CSE (AI) • 2023 — 2027</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* =========================================================
            2. FEATURED PROJECTS SECTION (Direct Visual Proof)
            ========================================================= */}
        <section id="projects" className="section-block bg-subtle">
          <div className="main-container">
            <div className="section-header">
              <div className="section-tag-pill">PORTFOLIO WORK</div>
              <h2 className="section-title">Featured Systems & Applications</h2>
              <p className="section-desc">
                Production-ready full-stack applications engineered to automate business workflows, facilitate real-time collaboration, and provide intelligent user experiences.
              </p>
            </div>

            <div className="projects-stack">
              {projects.map((project, idx) => (
                <motion.article
                  key={project.id}
                  className="project-showcase-card"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  variants={fadeUp}
                >
                  <div className="project-preview-side">
                    <div className="project-img-wrapper">
                      <img src={project.image} alt={project.title} loading="lazy" />
                    </div>
                  </div>

                  <div className="project-detail-side">
                    <div className="project-header-top">
                      <span className="project-category-badge">{project.badge}</span>
                      <span className="project-index">0{idx + 1}</span>
                    </div>

                    <h3 className="project-name">{project.title}</h3>
                    <p className="project-tagline-text">{project.subtitle}</p>
                    <p className="project-body-desc">{project.description}</p>

                    {/* Highlights Checklist */}
                    <div className="project-highlights-box">
                      {project.features.map((feat, fIdx) => (
                        <div key={fIdx} className="highlight-row">
                          <CheckCircle2 size={15} className="highlight-icon" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>

                    {/* Tech Stack Pills */}
                    <div className="project-tags-wrap">
                      {project.tags.map(t => (
                        <span key={t} className="tech-badge">{t}</span>
                      ))}
                    </div>

                    {/* Action Links */}
                    <div className="project-buttons-row">
                      <a href={project.liveLink} target="_blank" rel="noreferrer" className="btn-project-live">
                        Live Demo <ExternalLink size={14} />
                      </a>
                      <a href={project.githubLink} target="_blank" rel="noreferrer" className="btn-project-code">
                        <GithubIcon size={14} /> View Code
                      </a>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* =========================================================
            3. TECHNICAL SKILLS & STACK MATRIX
            ========================================================= */}
        <section id="skills" className="section-block">
          <div className="main-container">
            <div className="section-header">
              <div className="section-tag-pill">TECHNICAL EXPERTISE</div>
              <h2 className="section-title">Core Skills & Architecture Matrix</h2>
              <p className="section-desc">
                Technologies, frameworks, and system design principles utilized in building scalable client-side and server-side applications.
              </p>
            </div>

            <div className="skills-bento-grid">
              {skillCategories.map((cat, cIdx) => (
                <motion.div
                  key={cIdx}
                  className="skill-category-card"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  variants={fadeUp}
                >
                  <div className="skill-card-head">
                    <div className="skill-icon-box">{cat.icon}</div>
                    <h3 className="skill-group-title">{cat.title}</h3>
                  </div>
                  <div className="skill-pills-list">
                    {cat.skills.map(s => (
                      <span key={s} className="matrix-pill">{s}</span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* =========================================================
            4. EXPERIENCE, TRAINING & EDUCATION
            ========================================================= */}
        <section id="experience" className="section-block bg-subtle">
          <div className="main-container">
            <div className="section-header">
              <div className="section-tag-pill">CAREER & TRACK RECORD</div>
              <h2 className="section-title">Experience & Education</h2>
              <p className="section-desc">
                Internship experience, technical training, and academic background.
              </p>
            </div>

            <div className="experience-bento-grid">
              {/* WORK EXPERIENCE */}
              <motion.div
                className="timeline-bento-card"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={fadeUp}
              >
                <div className="card-top-icon">
                  <Briefcase size={20} />
                  <span className="card-section-label">INTERNSHIPS & WORK</span>
                </div>

                <div className="timeline-entry">
                  <div className="entry-header">
                    <div>
                      <h4 className="entry-role">Full Stack Engineer Intern</h4>
                      <p className="entry-org">Zetheta Algorithms Private Limited (Remote)</p>
                    </div>
                    <span className="status-tag">JUL 2026 — AUG 2026</span>
                  </div>
                  <p className="entry-desc">
                    Developed a responsive multi-step Loan Application platform using reusable React components, robust client-side validation, and smooth multi-step workflows.
                  </p>
                </div>

                <div className="timeline-entry">
                  <div className="entry-header">
                    <div>
                      <h4 className="entry-role">Web Development Trainee</h4>
                      <p className="entry-org">Corizo (Remote)</p>
                    </div>
                    <span className="status-tag">MAY 2025 — JUN 2025</span>
                  </div>
                  <p className="entry-desc">
                    Completed comprehensive training covering MERN stack development, REST API engineering, secure authentication, and responsive interfaces.
                  </p>
                </div>
              </motion.div>

              {/* TECHNICAL TRAINING & WORKSHOPS */}
              <motion.div
                className="timeline-bento-card"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={fadeUp}
              >
                <div className="card-top-icon">
                  <Sparkles size={20} />
                  <span className="card-section-label">TRAINING & WORKSHOPS</span>
                </div>

                <div className="timeline-entry">
                  <div className="entry-header">
                    <div>
                      <h4 className="entry-role">Full Stack Web Dev Workshop</h4>
                      <p className="entry-org">Parul University Projections</p>
                    </div>
                    <span className="status-tag">FEB 2026</span>
                  </div>
                  <p className="entry-desc">
                    Hands-on workshop covering modern full-stack web architectural patterns, responsive components, and frontend-backend integration.
                  </p>
                </div>

                <div className="timeline-entry">
                  <div className="entry-header">
                    <div>
                      <h4 className="entry-role">DSA & System Fundamentals</h4>
                      <p className="entry-org">LeetCode & Problem Solving</p>
                    </div>
                    <span className="status-tag">CONTINUOUS</span>
                  </div>
                  <p className="entry-desc">
                    Regular practice solving Data Structures & Algorithms challenges with a focus on optimal time-complexity and clean code.
                  </p>
                </div>
              </motion.div>

              {/* EDUCATION */}
              <motion.div
                className="timeline-bento-card full-span"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={fadeUp}
              >
                <div className="card-top-icon">
                  <GraduationCap size={20} />
                  <span className="card-section-label">EDUCATION</span>
                </div>

                <div className="education-row">
                  <div>
                    <h4 className="entry-role">B.Tech in Computer Science & Engineering (Artificial Intelligence)</h4>
                    <p className="entry-org">Parul University • Vadodara, Gujarat</p>
                  </div>
                  <div className="edu-badge-box">
                    <span className="edu-cgpa">CGPA: 7.47</span>
                    <span className="edu-years">2023 — 2027</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* =========================================================
            5. ABOUT ME & ENGINEERING PHILOSOPHY
            ========================================================= */}
        <section id="about" className="section-block">
          <div className="main-container">
            <div className="about-bento-container">
              <motion.div
                className="about-bio-side"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={fadeUp}
              >
                <div className="section-tag-pill">ENGINEER PROFILE</div>
                <h2 className="about-title">Full-stack developer focused on clean architecture & execution.</h2>
                <p className="about-paragraph">
                  I specialize in building end-to-end web applications, scalable backend APIs, and modern user interfaces. From architecting PostgreSQL schemas for business workflows to integrating real-time collaboration engines, I focus on performance, reliability, and clean code.
                </p>
                <p className="about-paragraph">
                  Passionate about solving real-world challenges, building production-ready software, and continuous problem-solving on LeetCode.
                </p>

                <div className="about-specs-grid">
                  <div className="spec-box">
                    <span className="spec-label">Primary Stack</span>
                    <span className="spec-val">React, Node, Express, PostgreSQL, MongoDB</span>
                  </div>
                  <div className="spec-box">
                    <span className="spec-label">Core Domains</span>
                    <span className="spec-val">ERP/CRM Systems, Real-time Apps, AI Platforms</span>
                  </div>
                  <div className="spec-box">
                    <span className="spec-label">Location</span>
                    <span className="spec-val">Markapur, Andhra Pradesh, India</span>
                  </div>
                  <div className="spec-box">
                    <span className="spec-label">Status</span>
                    <span className="spec-val">🟢 Open to Full-Stack / SDE roles</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* =========================================================
            6. CONTACT & CONNECT FOOTER
            ========================================================= */}
        <footer id="contact" className="site-footer">
          <div className="main-container">
            <div className="footer-cta-box">
              <span className="footer-small-tag">LET'S CONNECT</span>
              <h2 className="footer-headline">Ready to build something impactful together?</h2>
              <p className="footer-subtext">
                Whether you have an open engineering role, a platform to build, or want to discuss full-stack & AI architecture, feel free to connect with me.
              </p>

              {/* Primary Connect Actions */}
              <div className="footer-primary-actions">
                <a href="https://linkedin.com/in/ashok-gumma1" target="_blank" rel="noreferrer" className="btn-primary-connect">
                  <LinkedinIcon size={16} /> Connect on LinkedIn
                </a>
                <a href="https://github.com/Ashok-Gumma" target="_blank" rel="noreferrer" className="btn-secondary-connect">
                  <GithubIcon size={16} /> View GitHub Repositories
                </a>
              </div>

              {/* Contact / Social Links */}
              <div className="footer-social-row">
                <a href="https://github.com/Ashok-Gumma" target="_blank" rel="noreferrer" className="social-pill-btn">
                  <GithubIcon size={16} /> GitHub
                </a>
                <a href="https://linkedin.com/in/ashok-gumma1" target="_blank" rel="noreferrer" className="social-pill-btn">
                  <LinkedinIcon size={16} /> LinkedIn
                </a>
                <a href="https://leetcode.com/u/gummaashok/" target="_blank" rel="noreferrer" className="social-pill-btn">
                  <LeetCodeIcon size={16} /> LeetCode
                </a>
                <span className="footer-pill-link static">
                  <MapPin size={14} /> Andhra Pradesh, India
                </span>
              </div>

              {/* Footer Copyright */}
              <div className="footer-copyright-row">
                <span>© {new Date().getFullYear()} Ashok Shankar Gumma. Built with React & Vite.</span>
                <span>Full-Stack & AI Systems Developer</span>
              </div>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default App;