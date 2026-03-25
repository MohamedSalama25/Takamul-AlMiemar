"use client";

import React from "react";

export default function MainServicesGrid({ items }: { items: any[] }) {
    return (
        <section className="py-32 bg-surface-variant">
            <div className="max-w-screen-2xl mx-auto px-8 md:px-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {items.map((item, index) => (
                        <div
                            key={index}
                            className="glass-panel p-10 flex flex-col items-start group hover:translate-y-[-8px] transition-all duration-500 rounded-sm border border-tertiary/10 hover:border-tertiary/40"
                        >
                            <span className="material-symbols-outlined text-4xl text-tertiary mb-6" style={{ fontVariationSettings: "'FILL' 0" }}>
                                {item.icon}
                            </span>
                            <h3 className="text-xl font-bold text-on-background mb-4 font-body">{item.title}</h3>
                            <p className="text-on-surface-variant text-sm leading-relaxed mb-6">
                                {item.desc}
                            </p>
                            <div className="mt-auto h-0.5 w-0 bg-tertiary group-hover:w-full transition-all duration-500"></div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
