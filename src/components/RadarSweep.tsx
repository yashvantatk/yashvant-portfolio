import { motion } from "framer-motion"

export default function RadarSweep() {
    return (
        <svg
            className="absolute -top-24 -right-24 w-[500px] h-[500px] opacity-40 pointer-events-none"
            viewBox="0 0 500 500"
        >
            {[80, 140, 200, 260].map((r) => (
                <circle
                    key={r}
                    cx="250"
                    cy="250"
                    r={r}
                    fill="none"
                    stroke="#23304A"
                    strokeWidth="1"
                />
            ))}
            <motion.line
                x1="250"
                y1="250"
                x2="250"
                y2="0"
                stroke="#FFB454"
                strokeWidth="1.5"
                style={{ transformOrigin: "250px 250px" }}
                initial={{ rotate: 0, opacity: 0 }}
                animate={{ rotate: 360, opacity: [0, 1, 1, 0] }}
                transition={{ duration: 2.2, ease: "easeInOut", times: [0, 0.1, 0.85, 1] }}
            />
            <motion.circle
                cx="250"
                cy="80"
                r="4"
                fill="#7DD3C0"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 2, duration: 0.4 }}
            />
        </svg>
    )
}