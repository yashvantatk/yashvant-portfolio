import { motion } from "framer-motion";

export const Reveal = ({ children, delay = 0, className, y = 32 }) => (
  <motion.div
    className={className}
    initial={{ opacity: 0, y }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-70px" }}
    transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
  >
    {children}
  </motion.div>
);

export const SectionLabel = ({ index, children }) => (
  <p className="font-code text-xs uppercase tracking-[0.25em] text-emerald-400 mb-4">
    <span className="text-zinc-600">{index} /</span> {children}
  </p>
);
