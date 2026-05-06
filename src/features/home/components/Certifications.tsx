"use client";

import { motion } from "framer-motion";

export default function Certifications({ dict }: { dict: any }) {
    const cardVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: (i: number) => ({
            opacity: 1,
            y: 0,
            transition: { delay: i * 0.2, duration: 0.8 }
        })
    };

    return (
        <section className="py-24 px-8 md:px-24 bg-surface-container-low overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <h2 className="font-headline text-3xl font-bold">{dict.title}</h2>
                    <div className="mt-4 h-1 w-32 md:w-48 rounded-full bg-gradient-to-l from-tertiary to-transparent" aria-hidden />
                    <span className="mt-4 block text-tertiary font-bold tracking-widest text-xs uppercase">{dict.badge}</span>
                </motion.div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                        { icon: "workspace_premium", badge: dict.c1Badge, desc: dict.c1Desc },
                        { icon: "health_and_safety", badge: dict.c2Badge, desc: dict.c2Desc },
                        { icon: "eco", badge: dict.c3Badge, desc: dict.c3Desc }
                    ].map((cert, i) => (
                        <motion.div
                            key={i}
                            custom={i}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={cardVariants}
                            whileHover={{ y: -8, transition: { duration: 0.3 } }}
                            className="bg-surface-container-lowest p-10 border-t-4 border-tertiary flex flex-col items-center text-center shadow-lg transition-all duration-300 h-full"
                        >
                            <span className="material-symbols-outlined text-5xl text-tertiary mb-6">{cert.icon}</span>
                            <h3 className="font-headline text-lg font-bold mb-2">{cert.badge}</h3>
                            <p className="text-on-surface-variant text-sm">{cert.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

