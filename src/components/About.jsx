import { useState } from "react";
import { Check, Copy, Terminal } from "lucide-react";
import { Reveal, SectionLabel } from "@/components/Reveal";
import { about } from "@/data/portfolioData";

const BioTerminal = () => {
  const [copied, setCopied] = useState(false);
  const code = `const developer = {
  name: "${about.bio.name}",
  education: "${about.bio.education}",
  focus: [${about.bio.focus.map((f) => `"${f}"`).join(", ")}],
  seeking: "${about.bio.seeking}",
  openTo: [${about.bio.open_to.map((f) => `"${f}"`).join(", ")}],
  funFact: "${about.bio.fun_fact}",
};`;

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    } catch { /* clipboard unavailable */ }
  };

  return (
    <div data-testid="about-terminal" className="rounded-2xl border border-zinc-800 bg-[#0C0C0E] overflow-hidden shadow-[0_0_60px_-15px_rgba(16,185,129,0.25)]">
      <div className="flex items-center justify-between border-b border-zinc-800 px-5 py-3">
        <div className="flex items-center gap-2">
          <span className="h-3 w-3 rounded-full bg-zinc-700" />
          <span className="h-3 w-3 rounded-full bg-zinc-700" />
          <span className="h-3 w-3 rounded-full bg-emerald-500" />
        </div>
        <span className="flex items-center gap-2 font-code text-xs text-zinc-500">
          <Terminal className="h-3.5 w-3.5" /> developer.js
        </span>
        <button
          data-testid="about-terminal-copy"
          onClick={copy}
          className="text-zinc-500 hover:text-emerald-400 transition-colors"
          aria-label="Copy code"
        >
          {copied ? <Check className="h-4 w-4 text-emerald-400" /> : <Copy className="h-4 w-4" />}
        </button>
      </div>
      <pre className="p-6 overflow-x-auto font-code text-sm leading-7 text-zinc-300">
        <code>{code}</code>
      </pre>
    </div>
  );
};

export default function About() {
  return (
    <section id="about" data-testid="about-section" className="py-20 lg:py-32 px-4 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
        <Reveal>
          <SectionLabel index="01">About</SectionLabel>
          <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-zinc-50 mb-6">
            {about.heading}
          </h2>
          {about.paragraphs.map((p, i) => (
            <p key={i} className="text-base leading-relaxed text-zinc-400 mb-4">{p}</p>
          ))}
        </Reveal>
        <Reveal delay={0.15}>
          <BioTerminal />
        </Reveal>
      </div>
    </section>
  );
}
