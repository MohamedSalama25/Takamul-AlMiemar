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
            className="py-16 overflow-hidden bg-surface"
        >
            <div className="text-center mb-12">
                <span className="text-[10px] font-bold tracking-[0.4em] uppercase text-on-surface-variant opacity-60">{dict.badge}</span>
            </div>
            <div className="marquee-container relative w-full flex overflow-hidden">
                <div className="flex animate-marquee whitespace-nowrap gap-16 items-center px-4">
                    <div className="flex items-center gap-2 grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all cursor-pointer">
                        <span className="material-symbols-outlined text-4xl">apartment</span>
                        <span className="text-xl font-bold tracking-tighter">AL-RAJHI GROUP</span>
                    </div>
                    <div className="flex items-center gap-2 grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all cursor-pointer">
                        <span className="material-symbols-outlined text-4xl">factory</span>
                        <span className="text-xl font-bold tracking-tighter">SABIC</span>
                    </div>
                    <div className="flex items-center gap-2 grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all cursor-pointer">
                        <span className="material-symbols-outlined text-4xl">domain</span>
                        <span className="text-xl font-bold tracking-tighter">MA'ADEN</span>
                    </div>
                    <div className="flex items-center gap-2 grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all cursor-pointer">
                        <span className="material-symbols-outlined text-4xl">energy_savings_leaf</span>
                        <span className="text-xl font-bold tracking-tighter">SEC ENERGY</span>
                    </div>
                    <div className="flex items-center gap-2 grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all cursor-pointer">
                        <span className="material-symbols-outlined text-4xl">business</span>
                        <span className="text-xl font-bold tracking-tighter">RIYADH METRO</span>
                    </div>
                    <div className="flex items-center gap-2 grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all cursor-pointer">
                        <span className="material-symbols-outlined text-4xl">apartment</span>
                        <span className="text-xl font-bold tracking-tighter">AL-RAJHI GROUP</span>
                    </div>
                    <div className="flex items-center gap-2 grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all cursor-pointer">
                        <span className="material-symbols-outlined text-4xl">factory</span>
                        <span className="text-xl font-bold tracking-tighter">SABIC</span>
                    </div>
                </div>
            </div>
        </motion.section>
    );
}

