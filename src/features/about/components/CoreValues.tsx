"use client";

import React from "react";

export default function CoreValues({ dict }: { dict: any }) {
    return (
        <section className="py-32 bg-surface-variant">
            <div className="container mx-auto px-12">
                <div className="text-center mb-24">
                    <h2 className="text-xs font-label tracking-[0.5em] uppercase text-tertiary mb-4">{dict.badge}</h2>
                    <h3 className="text-4xl font-bold text-on-background tracking-tighter font-headline">{dict.title}</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {dict.items.map((item: any, index: number) => (
                        <div key={index} className="p-12 glass-panel hover:border-tertiary transition-all group gold-shimmer border border-tertiary/10">
                            <span className="material-symbols-outlined text-tertiary text-4xl mb-6 block group-hover:scale-110 transition-transform">
                                {item.icon}
                            </span>
                            <h4 className="text-xl font-bold text-on-background mb-2 font-headline">{item.title}</h4>
                            <p className="text-xs font-label text-tertiary mb-4 uppercase tracking-widest">{item.subtitle}</p>
                            <p className="text-sm text-on-surface-variant leading-relaxed italic">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
