import { useEffect, useState } from "react"
import { motion } from "framer-motion"

export default function CustomCursor() {
    const [pos, setPos] = useState({ x: -100, y: -100 })
    const [isPointer, setIsPointer] = useState(false)
    const [visible, setVisible] = useState(false)

    useEffect(() => {
        const move = (e: MouseEvent) => {
            setPos({ x: e.clientX, y: e.clientY })
            if (!visible) setVisible(true)
            const target = e.target as HTMLElement
            setIsPointer(!!target.closest("a, button"))
        }
        const leave = () => setVisible(false)

        window.addEventListener("mousemove", move)
        document.documentElement.addEventListener("mouseleave", leave)
        return () => {
            window.removeEventListener("mousemove", move)
            document.documentElement.removeEventListener("mouseleave", leave)
        }
    }, [visible])

    return (
        <motion.div
            className="fixed top-0 left-0 pointer-events-none z-[999] hidden md:block"
            animate={{ x: pos.x - 16, y: pos.y - 16, opacity: visible ? 1 : 0 }}
            transition={{ type: "spring", stiffness: 700, damping: 40, mass: 0.4 }}
        >
            <motion.svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                animate={{ scale: isPointer ? 1.4 : 1, rotate: isPointer ? 45 : 0 }}
                transition={{ duration: 0.2 }}
            >
                <circle cx="16" cy="16" r="1.5" fill="#FFB454" />
                <line x1="16" y1="2" x2="16" y2="9" stroke="#FFB454" strokeWidth="1.5" />
                <line x1="16" y1="23" x2="16" y2="30" stroke="#FFB454" strokeWidth="1.5" />
                <line x1="2" y1="16" x2="9" y2="16" stroke="#FFB454" strokeWidth="1.5" />
                <line x1="23" y1="16" x2="30" y2="16" stroke="#FFB454" strokeWidth="1.5" />
            </motion.svg>
        </motion.div>
    )
}