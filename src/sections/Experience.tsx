import { motion } from "framer-motion"
import SectionHeading from "../components/SectionHeading"
import { experience, achievements } from "../data/experience"

export default function Experience() {
    return (
        <section id="experience" className="px-8 md:px-16 py-24 border-b border-grid">
            <SectionHeading index="§ 03" title="Experience & Achievements" />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                {/* Experience column */}
                <div className="flex flex-col gap-10">
                    <p className="font-data text-xs text-text-muted uppercase tracking-wide">
                        Experience
                    </p>
                    {experience.map((item, i) => (
                        <motion.div
                            key={item.role + item.org}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-60px" }}
                            transition={{ duration: 0.5, delay: i * 0.05 }}
                            className="border-l-2 border-grid pl-6 relative"
                        >
                            <div className="absolute -left-[5px] top-1 w-2 h-2 rounded-full bg-amber" />
                            <p className="font-data text-xs text-cyan mb-1">{item.period}</p>
                            <h3 className="font-display font-semibold text-lg text-text mb-1">
                                {item.role}
                            </h3>
                            <p className="font-body text-sm text-text-muted mb-3">{item.org}</p>
                            <ul className="flex flex-col gap-2">
                                {item.points.map((point, idx) => (
                                    <li key={idx} className="font-body text-sm text-text-muted leading-relaxed">
                                        {point}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>

                {/* Achievements column */}
                <div className="flex flex-col gap-10">
                    <p className="font-data text-xs text-text-muted uppercase tracking-wide">
                        Achievements
                    </p>
                    {achievements.map((item, i) => (
                        <motion.div
                            key={item.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-60px" }}
                            transition={{ duration: 0.5, delay: i * 0.05 }}
                            className="border border-grid rounded-sm p-6 hover:border-amber/40 transition-colors"
                        >
                            <h3 className="font-display font-semibold text-base text-amber mb-2">
                                {item.title}
                            </h3>
                            <p className="font-body text-sm text-text-muted leading-relaxed">
                                {item.detail}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}