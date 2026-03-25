"use client";

import { motion } from "framer-motion";

export default function Services({ dict }: { dict: any }) {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    };

    return (
        <section className="py-24 px-8 md:px-24 bg-surface-container-low overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <h2 className="font-headline text-4xl font-bold mb-4">{dict.title}</h2>
                    <div className="w-20 h-1 bg-tertiary mx-auto"></div>
                </motion.div>
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
                >
                    {dict.items.map((item: any, index: number) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            whileHover={{ y: -8, transition: { duration: 0.2 } }}
                            className="glass-panel p-8 hover:bg-surface-container-highest transition-all duration-500 group cursor-default h-full border border-white/5"
                        >
                            <div className="w-12 h-12 mb-6 flex items-center justify-center bg-gradient-to-br from-tertiary to-tertiary-container rounded-sm shadow-[0_0_15px_rgba(234,195,74,0.3)] group-hover:scale-110 transition-transform">
                                <span className="material-symbols-outlined text-on-tertiary text-3xl">{item.icon}</span>
                            </div>
                            <h3 className="font-headline text-xl font-bold mb-4 group-hover:text-tertiary transition-colors">{item.title}</h3>
                            <p className="text-on-surface-variant text-sm leading-relaxed">{item.desc}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}

