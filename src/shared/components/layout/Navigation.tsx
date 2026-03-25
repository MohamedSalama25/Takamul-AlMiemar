"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import LanguageToggle from "./LanguageToggle";
import ThemeToggle from "./ThemeToggle";

export default function Navigation({ dict }: { dict: any }) {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();

    const navLinks = [
        { name: dict.about, href: "/about" },
        { name: dict.services, href: "/services" },
        { name: dict.projects, href: "/projects" },
        { name: dict.clients, href: "/#clients" },
        { name: dict.contact, href: "/contact" },
    ];

    return (
        <>
            <nav className="fixed top-0 w-full z-50 flex justify-center items-center px-4 md:px-8 py-6 pointer-events-none">
                <motion.div
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    className="w-full max-w-7xl rounded-sm border border-white/5 bg-background/60 backdrop-blur-xl flex justify-between items-center px-6 md:px-8 py-4 shadow-[0_20px_50px_rgba(0,0,0,0.3)] pointer-events-auto"
                >
                    <Link href="/" className="text-lg md:text-xl font-bold tracking-tighter text-on-surface flex items-center gap-2 group">
                        <motion.span
                            whileHover={{ rotate: 90 }}
                            className="text-tertiary material-symbols-outlined text-2xl"
                            style={{ fontVariationSettings: "'FILL' 1" }}
                        >
                            architecture
                        </motion.span>
                        <span className="group-hover:text-tertiary transition-colors">{dict.title}</span>
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => {
                            const isActive = pathname === link.href;
                            const isAnchor = link.href.startsWith("/#");

                            return (
                                <motion.div
                                    whileHover={{ scale: 1.05, y: -2 }}
                                    key={link.href}
                                    className="relative"
                                >
                                    {isAnchor ? (
                                        <a
                                            className={`font-manrope tracking-widest uppercase text-sm font-bold transition-colors duration-300 group ${isActive ? "text-tertiary" : "text-on-surface-variant hover:text-tertiary"
                                                }`}
                                            href={link.href}
                                        >
                                            {link.name}
                                            <span className={`absolute -bottom-1 left-0 h-px bg-tertiary transition-all duration-300 ${isActive ? "w-full" : "w-0 group-hover:w-full"
                                                }`}></span>
                                        </a>
                                    ) : (
                                        <Link
                                            className={`font-manrope tracking-widest uppercase text-sm font-bold transition-colors duration-300 group ${isActive ? "text-tertiary" : "text-on-surface-variant hover:text-tertiary"
                                                }`}
                                            href={link.href}
                                        >
                                            {link.name}
                                            <span className={`absolute -bottom-1 left-0 h-px bg-tertiary transition-all duration-300 ${isActive ? "w-full" : "w-0 group-hover:w-full"
                                                }`}></span>
                                        </Link>
                                    )}
                                </motion.div>
                            );
                        })}
                    </div>

                    <div className="flex items-center gap-4">
                        <div className="hidden md:flex items-center gap-2">
                            <ThemeToggle />
                            <LanguageToggle />
                        </div>

                        {/* Mobile Toggle Button */}
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="md:hidden flex flex-col items-center justify-center w-10 h-10 gap-1.5 focus:outline-none group relative overflow-hidden"
                            aria-label="Toggle Menu"
                        >
                            <motion.span
                                animate={isOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
                                className="w-6 h-0.5 bg-tertiary block rounded-full origin-center"
                            />
                            <motion.span
                                animate={isOpen ? { opacity: 0, x: -20 } : { opacity: 1, x: 0 }}
                                className="w-4 h-0.5 bg-tertiary block rounded-full"
                            />
                            <motion.span
                                animate={isOpen ? { rotate: -45, y: -8, width: 24 } : { rotate: 0, y: 0, width: 16 }}
                                className="w-4 h-0.5 bg-tertiary block rounded-full origin-center self-end"
                            />
                        </button>
                    </div>
                </motion.div>
            </nav>

            {/* Mobile Sidebar */}
            <AnimatePresence>
                {isOpen && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsOpen(false)}
                            className="fixed inset-0 bg-background/80 backdrop-blur-sm z-[60] md:hidden"
                        />

                        {/* Sidebar */}
                        <motion.div
                            initial={{ x: "100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "100%" }}
                            transition={{ type: "spring", damping: 25, stiffness: 200 }}
                            className="fixed top-0 right-0 h-full w-[80%] max-w-sm bg-surface-variant z-[70] md:hidden p-12 flex flex-col shadow-2xl border-l border-tertiary/10"
                        >
                            <div className="flex justify-between items-center mb-16 px-4">
                                <span className="text-xs font-label tracking-widest text-tertiary uppercase">Menu</span>
                                <button onClick={() => setIsOpen(false)} className="text-on-background">
                                    <span className="material-symbols-outlined text-3xl">close</span>
                                </button>
                            </div>

                            <div className="flex flex-col gap-8 px-4">
                                {navLinks.map((link, i) => {
                                    const isActive = pathname === link.href;
                                    const isAnchor = link.href.startsWith("/#");

                                    return (
                                        <motion.div
                                            initial={{ opacity: 0, x: 20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: i * 0.1 }}
                                            key={link.href}
                                        >
                                            {isAnchor ? (
                                                <a
                                                    href={link.href}
                                                    onClick={() => setIsOpen(false)}
                                                    className={`text-2xl font-bold transition-colors font-headline flex items-center gap-4 group ${isActive ? "text-tertiary" : "text-on-background hover:text-tertiary"
                                                        }`}
                                                >
                                                    {link.name}
                                                </a>
                                            ) : (
                                                <Link
                                                    href={link.href}
                                                    onClick={() => setIsOpen(false)}
                                                    className={`text-2xl font-bold transition-colors font-headline flex items-center gap-4 group ${isActive ? "text-tertiary" : "text-on-background hover:text-tertiary"
                                                        }`}
                                                >
                                                    {link.name}
                                                </Link>
                                            )}
                                        </motion.div>
                                    );
                                })}
                            </div>

                            <div className="mt-auto pt-12 border-t border-white/5 flex flex-col gap-8 px-4">
                                <div className="flex items-center justify-between">
                                    <span className="text-xs text-on-surface-variant uppercase tracking-widest">Controls</span>
                                    <div className="flex gap-4">
                                        <ThemeToggle />
                                        <LanguageToggle />
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
}
