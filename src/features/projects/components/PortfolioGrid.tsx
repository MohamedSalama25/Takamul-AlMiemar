"use client";

import React from "react";
import Image from "next/image";
import { cn } from "@/shared/lib/cn";

interface ProjectItem {
    title: string;
    description: string;
    images: string[];
}

export default function PortfolioGrid({ projects, dir }: { projects: ProjectItem[], dir: "rtl" | "ltr" }) {
    const isRtl = dir === "rtl";

    return (
        <section className="px-4 md:px-8 pb-24 md:pb-32 max-w-screen-2xl mx-auto space-y-12 md:space-y-16">
            {projects.map((project, index) => (
                <article
                    key={project.title}
                    className="relative rounded-2xl border border-outline/30 bg-surface p-4 md:p-6 shadow-[0_20px_55px_rgba(0,0,0,0.1)]"
                >
                    <div className={cn("grid grid-cols-1 lg:grid-cols-12 gap-4 md:gap-5", isRtl && "lg:[direction:rtl]")}>
                      

                        <div className="lg:col-span-4">
                            <div className={cn(
                                "h-full min-h-[280px] rounded-xl bg-tertiary text-primary p-6 md:p-8 flex flex-col justify-center shadow-[0_18px_40px_rgba(0,0,0,0.2)]",
                                !isRtl && index % 2 === 1 && "lg:mt-8"
                            )}>
                                <h3 className="text-2xl md:text-4xl font-headline font-black leading-tight tracking-tight mb-5 text-white">
                                    {project.title}
                                </h3>
                                <p className="text-base md:text-lg leading-relaxed text-white/95">
                                    {project.description}
                                </p>
                            </div>
                        </div>
                          <div className="lg:col-span-8 grid grid-cols-2 gap-4">
                            <div className="col-span-2 relative overflow-hidden rounded-xl aspect-[16/8]">
                                <Image
                                    fill
                                    className="object-cover"
                                    src={project.images[0]}
                                    alt={project.title}
                                    sizes="(max-width: 1024px) 100vw, 66vw"
                                />
                            </div>
                            <div className="col-span-1 relative overflow-hidden rounded-xl aspect-square">
                                <Image
                                    fill
                                    className="object-cover"
                                    src={project.images[1]}
                                    alt={project.title}
                                    sizes="(max-width: 1024px) 50vw, 33vw"
                                />
                            </div>
                            <div className="col-span-1 relative overflow-hidden rounded-xl aspect-square">
                                <Image
                                    fill
                                    className="object-cover"
                                    src={project.images[2]}
                                    alt={project.title}
                                    sizes="(max-width: 1024px) 50vw, 33vw"
                                />
                            </div>
                            <div className="col-span-1 relative overflow-hidden rounded-xl aspect-square">
                                <Image
                                    fill
                                    className="object-cover"
                                    src={project.images[3]}
                                    alt={project.title}
                                    sizes="(max-width: 1024px) 50vw, 33vw"
                                />
                            </div>
                            <div className="col-span-1 relative overflow-hidden rounded-xl aspect-square">
                                <Image
                                    fill
                                    className="object-cover"
                                    src={project.images[4]}
                                    alt={project.title}
                                    sizes="(max-width: 1024px) 50vw, 33vw"
                                />
                            </div>
                        </div>
                    </div>
                </article>
            ))}
        </section>
    );
}
