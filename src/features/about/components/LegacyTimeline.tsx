"use client";

import React from "react";

export default function LegacyTimeline({ dict }: { dict: any }) {
    return (
        <section className="py-32 bg-background">
            <div className="container mx-auto px-12">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
                    <div className="lg:col-span-4 sticky top-32 h-fit">
                        <h2 className="text-xs font-label tracking-[0.4em] uppercase text-tertiary mb-4">{dict.badge}</h2>
                        <h3 className="text-4xl font-bold text-on-background mb-8 tracking-tight font-headline">{dict.title}</h3>
                        <p className="text-on-surface-variant leading-relaxed mb-6">{dict.p1}</p>
                        <p className="text-xl font-medium text-tertiary leading-loose italic">
                            {dict.p2}
                        </p>
                    </div>
                    <div className="lg:col-span-8 space-y-20 border-l border-white/10 pl-12">
                        {dict.timeline.map((item: any, index: number) => (
                            <div key={index} className="relative">
                                <span className={`absolute -left-[3.25rem] top-0 w-4 h-4 shadow-[0_0_15px_rgba(234,195,74,0.3)] ${index === 0 ? 'bg-tertiary' : 'bg-on-surface-variant/30'}`}></span>
                                <h4 className="text-2xl font-bold text-on-background mb-4 font-headline">{item.year}: {item.title}</h4>
                                <p className="text-on-surface-variant max-w-2xl leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
