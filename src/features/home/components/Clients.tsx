"use client";

import { motion } from "framer-motion";

export default function Clients({ dict }: { dict: any }) {
    return (
        <motion.section
            id="clients"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="overflow-hidden bg-surface py-20 md:py-24"
        >
            <div className="mx-auto mb-12 max-w-7xl px-6 text-center md:mb-14">
                <motion.h2
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="font-headline text-2xl font-extrabold tracking-tight text-on-surface md:text-4xl"
                >
                    {dict.badge}
                </motion.h2>
                <div className="mx-auto mt-4 h-1 w-32 rounded-full bg-gradient-to-l from-tertiary to-transparent" aria-hidden />
            </div>
            <div className="relative flex overflow-hidden border-y border-outline-variant/25 bg-surface-container-low py-5">
                <div className="flex animate-marquee items-center gap-16 whitespace-nowrap px-6">
                    <div className="flex cursor-pointer items-center gap-2 text-on-surface-variant opacity-75 grayscale transition-all hover:text-on-surface hover:opacity-100 hover:grayscale-0">
                        <span className="material-symbols-outlined text-4xl">apartment</span>
                        <span className="text-xl font-bold tracking-tighter">AL-RAJHI GROUP</span>
                    </div>
                    <div className="flex cursor-pointer items-center gap-2 text-on-surface-variant opacity-75 grayscale transition-all hover:text-on-surface hover:opacity-100 hover:grayscale-0">
                        <span className="material-symbols-outlined text-4xl">factory</span>
                        <span className="text-xl font-bold tracking-tighter">SABIC</span>
                    </div>
                    <div className="flex cursor-pointer items-center gap-2 text-on-surface-variant opacity-75 grayscale transition-all hover:text-on-surface hover:opacity-100 hover:grayscale-0">
                        <span className="material-symbols-outlined text-4xl">domain</span>
                        <span className="text-xl font-bold tracking-tighter">MA'ADEN</span>
                    </div>
                    <div className="flex cursor-pointer items-center gap-2 text-on-surface-variant opacity-75 grayscale transition-all hover:text-on-surface hover:opacity-100 hover:grayscale-0">
                        <span className="material-symbols-outlined text-4xl">energy_savings_leaf</span>
                        <span className="text-xl font-bold tracking-tighter">SEC ENERGY</span>
                    </div>
                    <div className="flex cursor-pointer items-center gap-2 text-on-surface-variant opacity-75 grayscale transition-all hover:text-on-surface hover:opacity-100 hover:grayscale-0">
                        <span className="material-symbols-outlined text-4xl">business</span>
                        <span className="text-xl font-bold tracking-tighter">RIYADH METRO</span>
                    </div>
                    <div className="flex cursor-pointer items-center gap-2 text-on-surface-variant opacity-75 grayscale transition-all hover:text-on-surface hover:opacity-100 hover:grayscale-0">
                        <span className="material-symbols-outlined text-4xl">apartment</span>
                        <span className="text-xl font-bold tracking-tighter">AL-RAJHI GROUP</span>
                    </div>
                    <div className="flex cursor-pointer items-center gap-2 text-on-surface-variant opacity-75 grayscale transition-all hover:text-on-surface hover:opacity-100 hover:grayscale-0">
                        <span className="material-symbols-outlined text-4xl">factory</span>
                        <span className="text-xl font-bold tracking-tighter">SABIC</span>
                    </div>
                </div>
            </div>
        </motion.section>
    );
}

