import { ArrowUp } from "lucide-react";
import { Logo } from "@/components/Logo";
import { profile } from "@/data/portfolioData";

export default function Footer() {
  const toTop = () => {
    if (window.__lenis) window.__lenis.scrollTo(0, { duration: 1.4 });
    else window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer data-testid="footer" className="relative overflow-hidden border-t border-zinc-800/70 px-4 sm:px-8 lg:px-12 pt-16 pb-8">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-wrap items-end justify-between gap-8 mb-12">
          <div>
            <div className="flex items-center gap-4 mb-4">
              <Logo size={44} />
              <span className="font-code text-xs text-zinc-500">{profile.role}</span>
            </div>
            <p className="font-display text-4xl sm:text-6xl font-extrabold tracking-tight text-zinc-800 select-none">
              {profile.name.toUpperCase()}
            </p>
          </div>
          <button
            data-testid="footer-back-to-top"
            onClick={toTop}
            className="flex items-center gap-2 rounded-full border border-zinc-800 px-5 py-2.5 font-code text-xs uppercase tracking-widest text-zinc-400 hover:border-emerald-500/50 hover:text-emerald-300 transition-colors"
          >
            Back to top <ArrowUp className="h-4 w-4" />
          </button>
        </div>
        <div className="flex flex-wrap items-center justify-between gap-4 border-t border-zinc-800/70 pt-6">
          <p className="font-code text-xs text-zinc-600">
            © {new Date().getFullYear()} {profile.name} · Built with React
          </p>
          <p className="font-code text-xs text-zinc-700">
            <span className="text-emerald-500/80">{profile.location}</span> · {profile.email}
          </p>
        </div>
      </div>
    </footer>
  );
}
