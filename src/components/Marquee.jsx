import { marqueeItems } from "@/data/portfolioData";

export default function Marquee() {
  const row = [...marqueeItems, ...marqueeItems];
  return (
    <div
      data-testid="editorial-marquee"
      className="relative overflow-hidden border-y border-zinc-800/70 bg-zinc-950/60 py-5 select-none"
    >
      <div className="animate-marquee flex w-max items-center gap-10 whitespace-nowrap">
        {row.map((item, i) => (
          <span key={i} className="flex items-center gap-10">
            <span className="font-display text-sm font-semibold uppercase tracking-[0.3em] text-zinc-500">
              {item}
            </span>
            <span className="h-1.5 w-1.5 rotate-45 bg-emerald-500/70" />
          </span>
        ))}
      </div>
    </div>
  );
}
