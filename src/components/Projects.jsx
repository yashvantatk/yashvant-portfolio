import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { Reveal, SectionLabel } from "@/components/Reveal";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { projects, projectFilters } from "@/data/portfolioData";

const ProjectCard = ({ project, index, onOpen }) => (
  <motion.article
    layout
    initial={{ opacity: 0, scale: 0.96 }}
    animate={{ opacity: 1, scale: 1 }}
    exit={{ opacity: 0, scale: 0.96 }}
    transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
    data-testid={`project-card-${index}`}
    onClick={() => onOpen(project)}
    className={`group relative cursor-pointer overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/40 transition-colors hover:border-emerald-500/40 ${project.featured ? "sm:col-span-2" : ""
      }`}
  >
    <div className={`relative overflow-hidden ${project.featured ? "h-56 sm:h-64" : "h-44"}`}>
      <img
        src={project.image}
        alt={project.title}
        loading="lazy"
        className="h-full w-full object-cover opacity-60 transition-transform duration-700 group-hover:scale-105 group-hover:opacity-80"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent" />
      <span className="absolute top-4 left-4 rounded-full border border-zinc-700/80 bg-zinc-950/70 backdrop-blur px-3 py-1 font-code text-[10px] uppercase tracking-widest text-emerald-300">
        {project.category}
      </span>
    </div>
    <div className="p-6">
      <div className="flex items-start justify-between gap-3">
        <div>
          <h3 className="font-display text-xl font-semibold tracking-tight text-zinc-50 group-hover:text-emerald-300 transition-colors">
            {project.title}
          </h3>
          <p className="text-sm text-zinc-500 mt-0.5">{project.tagline}</p>
        </div>
        <div className="flex gap-2 text-zinc-500">
          <Github className="h-4 w-4" />
          {project.demo && <ExternalLink className="h-4 w-4" />}
        </div>
      </div>
      <div className="mt-4 flex flex-wrap gap-2">
        {project.tech.map((t) => (
          <span key={t} className="rounded-full bg-zinc-800/80 px-2.5 py-1 font-code text-[10px] text-zinc-400">{t}</span>
        ))}
      </div>
    </div>
  </motion.article>
);

export default function Projects() {
  const [filter, setFilter] = useState("All");
  const [active, setActive] = useState(null);
  const visible = projects.filter((p) => filter === "All" || p.category === filter);

  return (
    <section id="projects" data-testid="projects-section" className="py-20 lg:py-32 px-4 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <SectionLabel index="03">Projects</SectionLabel>
          <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-zinc-50 mb-8">
            Things I've built.
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mb-10 flex flex-wrap gap-3">
            {projectFilters.map((f) => (
              <button
                key={f}
                data-testid={`project-filter-${f.toLowerCase().replace(/[^a-z]/g, "-")}`}
                onClick={() => setFilter(f)}
                className={`rounded-full border px-4 py-1.5 font-code text-xs uppercase tracking-widest transition-colors ${filter === f
                  ? "border-emerald-500 bg-emerald-500/10 text-emerald-300"
                  : "border-zinc-800 text-zinc-500 hover:border-zinc-600 hover:text-zinc-300"
                  }`}
              >
                {f}
              </button>
            ))}
          </div>
        </Reveal>

        <motion.div layout className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {visible.map((p) => (
              <ProjectCard key={p.title} project={p} index={projects.indexOf(p)} onOpen={setActive} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      <Dialog open={!!active} onOpenChange={() => setActive(null)}>
        <DialogContent className="border-zinc-800 bg-zinc-950 text-zinc-100 sm:max-w-xl" data-testid="project-modal">
          {active && (
            <>
              <img src={active.image} alt={active.title} className="h-48 w-full rounded-lg object-cover" />
              <DialogHeader>
                <DialogTitle className="font-display text-2xl text-zinc-50">{active.title}</DialogTitle>
                <DialogDescription className="text-zinc-400 leading-relaxed">
                  {active.description}
                </DialogDescription>
              </DialogHeader>
              <div className="flex flex-wrap gap-2">
                {active.tech.map((t) => (
                  <span key={t} className="rounded-full bg-zinc-800 px-3 py-1 font-code text-xs text-zinc-300">{t}</span>
                ))}
              </div>
              <div className="flex gap-3 pt-2">
                <a
                  data-testid="project-modal-github"
                  href={active.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-emerald-500 px-5 py-2 text-sm font-semibold text-zinc-950 hover:bg-emerald-400 transition-colors"
                >
                  <Github className="h-4 w-4" /> Code
                </a>
                {active.demo && (
                  <a
                    data-testid="project-modal-demo"
                    href={active.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-zinc-700 px-5 py-2 text-sm text-zinc-200 hover:border-emerald-500/50 hover:text-emerald-300 transition-colors"
                  >
                    <ExternalLink className="h-4 w-4" /> {active.demoLabel || "Live Demo"}
                  </a>
                )}
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
