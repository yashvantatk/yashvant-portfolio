import { motion } from "framer-motion"
import SectionHeading from "../components/SectionHeading"
import { skills } from "../data/skills"

export default function Stack() {
    const categories = Object.entries(skills)

    return (
        <section id="stack" className="px-8 md:px-16 py-24 border-b border-grid">
            <SectionHeading index="§ 04" title="Stack" />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-10">
                {categories.map(([category, items], i) => (
                    <motion.div
                        key={category}
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-60px" }}
                        transition={{ duration: 0.4, delay: i * 0.05 }}
                    >
                        <p className="font-data text-xs text-amber uppercase tracking-wide mb-4">
                            {category}
                        </p>
                        <div className="flex flex-wrap gap-2">
                            {items.map((item) => (
                                <span
                                    key={item}
                                    className="font-body text-sm text-text-muted border border-grid rounded-sm px-3 py-1.5 hover:border-cyan/50 hover:text-text transition-colors"
                                >
                                    {item}
                                </span>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    )
}