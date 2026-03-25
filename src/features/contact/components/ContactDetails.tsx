"use client";

import React from "react";
import Image from "next/image";

export default function ContactDetails({ info, hubs }: { info: any, hubs: any }) {
    return (
        <div className="lg:col-span-5 flex flex-col gap-8">
            {/* Core Info */}
            <div className="bg-surface-variant p-10 space-y-8 glass-panel border border-tertiary/10 rounded-sm">
                <div>
                    <span className="font-label text-[0.65rem] text-tertiary uppercase tracking-widest mb-4 block">{info.hq}</span>
                    <div className="flex gap-4">
                        <span className="material-symbols-outlined text-tertiary">location_on</span>
                        <p className="font-body text-sm leading-relaxed text-on-background italic">
                            {info.hqAddress}
                        </p>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4 border-t border-white/10">
                    <div>
                        <span className="font-label text-[0.65rem] text-tertiary uppercase tracking-widest mb-4 block">{info.inquiries}</span>
                        <div className="flex items-center gap-3">
                            <span className="material-symbols-outlined text-tertiary text-sm">call</span>
                            <span className="font-body text-sm text-on-background">+966 11 234 5678</span>
                        </div>
                    </div>
                    <div>
                        <span className="font-label text-[0.65rem] text-tertiary uppercase tracking-widest mb-4 block">{info.email}</span>
                        <div className="flex items-center gap-3">
                            <span className="material-symbols-outlined text-tertiary text-sm">mail</span>
                            <span className="font-body text-sm text-on-background">{info.emailValue}</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Regional Hubs Bento */}
            <div className="grid grid-cols-1 gap-4">
                <div className="bg-background border border-tertiary/10 p-6 flex justify-between items-center group cursor-pointer transition-colors hover:bg-surface-variant rounded-sm">
                    <div>
                        <h4 className="font-headline font-bold text-sm text-on-background">{hubs.jeddah}</h4>
                        <p className="text-[0.7rem] text-on-surface-variant mt-1 uppercase tracking-tighter italic">{hubs.jeddahDesc}</p>
                    </div>
                    <span className="material-symbols-outlined text-tertiary group-hover:scale-110 transition-transform">hub</span>
                </div>
                <div className="bg-background border border-tertiary/10 p-6 flex justify-between items-center group cursor-pointer transition-colors hover:bg-surface-variant rounded-sm">
                    <div>
                        <h4 className="font-headline font-bold text-sm text-on-background">{hubs.jubail}</h4>
                        <p className="text-[0.7rem] text-on-surface-variant mt-1 uppercase tracking-tighter italic">{hubs.jubailDesc}</p>
                    </div>
                    <span className="material-symbols-outlined text-tertiary group-hover:scale-110 transition-transform">factory</span>
                </div>
            </div>

            {/* Map Placeholder with stylization */}
            <div className="relative bg-background h-[240px] overflow-hidden border border-tertiary/20 rounded-sm">
                <Image
                    fill
                    className="object-cover opacity-20 contrast-125 grayscale scale-110"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDJc0zjgzHhu1WAuoysJWfYsA6N1PnINEZcAdZsVa-nuflFBi8yygia1qV01JxLMoecrtqczvNcjQNNEEp7pI719g9LGdzQYXB9MwRJd3uzblf5CYUkmSadr9oxWa_7AXPBU7IDXpjvNRfbjfiMwCCpq4gCgpseJJM-Hq6vnz7ATn5N0vRy-w9DRlia0KiYrEdvRMR5pYCfS163jquQqAOl8XOrL0tEmqJYYHvUPjMCPKdSV1ptWYI6O_mP_D5-Qy1hioy8ajnmrcWV"
                    alt="Riyadh street map layout"
                    sizes="(max-width: 1024px) 100vw, 40vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"></div>
                <div className="absolute bottom-6 left-6 flex items-center gap-3 bg-surface-variant/80 backdrop-blur-md py-2 px-4 border border-tertiary/20">
                    <div className="w-2 h-2 rounded-full bg-tertiary animate-pulse shadow-[0_0_8px_rgba(234,195,74,0.6)]"></div>
                    <span className="font-label text-[0.65rem] uppercase tracking-[0.2em] text-on-background">Operational Presence: KSA</span>
                </div>
            </div>
        </div>
    );
}
