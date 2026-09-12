export interface ExperienceItem {
    role: string
    org: string
    period: string
    points: string[]
}

export const experience: ExperienceItem[] = [
    {
        role: "Software Wing Member",
        org: "Mars Rover Society — Project Ares-Nova",
        period: "Apr 2026 — Present",
        points: [
            "Architecting distributed backend services and telemetry pipelines for a conceptual Mars rover, processing 5,000+ telemetry points per second across multi-terrain navigation.",
            "Building multi-threaded C++ and Python microservices for concurrent, low-latency sensor data processing and real-time dashboard sync.",
        ],
    },
    {
        role: "Manager & Independent Algorithmic Researcher",
        org: "Technical Affairs Team",
        period: "Jul 2026 — Present",
        points: [
            "Managing full-stack software initiatives across college technical teams — API design, version control, web architecture.",
            "Independent algorithmic research in C++, consistently resolving computational bottlenecks with optimal time complexity.",
        ],
    },
]

export const achievements = [
    {
        title: "Decode SIH Hackathon — National 1st Place & Team Lead",
        detail: "Outperformed 3,500+ national teams with a scalable microservices solution (2026).",
    },
    {
        title: "Vashisht '26 Hackathon — 1st Place & Team Lead",
        detail: "Directed a 4-developer team to build Nexus Learning within a 36-hour deadline (Mar 2026).",
    },
]