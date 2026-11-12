import ashokPortrait from '../assets/ashok_portrait_main.jpg';
import ashokPolaroidCoding from '../assets/ashok_polaroid_coding_desk.jpg';
import adobeCertificate from '../assets/adobe_hackathon_certificate.png';
import zethetaCertificate from '../assets/zetheta_internship_certificate.png';
import corizoCertificate from '../assets/corizo_training_certificate.png';
import parulWorkshopCertificate from '../assets/parul_workshop_certificate.png';
import anvaImg from '../assets/anva.png';
import solargridImg from '../assets/solargrid.jpg';
import fridayImg from '../assets/friday.png';

export const CONTACT_EMAIL = 'ashokgumma20@gmail.com';

export const SOCIAL_LINKS = {
  github: 'https://github.com/Ashok-Gumma',
  linkedin: 'https://linkedin.com/in/ashok-gumma1',
  leetcode: 'https://leetcode.com/u/gummaashok/',
};

export const PROJECTS = [
  {
    id: 'anva',
    category: ['ai', 'fullstack', 'realtime'],
    number: 'Project 01 / Peer Learning, Placement Hub & Real-time Collaboration',
    themeClass: 'theme-emerald',
    title: 'ANVA',
    subtitle: 'Peer-to-Peer Knowledge Exchange • Placement Preparation • Real-Time Collaboration',
    description:
      'A peer-to-peer learning, community, and placement-preparation platform. Connects users for 1-on-1 skill exchange based on complementary knowledge, real-time messaging, video calling, and collaborative whiteboards. Features a comprehensive Placement Hub with company-specific preparation tracks (aptitude, technical questions, mock tests, Pomodoro timer), a 24/7 OpenRouter-powered AI study assistant, EduFeed knowledge community, and automated AI content moderation.',
    tools: [
      'JavaScript',
      'React.js',
      'Node.js',
      'Express.js',
      'MongoDB',
      'OpenRouter API',
      'Stream Chat & Video API',
      'Clerk Auth',
      'Placement Hub',
      'EduFeed',
    ],
    reviewTitle: 'P2P Learning & Placement Suite',
    reviewRating: '★★★★★',
    reviewText:
      'Architected mutual skill-exchange matching, company-specific placement tracks with mock tests, automated AI content moderation, and real-time messaging & video calling via Stream API.',
    palette: ['#071E17', '#10B981', '#0F172A', '#FFFFFF'],
    image: anvaImg,
    liveLink: 'https://anva-akzm.onrender.com/',
    githubLink: 'https://github.com/Ashok-Gumma/Anva',
    urlLabel: 'anva-akzm.onrender.com',
  },
  {
    id: 'solargrid',
    category: ['fullstack', 'enterprise'],
    number: 'Project 02 / Rural Clean Energy ERP & CRM Operations',
    themeClass: 'theme-terracotta',
    title: 'SolarGrid',
    subtitle: 'Rural Clean Energy Operations, Supply Chain Logistics & CRM Platform',
    description:
      'An enterprise operations platform combining CRM and ERP capabilities to manage rural clean energy electrification initiatives, equipment supply chains, and field logistics. Features multi-warehouse inventory tracking, procurement workflows, automated delivery challan generation from dispatch data to eliminate manual documentation, and role-based operational dashboards for administrators, warehouse crews, and field staff.',
    tools: [
      'TypeScript',
      'React.js',
      'Next.js',
      'Node.js',
      'Express.js',
      'PostgreSQL',
      'Docker',
      'REST APIs',
      'RBAC',
      'Challan Automation',
    ],
    reviewTitle: 'Clean Energy Operations ERP & CRM',
    reviewRating: '★★★★★',
    reviewText:
      'Engineered normalized PostgreSQL relational schemas for multi-warehouse inventory tracking, automated delivery challan generation directly from dispatch data, and multi-tier RBAC operational workflows.',
    palette: ['#1C140F', '#F97316', '#1E293B', '#F8FAFC'],
    image: solargridImg,
    liveLink: 'https://solar-grid-three.vercel.app/',
    githubLink: 'https://github.com/Ashok-Gumma/solarGrid',
    urlLabel: 'solar-grid-three.vercel.app',
  },
  {
    id: 'friday',
    category: ['ai', 'fullstack'],
    number: 'Project 03 / Contextual Hybrid AI & Mindful Companion',
    themeClass: 'theme-cyber',
    title: 'FRIDAY',
    subtitle: 'Mood-Aware Conversational Intelligence & Mental Wellness Companion',
    description:
      "A mental wellness companion that detects the user's emotional state to deliver mood-adapted conversational responses. Engineered with a hybrid AI architecture coupling custom Python Scikit-Learn emotion classifiers trained on curated datasets with OpenRouter LLMs. Features an intelligent prompt routing pipeline that reduces generative token usage by 30%, persistent conversational memory in MongoDB, and encrypted Google OAuth 2.0 authentication.",
    tools: [
      'Python',
      'JavaScript',
      'React.js',
      'Node.js',
      'Express.js',
      'MongoDB',
      'Hybrid ML Systems',
      'OpenRouter API',
      'Scikit-Learn',
      'Prompt Routing',
      'Google OAuth 2.0',
    ],
    reviewTitle: 'Hybrid ML Systems & Prompt Routing',
    reviewRating: '★★★★★',
    reviewText:
      'Coupled custom Python ML classifiers for emotional detection with OpenRouter LLMs, reducing API token consumption by 30% through intelligent prompt routing with persistent conversational memory.',
    palette: ['#0B1320', '#38BDF8', '#1E293B', '#FFFFFF'],
    image: fridayImg,
    liveLink: 'https://as-you-wish-q2lj.onrender.com/',
    githubLink: 'https://github.com/Ashok-Gumma/Friday',
    urlLabel: 'as-you-wish-q2lj.onrender.com',
  },
];

export const SKILL_MATRIX = [
  {
    category: 'Frontend Engineering',
    iconKey: 'layout',
    skills: [
      'React.js',
      'Next.js',
      'JavaScript (ES6+)',
      'TypeScript',
      'Tailwind CSS',
      'Framer Motion',
      'Responsive Layouts',
    ],
  },
  {
    category: 'Backend & Systems',
    iconKey: 'server',
    skills: [
      'Node.js',
      'Express.js',
      'RESTful APIs',
      'JWT Auth',
      'Clerk Auth',
      'Google OAuth 2.0',
      'RBAC Security',
    ],
  },
  {
    category: 'Databases & Storage',
    iconKey: 'database',
    skills: [
      'PostgreSQL',
      'MongoDB',
      'MySQL',
      'Relational Schema Design',
      'Query Optimization',
      'Prisma / Mongoose',
    ],
  },
  {
    category: 'DevOps & Cloud (Active Focus)',
    iconKey: 'terminal',
    skills: [
      'Docker & Containers',
      'Kubernetes Basics',
      'CI/CD Pipelines',
      'Linux / Bash',
      'Nginx',
      'Git & GitHub Actions',
      'Cloud Deployments',
    ],
  },
  {
    category: 'AI & Hybrid Machine Learning',
    iconKey: 'cpu',
    skills: [
      'Google Antigravity',
      'Agentic AI Workflows',
      'Genkit',
      'Hybrid ML Systems',
      'OpenRouter API',
      'Generative LLMs',
      'Manual Dataset Training',
      'Contextual Prompting',
      'Stream Video / Chat SDK',
      'WebSockets',
    ],
  },
  {
    category: 'Problem Solving & Core',
    iconKey: 'code',
    skills: [
      'Data Structures & Algorithms',
      'LeetCode Problem Solving',
      'MNC Placement Preparation',
      'System Architecture',
    ],
  },
];

export const GALLERY_ITEMS = [
  {
    id: 'portrait',
    img: ashokPortrait,
    title: 'Ashok Shankar Gumma — Studio Portrait',
    tag: 'STUDIO PROFILE • 2026',
    caption: 'Full-Stack Developer & AI Systems Specialist. B.Tech CSE (AI) at Parul University.',
  },
  {
    id: 'coding-desk',
    img: ashokPolaroidCoding,
    title: 'Production Engineering Workspace',
    tag: 'DEV WORKSPACE • 2026',
    caption: 'Full-Stack Developer & AI Systems Engineer at the coding workspace.',
  },
  {
    id: 'cert-zetheta',
    img: zethetaCertificate,
    title: 'Zetheta Algorithms — Certificate of Project Work Experience',
    tag: 'ZETHETA • 06 AUG 2026',
    caption: 'Frontend Engineer Intern on 8-step Loan Application Form. Managing Director: Suketu Sanghvi.',
  },
  {
    id: 'cert-corizo',
    img: corizoCertificate,
    title: 'Corizo — Certificate of Training in Web Development',
    tag: 'CORIZO • 05 MAY — 05 JUNE 2025',
    caption:
      'Web Development Training certified to Gumma Ashok Shankar by Academic Head Hemant Ingle. ISO 9001:2015 & NSDC accredited.',
  },
  {
    id: 'cert-parul',
    img: parulWorkshopCertificate,
    title: 'Parul University Projections — Full Stack Web Development Workshop',
    tag: 'PROJECTIONS • FEB 2026',
    caption:
      "Certificate of Participation awarded to Gumma Ashok Shankar at Gujarat's Largest Technical Festival.",
  },
  {
    id: 'cert-adobe',
    img: adobeCertificate,
    title: 'Adobe University Hackathon — Certificate of Participation',
    tag: 'ADOBE • 9TH AUG 2026',
    caption:
      'Organized by Adobe & Unstop. Certified to Ashok Shankar Gumma from Parul University (PU), Vadodara.',
  },
];

export const PORTFOLIO_IMAGES = {
  portrait: ashokPortrait,
  codingDesk: ashokPolaroidCoding,
  adobeCert: adobeCertificate,
  zethetaCert: zethetaCertificate,
  corizoCert: corizoCertificate,
  parulCert: parulWorkshopCertificate,
};

