import { GraduationCap, Medal } from "lucide-react";
import { Reveal, SectionLabel } from "@/components/Reveal";
import { education } from "@/data/portfolioData";

export default function Education() {
  return (
    <section id="education" data-testid="education-section" className="py-20 lg:py-32 px-4 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-4xl">
        <Reveal>
          <SectionLabel index="05">Education</SectionLabel>
          <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-zinc-50 mb-10">
            Where I study.
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-8 lg:p-10 transition-colors hover:border-emerald-500/40">
            <div className="flex flex-wrap items-start justify-between gap-6 mb-8">
              <div className="flex items-start gap-4">
                <span className="rounded-xl bg-emerald-500/10 border border-emerald-500/30 p-3">
                  <GraduationCap className="h-6 w-6 text-emerald-400" />
                </span>
                <div>
                  <h3 className="font-display text-xl font-semibold text-zinc-50">{education.degree}</h3>
                  <p className="text-sm text-zinc-400">{education.school}</p>
                  <p className="font-code text-xs text-zinc-500 mt-1">{education.period}</p>
                </div>
              </div>
              <div className="text-right">
                <p className="font-code text-[10px] uppercase tracking-widest text-zinc-500">GPA</p>
                <p className="font-display text-2xl font-bold text-emerald-400">{education.gpa}</p>
              </div>
            </div>
            <div className="mb-6 flex flex-wrap gap-2">
              {education.honors.map((h) => (
                <span key={h} className="inline-flex items-center gap-1.5 rounded-full border border-amber-500/30 bg-amber-500/10 px-3 py-1 font-code text-[10px] uppercase tracking-widest text-amber-300">
                  <Medal className="h-3 w-3" /> {h}
                </span>
              ))}
            </div>
            <p className="font-code text-[10px] uppercase tracking-widest text-zinc-500 mb-3">Relevant Coursework</p>
            <div className="flex flex-wrap gap-2">
              {education.coursework.map((c) => (
                <span key={c} className="rounded-full bg-zinc-800/80 px-3 py-1.5 text-xs text-zinc-300">{c}</span>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
