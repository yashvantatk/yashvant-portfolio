import { useEffect, useState } from "react"
import { motion } from "framer-motion"

const links = [
    { label: "Work", href: "#projects" },
    { label: "Experience", href: "#experience" },
    { label: "Stack", href: "#stack" },
    { label: "Contact", href: "#contact" },
]

export default function Nav() {
    const [scrolled, setScrolled] = useState(false)
    const [menuOpen, setMenuOpen] = useState(false)

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 40)
        window.addEventListener("scroll", onScroll)
        return () => window.removeEventListener("scroll", onScroll)
    }, [])

    return (
        <motion.nav
            initial={{ y: -60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 md:px-16 py-4 transition-colors duration-300 ${scrolled ? "bg-bg/80 backdrop-blur-sm border-b border-grid" : "bg-transparent"}`}
        >
            <a href="#" className="font-display font-semibold text-text text-sm">YATK</a>

            <div className="hidden md:flex items-center gap-8">
                {links.map((link) => (
                    <a key={link.href} href={link.href} className="font-data text-xs text-text-muted hover:text-amber transition-colors">
                        {link.label}
                    </a>
                ))}
            </div>

            <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden font-data text-xs text-text-muted">
                {menuOpen ? "CLOSE" : "MENU"}
            </button>

            {menuOpen && (
                <div className="absolute top-full left-0 right-0 bg-bg border-b border-grid flex flex-col md:hidden">
                    {links.map((link) => (
                        <a key={link.href} href={link.href} onClick={() => setMenuOpen(false)} className="font-data text-sm text-text-muted hover:text-amber px-8 py-4 border-t border-grid">
                            {link.label}
                        </a>
                    ))}
                </div>
            )}
        </motion.nav>
    )
}