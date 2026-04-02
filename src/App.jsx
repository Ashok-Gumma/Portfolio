import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { 
  ExternalLink, 
  Mail, 
  ChevronDown, 
  ArrowUpRight, 
  Globe, 
  Cpu, 
  Code,
  Smartphone,
  MapPin,
  GraduationCap,
  Calendar,
  Award,
  Terminal,
  Zap
} from 'lucide-react';
import './App.css';

// Custom Social Icons to avoid version mismatch errors
const GithubIcon = ({ size = 20, style = {} }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={style}>
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
  </svg>
);

const LinkedinIcon = ({ size = 20, style = {} }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={style}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

const LeetCodeIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M13.483 0a1.374 1.374 0 0 0-.961.414l-4.593 4.593a1.381 1.381 0 0 0 0 1.954l1.954 1.954a1.381 1.381 0 0 0 1.954 0L14.717 6.04a1.374 1.374 0 0 0 0-1.953l-4.593-4.593l-.641-.493a1.374 1.374 0 0 0-1.02-.274H13.48zM7.332 5.034a1.374 1.374 0 0 0-.961.414L1.778 10.04a1.381 1.381 0 0 0 0 1.954l1.954 1.954a1.381 1.381 0 0 0 1.954 0l4.593-4.593a1.374 1.374 0 0 0 0-1.953L5.686 5.448l-.641-.414a1.374 1.374 0 0 0-.961.414l-.752.752a1.374 1.374 0 0 0 0 1.953l1.954 1.954a1.374 1.374 0 0 0 1.954 0l1.101-1.101L7.332 5.034z"/>
    <path d="M16.668 18.966a1.374 1.374 0 0 0 .961-.414l4.593-4.593a1.381 1.381 0 0 0 0-1.954l-1.954-1.954a1.381 1.381 0 0 0-1.954 0l-4.593 4.593a1.374 1.374 0 0 0 0 1.953l1.954 1.506l.641.414a1.374 1.374 0 0 0 .961.414l.752-.752a1.374 1.374 0 0 0 0-1.953l-1.954-1.954a1.374 1.374 0 0 0-1.954 0l-1.101 1.101l1.101 1.101zM10.517 24a1.374 1.374 0 0 0 .961-.414l4.593-4.593a1.381 1.381 0 0 0 0-1.954l-1.954-1.954a1.381 1.381 0 0 0-1.954 0L7.136 19.345a1.374 1.374 0 0 0 0 1.953l4.593 4.593l.641.493a1.374 1.374 0 0 0 1.02.274H10.517z"/>
  </svg>
);

const Navbar = () => {
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      setTime(new Date().toLocaleTimeString('en-US', { 
        timeZone: 'Asia/Kolkata', 
        hour12: false, 
        hour: '2-digit', 
        minute: '2-digit' 
      }));
    };
    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <nav className="navbar">
      <div className="nav-left">
        <span className="logo">GUMMA ASHOK SHANKAR</span>
      </div>
      <div className="nav-right">
        <div className="status">
          <span className="status-dot"></span>
          AVAILABLE FOR WORK
        </div>
        <div className="time">IST {time}</div>
      </div>
    </nav>
  );
};

const Hero = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const revealVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0, transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] } }
  };

  return (
    <section className="hero" ref={containerRef}>
      <motion.div 
        className="hero-content"
        style={{ y, opacity }}
        initial="hidden"
        animate="visible"
        variants={revealVariants}
      >
        <div className="hero-top">
          <motion.span className="hero-tag" variants={revealVariants}>AI ENTHUSIAST & FULL STACK DEVELOPER</motion.span>
          <motion.div className="hero-location" variants={revealVariants}><MapPin size={14} /> MARKAPUR, AP</motion.div>
        </div>
        <motion.h1 variants={revealVariants}>
          I ENGINEER <span className="highlight-red">INTELLIGENT</span><br />
          EXPERIENCES THROUGH<br />
          THE <span className="highlight-white">MERN STACK</span>.
        </motion.h1>
        <div className="hero-cta">
          <motion.a href="mailto:ashokgumma20@gmail.com" className="primary-btn" variants={revealVariants}>
            LET'S TALK <ArrowUpRight size={20} />
          </motion.a>
          <motion.p className="hero-desc" variants={revealVariants}>
            Final Year B.Tech Student (CSE - AI) at Parul University specializing in scalable 
            web solutions, real-time communication, and personalized AI platforms.
          </motion.p>
        </div>
      </motion.div>
      <div className="scroll-indicator">
        <ChevronDown size={24} />
      </div>
    </section>
  );
};

const ProjectCard = ({ project, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10% 0px -10% 0px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { 
        staggerChildren: 0.15,
        delayChildren: 0.2
      } 
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
  };

  const imageVariants = {
    hidden: { scale: 1.1, opacity: 0 },
    visible: { scale: 1, opacity: 1, transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] } }
  };

  return (
    <motion.div 
      className="project-card"
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
    >
      <motion.div className="project-index" variants={itemVariants}>0{index + 1}</motion.div>
      <div className="project-image">
        <motion.img 
          src={project.image} 
          alt={project.title} 
          variants={imageVariants}
        />
        <div className="project-overlay">
          <motion.div className="tags" variants={itemVariants}>
            {project.tags.map(tag => <span key={tag} className="tag">{tag}</span>)}
          </motion.div>
        </div>
      </div>
      <div className="project-info">
        <motion.div className="project-header" variants={itemVariants}>
          <h3>{project.title}</h3>
          <span className="project-tagline">{project.tagline}</span>
        </motion.div>
        <motion.p variants={itemVariants}>{project.description}</motion.p>
        <motion.div className="project-features" variants={itemVariants}>
          {project.features.map((feature, i) => (
            <span key={i} className="feature-item"><Zap size={12} /> {feature}</span>
          ))}
        </motion.div>
        <motion.div className="project-links" variants={itemVariants}>
          <a href={project.link} className="link-btn" target="_blank" rel="noopener noreferrer"><Globe size={18} /> {project.status || "Live Demo"}</a>
        </motion.div>
      </div>
    </motion.div>
  );
};

const BackgroundEye = () => {
  const { scrollYProgress } = useScroll();
  const irisY = useTransform(scrollYProgress, [0, 1], [-20, 20]);
  
  return (
    <div className="background-eye-container">
      <motion.svg 
        width="600" 
        height="300" 
        viewBox="0 0 600 300" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        initial={{ opacity: 0, scaleY: 0 }}
        animate={{ opacity: 0.05, scaleY: 1 }}
        transition={{ duration: 2, ease: "easeOut", delay: 1 }}
      >
        {/* Eyelid Upper */}
        <path d="M50 150C50 150 150 50 300 50C450 50 550 150 550 150" stroke="white" strokeWidth="1" />
        {/* Eyelid Lower */}
        <path d="M50 150C50 150 150 250 300 250C450 250 550 150 550 150" stroke="white" strokeWidth="1" />
        {/* Iris */}
        <motion.circle 
          cx="300" cy="150" r="60" stroke="white" strokeWidth="1" 
          style={{ y: irisY }} 
          animate={{ x: [0, 5, -5, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        {/* Pupil */}
        <motion.circle 
          cx="300" cy="150" r="20" fill="white" 
          style={{ y: irisY }}
          animate={{ x: [0, 8, -8, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.svg>
    </div>
  );
};

const App = () => {
  const projects = [
    {
      title: "Anva",
      tagline: "Learning & Collaboration",
      description: "A premium peer-to-peer platform for learning and teaching skills, featuring real-time collaboration and AI assistance. Connecting people through shared knowledge.",
      features: ["Real-time Chat & Video (Stream)", "Integrated Code Compiler", "AI Learning Assistant"],
      tags: ["Clerk", "MongoDB", "MERN", "Vite", "Stream Chat"],
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1200",
      link: "https://anva-akzm.onrender.com/"
    },
    {
      title: "As You Wish",
      tagline: "Personalized AI Assistance",
      description: "An adaptive AI assistant platform that provides conversational task guidance with natural emotional resonance and secure Google authentication.",
      features: ["Adaptive User Responses", "Conversational AI Interface", "Google OAuth Integration"],
      tags: ["MERN", "Vite", "Google OAuth", "REST APIs"],
      image: "https://images.unsplash.com/photo-1535378917042-10a22c95931a?auto=format&fit=crop&q=80&w=1200",
      link: "https://as-you-wish-q2lj.onrender.com/"
    }
  ];

  const skillGroups = [
    { title: "Languages", skills: ["Java", "JavaScript", "Python", "SQL"] },
    { title: "Frontend", skills: ["React", "Next.js", "Tailwind CSS", "DaisyUI"] },
    { title: "Backend", skills: ["Node.js", "Express.js", "MongoDB", "Clerk", "JWT Auth"] },
    { title: "Cloud & Dev", skills: ["AWS (EC2/S3)", "GitHub", "Postman", "VS Code"] }
  ];

  return (
    <div className="app-container">
      <BackgroundEye />
      <Navbar />
      <main>
        <Hero />
        
        <section className="about-section">
          <div className="section-grid">
            <motion.div 
              className="grid-item education-card"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="experience-section">
                <div className="card-header">
                  <Cpu size={24} />
                  <h2>EXPERIENCE & CERTIFICATIONS</h2>
                </div>
                <div className="edu-content">
                  <div className="exp-item">
                    <h3>Cognifiz</h3>
                    <p className="edu-sub">Full Stack Developer Intern (Certified)</p>
                  </div>
                  <div className="exp-item" style={{ marginTop: '24px' }}>
                    <h3>Corizo</h3>
                    <p className="edu-sub">Web Development Training (Internship Certified)</p>
                    <span className="cert-date">May 2025 — June 2025</span>
                  </div>
                </div>
              </div>

              <div className="education-block" style={{ marginTop: '40px', paddingTop: '40px', borderTop: '1px solid var(--border)' }}>
                <div className="card-header">
                  <GraduationCap size={24} />
                  <h2>EDUCATION</h2>
                </div>
                <div className="edu-content">
                  <h3>Parul University</h3>
                  <p className="edu-sub">B.Tech in Computer Science (AI)</p>
                  <div className="edu-footer">
                    <span><Calendar size={14} /> 2023 — 2027</span>
                    <span className="cgpa">CGPA: 7.18</span>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              className="grid-item skills-card"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="card-header">
                <Terminal size={24} />
                <h2>CORE SKILLS</h2>
              </div>
              <div className="skills-container">
                {skillGroups.map((group, i) => (
                  <motion.div 
                    key={i} 
                    className="skill-group"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <h4>{group.title}</h4>
                    <div className="skill-tags">
                      {group.skills.map(s => <span key={s}>{s}</span>)}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        <section className="projects-section">
          <div className="section-header">
            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              SELECTED WORK
            </motion.h2>
            <motion.div 
              className="section-line"
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
            />
          </div>
          <div className="projects-list">
            {projects.map((p, i) => (
              <ProjectCard key={i} project={p} index={i} />
            ))}
          </div>
        </section>

        <section className="contact-footer">
          <div className="footer-main">
            <div className="footer-left">
              <motion.h2
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                READY TO BUILD <br />SOMETHING ICONIC?
              </motion.h2>
              <motion.a 
                href="mailto:ashokgumma20@gmail.com" 
                className="footer-cta"
                whileHover={{ x: 20 }}
              >
                LET'S CONNECT <ArrowUpRight size={48} />
              </motion.a>
            </div>
            <div className="footer-right">
              <div className="contact-info">
                {[
                  { icon: Smartphone, text: "+91 7680889083" },
                  { icon: Mail, text: "ashokgumma20@gmail.com" },
                  { icon: MapPin, text: "Markapur, Andhra Pradesh" }
                ].map((item, i) => (
                  <motion.div 
                    key={i} 
                    className="info-item"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <item.icon size={20} />
                    <span>{item.text}</span>
                  </motion.div>
                ))}
              </div>
              <div className="social-grid">
                <a href="https://github.com/Ashok-Gumma" className="social-link" target="_blank" rel="noopener noreferrer"><GithubIcon /> GITHUB</a>
                <a href="https://linkedin.com/in/ashok-gumma1" className="social-link" target="_blank" rel="noopener noreferrer"><LinkedinIcon /> LINKEDIN</a>
                <a href="https://leetcode.com/u/gummaashok/" className="social-link" target="_blank" rel="noopener noreferrer"><LeetCodeIcon /> LEETCODE</a>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <span>© {new Date().getFullYear()} ASHOK GUMMA</span>
            <span>CRAFTING DIGITAL EXCELLENCE</span>
          </div>
        </section>
      </main>
    </div>
  );
};

export default App;