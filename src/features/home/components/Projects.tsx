"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface PortfolioProject {
    title: string;
    description: string;
    images: string[];
}

export default function Projects({
    section,
    projects,
    isRtl = true,
}: {
    section: any;
    projects: PortfolioProject[];
    isRtl?: boolean;
}) {
    const fadeIn = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
    };
    const topProjects = projects.slice(0, 4);

    return (
        <section id="projects" className="py-24 bg-surface overflow-hidden">
            <div className="max-w-[1400px] mx-auto px-8">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeIn}
                    className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8"
                >
                    <div>
                        <h2 className="font-headline text-4xl md:text-5xl font-bold text-on-surface">{section.title}</h2>
                        <div className={`mt-4 h-1 w-32 md:w-48 rounded-full ${isRtl ? "bg-gradient-to-l" : "bg-gradient-to-r"} from-tertiary to-transparent`} aria-hidden />
                    </div>
                </motion.div>
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                    {topProjects.map((project, idx) => {
                        const cardClass = idx === 0
                            ? "md:col-span-8 h-[500px]"
                            : idx === 1
                                ? "md:col-span-4 h-[500px]"
                                : idx === 2
                                    ? "md:col-span-4 h-[400px]"
                                    : "md:col-span-8 h-[400px]";

                        const motionProps =
                            idx === 0
                                ? { initial: { opacity: 0, x: -30 }, whileInView: { opacity: 1, x: 0 }, transition: { duration: 0.6 } }
                                : idx === 1
                                    ? { initial: { opacity: 0, x: 30 }, whileInView: { opacity: 1, x: 0 }, transition: { duration: 0.6 } }
                                    : idx === 2
                                        ? { initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, transition: { duration: 0.6 } }
                                        : { initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, transition: { duration: 0.6, delay: 0.2 } };

                        return (
                            <motion.div
                                key={`${project.title}-${idx}`}
                                viewport={{ once: true }}
                                {...motionProps}
                                className={`${cardClass} relative overflow-hidden border border-white/5`}
                            >
                                <Image
                                    fill
                                    className="object-cover"
                                    alt={project.title}
                                    src={project.images?.[0] || "/home/solutions.jpg"}
                                    sizes="(max-width: 1024px) 100vw, 50vw"
                                />
                                <div className={`absolute inset-0 bg-gradient-to-t from-black/85 via-black/50 to-black/15 flex flex-col justify-end ${idx === 0 || idx === 3 ? "p-12" : "p-8"}`}>
                                    <h3 className={`${idx === 0 || idx === 3 ? "text-3xl" : "text-2xl"} font-headline font-bold text-white mb-3`}>
                                        {project.title}
                                    </h3>
                                    <p className="text-sm text-white/85 leading-relaxed max-w-2xl line-clamp-3">
                                        {project.description}
                                    </p>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
