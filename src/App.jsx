import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion';
import Lenis from 'lenis';
import {
  ArrowUpRight,
  Mail,
  Zap,
  MapPin,
  Briefcase,
  GraduationCap,
  Layers,
  Sparkles,
  ExternalLink,
  Copy,
  Check,
  Cpu,
  Database,
  Server,
  Layout,
  FolderGit2,
  X,
  Code2,
  Terminal,
  Globe
} from 'lucide-react';

import ashokPortrait from './assets/ashok_portrait_main.jpg';
import ashokRecliningHero from './assets/ashok_reclining_sticker_hero.jpg';
import ashokPolaroidCoding from './assets/ashok_polaroid_coding_desk.jpg';
import ashokPolaroidSketching from './assets/ashok_polaroid_sketching.jpg';
import ashokPolaroidFloor from './assets/ashok_polaroid_floor_headphones.jpg';
import ashokResearchFloor from './assets/ashok_research_papers_floor.jpg';
import adobeCertificate from './assets/adobe_hackathon_certificate.png';
import zethetaCertificate from './assets/zetheta_internship_certificate.png';
import corizoCertificate from './assets/corizo_training_certificate.png';
import parulWorkshopCertificate from './assets/parul_workshop_certificate.png';
import anvaImg from './assets/anva.png';
import solargridImg from './assets/solargrid.jpg';
import fridayImg from './assets/friday.png';
import './App.css';

// SVG Social Icons
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

// Motion animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.09,
      delayChildren: 0.1
    }
  }
};

const popIn = {
  hidden: { opacity: 0, scale: 0.9, y: 16 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { type: 'spring', damping: 20, stiffness: 260 }
  }
};

const App = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [showHireWidget, setShowHireWidget] = useState(true);
  const [activeLightbox, setActiveLightbox] = useState(null);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 32, restDelta: 0.001 });

  // Initialize buttery smooth momentum scrolling with Lenis
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      smoothTouch: false,
      wheelMultiplier: 1.05,
    });

    let animationFrameId;
    function raf(time) {
      lenis.raf(time);
      animationFrameId = requestAnimationFrame(raf);
    }
    animationFrameId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(animationFrameId);
      lenis.destroy();
    };
  }, []);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('ashokgumma20@gmail.com');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2400);
  };

  const projects = [
    {
      id: "anva",
      number: "Project 01 / Placement Arena, AI & Real-time Platform",
      themeClass: "theme-emerald",
      title: "ANVA",
      subtitle: "Where Global Fluency Meets Technical Mastery • Company Placement & Coding Suite",
      description: "An integrated career and technical mastery platform uniting native language exchange, 24/7 AI tutoring, company placement preparation, and in-browser coding. Features an interactive Placement Arena (aptitude MCQs, Monaco code editor, TCS NQT recruitment tracks), Pomodoro focus timer, AI-generated flashcards, and real-time WebRTC audio/video calling via Stream SDK.",
      tools: ["React.js", "Node.js", "Express.js", "MongoDB", "Placement Arena", "Mock Tests", "Pomodoro Focus", "Stream SDK", "Clerk Auth", "Monaco Editor"],
      reviewTitle: "Placement & Coding Suite",
      reviewRating: "★★★★★",
      reviewText: "Engineered MNC company-specific aptitude & coding mock test modules, Pomodoro productivity flow, and sub-second multi-language code compilation with real-time WebRTC video calling.",
      palette: ["#09231B", "#22C55E", "#0F172A", "#FFFFFF"],
      image: anvaImg,
      liveLink: "https://anva-akzm.onrender.com/",
      githubLink: "https://github.com/Ashok-Gumma/Anva",
      urlLabel: "https://anva.app/workspace"
    },
    {
      id: "solargrid",
      number: "Project 02 / Solar Operations ERP & CRM",
      themeClass: "theme-terracotta",
      title: "SolarGrid",
      subtitle: "Real Hope. Real Light. Powered by SolarGrid ERP.",
      description: "A mission-critical enterprise operations and CRM platform simplifying solar distribution for rural homes (PM Surya Ghar), village kitchens (Clean Stoves), and agricultural pump installations (PM-KUSUM Irrigation) across developing India. Features warehouse inventory tracking, automated delivery challans, and technician field service dispatching with granular RBAC.",
      tools: ["React / Next.js", "Node.js", "Express.js", "PostgreSQL", "RBAC", "REST APIs", "Challan Automation"],
      reviewTitle: "Enterprise Architecture",
      reviewRating: "★★★★★",
      reviewText: "Engineered scalable PostgreSQL relational schemas for inventory tracking, automated delivery challan workflows, and technician service ticketing.",
      palette: ["#221813", "#F97316", "#1E293B", "#F8FAFC"],
      image: solargridImg,
      liveLink: "https://solar-grid-three.vercel.app/",
      githubLink: "https://github.com/Ashok-Gumma/solarGrid",
      urlLabel: "solargrid.erp.app"
    },
    {
      id: "friday",
      number: "Project 03 / Hybrid AI Mindful Companion",
      themeClass: "theme-cyber",
      title: "FRIDAY",
      subtitle: "A Quiet Sanctuary for Your Thoughts and Feelings (Mindful Emotional Companion)",
      description: "An adaptive conversational intelligence system engineered with a hybrid architecture combining custom-trained Machine Learning models on manual datasets (intent classification & emotional resonance) with Generative LLMs for deep multi-turn reasoning, daily stillness reflections, and persistent memory tracking, secured with Google OAuth 2.0.",
      tools: ["React.js", "Node.js", "Express.js", "Hybrid ML Models", "Generative LLM", "Manual Datasets", "MongoDB", "Google OAuth 2.0"],
      reviewTitle: "Hybrid ML + LLM Intelligence",
      reviewRating: "★★★★★",
      reviewText: "Combined custom ML classifiers trained on curated manual datasets with high-performance Generative LLMs for contextual intent routing and persistent user memory.",
      palette: ["#0E1726", "#38BDF8", "#1E293B", "#FFFFFF"],
      image: fridayImg,
      liveLink: "https://as-you-wish-q2lj.onrender.com/",
      githubLink: "https://github.com/Ashok-Gumma/Friday",
      urlLabel: "friday.mindful.ai"
    }
  ];

  const skillMatrix = [
    {
      category: "Frontend Engineering",
      icon: <Layout size={18} />,
      skills: ["React.js", "Next.js", "JavaScript (ES6+)", "TypeScript", "Tailwind CSS", "Framer Motion", "Responsive Layouts"]
    },
    {
      category: "Backend & Systems",
      icon: <Server size={18} />,
      skills: ["Node.js", "Express.js", "RESTful APIs", "JWT Auth", "Clerk Auth", "Google OAuth 2.0", "RBAC Security"]
    },
    {
      category: "Databases & Storage",
      icon: <Database size={18} />,
      skills: ["PostgreSQL", "MongoDB", "MySQL", "Relational Schema Design", "Query Optimization", "Prisma / Mongoose"]
    },
    {
      category: "DevOps & Cloud (Active Focus)",
      icon: <Terminal size={18} />,
      skills: ["Docker & Containers", "Kubernetes Basics", "CI/CD Pipelines", "Linux / Bash", "Nginx", "Git & GitHub Actions", "Cloud Deployments"]
    },
    {
      category: "AI & Hybrid Machine Learning",
      icon: <Cpu size={18} />,
      skills: ["Hybrid ML Models", "Generative LLMs", "Manual Dataset Training", "Contextual Prompting", "Stream Video / Chat SDK", "WebSockets"]
    },
    {
      category: "Problem Solving & Core",
      icon: <Code2 size={18} />,
      skills: ["Data Structures & Algorithms", "LeetCode Problem Solving", "MNC Placement Preparation", "System Architecture"]
    }
  ];

  return (
    <div className="portfolio-root graph-paper-bg">
      {/* Top Scroll Indicator Line */}
      <motion.div className="top-scroll-line" style={{ scaleX }} />

      {/* =========================================================
          STICKY STUDIO NAVIGATION BAR
          ========================================================= */}
      <header className="site-header">
        <div className="main-container">
          <div className="nav-container">
            <a href="#hero" className="nav-brand">
              <div className="nav-monogram">AG</div>
              <div className="nav-brand-text">
                <span className="brand-name">Ashok Shankar Gumma</span>
                <span className="brand-role">Full-Stack & DevOps Learner [2026]</span>
              </div>
            </a>

            <nav className="nav-menu">
              <a href="#about" className="nav-link">Overview</a>
              <a href="#projects" className="nav-link">Selected Works</a>
              <a href="#skills" className="nav-link">Stack Matrix</a>
              <a href="#experience" className="nav-link">Journey</a>
              
              <div className="nav-availability-badge">
                <span className="pulse-circle"></span>
                <span>OPEN FOR ROLES</span>
              </div>

              <a href="#contact" className="nav-cta-btn">
                Let's Talk <ArrowUpRight size={14} />
              </a>
            </nav>
          </div>
        </div>
      </header>

      <main>
        {/* =========================================================
            1. HERO & STUDIO SHEET SECTION (KEVIN LUNA BEHANCE 2026 STYLE)
            ========================================================= */}
        <section id="hero" className="hero-sheet-section">
          <div className="main-container">
            <motion.div
              className="studio-canvas-card"
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
            >
              {/* Technical Canvas Corners */}
              <div className="technical-corner tc-top-left"></div>
              <div className="technical-corner tc-top-right"></div>
              <div className="technical-corner tc-bottom-left"></div>
              <div className="technical-corner tc-bottom-right"></div>

              {/* Slanted Stamp Stickers Row */}
              <motion.div className="stamp-stickers-row" variants={fadeInUp}>
                <motion.div className="stamp-sticker slanted-left" whileHover={{ scale: 1.08, rotate: 0 }} whileTap={{ scale: 0.95 }}>
                  <MapPin size={13} />
                  <span>ANDHRA PRADESH, INDIA</span>
                </motion.div>
                <motion.div className="stamp-sticker slanted-right green-status" whileHover={{ scale: 1.08, rotate: 0 }} whileTap={{ scale: 0.95 }}>
                  <span className="pulse-circle"></span>
                  <span>AVAILABLE FOR FULL-STACK / SDE ROLES</span>
                </motion.div>
                <motion.div className="stamp-sticker red-accent slanted-left" whileHover={{ scale: 1.08, rotate: 0 }} whileTap={{ scale: 0.95 }}>
                  <span> PORTFOLIO EDITION</span>
                </motion.div>
                <motion.div className="stamp-sticker slanted-right" whileHover={{ scale: 1.08, rotate: 0 }} whileTap={{ scale: 0.95 }}>
                  <span>B.TECH CSE (AI)</span>
                </motion.div>
              </motion.div>

              {/* Top Row: Cutout Avatar with Red Sticker Silhouette + Vector Bounding Box */}
              <div className="hero-top-row">
                {/* Profile Portrait with Red Offset Contour */}
                <motion.div
                  className="cutout-avatar-wrapper"
                  variants={popIn}
                  whileHover={{ scale: 1.03, rotate: [-0.5, 0.5, 0], transition: { duration: 0.3 } }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => setActiveLightbox({
                    img: ashokPortrait,
                    title: "Ashok Shankar Gumma — Studio Portrait",
                    tag: "STUDIO PROFILE • 2026",
                    caption: "Full-Stack Developer & AI Systems Specialist. B.Tech CSE (AI) at Parul University."
                  })}
                  title="Click to expand portrait"
                >
                  <div className="sticker-contour-shadow"></div>
                  <div className="cutout-avatar-frame">
                    <div className="avatar-hud-viewfinder">RAW • 50MM • ISO 100</div>
                    <img src={ashokPortrait} alt="Ashok Shankar Gumma" className="cutout-avatar-img" />
                  </div>
                </motion.div>

                {/* Vector Selection Bounding Box */}
                <motion.div className="transform-bounding-box" variants={fadeInUp}>
                  {/* Figma / Illustrator Anchor Handles */}
                  <div className="anchor-handle ah-tl"></div>
                  <div className="anchor-handle ah-tr"></div>
                  <div className="anchor-handle ah-bl"></div>
                  <div className="anchor-handle ah-br"></div>
                  <div className="anchor-handle ah-tm"></div>
                  <div className="anchor-handle ah-bm"></div>
                  <div className="anchor-handle ah-lm"></div>
                  <div className="anchor-handle ah-rm"></div>
                  <div className="dimension-badge">W: 100% • H: AUTO</div>

                  <h1 className="studio-greeting-title">
                    Hey! I'm <span className="highlight-accent">Ashok</span> <span className="highlight-serif">Shankar Gumma</span>
                  </h1>

                  <p className="studio-greeting-sub">
                    Full-Stack Developer building modern web applications, scalable backend systems, and AI platforms. Architecting platforms like <strong>ANVA</strong> & <strong>SolarGrid</strong> with clean code, intuitive UI design, and production reliability.
                  </p>
                </motion.div>
              </div>

              {/* 4-COLUMN EDITORIAL STUDIO BREAKDOWN GRID */}
              <motion.div id="about" className="studio-4col-grid" variants={staggerContainer}>
                {/* Column 1: Bio / Story */}
                <motion.div className="studio-col" variants={fadeInUp}>
                  <div className="col-header-tag">
                    <span className="col-title">About Me</span>
                    <span className="col-lang-switch">PROFILE</span>
                  </div>
                  <p className="bio-editorial-text">
                    Whether it's in my workspace or late night coding sessions, I am always designing or engineering scalable systems. I love to <strong>architect clean databases, write robust backend APIs, and build sleek interactive web apps</strong>.
                  </p>
                  <p className="bio-editorial-text">
                    Full-Stack Engineer & AI specialist. Currently focused on building production-ready web platforms, exploring cloud architecture, and regular problem solving on LeetCode.
                  </p>
                  <motion.div className="bio-status-card" whileHover={{ scale: 1.02 }}>
                    <span className="pulse-circle"></span>
                    <span>Available for SDE / Full-Stack</span>
                  </motion.div>
                </motion.div>

                {/* Column 2: Experience (Career Milestones) */}
                <motion.div className="studio-col" variants={fadeInUp}>
                  <div className="col-header-tag">
                    <span className="col-title">Experience</span>
                    <span className="col-lang-switch">CAREER</span>
                  </div>

                  <div className="experience-item">
                    <span className="exp-year-badge">AUG 2026 • ADOBE</span>
                    <h4 className="exp-company-title">Adobe University Hackathon</h4>
                    <p className="exp-role-sub">
                      Participated in the nationwide Adobe hackathon organised by Adobe & Unstop.
                    </p>
                  </div>

                  <div className="experience-item">
                    <span className="exp-year-badge">2026 • ZETHETA ALGORITHMS</span>
                    <h4 className="exp-company-title">Full Stack Engineer Intern</h4>
                    <p className="exp-role-sub">
                      Engineered multi-step Loan Application platform with reusable React components, robust validation, and fluid UX workflows.
                    </p>
                    <p className="exp-clients-list">
                      React.js • Node.js • Validation • Production UX
                    </p>
                  </div>

                  <div className="experience-item">
                    <span className="exp-year-badge">2025 • CORIZO</span>
                    <h4 className="exp-company-title">Web Development Trainee</h4>
                    <p className="exp-role-sub">
                      Completed intensive training on MERN architecture, secure auth patterns, and REST API optimization.
                    </p>
                  </div>
                </motion.div>

                {/* Column 3: Education & Focus Areas */}
                <motion.div className="studio-col" variants={fadeInUp}>
                  <div className="col-header-tag">
                    <span className="col-title">Education & Focus</span>
                    <span className="col-lang-switch">ACADEMICS</span>
                  </div>

                  <div className="education-box">
                    <span className="edu-year-tag">2023 — 2027</span>
                    <h4 className="edu-degree-title">B.Tech CSE (Artificial Intelligence)</h4>
                    <p className="edu-institute">Parul University • Vadodara, Gujarat</p>
                    <span className="edu-cgpa-pill">CGPA: 7.47</span>
                  </div>

                  <ul className="focus-list">
                    <motion.li className="focus-item" whileHover={{ x: 5 }}>
                      <span className="focus-arrow">▶</span> DevOps & Cloud (Active Focus)
                    </motion.li>
                    <motion.li className="focus-item" whileHover={{ x: 5 }}>
                      <span className="focus-arrow">▶</span> Full-Stack Platforms (MERN/Next)
                    </motion.li>
                    <motion.li className="focus-item" whileHover={{ x: 5 }}>
                      <span className="focus-arrow">▶</span> Placement Engines & Mock Tests
                    </motion.li>
                    <motion.li className="focus-item" whileHover={{ x: 5 }}>
                      <span className="focus-arrow">▶</span> Hybrid ML + LLM Architectures
                    </motion.li>
                  </ul>
                </motion.div>

                {/* Column 4: Tech Stack (Tools / Badges) */}
                <motion.div className="studio-col" variants={fadeInUp}>
                  <div className="col-header-tag">
                    <span className="col-title">Tech Stack</span>
                    <span className="col-lang-switch">TOOLS</span>
                  </div>

                  <div className="tools-app-grid">
                    <motion.div className="tool-app-badge react-badge" title="React.js" whileHover={{ y: -6, scale: 1.15 }} whileTap={{ scale: 0.9 }}>
                      <span>⚛</span>
                      <small>React</small>
                    </motion.div>
                    <motion.div className="tool-app-badge node-badge" title="Node.js" whileHover={{ y: -6, scale: 1.15 }} whileTap={{ scale: 0.9 }}>
                      <span>⚡</span>
                      <small>Node</small>
                    </motion.div>
                    <motion.div className="tool-app-badge pg-badge" title="PostgreSQL" whileHover={{ y: -6, scale: 1.15 }} whileTap={{ scale: 0.9 }}>
                      <span>🐘</span>
                      <small>Postgres</small>
                    </motion.div>
                    <motion.div className="tool-app-badge figma-badge" title="Docker (DevOps)" whileHover={{ y: -6, scale: 1.15 }} whileTap={{ scale: 0.9 }}>
                      <span>🐳</span>
                      <small>Docker</small>
                    </motion.div>
                    <motion.div className="tool-app-badge py-badge" title="Linux & Bash" whileHover={{ y: -6, scale: 1.15 }} whileTap={{ scale: 0.9 }}>
                      <span>🐧</span>
                      <small>Linux</small>
                    </motion.div>
                    <motion.div className="tool-app-badge ps-badge" title="MongoDB" whileHover={{ y: -6, scale: 1.15 }} whileTap={{ scale: 0.9 }}>
                      <span>🍃</span>
                      <small>Mongo</small>
                    </motion.div>
                    <motion.div className="tool-app-badge ai-badge" title="Tailwind CSS" whileHover={{ y: -6, scale: 1.15 }} whileTap={{ scale: 0.9 }}>
                      <span>🎨</span>
                      <small>Tailwind</small>
                    </motion.div>
                    <motion.div className="tool-app-badge ae-badge" title="Git & GitHub" whileHover={{ y: -6, scale: 1.15 }} whileTap={{ scale: 0.9 }}>
                      <span>🐙</span>
                      <small>Git</small>
                    </motion.div>
                  </div>

                  <p className="tools-footer-text">
                    Production stack spanning modern client interfaces, scalable APIs, database modeling, and active DevOps containerization.
                  </p>
                </motion.div>
              </motion.div>

              {/* EDITORIAL SNAPSHOTS & STORY POLAROIDS (BEHANCE STYLE) */}
              <motion.div
                className="editorial-snapshots-row"
                variants={staggerContainer}
                initial="hidden"
                animate="visible"
              >
                <motion.div
                  className="polaroid-card tilt-left"
                  variants={popIn}
                  whileHover={{ scale: 1.05, y: -10, rotate: 0, transition: { type: "spring", stiffness: 350, damping: 18 } }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => setActiveLightbox({
                    img: ashokPolaroidFloor,
                    title: "Late-Night Flow & Creative Sound — <3",
                    tag: "FOCUS • 2026",
                    caption: "Late night deep focus, reading system documentation and hardware flow."
                  })}
                  title="Click to view full photo"
                >
                  <div className="washi-tape green-tape"></div>
                  <div className="polaroid-img-wrapper">
                    
                    <img src={ashokPolaroidFloor} alt="Ashok Creative Focus" loading="lazy" />
                  </div>
                  <div className="polaroid-caption-block">
                    <span className="polaroid-tag-label">FOCUS • &lt;3</span>
                    <h4 className="polaroid-title">Late-Night Flow</h4>
                    <p className="polaroid-sub">Ambient deep focus, reading architecture & hardware flow.</p>
                  </div>
                </motion.div>

                <motion.div
                  className="polaroid-card tilt-subtle"
                  variants={popIn}
                  whileHover={{ scale: 1.05, y: -10, rotate: 0, transition: { type: "spring", stiffness: 350, damping: 18 } }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => setActiveLightbox({
                    img: ashokPolaroidSketching,
                    title: "System Design & Schemas — Ashok",
                    tag: "ARCHITECTURE • ASHOK",
                    caption: "Sketching database schemas, API contracts, and user journey flowcharts."
                  })}
                  title="Click to view full photo"
                >
                  <div className="washi-tape red-tape"></div>
                  <div className="polaroid-img-wrapper">
                    
                    <img src={ashokPolaroidSketching} alt="Ashok System Architecture Sketching" loading="lazy" />
                  </div>
                  <div className="polaroid-caption-block">
                    <span className="polaroid-tag-label">ARCHITECTURE • ASHOK</span>
                    <h4 className="polaroid-title">System Schemas</h4>
                    <p className="polaroid-sub">Mapping database models, state machines & REST flowcharts.</p>
                  </div>
                </motion.div>

                <motion.div
                  className="polaroid-card tilt-right"
                  variants={popIn}
                  whileHover={{ scale: 1.05, y: -10, rotate: 0, transition: { type: "spring", stiffness: 350, damping: 18 } }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => setActiveLightbox({
                    img: ashokResearchFloor,
                    title: "Deep Research & Problem Solving",
                    tag: "RESEARCH • ARCHIVE",
                    caption: "Unravelling complex problem domains, algorithmic design, and architecture papers."
                  })}
                  title="Click to view full photo"
                >
                  <div className="washi-tape blue-tape"></div>
                  <div className="polaroid-img-wrapper">
                    
                    <img src={ashokResearchFloor} alt="Deep Research & Problem Solving" loading="lazy" />
                  </div>
                  <div className="polaroid-caption-block">
                    <span className="polaroid-tag-label">RESEARCH • ARCHIVE</span>
                    <h4 className="polaroid-title">Deep Research</h4>
                    <p className="polaroid-sub">Analyzing system documentation, algorithmic papers & schemas.</p>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* =========================================================
            2. DARK STUDIO TRANSITION BANNER (BEHANCE 2026 DEVELOPER HERO)
            ========================================================= */}
        <motion.section
          className="dark-technical-bg studio-break-banner"
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Technical Corner Crosshairs */}
          <div className="technical-corner tc-top-left"></div>
          <div className="technical-corner tc-top-right"></div>
          <div className="technical-corner tc-bottom-left"></div>
          <div className="technical-corner tc-bottom-right"></div>

          <div className="main-container">
            <div className="studio-break-layout">
              {/* Left Typography & Discipline Details */}
              <div className="banner-left-typography">
                <span className="banner-badge-tag">FULL-STACK & AI SYSTEMS ARCHITECT</span>
                <h2 className="banner-headline-text">
                  Systems <span className="highlight-serif">Architecture</span> & Real-Time Engines
                </h2>
                <p className="banner-subtext">
                  Bridging intuitive modern user interfaces with resilient backend infrastructure. From high-speed PostgreSQL relational design to AI contextual prompt architectures.
                </p>
                <div className="banner-action-pills">
                  <span className="banner-pill">⚡ MERN & Next.js</span>
                  <span className="banner-pill">🐘 PostgreSQL / Prisma</span>
                  <span className="banner-pill">🤖 Contextual AI / LLMs</span>
                  <span className="banner-pill">🎥 Stream Video & WebRTC</span>
                </div>
              </div>

              {/* Right Hero Visual: Coding Workspace */}
              <motion.div
                className="banner-reclining-cutout-wrap"
                whileHover={{ scale: 1.02 }}
                onClick={() => setActiveLightbox({
                  img: ashokPolaroidCoding,
                  title: "Ashok Shankar Gumma — Production Engineering",
                  tag: "WORKSPACE • 2026",
                  caption: "Full-Stack Developer & AI Systems Engineer at the coding workspace."
                })}
                title="Click to expand workspace visual"
              >
                <img
                  src={ashokPolaroidCoding}
                  alt="Ashok Coding Workspace Studio Hero"
                  className="banner-cutout-img"
                />
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* =========================================================
            3. EDITORIAL MARQUEE TICKER (INTERMEZZO)
            ========================================================= */}
        <div className="marquee-ribbon-section">
          <div className="marquee-track">
            <div className="marquee-item">FULL-STACK ARCHITECTURE <span className="marquee-bullet">✦</span></div>
            <div className="marquee-item accent">AI-POWERED PLATFORMS <span className="marquee-bullet">✦</span></div>
            <div className="marquee-item">ERP & CRM ENTERPRISE SYSTEMS <span className="marquee-bullet">✦</span></div>
            <div className="marquee-item accent">REAL-TIME VIDEO & COMPILER <span className="marquee-bullet">✦</span></div>
            <div className="marquee-item">POSTGRESQL & SCALABLE BACKENDS <span className="marquee-bullet">✦</span></div>
            <div className="marquee-item accent">2026 EDITION <span className="marquee-bullet">✦</span></div>
            
            {/* Duplicate for infinite loop */}
            <div className="marquee-item">FULL-STACK ARCHITECTURE <span className="marquee-bullet">✦</span></div>
            <div className="marquee-item accent">AI-POWERED PLATFORMS <span className="marquee-bullet">✦</span></div>
            <div className="marquee-item">ERP & CRM ENTERPRISE SYSTEMS <span className="marquee-bullet">✦</span></div>
            <div className="marquee-item accent">REAL-TIME VIDEO & COMPILER <span className="marquee-bullet">✦</span></div>
            <div className="marquee-item">POSTGRESQL & SCALABLE BACKENDS <span className="marquee-bullet">✦</span></div>
            <div className="marquee-item accent">2026 EDITION <span className="marquee-bullet">✦</span></div>
          </div>
        </div>

        {/* =========================================================
            3. BESPOKE PROJECT SHOWCASE BOARDS (CIUDADES Y SABORES STYLE)
            ========================================================= */}
        <section id="projects" className="projects-showcase-section">
          <div className="main-container">
            <motion.div
              className="section-editorial-header"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6 }}
            >
              <span className="section-label-stamp">SELECTED WORKS • 2026</span>
              <h2 className="section-main-heading">Featured Systems & Production Applications</h2>
              <p className="section-desc-text">
                Explore fully engineered platforms combining modern UI design, backend infrastructure, and AI features.
              </p>
            </motion.div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '64px' }}>
              {projects.map((project, idx) => (
                <motion.article
                  key={project.id}
                  className={`project-board-card ${project.themeClass}`}
                  initial={{ opacity: 0, y: 55, scale: 0.98 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, amount: 0.14 }}
                  whileHover={{ y: -6, transition: { type: 'spring', stiffness: 300, damping: 20 } }}
                  transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                >
                  {/* Technical Corners */}
                  <div className="technical-corner tc-top-left"></div>
                  <div className="technical-corner tc-top-right"></div>
                  <div className="technical-corner tc-bottom-left"></div>
                  <div className="technical-corner tc-bottom-right"></div>

                  <div className="project-board-layout">
                    {/* Left: Editorial Details */}
                    <div className="project-info-side">
                      <div className="project-meta-pill-row">
                        <span className="project-number-badge">{project.number}</span>
                        <span className="project-tag-pill">PRODUCTION GRADE</span>
                      </div>

                      <h3 className="project-main-title">{project.title}</h3>
                      <p className="project-serif-subtitle">{project.subtitle}</p>
                      <p className="project-narrative-desc">{project.description}</p>

                      {/* Technologies & Tools used */}
                      <div className="project-tools-used-box">
                        <span className="tools-used-label">Technologies & Tools Used</span>
                        <div className="project-tech-badges-list">
                          {project.tools.map(tool => (
                            <motion.span
                              key={tool}
                              className="tech-pill-badge"
                              whileHover={{ scale: 1.08, y: -2 }}
                            >
                              {tool}
                            </motion.span>
                          ))}
                        </div>
                      </div>

                      {/* Review Quote Box */}
                      <div className="project-review-quote-box">
                        <div className="review-quote-head">
                          <span className="review-title">{project.reviewTitle}</span>
                          <span className="review-stars">{project.reviewRating}</span>
                        </div>
                        <p className="review-quote-text">{project.reviewText}</p>
                      </div>

                      {/* Footer Actions & Swatches */}
                      <div className="project-footer-actions">
                        <div className="palette-swatches-row">
                          {project.palette.map((color, cIdx) => (
                            <motion.div
                              key={cIdx}
                              className="palette-dot"
                              style={{ backgroundColor: color }}
                              title={color}
                              whileHover={{ scale: 1.3 }}
                            />
                          ))}
                        </div>

                        <div className="project-action-btns-row">
                          <motion.a
                            href={project.liveLink}
                            target="_blank"
                            rel="noreferrer"
                            className="btn-project-cta"
                            whileHover={{ scale: 1.05, y: -2 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            Live Demo <ExternalLink size={14} />
                          </motion.a>
                          <motion.a
                            href={project.githubLink}
                            target="_blank"
                            rel="noreferrer"
                            className="btn-project-ghost"
                            whileHover={{ scale: 1.05, y: -2 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <GithubIcon size={14} /> Code
                          </motion.a>
                        </div>
                      </div>
                    </div>

                    {/* Right: Mockup Frame Composition */}
                    <div className="project-visual-side">
                      <motion.div className="mockup-display-card" whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}>
                        <div className="mockup-browser-header">
                          <div className="browser-dot"></div>
                          <div className="browser-dot"></div>
                          <div className="browser-dot"></div>
                          <div className="browser-url-pill">{project.urlLabel}</div>
                        </div>
                        <div className="mockup-img-wrap">
                          <img src={project.image} alt={project.title} loading="lazy" />
                        </div>
                        <div className="floating-mockup-badge">
                          <Sparkles size={14} color="#FBBF24" />
                          <span>0{idx + 1} • {project.title}</span>
                        </div>
                      </motion.div>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* =========================================================
            4. SKILLS & ARCHITECTURE BENTO MATRIX
            ========================================================= */}
        <section id="skills" className="skills-matrix-section">
          <div className="main-container">
            <motion.div
              className="section-editorial-header"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6 }}
            >
              <span className="section-label-stamp">TECHNICAL CAPABILITIES</span>
              <h2 className="section-main-heading">Core Skills & Architecture Matrix</h2>
              <p className="section-desc-text">
                Full-stack toolkit spanning modern client-side engineering, scalable backend APIs, database modeling, and real-time systems.
              </p>
            </motion.div>

            <div className="skills-bento-grid">
              {skillMatrix.map((item, idx) => (
                <motion.div
                  key={idx}
                  className="skill-matrix-card"
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  whileHover={{ y: -6, transition: { type: 'spring', stiffness: 350, damping: 20 } }}
                  transition={{ duration: 0.5, delay: idx * 0.08 }}
                >
                  <div className="skill-card-head">
                    <div className="skill-icon-wrap">{item.icon}</div>
                    <h3 className="skill-cat-title">{item.category}</h3>
                  </div>

                  <div className="skill-tags-flex">
                    {item.skills.map(s => (
                      <motion.span
                        key={s}
                        className="matrix-skill-badge"
                        whileHover={{ scale: 1.06, y: -2 }}
                      >
                        {s}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* =========================================================
            5. CAREER JOURNEY & EDUCATION TIMELINE
            ========================================================= */}
        <section id="experience" className="timeline-section">
          <div className="main-container">
            <motion.div
              className="section-editorial-header"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6 }}
            >
              <span className="section-label-stamp">BACKGROUND & TIMELINE</span>
              <h2 className="section-main-heading">Experience, Training & Education</h2>
              <p className="section-desc-text">
                Hands-on professional internship experience, technical workshops, and formal computer science education.
              </p>
            </motion.div>

            <div className="timeline-editorial-grid">
              {/* Experience Card */}
              <motion.div
                className="timeline-column-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.6 }}
              >
                <div className="timeline-card-header">
                  <Briefcase size={22} color="#FF3B1D" />
                  <h3 className="timeline-card-title">Professional Experience</h3>
                </div>

                {/* Zetheta Algorithms Certificate Card */}
                <motion.div
                  className="certificate-feature-card"
                  whileHover={{ scale: 1.02, y: -4, transition: { type: 'spring', stiffness: 350, damping: 20 } }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setActiveLightbox({
                    img: zethetaCertificate,
                    title: "Zetheta Algorithms — Certificate of Project Work Experience",
                    tag: "ZETHETA • 06 AUG 2026",
                    caption: "Full Stack Engineer Intern on Front End Developer Multi Step Loan Application Form. Managing Director: Suketu Sanghvi."
                  })}
                  style={{ cursor: 'pointer', marginBottom: '18px' }}
                  title="Click to view official certificate"
                >
                  <div className="certificate-header-row">
                    <div>
                      <span className="record-date-badge">JUL 2026 — AUG 2026</span>
                      <h4 className="record-role-heading" style={{ marginTop: '4px' }}>Full Stack Engineer Intern</h4>
                      <p className="record-organization">Zetheta Algorithms Private Limited</p>
                    </div>
                    <div className="certificate-mini-thumb">
                      <img src={zethetaCertificate} alt="Zetheta Certificate" />
                    </div>
                  </div>
                  <p className="record-bullet-text" style={{ margin: 0, fontSize: '11.5px', color: 'var(--text-muted)' }}>
                    Engineered a scalable multi-step Loan Application portal with modular React components, client-side data validation, responsive layouts, and state management.
                  </p>
                </motion.div>

                {/* Corizo Training Certificate Card */}
                <motion.div
                  className="certificate-feature-card"
                  whileHover={{ scale: 1.02, y: -4, transition: { type: 'spring', stiffness: 350, damping: 20 } }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setActiveLightbox({
                    img: corizoCertificate,
                    title: "Corizo — Certificate of Training in Web Development",
                    tag: "CORIZO • 05 MAY — 05 JUNE 2025",
                    caption: "Web Development Training certified to Gumma Ashok Shankar by Academic Head Hemant Ingle. ISO 9001:2015 & NSDC accredited."
                  })}
                  style={{ cursor: 'pointer', marginBottom: '18px' }}
                  title="Click to view official certificate"
                >
                  <div className="certificate-header-row">
                    <div>
                      <span className="record-date-badge">MAY 2025 — JUN 2025</span>
                      <h4 className="record-role-heading" style={{ marginTop: '4px' }}>Web Development Trainee</h4>
                      <p className="record-organization">Corizo (Remote Training)</p>
                    </div>
                    <div className="certificate-mini-thumb">
                      <img src={corizoCertificate} alt="Corizo Certificate" />
                    </div>
                  </div>
                  <p className="record-bullet-text" style={{ margin: 0, fontSize: '11.5px', color: 'var(--text-muted)' }}>
                    Completed intensive MERN stack curriculum covering MongoDB, Express, React, Node.js, JWT authentication, and REST API optimization.
                  </p>
                </motion.div>

                {/* Parul University Projections Workshop Certificate Card */}
                <motion.div
                  className="certificate-feature-card"
                  whileHover={{ scale: 1.02, y: -4, transition: { type: 'spring', stiffness: 350, damping: 20 } }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setActiveLightbox({
                    img: parulWorkshopCertificate,
                    title: "Parul University Projections — Full Stack Web Development Workshop",
                    tag: "PROJECTIONS • FEB 2026",
                    caption: "Certificate of Participation awarded to Gumma Ashok Shankar at Gujarat's Largest Technical Festival (12th-14th Feb 2026)."
                  })}
                  style={{ cursor: 'pointer' }}
                  title="Click to view official certificate"
                >
                  <div className="certificate-header-row">
                    <div>
                      <span className="record-date-badge">FEB 2026 • WORKSHOP</span>
                      <h4 className="record-role-heading" style={{ marginTop: '4px' }}>Full Stack Web Dev Workshop</h4>
                      <p className="record-organization">Parul University Projections</p>
                    </div>
                    <div className="certificate-mini-thumb">
                      <img src={parulWorkshopCertificate} alt="Parul University Projections Certificate" />
                    </div>
                  </div>
                  <p className="record-bullet-text" style={{ margin: 0, fontSize: '11.5px', color: 'var(--text-muted)' }}>
                    Participated in hands-on sessions covering modern full-stack application architecture and end-to-end frontend-backend integration during Gujarat's largest tech festival.
                  </p>
                </motion.div>
              </motion.div>

              {/* Education & Achievements Card */}
              <motion.div
                className="timeline-column-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.6, delay: 0.12 }}
              >
                <div className="timeline-card-header">
                  <GraduationCap size={22} color="#059669" />
                  <h3 className="timeline-card-title">Education & Milestones</h3>
                </div>

                <div className="timeline-record">
                  <span className="record-date-badge" style={{ background: '#059669' }}>2023 — 2027</span>
                  <h4 className="record-role-heading">B.Tech in Computer Science & Engineering (AI)</h4>
                  <p className="record-organization">Parul University • Vadodara, Gujarat</p>
                  <p className="record-bullet-text">
                    Focused on Artificial Intelligence, Core Computer Science Fundamentals, Database Management Systems, Operating Systems, and Object-Oriented Programming. <strong>CGPA: 7.47</strong>
                  </p>
                </div>

                {/* Adobe University Hackathon Interactive Certificate Card */}
                <motion.div
                  className="certificate-feature-card"
                  whileHover={{ scale: 1.02, y: -4, transition: { type: 'spring', stiffness: 350, damping: 20 } }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setActiveLightbox({
                    img: adobeCertificate,
                    title: "Adobe University Hackathon — Certificate of Participation",
                    tag: "ADOBE • 9TH AUG 2026",
                    caption: "Organized by Adobe & Unstop. Certified to Ashok Shankar Gumma from Parul University (PU), Vadodara."
                  })}
                  style={{ cursor: 'pointer' }}
                  title="Click to expand official certificate"
                >
                  <div className="certificate-header-row">
                    <div>
                      <span className="record-date-badge" style={{ background: '#FF0000', color: '#FFFFFF' }}>AUG 2026 • ADOBE</span>
                      <h4 className="record-role-heading" style={{ marginTop: '4px' }}>Adobe University Hackathon</h4>
                      <p className="record-organization">Organised by Adobe & Unstop</p>
                    </div>
                    <div className="certificate-mini-thumb">
                      <img src={adobeCertificate} alt="Adobe Certificate" />
                    </div>
                  </div>
                  <p className="record-bullet-text" style={{ margin: 0, fontSize: '11.5px', color: 'var(--text-muted)' }}>
                    Participated in the national-level 24-hour developer hackathon creating innovative digital workflows and modern full-stack web solutions.
                  </p>
                </motion.div>

                <div className="timeline-record" style={{ marginTop: '20px' }}>
                  <span className="record-date-badge" style={{ background: '#059669' }}>2024 — 2026</span>
                  <h4 className="record-role-heading">Independent System Architectures</h4>
                  <p className="record-organization">Self-Directed Production Apps</p>
                  <p className="record-bullet-text">
                    Built and shipped multiple full-stack systems including <strong>ANVA</strong>, <strong>SolarGrid</strong>, and <strong>FRIDAY</strong>.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* =========================================================
            6. EDITORIAL FOOTER & DIRECT CONTACT
            ========================================================= */}
        <footer id="contact" className="site-footer">
          <div className="main-container">
            <div className="footer-card">
              <span className="footer-tag-pill">LET'S COLLABORATE • 2026</span>
              <h2 className="footer-headline">Let's Build Something Meaningful Together.</h2>
              <p className="footer-desc">
                Currently open to full-time Software Development Engineer (SDE), Full-Stack, and Backend roles. Available immediately.
              </p>

              {/* Action Buttons */}
              <div className="footer-cta-row">
                <motion.a
                  href="mailto:ashokgumma20@gmail.com"
                  className="btn-footer-primary"
                  whileHover={{ scale: 1.04, y: -2 }}
                  whileTap={{ scale: 0.96 }}
                >
                  <Mail size={18} />
                  <span>Send Direct Email</span>
                </motion.a>

                <motion.button
                  onClick={handleCopyEmail}
                  className="btn-footer-secondary"
                  whileHover={{ scale: 1.04, y: -2 }}
                  whileTap={{ scale: 0.96 }}
                >
                  {copiedEmail ? <Check size={18} color="#22C55E" /> : <Copy size={18} />}
                  <span>{copiedEmail ? "Email Copied!" : "Copy Email"}</span>
                </motion.button>

                <motion.a
                  href="https://linkedin.com/in/ashok-gumma1"
                  target="_blank"
                  rel="noreferrer"
                  className="btn-footer-secondary"
                  whileHover={{ scale: 1.04, y: -2 }}
                  whileTap={{ scale: 0.96 }}
                >
                  <LinkedinIcon size={18} />
                  <span>Connect on LinkedIn</span>
                </motion.a>
              </div>

              {/* Social Links Row */}
              <div className="footer-social-row">
                <motion.a href="https://github.com/Ashok-Gumma" target="_blank" rel="noreferrer" className="footer-social-pill" whileHover={{ scale: 1.05, y: -2 }}>
                  <GithubIcon size={15} /> GitHub Profile
                </motion.a>
                <motion.a href="https://linkedin.com/in/ashok-gumma1" target="_blank" rel="noreferrer" className="footer-social-pill" whileHover={{ scale: 1.05, y: -2 }}>
                  <LinkedinIcon size={15} /> LinkedIn
                </motion.a>
                <motion.a href="https://leetcode.com/u/gummaashok/" target="_blank" rel="noreferrer" className="footer-social-pill" whileHover={{ scale: 1.05, y: -2 }}>
                  <LeetCodeIcon size={15} /> LeetCode Profile
                </motion.a>
                <span className="footer-social-pill" style={{ borderColor: 'rgba(255,255,255,0.2)' }}>
                  <MapPin size={15} /> Andhra Pradesh, India
                </span>
              </div>

              {/* Bottom Copyright Bar */}
              <div className="footer-bottom-bar">
                <span>© {new Date().getFullYear()} Ashok Shankar Gumma. All rights reserved.</span>
                <span>Designed & Engineered • Ashok Shankar Gumma </span>
              </div>
            </div>
          </div>
        </footer>
      </main>

      {/* Copy Email Toast */}
      <AnimatePresence>
        {copiedEmail && (
          <motion.div
            className="copy-toast"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
          >
            ✓ Email copied to clipboard: ashokgumma20@gmail.com
          </motion.div>
        )}
      </AnimatePresence>

      {/* =========================================================
          BEHANCE-STYLE FLOATING "AVAILABLE FOR HIRE" POPUP
          ========================================================= */}
      <AnimatePresence>
        {showHireWidget && (
          <motion.div
            className="floating-hire-widget"
            initial={{ opacity: 0, y: 30 }}
            animate={{
              opacity: 1,
              y: [0, -6, 0]
            }}
            exit={{ opacity: 0, y: 30 }}
            transition={{
              opacity: { duration: 0.4 },
              y: { repeat: Infinity, duration: 3.2, ease: "easeInOut" }
            }}
          >
            <div className="widget-avatar-circle">
              <img src={ashokPortrait} alt="Ashok Shankar Gumma" />
            </div>
            
            <div className="widget-text-block">
              <span className="pulse-circle"></span>
              <span className="widget-title">Ashok is available for hire</span>
            </div>

            <a href="#contact" className="widget-cta-btn">
              Hire Ashok
            </a>

            <button
              onClick={() => setShowHireWidget(false)}
              className="widget-close-btn"
              title="Dismiss"
              aria-label="Dismiss"
            >
              <X size={16} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* =========================================================
          AESTHETIC FILM LIGHTBOX MODAL
          ========================================================= */}
      <AnimatePresence>
        {activeLightbox && (
          <motion.div
            className="lightbox-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveLightbox(null)}
          >
            <motion.div
              className="lightbox-content-card"
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              onClick={e => e.stopPropagation()}
            >
              <button
                className="lightbox-close-btn"
                onClick={() => setActiveLightbox(null)}
                aria-label="Close modal"
              >
                <X size={20} />
              </button>

              <div className="lightbox-img-frame">
                <img src={activeLightbox.img} alt={activeLightbox.title} />
              </div>

              <div className="lightbox-info-row">
                <div>
                  <h3 className="lightbox-caption-text">{activeLightbox.title}</h3>
                  <p className="polaroid-sub">{activeLightbox.caption}</p>
                </div>
                <span className="lightbox-tag-text">{activeLightbox.tag}</span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default App;