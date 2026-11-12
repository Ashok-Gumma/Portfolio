import React, { useState, useEffect, useMemo, useCallback, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion';
import Lenis from 'lenis';
import {
  ArrowUpRight,
  Mail,
  MapPin,
  Briefcase,
  GraduationCap,
  Sparkles,
  ExternalLink,
  Copy,
  Check,
  Cpu,
  Database,
  Server,
  Layout,
  X,
  Code2,
  Terminal,
  Search,
  ChevronLeft,
  ChevronRight,
  Clock,
  Menu,
  Award,
  Lock,
} from 'lucide-react';

import {
  PROJECTS,
  SKILL_MATRIX,
  GALLERY_ITEMS,
  PORTFOLIO_IMAGES,
  CONTACT_EMAIL,
  SOCIAL_LINKS,
} from './data/portfolioData';

import { TiltCard } from './components/TiltCard';
import { AmbientGlow } from './components/AmbientGlow';
import { ScrollToTop } from './components/ScrollToTop';
import { Preloader } from './components/Preloader';

import './App.css';

// SVG Social Icons
const GithubIcon = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
  </svg>
);

const LinkedinIcon = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

const LeetCodeIcon = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M13.483 0a1.374 1.374 0 0 0-.961.414l-4.593 4.593a1.381 1.381 0 0 0 0 1.954l1.954 1.954a1.381 1.381 0 0 0 1.954 0L14.717 6.04a1.374 1.374 0 0 0 0-1.953l-4.593-4.593l-.641-.493a1.374 1.374 0 0 0-1.02-.274H13.48zM7.332 5.034a1.374 1.374 0 0 0-.961.414L1.778 10.04a1.381 1.381 0 0 0 0 1.954l1.954 1.954a1.381 1.381 0 0 0 1.954 0l4.593-4.593a1.374 1.374 0 0 0 0-1.953L5.686 5.448l-.641-.414a1.374 1.374 0 0 0-.961.414l-.752.752a1.374 1.374 0 0 0 0 1.953l1.954 1.954a1.374 1.374 0 0 0 1.954 0l1.101-1.101L7.332 5.034z" />
    <path d="M16.668 18.966a1.374 1.374 0 0 0 .961-.414l4.593-4.593a1.381 1.381 0 0 0 0-1.954l-1.954-1.954a1.381 1.381 0 0 0-1.954 0l-4.593 4.593a1.374 1.374 0 0 0 0 1.953l1.954 1.506l.641.414a1.374 1.374 0 0 0 .961.414l.752-.752a1.374 1.374 0 0 0 0-1.953l-1.954-1.954a1.381 1.381 0 0 0-1.954 0l-1.101 1.101l1.101 1.101zM10.517 24a1.374 1.374 0 0 0 .961-.414l4.593-4.593a1.381 1.381 0 0 0 0-1.954l-1.954-1.954a1.381 1.381 0 0 0-1.954 0L7.136 19.345a1.374 1.374 0 0 0 0 1.953l4.593 4.593l.641.493a1.374 1.374 0 0 0 1.02.274H10.517z" />
  </svg>
);

const SKILL_ICON_MAP = {
  layout: <Layout size={18} />,
  server: <Server size={18} />,
  database: <Database size={18} />,
  terminal: <Terminal size={18} />,
  cpu: <Cpu size={18} />,
  code: <Code2 size={18} />,
};

const NAV_ITEMS = [
  { id: 'about', label: 'Overview', href: '#about' },
  { id: 'projects', label: 'Selected Works', href: '#projects' },
  { id: 'skills', label: 'Stack Matrix', href: '#skills' },
  { id: 'experience', label: 'Journey', href: '#experience' },
];

// Motion animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.07,
      delayChildren: 0.04,
    },
  },
};

const popIn = {
  hidden: { opacity: 0, scale: 0.92, y: 14 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { type: 'spring', damping: 22, stiffness: 280 },
  },
};

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [toastMessage, setToastMessage] = useState(null);
  const [showHireWidget, setShowHireWidget] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('about');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [skillSearchQuery, setSkillSearchQuery] = useState('');
  const [activeLightboxIndex, setActiveLightboxIndex] = useState(null);
  const [currentTime, setCurrentTime] = useState('');

  const toastTimerRef = useRef(null);
  const emailTimerRef = useRef(null);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 32, restDelta: 0.001 });

  const showToast = useCallback((message) => {
    setToastMessage(message);
    if (toastTimerRef.current) clearTimeout(toastTimerRef.current);
    toastTimerRef.current = setTimeout(() => setToastMessage(null), 2400);
  }, []);

  useEffect(() => {
    return () => {
      if (toastTimerRef.current) clearTimeout(toastTimerRef.current);
      if (emailTimerRef.current) clearTimeout(emailTimerRef.current);
    };
  }, []);

  // Update live Indian Standard Time clock
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const timeString = now.toLocaleTimeString('en-US', {
        timeZone: 'Asia/Kolkata',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true,
      });
      setCurrentTime(timeString);
    };

    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  // Initialize smooth momentum scrolling with Lenis (respects reduced motion)
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return undefined;
    }

    const lenis = new Lenis({
      duration: 1.15,
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

  // Highlight active section in navigation
  useEffect(() => {
    const sectionIds = ['about', 'projects', 'skills', 'experience', 'contact'];
    const elements = sectionIds.map((id) => document.getElementById(id)).filter(Boolean);
    if (elements.length === 0) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible.length > 0) {
          setActiveSection(visible[0].target.id);
        }
      },
      { rootMargin: '-25% 0px -55% 0px', threshold: [0.1, 0.25, 0.5] }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const handleCopyEmail = useCallback(() => {
    navigator.clipboard?.writeText(CONTACT_EMAIL).catch(() => {});
    setCopiedEmail(true);
    if (emailTimerRef.current) clearTimeout(emailTimerRef.current);
    emailTimerRef.current = setTimeout(() => setCopiedEmail(false), 2400);
    showToast(`Email copied to clipboard: ${CONTACT_EMAIL}`);
  }, [showToast]);

  const handleCopyColor = useCallback(
    (hex) => {
      navigator.clipboard?.writeText(hex).catch(() => {});
      showToast(`Color swatch copied: ${hex}`);
    },
    [showToast]
  );

  const projectCategories = useMemo(() => {
    const countFor = (cat) => PROJECTS.filter((p) => p.category.includes(cat)).length;
    return [
      { id: 'all', label: `All Projects (${PROJECTS.length})` },
      { id: 'ai', label: `AI & Hybrid ML (${countFor('ai')})` },
      { id: 'fullstack', label: `Full-Stack & Systems (${countFor('fullstack')})` },
      { id: 'enterprise', label: `Enterprise ERP & CRM (${countFor('enterprise')})` },
      { id: 'realtime', label: `Real-Time & Collab (${countFor('realtime')})` },
    ];
  }, []);

  const filteredProjects = useMemo(() => {
    if (selectedCategory === 'all') return PROJECTS;
    return PROJECTS.filter((p) => p.category.includes(selectedCategory));
  }, [selectedCategory]);

  const skillSearchResults = useMemo(() => {
    const query = skillSearchQuery.toLowerCase().trim();
    const isFiltered = query.length > 0;

    const cards = SKILL_MATRIX.map((item) => {
      const matchesCategory = item.category.toLowerCase().includes(query);
      const matchingSkills = item.skills.filter((s) => s.toLowerCase().includes(query));
      const isHighlighted = isFiltered && (matchesCategory || matchingSkills.length > 0);
      const matchedInCard = isHighlighted
        ? matchingSkills.length > 0
          ? matchingSkills.length
          : item.skills.length
        : 0;
      return {
        ...item,
        isHighlighted,
        isDimmed: isFiltered && !isHighlighted,
        matchingSkillSet: new Set(matchingSkills),
        matchedInCard,
      };
    });

    const matchCount = cards.reduce((sum, card) => sum + card.matchedInCard, 0);
    return { cards, isFiltered, matchCount };
  }, [skillSearchQuery]);

  const openLightboxById = useCallback((id) => {
    const idx = GALLERY_ITEMS.findIndex((item) => item.id === id);
    if (idx !== -1) setActiveLightboxIndex(idx);
  }, []);

  const nextLightbox = useCallback((e) => {
    if (e) e.stopPropagation();
    setActiveLightboxIndex((prev) => (prev + 1) % GALLERY_ITEMS.length);
  }, []);

  const prevLightbox = useCallback((e) => {
    if (e) e.stopPropagation();
    setActiveLightboxIndex((prev) => (prev - 1 + GALLERY_ITEMS.length) % GALLERY_ITEMS.length);
  }, []);

  // Keyboard navigation & scroll lock for Lightbox and Mobile Menu
  useEffect(() => {
    if (activeLightboxIndex !== null) {
      const prevOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';

      const handleKeyDown = (e) => {
        if (e.key === 'Escape') setActiveLightboxIndex(null);
        if (e.key === 'ArrowRight') nextLightbox();
        if (e.key === 'ArrowLeft') prevLightbox();
      };

      window.addEventListener('keydown', handleKeyDown);
      return () => {
        document.body.style.overflow = prevOverflow;
        window.removeEventListener('keydown', handleKeyDown);
      };
    }

    if (mobileMenuOpen) {
      const handleEscape = (e) => {
        if (e.key === 'Escape') setMobileMenuOpen(false);
      };
      window.addEventListener('keydown', handleEscape);
      return () => window.removeEventListener('keydown', handleEscape);
    }

    return undefined;
  }, [activeLightboxIndex, mobileMenuOpen, nextLightbox, prevLightbox]);

  return (
    <div className="portfolio-root graph-paper-bg">
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>

      {/* 2-Stage Retro Typographic Loader */}
      <AnimatePresence mode="wait">
        {isLoading && <Preloader onComplete={() => setIsLoading(false)} />}
      </AnimatePresence>

      {/* Subtle Ambient Mouse Spotlight for Desktop */}
      <AmbientGlow />

      {/* Floating Scroll to Top with Circular Depth Ring */}
      <ScrollToTop />

      {/* Top Scroll Indicator Line */}
      <motion.div className="top-scroll-line" style={{ scaleX }} />

      {/* =========================================================
          LIVE TELEMETRY HUD BAR (TOP SYSTEM STATUS)
          ========================================================= */}
      <div className="telemetry-top-strip">
        <div className="main-container">
          <div className="telemetry-content">
            <div className="telemetry-left">
              <span className="telemetry-dot"></span>
              <span className="telemetry-label">SYSTEM:</span>
              <span className="telemetry-val">ONLINE • 2026 PORTFOLIO</span>
            </div>

            <div className="telemetry-center">
              <Clock size={12} className="telemetry-icon" aria-hidden="true" />
              <span className="telemetry-time">
                {currentTime || '11:38 AM IST'} • ANDHRA PRADESH, INDIA
              </span>
            </div>

            <div className="telemetry-right">
              <div className="telemetry-status-pill">
                <span className="pulse-green-mini"></span>
                <span>OPEN FOR ROLES</span>
              </div>
            </div>
          </div>
        </div>
      </div>

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
                <span className="brand-role">Full-Stack &amp; AI Systems [2026]</span>
              </div>
            </a>

            {/* Desktop Navigation */}
            <nav className="nav-menu desktop-nav" aria-label="Primary navigation">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.id}
                  href={item.href}
                  className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
                >
                  {item.label}
                </a>
              ))}

              <a href="#contact" className="nav-cta-btn">
                Let's Talk <ArrowUpRight size={14} aria-hidden="true" />
              </a>
            </nav>

            {/* Mobile Menu Trigger */}
            <button
              type="button"
              className="mobile-hamburger-btn"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              className="mobile-nav-drawer"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25 }}
            >
              <nav className="mobile-nav-links" aria-label="Mobile navigation">
                {NAV_ITEMS.map((item) => (
                  <a
                    key={item.id}
                    href={item.href}
                    className={activeSection === item.id ? 'active' : ''}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                ))}
                <a
                  href="#contact"
                  className="mobile-cta-link"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Let's Talk →
                </a>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <main id="main-content">
        {/* =========================================================
            1. HERO & STUDIO SHEET SECTION (EDITORIAL & TECHNICAL AESTHETIC)
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

              {/* Aesthetic Stamp Stickers Row */}
              <motion.div className="stamp-stickers-row" variants={fadeInUp}>
                <motion.div
                  className="stamp-sticker"
                  whileHover={{ scale: 1.04, y: -2 }}
                  whileTap={{ scale: 0.96 }}
                >
                  <MapPin size={13} aria-hidden="true" />
                  <span>ANDHRA PRADESH, INDIA</span>
                </motion.div>

                <motion.div
                  className="stamp-sticker green-status"
                  whileHover={{ scale: 1.04, y: -2 }}
                  whileTap={{ scale: 0.96 }}
                >
                  <span className="pulse-circle"></span>
                  <span>AVAILABLE FOR FULL-STACK / SDE ROLES</span>
                </motion.div>

                <motion.div
                  className="stamp-sticker red-accent"
                  whileHover={{ scale: 1.04, y: -2 }}
                  whileTap={{ scale: 0.96 }}
                >
                  <Sparkles size={13} aria-hidden="true" />
                  <span>PORTFOLIO EDITION 2026</span>
                </motion.div>

                <motion.div
                  className="stamp-sticker"
                  whileHover={{ scale: 1.04, y: -2 }}
                  whileTap={{ scale: 0.96 }}
                >
                  <Award size={13} aria-hidden="true" />
                  <span>B.TECH CSE (AI)</span>
                </motion.div>
              </motion.div>

              {/* Top Row: Aesthetic Portrait + High-End Editorial Greeting */}
              <div className="hero-top-row">
                {/* Aesthetic Portrait Frame */}
                <motion.div
                  className="aesthetic-avatar-wrapper"
                  variants={popIn}
                  whileHover={{ scale: 1.02, y: -3 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => openLightboxById('portrait')}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      openLightboxById('portrait');
                    }
                  }}
                  role="button"
                  tabIndex={0}
                  aria-label="Expand Ashok Shankar Gumma portrait in lightbox"
                  title="Click to expand portrait"
                >
                  <div className="aesthetic-avatar-glow"></div>
                  <div className="aesthetic-avatar-frame">
                    <img
                      src={PORTFOLIO_IMAGES.portrait}
                      alt="Ashok Shankar Gumma"
                      className="aesthetic-avatar-img"
                    />
                    <div className="avatar-ambient-sheen"></div>
                    <div className="avatar-status-pill">
                      <span className="pulse-circle"></span>
                      <span>Available • SDE</span>
                    </div>
                    <div className="hover-expand-pill">
                      <Sparkles size={11} aria-hidden="true" /> Expand
                    </div>
                  </div>
                </motion.div>

                {/* Editorial Greeting Container */}
                <motion.div className="hero-greeting-container" variants={fadeInUp}>
                  <div className="greeting-eyebrow-tag">
                    <Sparkles size={13} color="var(--accent-red)" aria-hidden="true" />
                    <span>FULL-STACK ENGINEER &amp; AI SPECIALIST</span>
                  </div>

                  <h1 className="studio-greeting-title">
                    Hey! I'm <span className="highlight-accent">Ashok</span>{' '}
                    <span className="highlight-serif">Shankar Gumma</span>
                  </h1>

                  <p className="studio-greeting-sub">
                    Full-Stack Developer building modern web applications, scalable backend systems,
                    and AI platforms. Architecting platforms like <strong>ANVA</strong> &amp;{' '}
                    <strong>SolarGrid</strong> with clean code, intuitive UI design, and production
                    reliability.
                  </p>

                  <div className="hero-quick-action-strip">
                    <motion.a
                      href="#projects"
                      className="hero-pill-cta"
                      whileHover={{ scale: 1.04, y: -2 }}
                      whileTap={{ scale: 0.96 }}
                    >
                      <span>Explore Works ({PROJECTS.length})</span>
                      <ArrowUpRight size={14} aria-hidden="true" />
                    </motion.a>

                    <motion.button
                      type="button"
                      onClick={handleCopyEmail}
                      className="hero-pill-ghost"
                      whileHover={{ scale: 1.04, y: -2 }}
                      whileTap={{ scale: 0.96 }}
                    >
                      {copiedEmail ? (
                        <Check size={14} color="#10B981" aria-hidden="true" />
                      ) : (
                        <Copy size={14} aria-hidden="true" />
                      )}
                      <span>{copiedEmail ? 'Copied to Clipboard!' : 'Copy Email'}</span>
                    </motion.button>

                    <div className="hero-social-icons-group">
                      <a
                        href={SOCIAL_LINKS.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hero-social-icon-btn"
                        aria-label="GitHub Profile"
                        title="GitHub"
                      >
                        <GithubIcon size={16} />
                      </a>
                      <a
                        href={SOCIAL_LINKS.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hero-social-icon-btn"
                        aria-label="LinkedIn Profile"
                        title="LinkedIn"
                      >
                        <LinkedinIcon size={16} />
                      </a>
                      <a
                        href={SOCIAL_LINKS.leetcode}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hero-social-icon-btn"
                        aria-label="LeetCode Profile"
                        title="LeetCode"
                      >
                        <LeetCodeIcon size={16} />
                      </a>
                    </div>
                  </div>
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
                    Whether it's in my workspace or late night coding sessions, I am always designing
                    or engineering scalable systems. I love to{' '}
                    <strong>
                      architect clean databases, write robust backend APIs, and build sleek
                      interactive web apps
                    </strong>
                    .
                  </p>
                  <p className="bio-editorial-text">
                    Full-Stack Engineer &amp; AI specialist. Currently focused on building
                    production-ready web platforms, exploring cloud architecture, and regular
                    problem solving on LeetCode.
                  </p>
                  <motion.div className="bio-status-card" whileHover={{ scale: 1.02 }}>
                    <span className="pulse-circle"></span>
                    <span>Available for SDE / Full-Stack</span>
                  </motion.div>
                </motion.div>

                {/* Column 2: Experience */}
                <motion.div className="studio-col" variants={fadeInUp}>
                  <div className="col-header-tag">
                    <span className="col-title">Experience</span>
                    <span className="col-lang-switch">CAREER</span>
                  </div>

                  <div className="experience-item">
                    <span className="exp-year-badge">AUG 2026 • ADOBE</span>
                    <h4 className="exp-company-title">Adobe University Hackathon</h4>
                    <p className="exp-role-sub">
                      Participated in the nationwide Adobe hackathon organised by Adobe &amp; Unstop.
                    </p>
                  </div>

                  <div className="experience-item">
                    <span className="exp-year-badge">2026 • ZETHETA ALGORITHMS</span>
                    <h4 className="exp-company-title">Frontend Engineer Intern</h4>
                    <p className="exp-role-sub">
                      Built a responsive 8-step loan application frontend using React.js, featuring
                      KYC verification, document upload workflows, client-side validation, and state
                      persistence.
                    </p>
                    <p className="exp-clients-list">
                      React.js • Multi-step Form • Client-side Validation • UX Workflows
                    </p>
                  </div>

                  <div className="experience-item">
                    <span className="exp-year-badge">2025 • CORIZO</span>
                    <h4 className="exp-company-title">Web Development Trainee</h4>
                    <p className="exp-role-sub">
                      Completed intensive training on MERN architecture, secure auth patterns, and
                      REST API optimization.
                    </p>
                  </div>
                </motion.div>

                {/* Column 3: Education & Focus Areas */}
                <motion.div className="studio-col" variants={fadeInUp}>
                  <div className="col-header-tag">
                    <span className="col-title">Education &amp; Focus</span>
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
                      <span className="focus-arrow">▶</span> Google Antigravity &amp; Agentic AI
                    </motion.li>
                    <motion.li className="focus-item" whileHover={{ x: 5 }}>
                      <span className="focus-arrow">▶</span> DevOps &amp; Cloud (Active Focus)
                    </motion.li>
                    <motion.li className="focus-item" whileHover={{ x: 5 }}>
                      <span className="focus-arrow">▶</span> Full-Stack Platforms (MERN/Next)
                    </motion.li>
                    <motion.li className="focus-item" whileHover={{ x: 5 }}>
                      <span className="focus-arrow">▶</span> Hybrid ML + LLM Architectures
                    </motion.li>
                  </ul>
                </motion.div>

                {/* Column 4: Tech Stack */}
                <motion.div className="studio-col" variants={fadeInUp}>
                  <div className="col-header-tag">
                    <span className="col-title">Tech Stack</span>
                    <span className="col-lang-switch">TOOLS</span>
                  </div>

                  <div className="tech-pills-grid">
                    {[
                      { icon: '⚛', name: 'React' },
                      { icon: '⚡', name: 'Node.js' },
                      { icon: '🐘', name: 'PostgreSQL' },
                      { icon: '🐳', name: 'Docker' },
                      { icon: '🪐', name: 'Antigravity' },
                      { icon: '🍃', name: 'MongoDB' },
                      { icon: '🎨', name: 'Tailwind' },
                      { icon: '🐙', name: 'Git' },
                    ].map((tool) => (
                      <motion.div
                        key={tool.name}
                        className="tech-pill-badge"
                        whileHover={{ y: -2, scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <span className="tech-pill-icon" aria-hidden="true">
                          {tool.icon}
                        </span>
                        <span className="tech-pill-name">{tool.name}</span>
                      </motion.div>
                    ))}
                  </div>

                  <p className="tools-footer-text">
                    Production stack spanning modern client interfaces, scalable APIs, database
                    modeling, active DevOps containerization, and Google Antigravity AI agent
                    orchestration.
                  </p>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* =========================================================
            2. DARK STUDIO TRANSITION BANNER (DEVELOPER HERO)
            ========================================================= */}
        <motion.section
          className="dark-technical-bg studio-break-banner"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="technical-corner tc-top-left"></div>
          <div className="technical-corner tc-top-right"></div>
          <div className="technical-corner tc-bottom-left"></div>
          <div className="technical-corner tc-bottom-right"></div>

          <div className="main-container">
            <div className="studio-break-layout">
              <div className="banner-left-typography">
                <span className="banner-badge-tag">FULL-STACK &amp; AI SYSTEMS ARCHITECT</span>
                <h2 className="banner-headline-text">
                  Systems <span className="highlight-serif">Architecture</span> &amp; Real-Time
                  Engines
                </h2>
                <p className="banner-subtext">
                  Bridging intuitive modern user interfaces with resilient backend infrastructure.
                  From high-speed PostgreSQL relational design to AI contextual prompt
                  architectures.
                </p>
                <div className="banner-action-pills">
                  <span className="banner-pill">⚡ MERN &amp; Next.js</span>
                  <span className="banner-pill">🐘 PostgreSQL / Prisma</span>
                  <span className="banner-pill">🤖 Contextual AI / LLMs</span>
                  <span className="banner-pill">🎥 Stream Video &amp; WebRTC</span>
                </div>
              </div>

              <TiltCard
                className="banner-reclining-cutout-wrap"
                onClick={() => openLightboxById('coding-desk')}
                aria-label="Expand production engineering workspace photo in lightbox"
                title="Click to expand workspace visual"
              >
                <img
                  src={PORTFOLIO_IMAGES.codingDesk}
                  alt="Ashok Coding Workspace Studio Hero"
                  className="banner-cutout-img"
                  loading="lazy"
                  decoding="async"
                />
                <div className="workspace-badge-pill">
                  <Terminal size={12} aria-hidden="true" />
                  <span>DEV WORKSPACE • 2026</span>
                </div>
              </TiltCard>
            </div>
          </div>
        </motion.section>

        {/* =========================================================
            3. EDITORIAL MARQUEE TICKER (INTERMEZZO)
            ========================================================= */}
        <div className="marquee-ribbon-section" aria-hidden="true">
          <div className="marquee-track">
            <div className="marquee-item">
              FULL-STACK ARCHITECTURE <span className="marquee-bullet">✦</span>
            </div>
            <div className="marquee-item accent">
              AI-POWERED PLATFORMS <span className="marquee-bullet">✦</span>
            </div>
            <div className="marquee-item">
              ERP &amp; CRM ENTERPRISE SYSTEMS <span className="marquee-bullet">✦</span>
            </div>
            <div className="marquee-item accent">
              REAL-TIME VIDEO &amp; COMPILER <span className="marquee-bullet">✦</span>
            </div>
            <div className="marquee-item">
              POSTGRESQL &amp; SCALABLE BACKENDS <span className="marquee-bullet">✦</span>
            </div>
            <div className="marquee-item accent">
              2026 EDITION <span className="marquee-bullet">✦</span>
            </div>

            {/* Duplicate for infinite loop */}
            <div className="marquee-item">
              FULL-STACK ARCHITECTURE <span className="marquee-bullet">✦</span>
            </div>
            <div className="marquee-item accent">
              AI-POWERED PLATFORMS <span className="marquee-bullet">✦</span>
            </div>
            <div className="marquee-item">
              ERP &amp; CRM ENTERPRISE SYSTEMS <span className="marquee-bullet">✦</span>
            </div>
            <div className="marquee-item accent">
              REAL-TIME VIDEO &amp; COMPILER <span className="marquee-bullet">✦</span>
            </div>
            <div className="marquee-item">
              POSTGRESQL &amp; SCALABLE BACKENDS <span className="marquee-bullet">✦</span>
            </div>
            <div className="marquee-item accent">
              2026 EDITION <span className="marquee-bullet">✦</span>
            </div>
          </div>
        </div>

        {/* =========================================================
            4. BESPOKE PROJECT SHOWCASE BOARDS WITH INTERACTIVE FILTER
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
              <h2 className="section-main-heading">Featured Systems &amp; Production Applications</h2>
              <p className="section-desc-text">
                Explore fully engineered platforms combining modern UI design, backend
                infrastructure, and AI features.
              </p>

              <div className="project-filter-pills-row" role="tablist" aria-label="Filter projects by category">
                {projectCategories.map((tab) => (
                  <button
                    key={tab.id}
                    type="button"
                    role="tab"
                    aria-selected={selectedCategory === tab.id}
                    className={`filter-pill-btn ${selectedCategory === tab.id ? 'active' : ''}`}
                    onClick={() => setSelectedCategory(tab.id)}
                  >
                    <span className="pill-text">{tab.label}</span>
                    {selectedCategory === tab.id && (
                      <motion.div
                        className="active-pill-glow"
                        layoutId="activeFilterPill"
                        transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                      />
                    )}
                  </button>
                ))}
              </div>
            </motion.div>

            <motion.div layout className="projects-stack-list">
              <AnimatePresence>
                {filteredProjects.map((project, idx) => (
                  <motion.article
                    key={project.id}
                    layout
                    className={`project-board-card ${project.themeClass}`}
                    initial={{ opacity: 0, y: 35, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.96 }}
                    transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <div className="technical-corner tc-top-left"></div>
                    <div className="technical-corner tc-top-right"></div>
                    <div className="technical-corner tc-bottom-left"></div>
                    <div className="technical-corner tc-bottom-right"></div>

                    <div className="project-board-layout">
                      <div className="project-info-side">
                        <div className="project-meta-pill-row">
                          <span className="project-number-badge">{project.number}</span>
                          <span className="project-tag-pill">PRODUCTION GRADE</span>
                        </div>

                        <h3 className="project-main-title">{project.title}</h3>
                        <p className="project-serif-subtitle">{project.subtitle}</p>
                        <p className="project-narrative-desc">{project.description}</p>

                        <div className="project-tools-used-box">
                          <span className="tools-used-label">Technologies &amp; Tools Used</span>
                          <div className="project-tech-badges-list">
                            {project.tools.map((tool) => (
                              <motion.span
                                key={tool}
                                className="tech-pill-badge"
                                whileHover={{ scale: 1.06, y: -2 }}
                              >
                                {tool}
                              </motion.span>
                            ))}
                          </div>
                        </div>

                        <div className="project-review-quote-box">
                          <div className="review-quote-head">
                            <span className="review-title">{project.reviewTitle}</span>
                            <span className="review-stars" aria-label="5 out of 5 stars">
                              {project.reviewRating}
                            </span>
                          </div>
                          <p className="review-quote-text">{project.reviewText}</p>
                        </div>

                        <div className="project-footer-actions">
                          <div className="palette-swatches-row" aria-label={`${project.title} color palette`}>
                            {project.palette.map((color) => (
                              <motion.button
                                key={color}
                                type="button"
                                className="palette-dot"
                                style={{ backgroundColor: color }}
                                title={`Copy ${color}`}
                                aria-label={`Copy palette color ${color}`}
                                onClick={() => handleCopyColor(color)}
                                whileHover={{ scale: 1.25 }}
                                whileTap={{ scale: 0.9 }}
                              />
                            ))}
                          </div>

                          <div className="project-action-btns-row">
                            <motion.a
                              href={project.liveLink}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="btn-project-cta"
                              whileHover={{ scale: 1.04, y: -2 }}
                              whileTap={{ scale: 0.96 }}
                            >
                              Live Demo <ExternalLink size={14} aria-hidden="true" />
                            </motion.a>
                            <motion.a
                              href={project.githubLink}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="btn-project-ghost"
                              whileHover={{ scale: 1.04, y: -2 }}
                              whileTap={{ scale: 0.96 }}
                            >
                              <GithubIcon size={14} /> Code
                            </motion.a>
                          </div>
                        </div>
                      </div>

                      <div className="project-visual-side">
                        <TiltCard className="mockup-display-card" maxTilt={5}>
                          <div className="mockup-browser-header">
                            <div className="browser-dot dot-red"></div>
                            <div className="browser-dot dot-yellow"></div>
                            <div className="browser-dot dot-green"></div>
                            <a
                              href={project.liveLink}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="browser-url-pill"
                              title={`Visit live site: ${project.liveLink}`}
                            >
                              <Lock size={10} className="browser-lock-icon" aria-hidden="true" />
                              <span>{project.urlLabel}</span>
                            </a>
                          </div>
                          <div className="mockup-img-wrap">
                            <img
                              src={project.image}
                              alt={`${project.title} application preview`}
                              loading="lazy"
                              decoding="async"
                            />
                            <div className="mockup-sheen-effect"></div>
                          </div>
                          <div className="floating-mockup-badge">
                            <Sparkles size={14} color="#FBBF24" aria-hidden="true" />
                            <span>
                              0{idx + 1} • {project.title}
                            </span>
                          </div>
                        </TiltCard>
                      </div>
                    </div>
                  </motion.article>
                ))}
              </AnimatePresence>
            </motion.div>
          </div>
        </section>

        {/* =========================================================
            5. SKILLS & ARCHITECTURE BENTO MATRIX WITH LIVE SEARCH
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
              <h2 className="section-main-heading">Core Skills &amp; Architecture Matrix</h2>
              <p className="section-desc-text">
                Full-stack toolkit spanning modern client-side engineering, scalable backend APIs,
                database modeling, and real-time systems.
              </p>

              <div className="skills-search-bar-wrap">
                <Search size={16} className="search-icon-inside" aria-hidden="true" />
                <input
                  type="text"
                  placeholder="Filter skills (e.g., React, PostgreSQL, Docker, AI, LeetCode)..."
                  value={skillSearchQuery}
                  onChange={(e) => setSkillSearchQuery(e.target.value)}
                  className="skills-search-input"
                  aria-label="Filter technical skills"
                />
                {skillSearchQuery && (
                  <button
                    type="button"
                    className="clear-search-btn"
                    onClick={() => setSkillSearchQuery('')}
                    aria-label="Clear skill search"
                  >
                    <X size={14} />
                  </button>
                )}
              </div>

              {skillSearchResults.isFiltered && (
                <div className="skills-search-feedback" role="status" aria-live="polite">
                  {skillSearchResults.matchCount > 0 ? (
                    <span>
                      Matched <strong>{skillSearchResults.matchCount}</strong> skill
                      {skillSearchResults.matchCount === 1 ? '' : 's'} for &ldquo;
                      {skillSearchQuery.trim()}&rdquo;
                    </span>
                  ) : (
                    <span>
                      No matching skills for &ldquo;{skillSearchQuery.trim()}&rdquo; —{' '}
                      <button
                        type="button"
                        className="skills-reset-link"
                        onClick={() => setSkillSearchQuery('')}
                      >
                        Reset filter
                      </button>
                    </span>
                  )}
                </div>
              )}
            </motion.div>

            <div className="skills-bento-grid">
              {skillSearchResults.cards.map((item, idx) => (
                <motion.div
                  key={item.category}
                  className={`skill-matrix-card ${item.isHighlighted ? 'highlighted-card' : ''} ${item.isDimmed ? 'dimmed-card' : ''}`}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  whileHover={{ y: -5, transition: { type: 'spring', stiffness: 350, damping: 20 } }}
                  transition={{ duration: 0.45, delay: idx * 0.05 }}
                >
                  <div className="skill-card-head">
                    <div className="skill-icon-wrap" aria-hidden="true">
                      {SKILL_ICON_MAP[item.iconKey]}
                    </div>
                    <h3 className="skill-cat-title">{item.category}</h3>
                  </div>

                  <div className="skill-tags-flex">
                    {item.skills.map((s) => {
                      const isSkillMatch =
                        skillSearchResults.isFiltered && item.matchingSkillSet.has(s);
                      return (
                        <motion.span
                          key={s}
                          className={`matrix-skill-badge ${isSkillMatch ? 'active-match' : ''}`}
                          whileHover={{ scale: 1.06, y: -2 }}
                        >
                          {s}
                        </motion.span>
                      );
                    })}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* =========================================================
            6. CAREER JOURNEY & EDUCATION TIMELINE WITH CERTIFICATE LIGHTBOX
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
              <span className="section-label-stamp">BACKGROUND &amp; TIMELINE</span>
              <h2 className="section-main-heading">Experience, Training &amp; Education</h2>
              <p className="section-desc-text">
                Hands-on professional internship experience, technical workshops, and formal
                computer science education.
              </p>
            </motion.div>

            <div className="timeline-editorial-grid">
              {/* Experience Card */}
              <motion.div
                className="timeline-column-card"
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.55 }}
              >
                <div className="timeline-card-header">
                  <Briefcase size={22} color="#FF3825" aria-hidden="true" />
                  <h3 className="timeline-card-title">Professional Experience</h3>
                </div>

                {/* Zetheta Algorithms Certificate Card */}
                <TiltCard
                  className="certificate-feature-card"
                  onClick={() => openLightboxById('cert-zetheta')}
                  aria-label="View Zetheta Algorithms Frontend Engineer Intern certificate"
                  title="Click to view official certificate"
                >
                  <div className="certificate-header-row">
                    <div>
                      <span className="record-date-badge">JUL 2026 — AUG 2026</span>
                      <h4 className="record-role-heading" style={{ marginTop: '4px' }}>
                        Frontend Engineer Intern
                      </h4>
                      <p className="record-organization">Zetheta Algorithms Private Limited</p>
                    </div>
                    <div className="certificate-mini-thumb">
                      <img
                        src={PORTFOLIO_IMAGES.zethetaCert}
                        alt="Zetheta Certificate"
                        loading="lazy"
                        decoding="async"
                      />
                      <span className="cert-zoom-badge">🔍 VIEW</span>
                    </div>
                  </div>
                  <p className="record-bullet-text cert-summary-text">
                    Built a responsive 8-step loan application frontend using React.js with modular
                    components, client-side form validation, document upload flows, and local state
                    persistence.
                  </p>
                </TiltCard>

                {/* Corizo Training Certificate Card */}
                <TiltCard
                  className="certificate-feature-card"
                  onClick={() => openLightboxById('cert-corizo')}
                  aria-label="View Corizo Web Development Training certificate"
                  title="Click to view official certificate"
                >
                  <div className="certificate-header-row">
                    <div>
                      <span className="record-date-badge">MAY 2025 — JUN 2025</span>
                      <h4 className="record-role-heading" style={{ marginTop: '4px' }}>
                        Web Development Trainee
                      </h4>
                      <p className="record-organization">Corizo (Remote Training)</p>
                    </div>
                    <div className="certificate-mini-thumb">
                      <img
                        src={PORTFOLIO_IMAGES.corizoCert}
                        alt="Corizo Certificate"
                        loading="lazy"
                        decoding="async"
                      />
                      <span className="cert-zoom-badge">🔍 VIEW</span>
                    </div>
                  </div>
                  <p className="record-bullet-text cert-summary-text">
                    Completed intensive MERN stack curriculum covering MongoDB, Express, React,
                    Node.js, JWT authentication, and REST API optimization.
                  </p>
                </TiltCard>

                {/* Parul University Projections Workshop Certificate Card */}
                <TiltCard
                  className="certificate-feature-card"
                  onClick={() => openLightboxById('cert-parul')}
                  aria-label="View Parul University Projections Full Stack Web Dev Workshop certificate"
                  title="Click to view official certificate"
                >
                  <div className="certificate-header-row">
                    <div>
                      <span className="record-date-badge">FEB 2026 • WORKSHOP</span>
                      <h4 className="record-role-heading" style={{ marginTop: '4px' }}>
                        Full Stack Web Dev Workshop
                      </h4>
                      <p className="record-organization">Parul University Projections</p>
                    </div>
                    <div className="certificate-mini-thumb">
                      <img
                        src={PORTFOLIO_IMAGES.parulCert}
                        alt="Parul University Projections Certificate"
                        loading="lazy"
                        decoding="async"
                      />
                      <span className="cert-zoom-badge">🔍 VIEW</span>
                    </div>
                  </div>
                  <p className="record-bullet-text cert-summary-text">
                    Participated in hands-on sessions covering modern full-stack application
                    architecture and end-to-end frontend-backend integration during Gujarat's
                    largest tech festival.
                  </p>
                </TiltCard>
              </motion.div>

              {/* Education & Achievements Card */}
              <motion.div
                className="timeline-column-card"
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.55, delay: 0.1 }}
              >
                <div className="timeline-card-header">
                  <GraduationCap size={22} color="#10B981" aria-hidden="true" />
                  <h3 className="timeline-card-title">Education &amp; Milestones</h3>
                </div>

                <div className="timeline-record">
                  <span className="record-date-badge" style={{ background: '#10B981' }}>
                    2023 — 2027
                  </span>
                  <h4 className="record-role-heading">
                    B.Tech in Computer Science &amp; Engineering (AI)
                  </h4>
                  <p className="record-organization">Parul University • Vadodara, Gujarat</p>
                  <p className="record-bullet-text">
                    Focused on Artificial Intelligence, Core Computer Science Fundamentals, Database
                    Management Systems, Operating Systems, and Object-Oriented Programming.{' '}
                    <strong>CGPA: 7.47</strong>
                  </p>
                </div>

                {/* Adobe University Hackathon Interactive Certificate Card */}
                <TiltCard
                  className="certificate-feature-card"
                  onClick={() => openLightboxById('cert-adobe')}
                  aria-label="View Adobe University Hackathon certificate"
                  title="Click to expand official certificate"
                >
                  <div className="certificate-header-row">
                    <div>
                      <span
                        className="record-date-badge"
                        style={{ background: '#FF3825', color: '#FFFFFF' }}
                      >
                        AUG 2026 • ADOBE
                      </span>
                      <h4 className="record-role-heading" style={{ marginTop: '4px' }}>
                        Adobe University Hackathon
                      </h4>
                      <p className="record-organization">Organised by Adobe &amp; Unstop</p>
                    </div>
                    <div className="certificate-mini-thumb">
                      <img
                        src={PORTFOLIO_IMAGES.adobeCert}
                        alt="Adobe Certificate"
                        loading="lazy"
                        decoding="async"
                      />
                      <span className="cert-zoom-badge">🔍 VIEW</span>
                    </div>
                  </div>
                  <p className="record-bullet-text cert-summary-text">
                    Participated in the national-level 24-hour developer hackathon creating
                    innovative digital workflows and modern full-stack web solutions.
                  </p>
                </TiltCard>

                <div className="timeline-record" style={{ marginTop: '20px' }}>
                  <span className="record-date-badge" style={{ background: '#10B981' }}>
                    2024 — 2026
                  </span>
                  <h4 className="record-role-heading">Independent System Architectures</h4>
                  <p className="record-organization">Self-Directed Production Apps</p>
                  <p className="record-bullet-text">
                    Built and shipped multiple full-stack systems including <strong>ANVA</strong>,{' '}
                    <strong>SolarGrid</strong>, and <strong>FRIDAY</strong>.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* =========================================================
            7. EDITORIAL FOOTER & DIRECT CONTACT
            ========================================================= */}
        <footer id="contact" className="site-footer">
          <div className="main-container">
            <div className="footer-card">
              <span className="footer-tag-pill">LET'S COLLABORATE • 2026</span>
              <h2 className="footer-headline">Let's Build Something Meaningful Together.</h2>
              <p className="footer-desc">
                Currently open to full-time Software Development Engineer (SDE), Full-Stack, and
                Backend roles. Available immediately.
              </p>

              <div className="footer-cta-row">
                <motion.a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="btn-footer-primary"
                  whileHover={{ scale: 1.04, y: -2 }}
                  whileTap={{ scale: 0.96 }}
                >
                  <Mail size={18} aria-hidden="true" />
                  <span>Send Direct Email</span>
                </motion.a>

                <motion.button
                  type="button"
                  onClick={handleCopyEmail}
                  className="btn-footer-secondary"
                  whileHover={{ scale: 1.04, y: -2 }}
                  whileTap={{ scale: 0.96 }}
                >
                  {copiedEmail ? (
                    <Check size={18} color="#10B981" aria-hidden="true" />
                  ) : (
                    <Copy size={18} aria-hidden="true" />
                  )}
                  <span>{copiedEmail ? 'Email Copied!' : 'Copy Email'}</span>
                </motion.button>

                <motion.a
                  href={SOCIAL_LINKS.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-footer-secondary"
                  whileHover={{ scale: 1.04, y: -2 }}
                  whileTap={{ scale: 0.96 }}
                >
                  <LinkedinIcon size={18} />
                  <span>Connect on LinkedIn</span>
                </motion.a>
              </div>

              <div className="footer-social-row">
                <motion.a
                  href={SOCIAL_LINKS.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-social-pill"
                  whileHover={{ scale: 1.05, y: -2 }}
                >
                  <GithubIcon size={15} /> GitHub Profile
                </motion.a>
                <motion.a
                  href={SOCIAL_LINKS.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-social-pill"
                  whileHover={{ scale: 1.05, y: -2 }}
                >
                  <LinkedinIcon size={15} /> LinkedIn
                </motion.a>
                <motion.a
                  href={SOCIAL_LINKS.leetcode}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-social-pill"
                  whileHover={{ scale: 1.05, y: -2 }}
                >
                  <LeetCodeIcon size={15} /> LeetCode Profile
                </motion.a>
                <span className="footer-social-pill" style={{ borderColor: 'rgba(255,255,255,0.15)' }}>
                  <MapPin size={15} aria-hidden="true" /> Andhra Pradesh, India
                </span>
              </div>

              <div className="footer-bottom-bar">
                <span>© {new Date().getFullYear()} Ashok Shankar Gumma. All rights reserved.</span>
                <span>Designed &amp; Engineered • Ashok Shankar Gumma</span>
              </div>
            </div>
          </div>
        </footer>
      </main>

      {/* Centered Toast Notification */}
      <AnimatePresence>
        {toastMessage && (
          <motion.div
            className="copy-toast"
            role="status"
            aria-live="polite"
            initial={{ opacity: 0, y: 24, scale: 0.94 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.94 }}
          >
            <div className="toast-sparkle-dot"></div>
            <span>✓ {toastMessage}</span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* =========================================================
          FLOATING "AVAILABLE FOR HIRE" POPUP
          ========================================================= */}
      <AnimatePresence>
        {showHireWidget && (
          <motion.div
            className="floating-hire-widget"
            initial={{ opacity: 0, y: 30 }}
            animate={{
              opacity: 1,
              y: [0, -6, 0],
            }}
            exit={{ opacity: 0, y: 30 }}
            transition={{
              opacity: { duration: 0.4 },
              y: { repeat: Infinity, duration: 3.2, ease: 'easeInOut' },
            }}
          >
            <div className="widget-avatar-circle">
              <img src={PORTFOLIO_IMAGES.portrait} alt="Ashok Shankar Gumma" />
            </div>

            <div className="widget-text-block">
              <span className="pulse-circle"></span>
              <span className="widget-title">Ashok is available for hire</span>
            </div>

            <a href="#contact" className="widget-cta-btn">
              Hire Ashok
            </a>

            <button
              type="button"
              onClick={() => setShowHireWidget(false)}
              className="widget-close-btn"
              title="Dismiss"
              aria-label="Dismiss availability widget"
            >
              <X size={16} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* =========================================================
          AESTHETIC LIGHTBOX MODAL WITH NEXT/PREV CONTROLS
          ========================================================= */}
      <AnimatePresence>
        {activeLightboxIndex !== null && GALLERY_ITEMS[activeLightboxIndex] && (
          <motion.div
            className="lightbox-backdrop"
            role="dialog"
            aria-modal="true"
            aria-label={GALLERY_ITEMS[activeLightboxIndex].title}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveLightboxIndex(null)}
          >
            <motion.div
              className="lightbox-content-card"
              initial={{ scale: 0.92, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.92, opacity: 0, y: 20 }}
              transition={{ type: 'spring', damping: 26, stiffness: 320 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                className="lightbox-close-btn"
                onClick={() => setActiveLightboxIndex(null)}
                aria-label="Close modal"
              >
                <X size={20} />
              </button>

              <button
                type="button"
                className="lightbox-nav-btn nav-prev"
                onClick={prevLightbox}
                aria-label="Previous image"
              >
                <ChevronLeft size={22} />
              </button>

              <button
                type="button"
                className="lightbox-nav-btn nav-next"
                onClick={nextLightbox}
                aria-label="Next image"
              >
                <ChevronRight size={22} />
              </button>

              <div className="lightbox-img-frame">
                <img
                  src={GALLERY_ITEMS[activeLightboxIndex].img}
                  alt={GALLERY_ITEMS[activeLightboxIndex].title}
                />
              </div>

              <div className="lightbox-info-row">
                <div>
                  <div className="lightbox-counter-pill">
                    INDEX {activeLightboxIndex + 1} / {GALLERY_ITEMS.length}
                  </div>
                  <h3 className="lightbox-caption-text">
                    {GALLERY_ITEMS[activeLightboxIndex].title}
                  </h3>
                  <p className="polaroid-sub">{GALLERY_ITEMS[activeLightboxIndex].caption}</p>
                </div>
                <span className="lightbox-tag-text">
                  {GALLERY_ITEMS[activeLightboxIndex].tag}
                </span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default App;
