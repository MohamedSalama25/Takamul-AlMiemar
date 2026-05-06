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
    const isArabicUI = /[\u0600-\u06FF]/.test(
        `${dict.about ?? ""}${dict.services ?? ""}${dict.projects ?? ""}${dict.contact ?? ""}`
    );

    const navLinks = [
        { name: dict.about, href: "/about" },
        { name: dict.services, href: "/services" },
        { name: dict.projects, href: "/projects" },
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
                            initial={{ x: "100%", opacity: 0.8, scale: 0.98 }}
                            animate={{ x: 0, opacity: 1, scale: 1 }}
                            exit={{ x: "100%", opacity: 0.8, scale: 0.985 }}
                            transition={{ type: "spring", damping: 24, stiffness: 250, mass: 0.85 }}
                            dir={isArabicUI ? "rtl" : "ltr"}
                            className="fixed top-0 right-0 h-full w-[72%] max-w-[280px] bg-surface z-[70] md:hidden px-5 pt-5 pb-7 flex flex-col shadow-[0_34px_85px_rgba(0,0,0,0.3)] border-l border-outline-variant/30"
                        >
                            <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-tertiary/5" aria-hidden />

                            <div className="relative flex items-center justify-between pb-4 border-b border-outline-variant/20">
                                <button onClick={() => setIsOpen(false)} className="text-on-background/80 hover:text-on-background transition-colors">
                                    <span className="material-symbols-outlined text-[1.75rem]">close</span>
                                </button>
                                <span className="text-xs font-label tracking-widest text-tertiary uppercase">Menu</span>
                            </div>

                            <motion.div
                                initial="hidden"
                                animate="show"
                                variants={{
                                    hidden: {},
                                    show: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
                                }}
                                className="relative flex flex-col gap-1.5 mt-6"
                            >
                                {navLinks.map((link, i) => {
                                    const isActive = pathname === link.href;
                                    const isAnchor = link.href.startsWith("/#");

                                    return (
                                        <motion.div
                                            variants={{
                                                hidden: { opacity: 0, x: 24, scale: 0.98 },
                                                show: { opacity: 1, x: 0, scale: 1 },
                                            }}
                                            transition={{ duration: 0.35, ease: "easeOut" }}
                                            key={link.href}
                                        >
                                            {isAnchor ? (
                                                <a
                                                    href={link.href}
                                                    onClick={() => setIsOpen(false)}
                                                    className={`relative text-[1.35rem] leading-none font-bold transition-all duration-300 font-headline flex items-center ${isArabicUI ? "justify-end text-right" : "justify-start text-left"} gap-3 group px-3.5 py-3 rounded-lg ${isActive
                                                            ? "text-on-primary bg-primary shadow-[0_12px_24px_rgba(0,71,133,0.28)]"
                                                            : "text-on-background/80 hover:text-primary hover:bg-surface-container-low"
                                                        }`}
                                                >
                                                    {link.name}
                                                </a>
                                            ) : (
                                                <Link
                                                    href={link.href}
                                                    onClick={() => setIsOpen(false)}
                                                    className={`relative text-[1.35rem] leading-none font-bold transition-all duration-300 font-headline flex items-center ${isArabicUI ? "justify-end text-right" : "justify-start text-left"} gap-3 group px-3.5 py-3 rounded-lg ${isActive
                                                            ? "text-on-primary bg-primary shadow-[0_12px_24px_rgba(0,71,133,0.28)]"
                                                            : "text-on-background/80 hover:text-primary hover:bg-surface-container-low"
                                                        }`}
                                                >
                                                    {link.name}
                                                </Link>
                                            )}
                                        </motion.div>
                                    );
                                })}
                            </motion.div>

                            <div className="relative mt-auto pt-5 border-t border-outline-variant/20 flex flex-col gap-3.5">
                                <Link
                                    href="/contact"
                                    onClick={() => setIsOpen(false)}
                                    className="w-full rounded-lg bg-primary text-on-primary text-[1.35rem] font-headline font-bold py-3 text-center shadow-[0_12px_24px_rgba(0,71,133,0.25)]"
                                >
                                    {dict.contact}
                                </Link>
                                <div className="flex items-center justify-between px-2">
                                    <span className="text-[11px] text-on-surface-variant uppercase tracking-widest">Controls</span>
                                    <div className="flex gap-3">
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
