import { motion } from "framer-motion";
import { ArrowDown, Download, MapPin } from "lucide-react";
import Hero3D from "@/components/Hero3D";
import { Button } from "@/components/ui/button";
import { profile, heroLines, heroStats } from "@/data/portfolioData";
import { scrollToSection, downloadResume } from "@/lib/actions";

const MaskedLine = ({ text, delay, className }) => (
  <span className="block overflow-hidden pb-1">
    <motion.span
      className={`block ${className}`}
      initial={{ y: "110%" }}
      animate={{ y: 0 }}
      transition={{ duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {text}
    </motion.span>
  </span>
);

export default function Hero() {
  return (
    <section id="hero" data-testid="hero-section" className="relative min-h-screen flex items-center overflow-hidden bg-grid">
      <div className="absolute inset-0 bg-glow" aria-hidden="true" />
      <Hero3D />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-8 lg:px-12 pt-28 pb-20">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="font-code text-xs sm:text-sm text-emerald-400 tracking-[0.25em] uppercase mb-6"
        >
          {"//"} {profile.role}
        </motion.p>

        <h1 className="font-display font-extrabold tracking-tight leading-[0.95] text-5xl sm:text-7xl lg:text-8xl text-zinc-50">
          <MaskedLine text={heroLines[0]} delay={0.45} />
          <MaskedLine text={heroLines[1]} delay={0.58} className="text-zinc-500" />
          <MaskedLine text={heroLines[2]} delay={0.71} className="text-emerald-400" />
        </h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0, duration: 0.7 }}
          className="mt-8 flex flex-wrap items-center gap-3"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-emerald-500/40 bg-emerald-500/10 px-4 py-1.5 text-xs font-code text-emerald-300">
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            {profile.availability}
          </span>
          <span className="inline-flex items-center gap-1.5 text-xs font-code text-zinc-500">
            <MapPin className="h-3.5 w-3.5" /> {profile.location}
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.15, duration: 0.7 }}
          className="mt-10 flex flex-wrap gap-4"
        >
          <Button
            data-testid="hero-explore-button"
            onClick={() => scrollToSection("projects")}
            className="bg-emerald-500 text-zinc-950 hover:bg-emerald-400 hover:text-zinc-950 font-semibold rounded-full px-7 py-6 text-base transition-transform hover:scale-105"
          >
            Explore Projects <ArrowDown className="ml-2 h-4 w-4" />
          </Button>
          <Button
            data-testid="hero-resume-button"
            variant="outline"
            onClick={downloadResume}
            className="border-zinc-700 bg-transparent text-zinc-200 hover:bg-zinc-800 hover:text-emerald-400 rounded-full px-7 py-6 text-base transition-transform hover:scale-105"
          >
            <Download className="mr-2 h-4 w-4" /> Download Resume
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.35, duration: 0.8 }}
          className="mt-14 flex flex-wrap gap-8"
        >
          {heroStats.map((s, i) => (
            <div key={i} data-testid={`hero-stat-${i}`} className="border-l-2 border-emerald-500/50 pl-4">
              <p className="font-display text-2xl font-bold text-zinc-50">{s.value}</p>
              <p className="text-xs font-code uppercase tracking-widest text-zinc-500">{s.label}</p>
            </div>
          ))}
        </motion.div>
      </div>

      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2.2, ease: "easeInOut" }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-zinc-600"
        aria-hidden="true"
      >
        <ArrowDown className="h-5 w-5" />
      </motion.div>
    </section>
  );
}
