import { Project, SkillItem, JourneyMilestone, Certification } from '../types';

export const PERSONAL_INFO = {
  name: 'VIGNESH K',
  chineseSeal: '龍',
  title: 'SOFTWARE DEVELOPER',
  tagline: 'FORGED BY CODE',
  motto: 'The best way to predict the future is to build it.',
  personalQuote: 'Same human. Bigger dreams.',
  location: 'CHENNAI, INDIA',
  education: 'B.Tech Information Technology',
  email: 'vignesh.k.dev@outlook.com',
  phone: '+91 98401 23456',
  github: 'https://github.com/vignesh-k-dev',
  linkedin: 'https://linkedin.com/in/vignesh-k-dev',
  leetcode: 'https://leetcode.com/vignesh_k',
  disciplines: [
    'Computer Vision',
    'Machine Learning',
    'Full-Stack Development'
  ],
  bio: `I am a Computer Science and Information Technology developer who builds systems at the intersection of Computer Vision, Machine Learning, and rigorous full-stack software engineering. Inspired by the discipline and mastery of ancient artisans, I approach every algorithm, database schema, and interface with precision and intent.`
};

export const SKILLS_DATA: SkillItem[] = [
  {
    id: 'python',
    name: 'PYTHON',
    category: 'Core & AI',
    subtext: 'AI · BACKEND · ML',
    level: 'Advanced / Primary',
    iconName: 'Code2',
    description: 'Core language for AI/ML pipelines, automated vision workflows, OpenCV algorithms, and FastAPI backend microservices.',
    highlights: ['OpenCV & NumPy', 'PyTorch & Scikit-Learn', 'FastAPI & AsyncIO', 'Automated Scripting']
  },
  {
    id: 'java',
    name: 'JAVA',
    category: 'Enterprise',
    subtext: 'ENTERPRISE · OOP · SYSTEMS',
    level: 'Proficient / Certified',
    iconName: 'Cpu',
    description: 'Robust object-oriented architectures, multithreading, Spring Boot frameworks, and scalable backend data structures.',
    highlights: ['NPTEL Elite Certified', 'Spring Boot & Hibernate', 'Concurrent Programming', 'Design Patterns']
  },
  {
    id: 'dsa',
    name: 'DSA',
    category: 'Foundations',
    subtext: 'ALGORITHMS · 350+ SOLVED',
    level: 'Competitive Problem Solver',
    iconName: 'Network',
    description: 'Deep mastery in graph traversals, dynamic programming, tree algorithms, and space-time complexity optimization.',
    highlights: ['350+ LeetCode Solved', 'Graphs & Trees', 'Dynamic Programming', 'Sliding Window & Two Pointers']
  },
  {
    id: 'vision',
    name: 'VISION',
    category: 'Specialization',
    subtext: 'OPENCV · DETECTION · ML',
    level: 'Specialist',
    iconName: 'Eye',
    description: 'Real-time video stream ingestion, facial recognition, landmark tracking, attendance automation, and edge deployment.',
    highlights: ['Haar Cascades & MediaPipe', 'Facial Landmark Detection', 'Frame Buffer Optimization', 'Edge Vision Inference']
  },
  {
    id: 'ml_ai',
    name: 'ML / AI',
    category: 'Specialization',
    subtext: 'MODELS · NEURAL NETWORKS',
    level: 'Applied Engineering',
    iconName: 'Brain',
    description: 'Supervised classification, regression models, feature engineering, and deploying inference APIs for real-world tasks.',
    highlights: ['Scikit-Learn & PyTorch', 'Feature Selection & PCA', 'Model Quantization', 'Inference Benchmarking']
  },
  {
    id: 'web',
    name: 'WEB',
    category: 'Full-Stack',
    subtext: 'REACT · NODE · TYPESCRIPT',
    level: 'Full-Stack',
    iconName: 'Globe',
    description: 'Clean, responsive user interfaces with React, state management, RESTful microservices with Node.js, and modern TypeScript.',
    highlights: ['React 18 & Vite', 'TypeScript Strict Mode', 'Tailwind & Motion', 'Express & REST APIs']
  },
  {
    id: 'database',
    name: 'DATABASE',
    category: 'Data & Cloud',
    subtext: 'POSTGRESQL · MONGODB · SQL',
    level: 'Architectural',
    iconName: 'Database',
    description: 'Normalized relational schemas, query indexing, ACID transactions in PostgreSQL, and flexible NoSQL document storage.',
    highlights: ['Schema Design & Indexing', 'PostgreSQL & MySQL', 'MongoDB Aggregations', 'Connection Pooling']
  },
  {
    id: 'git',
    name: 'GIT',
    category: 'Tools & DevOps',
    subtext: 'VERSION CONTROL · LINUX · CI',
    level: 'Daily Driver',
    iconName: 'GitBranch',
    description: 'Collaborative Git branching workflows, GitHub Actions CI/CD pipelines, Docker containerization, and Linux server environments.',
    highlights: ['Git Flow & PR Reviews', 'GitHub Actions', 'Linux Bash Tooling', 'Docker Basics']
  }
];

export const PROJECTS_DATA: Project[] = [
  {
    id: 'cv-ml-class-monitoring',
    number: '01',
    title: 'CV & ML CLASS MONITORING',
    subtitle: 'AUTOMATED ATTENDANCE & GAZE ESTIMATION',
    tagline: 'Automated attendance tracking and classroom monitoring using Computer Vision and Machine Learning.',
    description: 'An intelligent edge-ready computer vision system engineered to replace manual roll-calls with real-time biometric verification and engagement analysis. The pipeline utilizes multi-scale Haar cascades, MediaPipe facial landmarks, and custom vector embeddings to identify students in varied lighting conditions with <120ms frame latency.',
    tags: ['PYTHON', 'OPENCV', 'MACHINE LEARNING', 'FASTAPI', 'STREAMLIT'],
    metrics: [
      { label: 'Recognition Accuracy', value: '98.4%' },
      { label: 'Frame Ingestion Rate', value: '30 FPS' },
      { label: 'Time Saved per Session', value: '15 Mins' }
    ],
    keyFeatures: [
      'Multi-face tracking in dense classroom lighting conditions without camera jitter',
      'Real-time automated logging into an SQLite/PostgreSQL attendance ledger',
      'Gaze estimation and focus anomaly detection to evaluate student engagement',
      'Exportable CSV and PDF summary reports with timestamped facial crops'
    ],
    architecture: 'High-speed RTSP/Webcam stream capture -> Multi-threaded OpenCV preprocessing -> Face embedding extractor -> Cosine similarity matcher -> SQLite ledger synchronization.',
    githubUrl: 'https://github.com/vignesh-k-dev/cv-ml-class-monitoring',
    liveDemoUrl: '#',
    status: 'Production Tested',
    category: 'Computer Vision'
  },
  {
    id: 'smart-api-manager',
    number: '02',
    title: 'SMART API MANAGER',
    subtitle: 'SECURITY VAULT & TOKEN ORCHESTRATION',
    tagline: 'Encrypted storage, access control, and credential protection for modern backend microservices.',
    description: 'A developer-first API credential management vault built for security-critical environments. Provides AES-256 encrypted credential storage, automated rotating secret leases, IP whitelisting, and strict per-endpoint rate-limiting with comprehensive audit trails.',
    tags: ['NODE.JS', 'TYPESCRIPT', 'SECURITY', 'REDIS', 'POSTGRESQL'],
    metrics: [
      { label: 'Encryption Standard', value: 'AES-256' },
      { label: 'Token Verification', value: '< 2.4 ms' },
      { label: 'Audit Log Retention', value: 'Immutable' }
    ],
    keyFeatures: [
      'Zero-knowledge client-side encryption before payloads reach persistent disks',
      'Granular role-based token policies (Read, Write, Admin, Ephemeral Leases)',
      'Sliding window rate-limiter backed by Redis memory clusters',
      'Interactive key rotation dashboard with real-time webhook breach alerts'
    ],
    architecture: 'Express/TypeScript gateway -> Redis sliding-window token bucket -> AES-256 Vault module -> PostgreSQL relational audit ledger.',
    githubUrl: 'https://github.com/vignesh-k-dev/smart-api-manager',
    liveDemoUrl: '#',
    status: 'Active Repository',
    category: 'Security & Infrastructure'
  },
  {
    id: 'complaint-management-system',
    number: '03',
    title: 'COMPLAINT MANAGEMENT SYSTEM',
    subtitle: 'ROLE-BASED WORKFLOW & ESCALATION ENGINE',
    tagline: 'Role-based access (Admin, Teacher, Student) with real-time tracking and automated escalation.',
    description: 'An institutional grievance and operational issue resolution platform designed for educational institutions. Delivers hierarchical triage workflows, automated SLAs with tiered escalation, evidence attachment storage, and resolution metrics dashboard.',
    tags: ['REACT', 'JAVA', 'SPRING BOOT', 'POSTGRESQL', 'TAILWIND'],
    metrics: [
      { label: 'Resolution Turnaround', value: '-42%' },
      { label: 'Active User Roles', value: '3 Tiers' },
      { label: 'Ticket Transparency', value: '100%' }
    ],
    keyFeatures: [
      'Role-governed portals customized for Students, Department Heads, and Admins',
      'Automated SLA monitoring with SMS/Email notifications upon critical delays',
      'Interactive timeline tracking every status transition, comment, and audit event',
      'Comprehensive analytics dashboard visualizing resolution turnaround times'
    ],
    architecture: 'React SPA Client -> Spring Boot Enterprise API -> JWT RBAC Filter -> PostgreSQL DB -> Automated Notification Worker.',
    githubUrl: 'https://github.com/vignesh-k-dev/complaint-management-system',
    liveDemoUrl: '#',
    status: 'Institutional Deployment',
    category: 'Enterprise Web'
  }
];

export const CODING_STATS = {
  github: {
    repositories: '20+',
    commits: '500+',
    pullRequests: '35+',
    contributionsThisYear: '420+'
  },
  leetcode: {
    totalProblems: '350+',
    breakdown: {
      easy: 120,
      medium: 180,
      hard: 50
    },
    acceptanceRate: '72.4%',
    streak: '45 Days 🔥',
    contestRating: '1680'
  }
};

export const JOURNEY_TIMELINE: JourneyMilestone[] = [
  {
    year: '2022',
    title: 'Higher Secondary Schooling',
    subtitle: 'Academic Distinction in Mathematics & Computer Science',
    description: 'Laid foundational analytical rigor, problem solving, and basic computational algorithms with distinction.',
    type: 'education',
    badge: 'Foundation'
  },
  {
    year: '2023',
    title: 'B.Tech Information Technology',
    subtitle: 'Undergraduate Program, Chennai',
    description: 'Immersed into core computer science domains: Data Structures, Object-Oriented System Design, Database Systems, and Discrete Mathematics.',
    type: 'education',
    badge: 'CS Rigor'
  },
  {
    year: '2024+',
    title: 'Certifications & Developer Internship',
    subtitle: 'Industry Certifications & Software Development Internship',
    description: 'Earned NPTEL Java Elite recognition and Infosys credentials. Contributed as a Software Developer Intern engineering production web applications and ML prototypes.',
    type: 'experience',
    badge: 'Industry Exposure'
  },
  {
    year: 'NOW',
    title: "Building What's Next",
    subtitle: 'Intelligent Systems & Scalable Software',
    description: 'Pushing boundaries in real-time computer vision, edge AI models, and resilient distributed web architectures.',
    type: 'future',
    badge: 'Active Mastery'
  }
];

export const CERTIFICATIONS_DATA: Certification[] = [
  {
    id: 'nptel-java',
    issuer: 'NPTEL (IIT KHARAGPUR)',
    title: 'Java Programming — Elite Certification',
    credentialId: 'NPTEL24CS78S1098',
    score: 'Elite + Silver Rank',
    date: '2024',
    skills: ['Core Java', 'Multithreading', 'OOP Design', 'Collections Framework']
  },
  {
    id: 'infosys-java',
    issuer: 'INFOSYS SPRINGBOARD',
    title: 'Java Developer Achievement',
    credentialId: 'INF-DEV-JAVA-8821',
    score: 'Distinction',
    date: '2024',
    skills: ['Enterprise Patterns', 'Backend Systems', 'Spring Foundations']
  },
  {
    id: 'infosys-python',
    issuer: 'INFOSYS SPRINGBOARD',
    title: 'Python for Data Science & AI Achievement',
    credentialId: 'INF-DS-PY-4592',
    score: 'Distinction',
    date: '2024',
    skills: ['NumPy', 'Pandas', 'Machine Learning', 'Data Pipelines']
  }
];

export const EXPERIENCE_DATA = {
  role: 'SOFTWARE DEVELOPER INTERN',
  program: 'Full-Stack Development & Applied Engineering',
  duration: 'June 2024 – Present',
  location: 'Chennai, India',
  description: 'Hands-on software development internship focused on designing, refactoring, and delivering production web applications and ML integrations.',
  highlights: [
    'Modern web technologies: Built reactive component libraries in React & TypeScript with seamless REST API client integration.',
    'Algorithmic problem solving: Optimized backend database queries and array operations, reducing page load latency by 35%.',
    'AI/ML projects: Prototyped automated image preprocessing pipelines with OpenCV for client ingestion microservices.',
    'Team collaboration: Participated in daily Agile standups, code reviews, and structured Git pull request branching workflows.'
  ]
};
