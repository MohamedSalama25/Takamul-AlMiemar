"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero({ dict }: { dict: any }) {
    return (
        <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 z-0">
                <motion.div
                    initial={{ scale: 1.15, opacity: 0 }}
                    animate={{ scale: 1, opacity: 0.6 }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    className="relative w-full h-full"
                >
                    <Image
                        fill
                        className="object-cover grayscale"
                        alt="cinematic architecture"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuA75aWH2YjrrNPRLc9qvumaD5LYevuPRG-6tvHXFDx5USkWwYCo3NdB2yuGrDSEi9JyDaFuv7lA0N4A73lCf8ZXs0uMm9qIaMYRtzNaTXPo_XpHRzWmbxdPGO48NeQzI4mogZf3rfoj5Y8gd_fJci4eHueNdRTEXuAwg99OO_InkNQaYi2Tmn9MOW5y9DRy-NsbfE4MJfvf5_GZwVi4hxJYapV2exMF27Vp4diAYemTbnFmfZ3FI8sIrsiNEuqJzCUiGWRMU4Itap8d"
                        priority
                    />
                </motion.div>
                <div className="absolute inset-0 bg-gradient-to-b from-surface-dim/80 via-surface-dim/40 to-surface-dim"></div>
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
                            className="font-headline text-5xl md:text-7xl font-extrabold tracking-tight leading-[1.2] gold-shimmer"
                        >
                            {dict.title1}<br />{dict.title2}<br />{dict.title3}
                        </motion.h1>
                    </div>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className="text-on-surface-variant text-lg md:text-xl max-w-2xl font-light leading-relaxed"
                    >
                        {dict.description}
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.8 }}
                        className="flex flex-col sm:flex-row gap-4 mt-8"
                    >
                        <button className="px-8 py-4 bg-primary-container text-primary border-l-2 border-tertiary font-semibold tracking-wider uppercase text-sm hover:shadow-[0_0_20px_rgba(212,175,55,0.2)] transition-all active:scale-95">
                            {dict.ctaProjects}
                        </button>
                        <button className="px-8 py-4 bg-transparent border border-outline-variant text-on-surface font-semibold tracking-wider uppercase text-sm hover:bg-surface-variant transition-all active:scale-95">
                            {dict.ctaContact}
                        </button>
                    </motion.div>
                </motion.div>
            </div>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.4 }}
                transition={{ delay: 1.2 }}
                className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce"
            >
                <span className="material-symbols-outlined text-4xl">keyboard_double_arrow_down</span>
            </motion.div>
        </section>
    );
}
