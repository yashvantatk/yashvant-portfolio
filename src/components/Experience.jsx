import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Award, Briefcase } from "lucide-react";
import { Reveal, SectionLabel } from "@/components/Reveal";
import { experiences, achievements } from "@/data/portfolioData";

const tabs = [
  { id: "roles", label: "Roles & Leadership", icon: Briefcase },
  { id: "awards", label: "Awards & Achievements", icon: Award },
];

const Timeline = ({ items, type }) => (
  <div className="relative border-l border-zinc-800 pl-8 space-y-10">
    {items.map((item, i) => (
      <motion.div
        key={item.title || item.role}
        initial={{ opacity: 0, x: -16 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: i * 0.1, duration: 0.5 }}
        className="relative"
        data-testid={`timeline-item-${type}-${i}`}
      >
        <span className="absolute -left-[37px] top-1.5 h-2.5 w-2.5 rounded-full bg-emerald-500 shadow-[0_0_12px_rgba(16,185,129,0.8)]" />
        <div className="flex flex-wrap items-center gap-3 mb-1">
          <h3 className="font-display text-lg font-semibold text-zinc-50">
            {type === "roles" ? item.role : item.title}
          </h3>
          <span className="rounded-full border border-zinc-800 bg-zinc-900 px-3 py-0.5 font-code text-[10px] uppercase tracking-widest text-emerald-300">
            {item.period}
          </span>
        </div>
        <p className="font-code text-xs text-zinc-500 mb-3">
          {item.org}{item.location ? ` · ${item.location}` : ""}
        </p>
        {type === "roles" ? (
          <>
            <ul className="space-y-1.5 text-sm text-zinc-400 list-disc pl-4">
              {item.points.map((pt, j) => <li key={j}>{pt}</li>)}
            </ul>
            <div className="mt-3 flex flex-wrap gap-2">
              {item.tags.map((t) => (
                <span key={t} className="rounded-full bg-zinc-800/80 px-2.5 py-1 font-code text-[10px] text-zinc-400">{t}</span>
              ))}
            </div>
          </>
        ) : (
          <div className="flex items-start gap-3">
            <p className="text-sm text-zinc-400">{item.description}</p>
            <span className="shrink-0 rounded-full bg-amber-500/10 border border-amber-500/30 px-2.5 py-0.5 font-code text-[10px] uppercase tracking-widest text-amber-300">
              {item.tag}
            </span>
          </div>
        )}
      </motion.div>
    ))}
  </div>
);

export default function Experience() {
  const [tab, setTab] = useState("roles");

  return (
    <section id="experience" data-testid="experience-section" className="py-20 lg:py-32 px-4 sm:px-8 lg:px-12 bg-zinc-950/40">
      <div className="mx-auto max-w-4xl">
        <Reveal>
          <SectionLabel index="04">Experience & Achievements</SectionLabel>
          <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-zinc-50 mb-10">
            The road so far.
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mb-12 inline-flex rounded-full border border-zinc-800 bg-zinc-900/60 p-1">
            {tabs.map(({ id, label, icon: Icon }) => (
              <button
                key={id}
                data-testid={`experience-tab-${id}`}
                onClick={() => setTab(id)}
                className={`flex items-center gap-2 rounded-full px-5 py-2 text-sm font-medium transition-colors ${
                  tab === id ? "bg-emerald-500 text-zinc-950" : "text-zinc-400 hover:text-zinc-200"
                }`}
              >
                <Icon className="h-4 w-4" /> {label}
              </button>
            ))}
          </div>
        </Reveal>

        <AnimatePresence mode="wait">
          <motion.div
            key={tab}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.35 }}
          >
            <Timeline items={tab === "roles" ? experiences : achievements} type={tab} />
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
