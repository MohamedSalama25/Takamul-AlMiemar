"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function About({ dict }: { dict: any }) {
    return (
        <section id="about" className="py-24 px-8 md:px-24 bg-surface overflow-hidden">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="space-y-8 order-2 lg:order-1"
                >
                    <div className="inline-block px-3 py-1 bg-tertiary/10 border-l-2 border-tertiary">
                        <span className="text-tertiary text-xs font-bold tracking-widest uppercase">{dict.badge}</span>
                    </div>
                    <h2 className="font-headline text-4xl md:text-5xl font-bold text-on-surface">{dict.title}</h2>
                    <div className="space-y-6 text-on-surface-variant leading-relaxed text-lg">
                        <p>{dict.p1} <span className="text-tertiary font-semibold">{dict.p1Bold}</span>{dict.p1Rest}</p>
                        <p>{dict.p2}</p>
                        <p>{dict.p3}</p>
                    </div>
                    <div className="grid grid-cols-2 gap-4 pt-4">
                        <motion.div
                            whileHover={{ y: -5 }}
                            className="p-4 border border-outline-variant/30 bg-surface-container-low"
                        >
                            <span className="block text-3xl font-bold text-primary mb-1">{dict.stat1}</span>
                            <span className="text-xs uppercase tracking-widest text-on-surface-variant">{dict.stat1Text}</span>
                        </motion.div>
                        <motion.div
                            whileHover={{ y: -5 }}
                            className="p-4 border border-outline-variant/30 bg-surface-container-low"
                        >
                            <span className="block text-3xl font-bold text-primary mb-1">{dict.stat2}</span>
                            <span className="text-xs uppercase tracking-widest text-on-surface-variant">{dict.stat2Text}</span>
                        </motion.div>
                    </div>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="relative order-1 lg:order-2"
                >
                    <div className="absolute -top-4 -right-4 w-full h-full border-2 border-tertiary/20 -z-10"></div>
                    <div className="relative w-full aspect-square shadow-2xl overflow-hidden">
                        <Image
                            fill
                            className="object-cover"
                            alt="construction site with engineers reviewing blueprints"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuB-Yl3IzLKhgtg83nO2eg8zPFLP4HIrVty05xjShRGy5HdkusSB1CLhIQcaxyLqsmVNmnWEQeOIrh4R_CEZrnb5asEWNowpDZjRdThRpSgWka_hfDbIpKp8S-BaIQwOsxWjgJeVFcmnAIxI2S9pykxrDMlGSr81n2yocOv9kgzbs4hAfZ7USPuu-MEbvb53_4i7zb80EBmAhfx_BAMIGoWBux4L4oALxtykgkOeIE9QGtVJikZ6PcoaZdiQnW_XXuNoGBLXHU17qh8q"
                            sizes="(max-width: 768px) 100vw, 50vw"
                        />
                    </div>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.5 }}
                        className="absolute bottom-6 -left-6 bg-surface-container-highest p-6 shadow-xl hidden md:block"
                    >
                        <span className="material-symbols-outlined text-tertiary text-4xl mb-2" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
                        <p className="font-headline text-xl font-bold text-on-surface whitespace-pre-line">{dict.certificate}</p>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
