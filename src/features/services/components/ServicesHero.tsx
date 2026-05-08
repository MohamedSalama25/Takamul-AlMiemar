"use client";

import React from "react";
import Image from "next/image";

export default function ServicesHero({ dict }: { dict: any }) {
    return (
        <section className="relative min-h-[600px] flex items-center justify-center overflow-hidden py-24 bg-surface-variant">
            <div className="absolute inset-0 z-0">
                <Image
                    fill
                    alt="Architectural Blueprint"
                    className="object-cover opacity-100"
                    src="/services/hero.png"
                    priority
                />
                <div
                    className="absolute inset-0 hidden bg-gradient-to-b from-surface-variant/75 via-transparent to-surface-variant/75 dark:block"
                    aria-hidden
                />
            </div>
            <div className="relative z-10 max-w-screen-xl mx-auto px-8 text-center">
                <h1 className="text-4xl md:text-6xl font-bold text-on-background tracking-tight leading-[1.1] mb-8 max-w-4xl mx-auto gold-shimmer">
                    <span className="text-white drop-shadow-[0_8px_28px_rgba(0,0,0,0.55)]">{dict.title}</span>
                    <br />
                    <span className="text-tertiary drop-shadow-[0_8px_24px_rgba(0,0,0,0.5)]">{dict.titleAccent}</span>
                </h1>
                <p className="text-xl md:text-2xl text-white/92 font-medium max-w-3xl mx-auto leading-relaxed drop-shadow-[0_4px_16px_rgba(0,0,0,0.5)]">
                    {dict.description}
                </p>
            </div>
        </section>
    );
}
