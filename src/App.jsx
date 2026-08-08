import React from 'react';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import {
  ArrowUpRight,
  Mail,
  Zap,
  Terminal,
  Cpu,
  Globe,
  MapPin,
  Smartphone,
  Briefcase,
  GraduationCap,
  Award
} from 'lucide-react';
import realPhoto from './assets/ashok_photo.jpg';
import anvaImg from './assets/anva.png';
import fridayImg from './assets/friday.png';
import './App.css';

// Animated Starfield & Shooting Stars Component with Scroll Parallax
const StarfieldBackground = ({ starY1, starY2 }) => (
  <div className="starfield-container">
    <motion.div className="stars-layer-1" style={{ y: starY1 }}></motion.div>
    <motion.div className="stars-layer-2" style={{ y: starY2 }}></motion.div>
    <div className="shooting-star-1"></div>
    <div className="shooting-star-2"></div>
  </div>
);

// Social Icon Components
const GithubIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
  </svg>
);

const LinkedinIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

const LeetCodeIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M13.483 0a1.374 1.374 0 0 0-.961.414l-4.593 4.593a1.381 1.381 0 0 0 0 1.954l1.954 1.954a1.381 1.381 0 0 0 1.954 0L14.717 6.04a1.374 1.374 0 0 0 0-1.953l-4.593-4.593l-.641-.493a1.374 1.374 0 0 0-1.02-.274H13.48zM7.332 5.034a1.374 1.374 0 0 0-.961.414L1.778 10.04a1.381 1.381 0 0 0 0 1.954l1.954 1.954a1.381 1.381 0 0 0 1.954 0l4.593-4.593a1.374 1.374 0 0 0 0-1.953L5.686 5.448l-.641-.414a1.374 1.374 0 0 0-.961.414l-.752.752a1.374 1.374 0 0 0 0 1.953l1.954 1.954a1.374 1.374 0 0 0 1.954 0l1.101-1.101L7.332 5.034z" />
    <path d="M16.668 18.966a1.374 1.374 0 0 0 .961-.414l4.593-4.593a1.381 1.381 0 0 0 0-1.954l-1.954-1.954a1.381 1.381 0 0 0-1.954 0l-4.593 4.593a1.374 1.374 0 0 0 0 1.953l1.954 1.506l.641.414a1.374 1.374 0 0 0 .961.414l.752-.752a1.374 1.374 0 0 0 0-1.953l-1.954-1.954a1.374 1.374 0 0 0-1.954 0l-1.101 1.101l1.101 1.101zM10.517 24a1.374 1.374 0 0 0 .961-.414l4.593-4.593a1.381 1.381 0 0 0 0-1.954l-1.954-1.954a1.381 1.381 0 0 0-1.954 0L7.136 19.345a1.374 1.374 0 0 0 0 1.953l4.593 4.593l.641.493a1.374 1.374 0 0 0 1.02.274H10.517z" />
  </svg>
);

const App = () => {
  // Ultra-Smooth Spring Physics & Parallax Transforms
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 80, damping: 25, restDelta: 0.0001 });
  const starY1 = useTransform(scrollYProgress, [0, 1], [0, -380]);
  const starY2 = useTransform(scrollYProgress, [0, 1], [0, -750]);

  const projects = [
    {
      title: "ANVA",
      scriptTitle: "AI Ecosystem",
      tagline: "Collaborative learning ecosystem integrating AI",
      description: "A collaborative learning platform integrating AI, educational networking, coding tools, and real-time communication.",
      features: [
        "Interactive AI Assistant & Flashcards Studio",
        "Online Code Compiler, Real-time Chat, Video calling & Screen sharing",
        "End-to-end admin moderation, RBAC, bug reporting & platform monitoring"
      ],
      tags: ["React.js", "Node.js", "Express.js", "MongoDB", "Clerk Authentication", "Stream Chat", "Stream Video", "Tailwind CSS"],
      image: anvaImg,
      link: "https://anva-akzm.onrender.com/"
    },
    {
      title: "FRIDAY",
      scriptTitle: "Personal AI",
      tagline: "Adaptive Personal Assistant",
      description: "A personalized AI assistant that adapts conversations based on user profile, interests, and mood.",
      features: [
        "Personalized onboarding & mood-aware conversations",
        "Persistent user profiles & interest-based adaptive chat",
        "Secure Google OAuth Authentication"
      ],
      tags: ["React.js", "Node.js", "Express.js", "MongoDB", "Google OAuth", "REST APIs"],
      image: fridayImg,
      link: "https://as-you-wish-q2lj.onrender.com/"
    }
  ];

  const skillGroups = [
    { title: "Languages", skills: ["Java", "JavaScript", "SQL"] },
    { title: "Frontend", skills: ["React.js", "HTML5", "CSS3", "Tailwind CSS"] },
    { title: "Backend", skills: ["Node.js", "Express.js", "REST APIs", "JWT", "Clerk Authentication"] },
    { title: "Database", skills: ["MongoDB", "MySQL"] },
    { title: "Tools", skills: ["Git", "GitHub", "Postman", "AWS (EC2, S3)", "VS Code"] },
    { title: "Core Concepts", skills: ["Data Structures & Algorithms", "OOP", "Authentication", "RBAC", "API Integration"] }
  ];

  const scrollFadeUp = {
    hidden: { opacity: 0, y: 70, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.95, ease: [0.16, 1, 0.3, 1] }
    }
  };

  const navItemVariant = {
    hidden: { opacity: 0, x: 25 },
    visible: { opacity: 1, x: 0 }
  };

  return (
    <div className="app">
      {/* Ultra-Smooth Scroll Progress Bar */}
      <motion.div className="scroll-progress-bar" style={{ scaleX }} />

      {/* Animated Parallax Starfield Background */}
      <StarfieldBackground starY1={starY1} starY2={starY2} />

      {/* Top Header Bar */}
      <motion.header
        className="top-header-bar"
        initial={{ opacity: 0, y: -45 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="header-user-badge">
          <motion.div
            className="header-avatar-circle"
            whileHover={{ scale: 1.18, rotate: 8 }}
            whileTap={{ scale: 0.95 }}
          >
            <img src={realPhoto} alt="Ashok Gumma Avatar Icon" />
          </motion.div>
          <div className="header-user-info">
            <span className="header-user-name">ASHOK GUMMA</span>
            <span className="header-user-title">FULL STACK & AI DEVELOPER</span>
          </div>
        </div>

        <div className="header-tag-right">
          PORTFOLIO
        </div>
      </motion.header>

      {/* Hero Section */}
      <section className="showit-hero">
        <div className="hero-editorial-grid">
          {/* Extended Yellow Box Block */}
          <motion.div
            className="hero-yellow-block"
            initial={{ opacity: 0, scale: 0.9, y: 35 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1.0, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            <motion.h1
              className="giant-hero-title"
              initial={{ opacity: 0, y: -40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.85, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            >
              WHO
            </motion.h1>

            <motion.div
              className="script-overlay-text"
              initial={{ opacity: 0, rotate: -12, scale: 0.8 }}
              animate={{ opacity: 1, rotate: -3, scale: 1 }}
              transition={{ duration: 0.95, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
            >
              Full Stack, AI Developer, Community
            </motion.div>

            <motion.p
              className="hero-yellow-sub"
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.85, delay: 0.6 }}
            >
              Final Year B.Tech CSE (AI) student at Parul University specializing in scalable web platforms, real-time communication, and intelligent systems.
            </motion.p>
          </motion.div>

          {/* Right Side Navigation Menu */}
          <motion.div
            className="hero-side-menu"
            initial="hidden"
            animate="visible"
            transition={{ staggerChildren: 0.12, delayChildren: 0.4 }}
          >
            <span className="menu-label">MENU</span>
            <motion.a variants={navItemVariant} href="#about" className="side-menu-link">01. about</motion.a>
            <motion.a variants={navItemVariant} href="#projects" className="side-menu-link">02. featured</motion.a>
            <motion.a variants={navItemVariant} href="#projects" className="side-menu-link">03. portfolio</motion.a>
            <motion.a variants={navItemVariant} href="#skills" className="side-menu-link">04. skills</motion.a>
            <motion.a variants={navItemVariant} href="#contact" className="side-menu-link">05. contact</motion.a>
          </motion.div>
        </div>
      </section>

      {/* Section 2: DEVELOPER-LED (Ultra-Smooth Viewport Entrance) */}
      <section id="about" className="artist-led-section">
        <div className="editorial-container">
          <motion.h2
            className="section-bold-title"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            variants={scrollFadeUp}
          >
            DEVELOPER-LED
          </motion.h2>

          <div className="artist-led-content">
            <motion.div
              className="artist-led-desc"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
              variants={scrollFadeUp}
            >
              <p>
                I am a multi-hyphenate developer who bridges the gap between high-performance backends, reactive user interfaces, and adaptive AI experiences.
              </p>
              <motion.a
                href="#contact"
                className="outline-cta-btn"
                whileHover={{ scale: 1.06, y: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                LET'S WORK TOGETHER <ArrowUpRight size={14} />
              </motion.a>
            </motion.div>

            <motion.div
              className="script-annotation-block"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
              variants={scrollFadeUp}
            >
              full stack • mern • ai • cloud
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 3: CODE-CENTERED / FEATURED WORK (Ultra-Smooth Scroll Cards) */}
      <section id="projects" className="code-centered-section">
        <div className="editorial-container">
          <motion.h2
            className="section-bold-title"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            variants={scrollFadeUp}
          >
            JOY _<br />CENTERED
          </motion.h2>

          <div className="projects-editorial-grid">
            {projects.map((project, idx) => (
              <motion.div
                key={idx}
                className="project-editorial-card"
                initial={{ opacity: 0, y: 70, scale: 0.94 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 0.9, delay: idx * 0.15, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -12 }}
              >
                <div className="project-photo-wrapper">
                  <div className="project-yellow-frame"></div>
                  <div className="project-card-img-box">
                    <img src={project.image} alt={project.title} />
                  </div>
                </div>

                <div className="project-card-info">
                  <div>
                    <div className="project-script-tag">{project.scriptTitle}</div>
                    <h3 className="project-card-heading">{project.title}</h3>
                    <span className="project-card-tagline">{project.tagline}</span>
                    <p className="project-card-desc">{project.description}</p>

                    <div className="project-features-list">
                      {project.features.map((feat, i) => (
                        <div key={i} className="feature-point">
                          <Zap size={14} /> <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <div className="project-tags-group">
                      {project.tags.map(t => (
                        <span key={t} className="editorial-tag">{t}</span>
                      ))}
                    </div>

                    <motion.a
                      href={project.link}
                      className="outline-cta-btn"
                      target="_blank"
                      rel="noreferrer"
                      whileHover={{ scale: 1.06, x: 5 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      LIVE DEMO <Globe size={14} />
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4: COMMUNITY CREATED / EXPERIENCE & EDUCATION */}
      <section id="skills" className="community-section">
        <div className="editorial-container">
          <motion.h2
            className="section-bold-title"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            variants={scrollFadeUp}
          >
            COMMUNITY_<br />CREATED
          </motion.h2>

          <div className="community-grid">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.2 }}
              variants={scrollFadeUp}
            >
              {/* SECTION: INTERNSHIPS */}
              <div className="timeline-block-title">
                <Briefcase size={16} /> INTERNSHIPS
              </div>

              <div className="editorial-timeline" style={{ marginBottom: '40px' }}>
                <motion.div className="editorial-timeline-item" whileHover={{ x: 12 }}>
                  <h3 className="timeline-item-role">Zetheta Algorithms Private Limited</h3>
                  <p className="timeline-item-org">Full Stack Engineer Intern (Remote)</p>
                  <span className="timeline-item-date">JUL 2026 — AUG 2026</span>
                  <p className="timeline-item-desc">
                    Developed a responsive multi-step Loan Application platform using reusable React components, client side validation, and seamless multi-step workflows. Collaborated in a project driven environment, improving UI responsiveness.
                  </p>
                </motion.div>

                <motion.div className="editorial-timeline-item" whileHover={{ x: 12 }}>
                  <h3 className="timeline-item-role">Corizo</h3>
                  <p className="timeline-item-org">Web Development Trainee (Remote)</p>
                  <span className="timeline-item-date">MAY 2025 — JUN 2025</span>
                  <p className="timeline-item-desc">
                    Completed hands-on Full Stack Web Development training covering MERN stack development, REST APIs, authentication, and responsive web applications.
                  </p>
                </motion.div>
              </div>

              {/* SECTION: WORKSHOPS */}
              <div className="timeline-block-title">
                <Award size={16} /> WORKSHOPS
              </div>

              <div className="editorial-timeline">
                <motion.div className="editorial-timeline-item" whileHover={{ x: 12 }}>
                  <h3 className="timeline-item-role">Parul University Projections</h3>
                  <p className="timeline-item-org">Full Stack Web Development Workshop</p>
                  <span className="timeline-item-date">FEB 2026</span>
                </motion.div>
              </div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.2 }}
              variants={scrollFadeUp}
            >
              {/* SECTION: EDUCATION */}
              <div className="timeline-block-title">
                <GraduationCap size={16} /> EDUCATION
              </div>

              <div className="editorial-timeline" style={{ marginBottom: '40px' }}>
                <motion.div className="editorial-timeline-item" whileHover={{ x: 12 }}>
                  <h3 className="timeline-item-role">Parul University</h3>
                  <p className="timeline-item-org">B.Tech in Computer Science and Engineering (Artificial Intelligence)</p>
                  <span className="timeline-item-date">2023 — 2027 • CGPA: 7.47</span>
                </motion.div>
              </div>

              {/* SECTION: SKILLS */}
              <div className="timeline-block-title">
                <Terminal size={16} /> CORE SKILLS & TECH STACK
              </div>

              <div className="skills-category-grid">
                {skillGroups.map((group, i) => (
                  <motion.div key={i} className="editorial-skill-card" whileHover={{ y: -8 }}>
                    <h4 className="skill-card-heading">{group.title}</h4>
                    <div className="skill-badges-wrapper">
                      {group.skills.map(s => (
                        <motion.span key={s} className="skill-badge-item" whileHover={{ scale: 1.16 }}>
                          {s}
                        </motion.span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 5: FOOTER (Ultra-Smooth Scroll Reveal) */}
      <footer id="contact" className="showit-footer">
        <div className="footer-editorial-container">
          <motion.h2
            className="footer-giant-title"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            variants={scrollFadeUp}
          >
            READY TO<br />CONNECT?
          </motion.h2>
          <motion.div
            className="footer-script-subtitle"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            variants={scrollFadeUp}
          >
            Let's build something extraordinary together.
          </motion.div>

          <div className="footer-links-row">
            <a href="mailto:ashokgumma20@gmail.com" className="footer-contact-item">
              <Mail size={18} /> ashokgumma20@gmail.com
            </a>
            <a href="tel:+917680889083" className="footer-contact-item">
              <Smartphone size={18} /> +91 7680889083
            </a>
            <span className="footer-contact-item">
              <MapPin size={18} /> Markapur, Andhra Pradesh
            </span>

            <div className="footer-social-box">
              <motion.a href="https://github.com/Ashok-Gumma" className="footer-social-link" target="_blank" rel="noreferrer" whileHover={{ y: -4, scale: 1.06 }}>
                GITHUB
              </motion.a>
              <motion.a href="https://linkedin.com/in/ashok-gumma1" className="footer-social-link" target="_blank" rel="noreferrer" whileHover={{ y: -4, scale: 1.06 }}>
                LINKEDIN
              </motion.a>
              <motion.a href="https://leetcode.com/u/gummaashok/" className="footer-social-link" target="_blank" rel="noreferrer" whileHover={{ y: -4, scale: 1.06 }}>
                LEETCODE
              </motion.a>
            </div>
          </div>

          <div className="footer-bottom-copy">
            <span>© {new Date().getFullYear()} ASHOK GUMMA</span>
            <span></span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;