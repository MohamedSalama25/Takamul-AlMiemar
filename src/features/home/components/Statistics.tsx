"use client";

import { motion } from "framer-motion";

export default function Statistics({ dict }: { dict: any }) {
    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const item = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 }
    };

    return (
        <section className="py-20 bg-surface-container-low border-y border-tertiary/10 overflow-hidden">
            <motion.div
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="max-w-7xl mx-auto px-8 grid grid-cols-2 lg:grid-cols-4 gap-12 text-center"
            >
                {[
                    { num: dict.s1Num, text: dict.s1Text },
                    { num: dict.s2Num, text: dict.s2Text },
                    { num: dict.s3Num, text: dict.s3Text },
                    { num: dict.s4Num, text: dict.s4Text }
                ].map((stat, idx) => (
                    <motion.div key={idx} variants={item} className="space-y-2">
                        <span className="text-5xl font-extrabold text-tertiary drop-shadow-[0_0_10px_rgba(234,195,74,0.3)] block">
                            {stat.num}
                        </span>
                        <p className="text-on-surface-variant text-xs font-bold tracking-widest uppercase">{stat.text}</p>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
}

