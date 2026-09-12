import { motion } from "framer-motion"
import { Mail } from "lucide-react"
import RadarSweep from "../components/RadarSweep"
import { social } from "../data/social"

function GithubIcon() {
    return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.207 11.387.6.113.793-.26.793-.577 0-.285-.01-1.04-.016-2.04-3.338.725-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.744.083-.729.083-.729 1.205.084 1.84 1.237 1.84 1.237 1.07 1.834 2.807 1.304 3.492.997.108-.775.42-1.305.763-1.605-2.665-.303-5.467-1.333-5.467-5.93 0-1.31.469-2.38 1.236-3.22-.124-.303-.536-1.523.117-3.176 0 0 1.008-.322 3.301 1.23A11.5 11.5 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.29-1.552 3.297-1.23 3.297-1.23.655 1.653.243 2.873.12 3.176.77.84 1.235 1.91 1.235 3.22 0 4.61-2.807 5.624-5.48 5.92.432.372.816 1.103.816 2.222 0 1.606-.015 2.898-.015 3.293 0 .32.19.694.8.576C20.565 21.795 24 17.298 24 12c0-6.63-5.373-12-12-12" />
        </svg>
    )
}

function LinkedinIcon() {
    return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
    )
}

export default function Hero() {
    return (
        <section className="relative min-h-screen flex flex-col justify-center px-8 md:px-16 overflow-hidden border-b border-grid">
            <RadarSweep />

            <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2, duration: 0.6, ease: "easeOut" }}
                className="max-w-3xl"
            >
                <p className="font-data text-cyan text-sm mb-4 tracking-tight">
                    Chennai, India · IIITDM Kancheepuram · CGPA 9.25
                </p>

                <h1 className="font-display font-bold text-5xl md:text-7xl leading-[1.05] text-text mb-6">
                    Yashvant
                    <br />
                    A T K
                </h1>

                <p className="font-body text-lg md:text-xl text-text-muted max-w-xl mb-10 leading-relaxed">
                    CS engineer building autonomous systems, agentic dev tools,
                    Mars rover telemetry pipelines, and algorithms that resolve
                    real bottlenecks.
                </p>

                <div className="flex items-center gap-6">
                    <a href="#projects" className="font-body text-sm font-medium bg-amber text-bg px-6 py-3 rounded-sm hover:opacity-90 transition-opacity">
                        View selected work
                    </a>
                    <div className="flex items-center gap-4 text-text-muted">
                        <a href={social.github} target="_blank" rel="noreferrer" className="hover:text-text transition-colors">
                            <GithubIcon />
                        </a>
                        <a href={social.linkedin} target="_blank" rel="noreferrer" className="hover:text-text transition-colors">
                            <LinkedinIcon />
                        </a>
                        <a href={`mailto:${social.email}`} className="hover:text-text transition-colors">
                            <Mail size={20} />
                        </a>
                    </div>
                </div>
            </motion.div>
        </section>
    )
}