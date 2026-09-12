import { motion } from "framer-motion"
import SectionHeading from "../components/SectionHeading"
import { projects } from "../data/projects"

export default function Projects() {
    return (
        <section id="projects" className="px-8 md:px-16 py-24 border-b border-grid">
            <SectionHeading index="§ 02" title="Selected Work" />

            <div className="flex flex-col gap-16">
                {projects.map((project, i) => (
                    <motion.div
                        key={project.name}
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-80px" }}
                        transition={{ duration: 0.5, delay: i * 0.05 }}
                        className="grid grid-cols-1 md:grid-cols-12 gap-6 border border-grid rounded-sm p-6 md:p-8 hover:border-amber/40 transition-colors"
                    >
                        <div className="md:col-span-1">
                            <span className="font-data text-text-muted text-sm">{project.index}</span>
                        </div>

                        <div className="md:col-span-3">
                            <h3 className="font-display font-semibold text-xl text-text mb-1">
                                {project.name}
                            </h3>
                            <p className="font-body text-sm text-amber mb-3">{project.tagline}</p>
                            <p className="font-data text-xs text-text-muted">{project.date}</p>
                        </div>

                        <div className="md:col-span-8">
                            <ul className="flex flex-col gap-2 mb-4">
                                {project.description.map((line, idx) => (
                                    <li key={idx} className="font-body text-sm text-text-muted leading-relaxed">
                                        {line}
                                    </li>
                                ))}
                            </ul>
                            <div className="flex flex-wrap gap-2">
                                {project.stack.map((tech) => (
                                    <span
                                        key={tech}
                                        className="font-data text-xs text-cyan border border-grid rounded-sm px-2 py-1"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    )
}