import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Download, Menu, X } from "lucide-react";
import { Logo } from "@/components/Logo";
import { Button } from "@/components/ui/button";
import { scrollToSection, downloadResume } from "@/lib/actions";

const links = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -70, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled ? "backdrop-blur-xl bg-zinc-950/80 border-b border-zinc-800/60" : "bg-transparent"
      }`}
      data-testid="navbar"
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-8 lg:px-12 py-4">
        <button
          data-testid="nav-logo-button"
          onClick={() => scrollToSection("hero")}
          className="flex items-center gap-3 group"
        >
          <Logo />
          <span className="font-code text-xs text-zinc-500 group-hover:text-emerald-400 transition-colors hidden sm:block">
            ~/yashvant-atk
          </span>
        </button>

        <div className="hidden lg:flex items-center gap-7">
          {links.map((l) => (
            <button
              key={l.id}
              data-testid={`nav-link-${l.id}`}
              onClick={() => scrollToSection(l.id)}
              className="font-code text-xs uppercase tracking-widest text-zinc-400 hover:text-emerald-400 transition-colors"
            >
              {l.label}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <Button
            data-testid="nav-resume-button"
            onClick={downloadResume}
            className="bg-emerald-500 text-zinc-950 hover:bg-emerald-400 hover:text-zinc-950 font-semibold rounded-full px-5 transition-transform hover:scale-105"
          >
            <Download className="mr-2 h-4 w-4" /> Resume
          </Button>
          <button
            data-testid="nav-mobile-toggle"
            className="lg:hidden text-zinc-300 p-2"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="lg:hidden backdrop-blur-xl bg-zinc-950/95 border-b border-zinc-800/60 px-6 pb-6 pt-2 flex flex-col gap-4" data-testid="nav-mobile-menu">
          {links.map((l) => (
            <button
              key={l.id}
              data-testid={`nav-mobile-link-${l.id}`}
              onClick={() => { setOpen(false); scrollToSection(l.id); }}
              className="text-left font-code text-sm uppercase tracking-widest text-zinc-300 hover:text-emerald-400 transition-colors"
            >
              {l.label}
            </button>
          ))}
        </div>
      )}
    </motion.header>
  );
}
