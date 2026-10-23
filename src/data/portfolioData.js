// ============================================================
//  Yashvant A T K — portfolio data
//  Every word on the site comes from here.
//  Skill levels are estimated from public GitHub activity
//  (code volume per language + number of repos using each tool).
// ============================================================

export const profile = {
  name: "Yashvant A T K",
  firstName: "Yashvant",
  initials: "YA",
  role: "Software Engineer · Agentic AI & Full-Stack",
  availability: "Open to Summer 2027 Internships",
  email: "yashvant280607@gmail.com",
  location: "Chennai, India",
  github: "https://github.com/yashvantatk",
  linkedin: "https://www.linkedin.com/in/yashvant-a-t-k",
  resume: "/Yashvant_ATK_Resume.pdf",
  leetcode: "https://leetcode.com/yashvantatk",
  codechef: "https://www.codechef.com/users/deft_skunks_15",
  codeforces: "https://codeforces.com/profile/yashvant280607",
};

export const heroLines = ["Yashvant A T K", "builds AI that", "proves its work."];

export const heroStats = [
  { value: "9.25", label: "CGPA · B.Tech CSE '29" },
  { value: "2x", label: "National Hackathon Winner" },
  { value: "13", label: "Public Repos" },
];

export const marqueeItems = [
  "AGENTIC AI",
  "LLM TOOLING & MCP",
  "FULL-STACK WEB",
  "SYSTEMS IN RUST",
  "COMPETITIVE PROGRAMMING",
  "HACKATHONS",
];

export const about = {
  heading: "CS undergrad by day, agent builder by night. 🚀",
  paragraphs: [
    "I'm a CSE undergrad at IIITDM Kancheepuram who builds production-style software end to end: React + TypeScript front-ends, FastAPI and Node.js back-ends, and LLM agents with tool calling and MCP, shipped with Docker and GitHub Actions CI.",
    "I care most about AI whose output is verified before anyone relies on it. I'm a 2x national hackathon winner, an ICPC India 2026 competitor, and I'm looking for a software engineering internship where I can ship real work with great engineers. 🤝",
  ],
  bio: {
    name: "Yashvant A T K",
    education: "B.Tech CSE, IIITDM Kancheepuram",
    focus: ["agentic AI", "full-stack web", "competitive programming"],
    seeking: "Software Engineering Internship",
    open_to: ["backend", "full-stack", "AI / LLM"],
    fun_fact: "My ICPC team is called Three Pointers 🏀",
  },
};

export const skillCategories = [
  {
    title: "Languages",
    blurb: "What I think in",
    skills: [
      { name: "Python", level: 95 },
      { name: "Rust", level: 81 },
      { name: "TypeScript", level: 76 },
      { name: "HTML/CSS", level: 74 },
      { name: "C++", level: 73 },
      { name: "JavaScript", level: 72 },
    ],
  },
  {
    title: "Frameworks",
    blurb: "How I build",
    skills: [
      { name: "Streamlit", level: 95 },
      { name: "React", level: 85 },
      { name: "FastAPI", level: 85 },
      { name: "Node.js", level: 85 },
      { name: "Tailwind CSS", level: 76 },
    ],
  },
  {
    title: "Developer Tools",
    blurb: "My daily drivers",
    skills: [
      { name: "Git & GitHub", level: 95 },
      { name: "SQLite", level: 82 },
      { name: "GitHub Actions", level: 76 },
      { name: "Linux & ROS2", level: 76 },
      { name: "Vercel", level: 76 },
      { name: "Docker", level: 71 },
    ],
  },
  {
    title: "Core Concepts",
    blurb: "How I reason",
    skills: [
      { name: "Agentic AI & LLMs", level: 95 },
      { name: "Data Structures", level: 92 },
      { name: "Algorithms", level: 92 },
      { name: "REST API Design", level: 88 },
      { name: "Testing & Verification", level: 82 },
    ],
  },
];

const IMAGES = {
  cubes: "https://images.unsplash.com/photo-1671519821564-ced7e41ee7ae?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1MTN8MHwxfHNlYXJjaHw0fHwzZCUyMGFic3RyYWN0JTIwZ2VvbWV0cmljJTIwZGFyayUyMG5lb24lMjBtaW5pbWFsfGVufDB8fHx8MTc5Mjc0NTMwMHww&ixlib=rb-4.1.0&q=85",
  workspace: "https://images.unsplash.com/photo-1754039984985-ef607d80113a?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA6MDV8MHwxfHNlYXJjaHw0fHxkZXZlbG9wZXIlMjBjb2RpbmclMjBjb21wdXRlciUyMGRhcmslMjBkZXNrJTIwdGVjaHxlbnwwfHx8fDE3OTI3NDUzMDB8MA&ixlib=rb-4.1.0&q=85",
  desk: "https://images.unsplash.com/photo-1611924707078-da8777fc99cb?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA6MDV8MHwxfHNlYXJjaHwxfHxkZXZlbG9wZXIlMjBjb2RpbmclMjBjb21wdXRlciUyMGRhcmslMjBkZXNrJTIwdGVjaHxlbnwwfHx8fDE3OTI3NDUzMDB8MA&ixlib=rb-4.1.0&q=85",
  neon: "https://images.pexels.com/photos/12187128/pexels-photo-12187128.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
};

export const projectFilters = ["All", "AI Agents", "Dev Tools", "Web Apps"];

export const projects = [
  {
    title: "CiteScout AI",
    tagline: "Agentic literature scout that never cites a paper it can't verify",
    description: "Gemini tool-calling agent that searches 5 scholarly APIs, merges duplicates and verifies every citation (DOI, title, authors, year) through validation gates and human approval before output. Async httpx with retries and backoff, a SQLite cache, and automated tests in GitHub Actions. Team lead, Ziro Agentic AI Hackathon 2026.",
    category: "AI Agents",
    image: IMAGES.neon,
    tech: ["Python", "Gemini", "async httpx", "SQLite", "Streamlit"],
    github: "https://github.com/yashvantatk/citescout",
    demo: "https://citescout.streamlit.app/",
    featured: true,
  },
  {
    title: "AutoResolve",
    tagline: "Multi-agent code review & repair",
    description: "A deterministic Rust controller drives 7 specialised LLM agents; a fix is kept only if a regression test fails before and passes after the patch, inside an isolated Docker sandbox. Ships as a TypeScript CLI, VS Code extension, MCP server and GitHub Action. 22-case benchmark: 100% single-bug detection, 85% multi-bug recall, 0 false alarms.",
    category: "Dev Tools",
    image: IMAGES.cubes,
    tech: ["Rust", "TypeScript", "MCP", "Docker"],
    github: "https://github.com/yashvantatk/autoresolve",
    demo: "https://marketplace.visualstudio.com/items?itemName=autoresolve.autoresolve-vscode",
    demoLabel: "VS Code Extension",
    featured: true,
  },
  {
    title: "AURA AI",
    tagline: "Smart traffic digital twin",
    description: "Full-stack platform of 4 services: YOLOv8 video ingestion, a C++ max-flow optimisation engine, a typed FastAPI + Pydantic back-end, and a React 19 dashboard. API on Render, front-end on Vercel.",
    category: "Web Apps",
    image: IMAGES.workspace,
    tech: ["React 19", "FastAPI", "C++", "YOLOv8"],
    github: "https://github.com/Mohit427/Aura-AI-Traffic",
    demo: "https://aura-ai-traffic.onrender.com/",
    featured: false,
  },
  {
    title: "Nexus Learning",
    tagline: "AI study companion · 1st at Vashisht '26",
    description: "Turns syllabus documents and handwritten notes into structured study plans, Q&A and slide decks using schema-validated LLM output. Won 1st place at Vashisht '26 among 300+ teams, built by my 4-person team in 36 hours.",
    category: "AI Agents",
    image: IMAGES.desk,
    tech: ["Python", "Streamlit", "Gemini"],
    github: "https://github.com/yashvantatk/nexus_learning_edtech",
    demo: "https://nexus-vashisht-edtech.streamlit.app",
    featured: false,
  },
  {
    title: "CP-Team-Tracker",
    tagline: "Competitive programming team dashboard",
    description: "REST API with OpenAPI/Swagger docs over a normalised SQLite schema, plus a decoupled vanilla JS client, to track a CP team's progress.",
    category: "Web Apps",
    image: IMAGES.cubes,
    tech: ["FastAPI", "SQLite", "JavaScript"],
    github: "https://github.com/yashvantatk/CP-Team-Tracker",
    demo: null,
    featured: false,
  },
  {
    title: "AI Slide Maker",
    tagline: "Text to PowerPoint, in seconds",
    description: "An AI agent that turns raw text, data and scripts into styled .pptx decks, choosing text or table layouts per slide, with a free-form Prompt mode and a slide-by-slide Director mode.",
    category: "AI Agents",
    image: IMAGES.neon,
    tech: ["Python", "Gemini", "Streamlit", "python-pptx"],
    github: "https://github.com/yashvantatk/AI_Slide_Maker",
    demo: null,
    featured: false,
  },
];

export const experiences = [
  {
    org: "Mars Rover Society (Ares-Nova), IIITDM Kancheepuram",
    role: "Software Wing Member",
    period: "Apr 2026 — Present",
    location: "Chennai, India",
    points: [
      "Develop and debug concurrent C++ and Python modules for the rover's ROS2 software stack",
      "Work in a team with code reviews and shared documentation",
    ],
    tags: ["C++", "Python", "ROS2", "Gazebo", "RViz", "OpenCV"],
  },
  {
    org: "Technical Affairs, IIITDM Kancheepuram",
    role: "Management Coordinator",
    period: "Jul 2026 — Present",
    location: "Chennai, India",
    points: [
      "Management coordinator of Technical Affairs, which runs all the technical clubs and technical events on campus",
    ],
    tags: ["Leadership", "Management", "Tech Events"],
  },
];

export const achievements = [
  {
    title: "National 1st Place & Team Lead — Decode SIH Hackathon",
    org: "Decode SIH",
    period: "2026",
    description: "Led my team to 1st place among 3,500+ teams nationwide. 🏆",
    tag: "Hackathon",
  },
  {
    title: "1st Place & Team Lead — Vashisht '26",
    org: "IIITDM Kancheepuram",
    period: "Mar 2026",
    description: "Built Nexus Learning with a 4-person team in 36 hours; 1st among 300+ teams. 🏆",
    tag: "Hackathon",
  },
  {
    title: "ICPC India 2026 Participant",
    org: "ICPC",
    period: "2026",
    description: "Competing as team Three Pointers.",
    tag: "Competitive Programming",
  },
  {
    title: "JEE Advanced 2025 — AIR 11,254",
    org: "IIT JEE",
    period: "2025",
    description: "All India Rank 11,254.",
    tag: "Academic",
  },
  {
    title: "NSEP 2024 — State Top 1%",
    org: "National Standard Examination in Physics",
    period: "2024",
    description: "Ranked in the top 1% of the state.",
    tag: "Academic",
  },
];

export const education = {
  degree: "B.Tech, Computer Science and Engineering",
  school: "IIITDM Kancheepuram",
  period: "2025 — 2029 (Expected)",
  gpa: "9.25 / 10.0",
  honors: [
    "2x National Hackathon Winner",
    "JEE Advanced 2025 · AIR 11,254",
    "NSEP 2024 · State Top 1%",
  ],
  coursework: [
    "Data Structures",
    "Design and Analysis of Algorithms",
    "Object-Oriented Programming",
    "Database Systems",
    "Information Systems",
  ],
};
