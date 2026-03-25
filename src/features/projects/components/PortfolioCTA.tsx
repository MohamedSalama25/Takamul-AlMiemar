"use client";

import React from "react";

export default function PortfolioCTA({ dict }: { dict: any }) {
    return (
        <section className="bg-surface-variant py-32 relative overflow-hidden border-t border-tertiary/20">
            <div className="max-w-screen-xl mx-auto px-8 text-center relative z-10">
                <h2 className="text-4xl md:text-6xl font-black text-on-background mb-8 tracking-tighter font-headline gold-shimmer">
                    {dict.title}
                </h2>
                <p className="text-on-surface-variant text-lg mb-12 max-w-xl mx-auto opacity-90 leading-relaxed">
                    {dict.subtitle}
                </p>
                <button className="bg-tertiary text-on-tertiary px-10 py-5 font-bold uppercase tracking-widest rounded-sm hover:bg-tertiary/90 transition-all shadow-[0_0_30px_rgba(234,195,74,0.3)] active:scale-95 text-xs">
                    {dict.button}
                </button>
            </div>
            {/* Background elements */}
            <div className="absolute bottom-0 right-0 w-1/3 h-full bg-tertiary/5 skew-x-12 transform translate-x-20"></div>
            <div className="absolute top-0 left-0 w-1/4 h-full bg-tertiary/5 -skew-x-12 transform -translate-x-20"></div>
        </section>
    );
}
