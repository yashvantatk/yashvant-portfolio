import { Mail } from "lucide-react"
import { social } from "../data/social"

export default function Contact() {
    return (
        <section id="contact" className="px-8 md:px-16 py-24">
            <div className="max-w-2xl">
                <p className="font-data text-cyan text-sm mb-4">§ 05 — Get in touch</p>
                <h2 className="font-display font-bold text-4xl md:text-5xl text-text mb-6">
                    Let's build something.
                </h2>
                <p className="font-body text-text-muted mb-10 leading-relaxed">
                    Open to internship opportunities and collaborations on agentic
                    tooling, systems software, or algorithmic problems worth solving.
                </p>

                <a href={`mailto:${social.email}`} className="inline-flex items-center gap-2 font-body text-sm font-medium bg-amber text-bg px-6 py-3 rounded-sm hover:opacity-90 transition-opacity mb-12">
                    <Mail size={16} />
                    {social.email}
                </a>

                <div className="flex items-center gap-6 font-data text-xs text-text-muted">
                    <a href={social.github} target="_blank" rel="noreferrer" className="hover:text-text transition-colors">GitHub</a>
                    <a href={social.linkedin} target="_blank" rel="noreferrer" className="hover:text-text transition-colors">LinkedIn</a>
                    <a href={social.leetcode} target="_blank" rel="noreferrer" className="hover:text-text transition-colors">LeetCode</a>
                    <a href={social.codechef} target="_blank" rel="noreferrer" className="hover:text-text transition-colors">CodeChef</a>
                    <a href={social.codeforces} target="_blank" rel="noreferrer" className="hover:text-text transition-colors">Codeforces</a>
                </div>
            </div>

            <p className="font-data text-xs text-text-muted mt-24 pt-8 border-t border-grid">
                Built by Yashvant A T K · {new Date().getFullYear()}
            </p>
        </section>
    )
}