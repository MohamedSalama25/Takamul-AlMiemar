"use client";

import React from "react";

export default function MethodicalApproach({ dict }: { dict: any }) {
    return (
        <section className="py-32 bg-background relative overflow-hidden">
            <div className="absolute inset-0 opacity-5 pointer-events-none">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--color-tertiary)_1px,transparent_1px)] [background-size:40px_40px]"></div>
            </div>
            <div className="max-w-screen-xl mx-auto px-8 relative z-10">
                <div className="text-center mb-20">
                    <h2 className="text-3xl font-bold text-on-background head-font mb-4 gold-shimmer">{dict.title}</h2>
                    <p className="text-on-surface-variant text-lg">{dict.subtitle}</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 relative">
                    {/* Progress Line */}
                    <div className="hidden md:block absolute top-10 left-[15%] right-[15%] h-px bg-tertiary/20"></div>

                    {dict.steps.map((step: any, index: number) => (
                        <div key={index} className="relative z-10 text-center space-y-4 group">
                            <div className="w-20 h-20 rounded-full bg-surface-variant/40 flex items-center justify-center mx-auto border border-tertiary/20 shadow-[0_0_15px_rgba(234,195,74,0.1)] group-hover:border-tertiary/60 transition-all duration-500">
                                <span className="material-symbols-outlined text-tertiary text-3xl">
                                    {step.icon}
                                </span>
                            </div>
                            <h4 className="font-bold text-on-background head-font uppercase tracking-tighter">{step.title}</h4>
                            <p className="text-[10px] uppercase tracking-widest text-tertiary font-label">{step.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
