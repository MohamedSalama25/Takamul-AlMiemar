"use client";

import React, { useState } from "react";
import Image from "next/image";

export default function PortfolioGrid({ projects, filters }: { projects: any[], filters: any }) {
    const [activeFilter, setActiveFilter] = useState("All");

    const filterKeys = ["all", "industrial", "mep", "commercial", "residential"];
    const filteredProjects = activeFilter === "All"
        ? projects
        : projects.filter(p => p.category.toLowerCase() === activeFilter.toLowerCase() || (activeFilter === "MEP" && p.category === "إلكتروميكانيك"));

    return (
        <section className="px-8 pb-32 max-w-screen-2xl mx-auto">
            {/* Filter System */}
            <div className="flex flex-wrap justify-center gap-8 md:gap-12 border-b border-on-surface-variant/10 pb-6 mb-16">
                {filterKeys.map((key) => {
                    const label = filters[key];
                    const isActive = activeFilter === label || (key === "all" && activeFilter === "All");
                    return (
                        <button
                            key={key}
                            onClick={() => setActiveFilter(key === "all" ? "All" : label)}
                            className={`text-xs uppercase tracking-widest font-bold pb-4 px-2 transition-all border-b-2 ${isActive ? "text-tertiary border-tertiary" : "text-on-surface-variant/40 border-transparent hover:text-tertiary"
                                }`}
                        >
                            {label}
                        </button>
                    );
                })}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
                {filteredProjects.map((project, index) => (
                    <div
                        key={index}
                        className={`group cursor-pointer ${index % 2 !== 0 ? 'md:mt-24' : ''}`}
                    >
                        <div className="relative overflow-hidden glass-panel p-2 transition-all duration-500 mb-8 shadow-2xl rounded-sm border border-tertiary/10 group-hover:border-tertiary/40">
                            <div className="relative aspect-[16/10] overflow-hidden">
                                <Image
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                    src={project.image}
                                    alt={project.title}
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                />
                            </div>
                            <div className="absolute top-6 left-6 bg-tertiary text-primary-container px-4 py-1 text-[10px] font-black uppercase tracking-widest shadow-lg">
                                {project.category}
                            </div>
                        </div>
                        <div className="flex justify-between items-start px-2">
                            <div>
                                <h3 className="text-2xl font-bold text-on-background mb-2 tracking-tight group-hover:text-tertiary transition-colors font-headline">
                                    {project.title}
                                </h3>
                                <div className="flex items-center gap-2 text-tertiary/60">
                                    <span className="material-symbols-outlined text-sm">location_on</span>
                                    <span className="text-xs font-bold uppercase tracking-widest font-label">{project.location}</span>
                                </div>
                            </div>
                            <span className="material-symbols-outlined text-tertiary/30 group-hover:text-tertiary transition-all transform group-hover:translate-x-1 group-hover:-translate-y-1">
                                arrow_outward
                            </span>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
