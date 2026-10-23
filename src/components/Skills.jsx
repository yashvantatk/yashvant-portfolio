import { motion } from "framer-motion";
import { Reveal, SectionLabel } from "@/components/Reveal";
import { skillCategories } from "@/data/portfolioData";

const SkillBar = ({ name, level }) => (
  <div className="group">
    <div className="flex items-center justify-between mb-1.5">
      <span className="text-sm text-zinc-300 group-hover:text-emerald-300 transition-colors">{name}</span>
      <span className="font-code text-[10px] text-zinc-600">{level}%</span>
    </div>
    <div className="h-1 rounded-full bg-zinc-800 overflow-hidden">
      <motion.div
        className="h-full rounded-full bg-gradient-to-r from-emerald-500 to-cyan-400"
        initial={{ width: 0 }}
        whileInView={{ width: `${level}%` }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      />
    </div>
  </div>
);

export default function Skills() {
  return (
    <section id="skills" data-testid="skills-section" className="py-20 lg:py-32 px-4 sm:px-8 lg:px-12 bg-zinc-950/40">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <SectionLabel index="02">Skills Matrix</SectionLabel>
          <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-zinc-50 mb-12">
            Tools of the trade.
          </h2>
        </Reveal>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {skillCategories.map((cat, i) => (
            <Reveal key={cat.title} delay={i * 0.08}>
              <div
                data-testid={`skill-card-${i}`}
                className="h-full rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6 transition-colors duration-300 hover:border-emerald-500/40 hover:bg-zinc-900/70"
              >
                <p className="font-code text-[10px] uppercase tracking-[0.25em] text-emerald-400 mb-1">{cat.blurb}</p>
                <h3 className="font-display text-xl font-semibold tracking-tight text-zinc-50 mb-5">{cat.title}</h3>
                <div className="space-y-4">
                  {cat.skills.map((s) => (
                    <SkillBar key={s.name} {...s} />
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
