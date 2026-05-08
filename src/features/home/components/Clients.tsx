"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Clients({ dict, isRtl = true }: { dict: any; isRtl?: boolean }) {
    const logos = Array.from({ length: 20 }, (_, i) => `/partners/${i + 1}.png`);

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
                    className="font-headline text-4xl md:text-5xl font-bold tracking-tight text-on-surface"
                >
                    {dict.badge}
                </motion.h2>
                <div className={`mx-auto mt-4 h-1 w-32 md:w-48 rounded-full ${isRtl ? "bg-gradient-to-l" : "bg-gradient-to-r"} from-tertiary to-transparent`} aria-hidden />
            </div>

            <div className="mx-auto max-w-7xl px-6">
                <div className="rounded-2xl border border-outline/30 bg-surface-container-low p-4 md:p-6 shadow-[0_18px_40px_rgba(0,0,0,0.08)]">
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 md:gap-4">
                        {logos.map((logo, idx) => (
                            <div
                                key={logo}
                                className="group rounded-xl border border-outline/25 bg-white p-3 md:p-4 h-24 md:h-28 flex items-center justify-center transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_10px_26px_rgba(0,0,0,0.12)]"
                            >
                                <Image
                                    src={logo}
                                    alt={`Partner ${idx + 1}`}
                                    width={160}
                                    height={80}
                                    className="h-full w-full object-contain grayscale-[15%] group-hover:grayscale-0 transition-all duration-300"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </motion.section>
    );
}

