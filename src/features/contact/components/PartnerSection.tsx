"use client";

import React from "react";

export default function PartnerSection({ dict }: { dict: any }) {
    return (
        <section className="bg-surface-variant py-24 relative overflow-hidden border-t border-white/5">
            <div className="max-w-7xl mx-auto px-8 text-center relative z-10">
                <h3 className="font-headline text-3xl font-bold mb-6 text-on-background">{dict.title}</h3>
                <p className="font-body text-on-surface-variant max-w-2xl mx-auto mb-12 italic leading-relaxed">
                    {dict.desc}
                </p>
                <div className="flex flex-col md:flex-row justify-center gap-6">
                    <a className="px-8 py-3 bg-background/50 border border-tertiary/20 font-label text-[0.7rem] uppercase tracking-widest hover:border-tertiary transition-colors flex items-center justify-center gap-2 text-on-background" href="#">
                        <span className="material-symbols-outlined text-sm">work</span> {dict.careers}
                    </a>
                    <a className="px-8 py-3 bg-background/50 border border-tertiary/20 font-label text-[0.7rem] uppercase tracking-widest hover:border-tertiary transition-colors flex items-center justify-center gap-2 text-on-background" href="#">
                        <span className="material-symbols-outlined text-sm">contract</span> {dict.vendor}
                    </a>
                </div>
            </div>
            {/* Architectural accent */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-tertiary/5 -skew-x-12 translate-x-32 -translate-y-32"></div>
        </section>
    );
}
