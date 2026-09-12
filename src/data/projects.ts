export interface Project {
    index: string
    name: string
    tagline: string
    stack: string[]
    description: string[]
    date: string
    link?: string
}

export const projects: Project[] = [
    {
        index: "01",
        name: "AutoResolve AI",
        tagline: "Agentic developer toolbox",
        stack: ["TypeScript", "Node.js", "Python", "Gemini API"],
        date: "Sep 2026",
        description: [
            "A context-aware developer CLI that parses local codebases using Abstract Syntax Trees to identify anti-patterns and execute automated refactoring.",
            "Agentic workflows built on the Gemini API with structured schema validation, automating repository-level issue resolution inspired by SWE-bench.",
        ],
    },
    {
        index: "02",
        name: "AURA AI",
        tagline: "Smart traffic digital twin",
        stack: ["React", "TypeScript", "FastAPI", "C++", "Tailwind CSS"],
        date: "Aug 2026",
        description: [
            "A high-performance C++ backend engine using max-flow network theory to process live video feed data with sub-millisecond computation times.",
            "Interactive React + TypeScript dashboard connected to a FastAPI backend via custom REST APIs and live data streams.",
        ],
    },
    {
        index: "03",
        name: "Nexus Learning",
        tagline: "AI-driven EdTech platform",
        stack: ["Python", "Streamlit", "Gemini API"],
        date: "Mar 2026",
        description: [
            "Built in 36 hours with a 4-person team I led — won 1st place at Vashisht '26 among 300+ national teams.",
            "Personalized learning platform using generative AI to summarize and adapt educational content.",
        ],
    },
    {
        index: "04",
        name: "CP-Team-Tracker",
        tagline: "Competitive programming dashboard",
        stack: ["FastAPI", "SQLite", "React"],
        date: "Jul 2026",
        description: [
            "A centralized dashboard that gamifies competitive programming metrics for peers across LeetCode and Codeforces.",
        ],
    },
]