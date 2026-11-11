export const profile = {
  name: 'Javeria Zaheer',
  role: 'Software Engineer',
  location: 'Lahore, Pakistan',
  email: 'javeriazh@gmail.com',
  phone: '+92-3706152219',
  github: 'https://github.com/javeria2108/',
  linkedin: 'https://www.linkedin.com/in/javeria-zaheer-689b87232/',
  updated: '11 November 2026',
  updatedISO: '2026-11-11',
  introduction: 'I build backend systems and full-stack applications, with a focus on database correctness, reliable workflows, and useful AI integrations.',
};

export interface Experience {
  company: string;
  role: string;
  dates: string;
  context: string;
  contributions: readonly string[];
  stack: readonly string[];
}

export const experience: readonly Experience[] = [
  {
    company: 'Noor Quran', role: 'Software Engineer, Full Stack', dates: 'September 2026 — Present',
    context: 'Founding development team of a not-for-profit platform for one-to-one live Quran classes. I implement features from database schema and application logic through APIs and user interfaces.',
    contributions: [
      'Reduced idle database queries by approximately 88%, from 696 to 82 per minute, after unnecessary background work exhausted the production database’s transfer allowance.',
      'Built scheduling, trial-lesson, billing, dispute-review, and family self-service workflows with database transactions, concurrency guards, and shared pricing logic.',
      'Implemented teacher accountability with idempotent jobs, integer-cent calculations, and double-entry ledger reconciliation.',
      'Delivered polling-based teacher-family messaging with event-driven email notifications, plus teacher applications, verification, per-file uploads, and programme approvals.',
      'Integrated Cloudflare R2 behind a storage interface with disk and S3-compatible adapters, shared Testcontainers contract tests, and startup configuration checks.',
      'Contributed 116 of 172 merged product PRs and 53 of 79 database migrations from 28 September to 11 November 2026. Added 101 test files containing 734 test cases. These figures describe contribution volume, not a standalone measure of quality.',
    ],
    stack: ['NestJS', 'Next.js', 'TypeScript', 'PostgreSQL', 'Testcontainers', 'Cloudflare R2', 'DDD', 'TDD'],
  },
  {
    company: 'Motive', role: 'Software Engineer', dates: 'September 2025 — August 2026',
    context: 'Backend automation infrastructure, API integrations, service validation, and reliability engineering for safety-product workflows.',
    contributions: [
      'Built Java API clients, typed request/response models, repositories, and validation across driving-behavior settings, camera exports, third-party camera integrations, and collision notifications.',
      'Created shared DPE webhook utilities with dynamic endpoints, event-ID-filtered polling, tag matching, retries, and cleanup.',
      'Supported US, EU, and CA preview environments through region-aware event seeding, locale/timezone normalization, unit conversion, and non-US device flows.',
      'Improved EU staging test pass rate from 43% to 81% through centralized VG5 setup, reusable trip/event facades, region-specific coordinates, MQTT flows, and event filtering.',
      'Integrated Statsig gates with feature-gated suites, separated VG3/VG5 packages, and migrated stress/data-generation workflows into a dedicated framework with CI dispatch targets.',
      'Automated livestream checks using broadcast API signals, RTCPeerConnection state, and inbound media statistics.',
    ],
    stack: ['Java', 'REST APIs', 'Webhooks', 'Statsig', 'MQTT', 'WebRTC', 'CI workflows'],
  },
  {
    company: 'Headstarter AI', role: 'Software Engineering Fellow', dates: 'July 2024 — September 2024',
    context: 'A five-week build programme focused on full-stack AI applications.',
    contributions: ['Built five AI applications in five weeks using LLM APIs, including Gemini and Llama 3, with RAG and prompt-engineering workflows.', 'Led a hackathon project that reached 200+ users and 800+ page views within 36 hours. Ranked among the Top 20 of 550+ global teams. These are fellowship/hackathon outcomes, not attributed here to any named project.'],
    stack: ['Full-stack development', 'LLM APIs', 'RAG', 'Prompt engineering'],
  },
  {
    company: '10Pearls Pakistan', role: 'Full Stack Intern', dates: 'June 2024 — August 2024',
    context: 'Frontend and backend development in a .NET application stack.',
    contributions: ['Developed React, TypeScript, and Redux features and built REST APIs with ASP.NET Core MVC.', 'Worked with Entity Framework code-first models, SQL Server, Identity/JWT authentication, xUnit testing, and Serilog logging. Participated in code reviews and iterative Git workflows.'],
    stack: ['React', 'TypeScript', 'Redux', 'ASP.NET Core MVC', 'Entity Framework', 'SQL Server', 'xUnit'],
  },
  {
    company: 'Bytewise Ltd', role: 'React & Next.js Intern / Fellow', dates: 'May 2023 — July 2023',
    context: 'Frontend development with React and Next.js.',
    contributions: ['Built applications with reusable components, state-management patterns, and backend API integrations.', 'Ranked among the Top 5 fellows. The final project received 800+ LinkedIn likes and 8+ GitHub stars.'],
    stack: ['React', 'Next.js', 'API integration'],
  },
];

export const teaching: Experience = {
  company: 'Preply', role: 'Data Structures & Algorithms Tutor', dates: 'November 2024 — September 2025',
  context: 'International tutoring in JavaScript and Python.',
  contributions: ['Taught eight students from five countries, adapting technical explanations to different learning backgrounds.', 'Earned Super Tutor recognition for student satisfaction and learning outcomes.'],
  stack: ['JavaScript', 'Python', 'Data structures', 'Algorithms'],
};

export const skillGroups = [
  { title: 'Professional engineering', context: 'Used in product and backend infrastructure work.', items: ['TypeScript', 'Java', 'NestJS', 'Next.js', 'PostgreSQL', 'API clients & typed models', 'Webhooks', 'Transactions & concurrency', 'Domain-driven design', 'Hexagonal architecture', 'TDD', 'Testcontainers', 'Cloudflare R2', 'Statsig', 'WebRTC validation', 'MQTT workflows'] },
  { title: 'Projects & AI applications', context: 'Applied through personal, fellowship, and final-year projects.', items: ['Python', 'FastAPI', 'Flask', 'Gemini', 'Llama 3 APIs', 'RAG', 'Express', 'Prisma', 'Socket.IO', 'MongoDB', 'Firebase / Firestore', 'React Native / Expo', 'Redux', 'Liveblocks', 'Lexical', 'scikit-learn', 'ESP32 / ESP-NOW'] },
  { title: 'Internship experience', context: 'Practical exposure through the 10Pearls internship.', items: ['C#', 'ASP.NET Core MVC', 'Entity Framework', 'SQL Server', 'Identity / JWT', 'xUnit', 'Serilog'] },
] as const;

export const books = [
  { title: 'The Effective Software Engineer', author: 'Addy Osmani', status: 'Currently reading' },
  { title: 'A Philosophy of Software Design', author: 'John Ousterhout', status: 'Currently reading' },
  { title: 'Architecture Patterns with Python', author: 'Harry Percival and Bob Gregory', status: 'Read' },
  { title: 'Clean Code', author: 'Robert C. Martin', status: 'Read' },
  { title: 'The Complete Developer', author: 'Martin Krause', status: 'Read' },
  { title: 'You Don’t Know JavaScript Yet', author: 'Kyle Simpson', status: 'Read' },
  { title: 'Introduction to Algorithms', author: 'Thomas H. Cormen, Charles E. Leiserson, Ronald L. Rivest, and Clifford Stein', status: 'Read' },
  { title: 'System Design Interview', author: 'Alex Xu', status: 'Read' },
  { title: 'Designing Data-Intensive Applications', author: 'Martin Kleppmann', status: 'On the list' },
  { title: 'The Hundred-Page Machine Learning Book', author: 'Andriy Burkov', status: 'On the list' },
  { title: 'The Art of PostgreSQL', author: 'Dimitri Fontaine', status: 'On the list' },
] as const;
