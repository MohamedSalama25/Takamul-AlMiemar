"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function Hero({ dict }: { dict: any }) {
    return (
        <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 z-0">
                <motion.div
                    initial={{ scale: 1.15, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    className="relative w-full h-full"
                >
                    <Image
                        fill
                        className="object-cover dark:grayscale"
                        alt="cinematic architecture"
                        src="/home/hero.jpg"
                        priority
                    />
                </motion.div>
                <div
                    className="absolute inset-0 bg-gradient-to-b from-black/62 via-black/45 to-black/68 dark:from-black/70 dark:via-black/52 dark:to-black/76"
                    aria-hidden
                />
            </div>
            <div className="relative z-10 text-center px-4 max-w-5xl">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="flex flex-col items-center gap-6"
                >
                    <div className="flex flex-col items-center">
                        <motion.h1
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1, delay: 0.2 }}
                            className="font-headline text-4xl md:text-6xl font-extrabold tracking-tight leading-[1.2] text-white drop-shadow-[0_6px_18px_rgba(0,0,0,0.6)]"
                        >
                            {dict.title1}<br />{dict.title2}<br />{dict.title3}
                        </motion.h1>
                    </div>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className="max-w-2xl text-lg md:text-xl font-medium leading-relaxed text-white/95 drop-shadow-[0_4px_14px_rgba(0,0,0,0.6)]"
                    >
                        {dict.description}
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.8 }}
                        className="flex flex-col sm:flex-row gap-4 mt-8"
                    >
                        <Link
                            href="/projects"
                            className="px-8 py-4 bg-primary-container text-tertiary border-l-2 border-tertiary font-semibold tracking-wider uppercase text-sm hover:bg-tertiary hover:text-on-tertiary hover:shadow-[0_0_20px_rgba(212,175,55,0.25)] transition-all active:scale-95"
                        >
                            {dict.ctaProjects}
                        </Link>
                        <Link
                            href="/contact"
                            className="px-8 py-4 bg-tertiary border border-tertiary text-on-tertiary font-semibold tracking-wider uppercase text-sm hover:bg-tertiary/90 hover:border-tertiary/90 hover:shadow-[0_0_20px_rgba(212,175,55,0.3)] transition-all active:scale-95"
                        >
                            {dict.ctaContact}
                        </Link>
                    </motion.div>
                </motion.div>
            </div>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.4 }}
                transition={{ delay: 1.2 }}
                className="absolute bottom-16 md:bottom-20 left-1/2 -translate-x-1/2 animate-bounce"
            >
                <span className="material-symbols-outlined text-4xl text-tertiary">keyboard_double_arrow_down</span>
            </motion.div>
        </section>
    );
}
