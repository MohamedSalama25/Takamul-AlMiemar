"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function About({ dict, isRtl = true }: { dict: any; isRtl?: boolean }) {
    return (
        <section id="about" className="relative overflow-hidden bg-surface py-24 px-6 md:px-14 lg:px-20">
            <div className="pointer-events-none absolute -left-20 top-10 h-56 w-56 rounded-full bg-primary/10 blur-3xl" aria-hidden />
            <div className="pointer-events-none absolute -right-16 bottom-10 h-64 w-64 rounded-full bg-tertiary/10 blur-3xl" aria-hidden />

            <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className="max-w-7xl mx-auto grid grid-cols-1 items-center gap-14 lg:grid-cols-2 lg:gap-20"
            >
                <motion.div
                    initial={{ opacity: 0, x: -60 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="relative order-1 lg:order-2"
                >
                    <div className="absolute -top-4 -right-4 h-full w-full rounded-sm border border-primary/20" aria-hidden />
                    <div className="relative aspect-[4/4.2] w-full overflow-hidden rounded-sm border border-outline-variant/30 bg-surface-container shadow-[0_24px_60px_rgba(0,0,0,0.18)]">
                        <Image
                            fill
                            className="object-cover transition-transform duration-700 hover:scale-105"
                            alt="construction site with engineers reviewing blueprints"
                            src="/home/solutions.jpg"
                            sizes="(max-width: 1024px) 100vw, 48vw"
                        />
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 60 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.85, ease: "easeOut", delay: 0.1 }}
                    className="order-2 space-y-7 lg:order-1"
                >
                    <h2 className="font-headline text-4xl font-bold leading-tight text-on-surface md:text-5xl">
                        {dict.title}
                    </h2>
                    <div className={`h-1 w-32 md:w-48 rounded-full ${isRtl ? "bg-gradient-to-l" : "bg-gradient-to-r"} from-tertiary to-transparent`} aria-hidden />
                    <div className="space-y-5 text-base leading-relaxed text-on-surface-variant md:text-lg">
                        <p>{dict.p1} <span className="text-tertiary font-semibold">{dict.p1Bold}</span>{dict.p1Rest}</p>
                        <p>{dict.p2}</p>
                        <p>{dict.p3}</p>
                    </div>
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-60px" }}
                        variants={{
                            hidden: {},
                            visible: {
                                transition: { staggerChildren: 0.14, delayChildren: 0.2 },
                            },
                        }}
                        className="grid grid-cols-2 gap-4 pt-3"
                    >
                        <motion.div
                            variants={{
                                hidden: { opacity: 0, y: 20, scale: 0.97 },
                                visible: { opacity: 1, y: 0, scale: 1 },
                            }}
                            whileHover={{ y: -6, scale: 1.02 }}
                            transition={{ duration: 0.45, ease: "easeOut" }}
                            className="rounded-sm border border-outline-variant/30 bg-surface-container-low p-4 shadow-sm"
                        >
                            <span className="block text-3xl font-bold text-primary mb-1">{dict.stat1}</span>
                            <span className="text-xs uppercase tracking-widest text-on-surface-variant">{dict.stat1Text}</span>
                        </motion.div>
                        <motion.div
                            variants={{
                                hidden: { opacity: 0, y: 20, scale: 0.97 },
                                visible: { opacity: 1, y: 0, scale: 1 },
                            }}
                            whileHover={{ y: -6, scale: 1.02 }}
                            transition={{ duration: 0.45, ease: "easeOut" }}
                            className="rounded-sm border border-outline-variant/30 bg-surface-container-low p-4 shadow-sm"
                        >
                            <span className="block text-3xl font-bold text-primary mb-1">{dict.stat2}</span>
                            <span className="text-xs uppercase tracking-widest text-on-surface-variant">{dict.stat2Text}</span>
                        </motion.div>
                    </motion.div>
                </motion.div>
            </motion.div>
        </section>
    );
}
