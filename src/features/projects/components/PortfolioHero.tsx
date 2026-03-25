"use client";

import React from "react";

export default function PortfolioHero({ dict }: { dict: any }) {
    return (
        <header className="relative px-8 py-24 md:py-32 max-w-screen-2xl mx-auto flex flex-col items-center text-center overflow-hidden">
            <div className="z-10">
                <span className="text-tertiary font-bold tracking-[0.3em] uppercase mb-6 block font-label text-xs">
                    {dict.badge}
                </span>
                <h1 className="text-5xl md:text-7xl font-black text-on-background leading-tight mb-6 tracking-tighter font-headline">
                    {dict.title} <br className="hidden md:block" />
                    <span className="text-tertiary">/ {dict.subtitle}</span>
                </h1>
                <p className="text-lg md:text-xl text-on-surface-variant max-w-2xl mx-auto font-light leading-relaxed">
                    {dict.description}
                </p>
                <div className="mt-12 w-24 h-0.5 bg-tertiary mx-auto"></div>
            </div>
            {/* Subtle background architectural pattern */}
            <div className="absolute top-0 left-0 w-full h-full opacity-[0.05] pointer-events-none">
                <svg height="100%" width="100%" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <pattern id="grid" width="100" height="100" patternUnits="userSpaceOnUse">
                            <path d="M 100 0 L 0 0 0 100" fill="none" stroke="var(--color-tertiary)" strokeWidth="1" />
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#grid)" />
                </svg>
            </div>
        </header>
    );
}
