"use client";

import React from "react";
import Image from "next/image";

export default function ContactHero({ dict }: { dict: any }) {
    return (
        <section className="relative h-[500px] flex items-center justify-center overflow-hidden bg-background">
            <div className="absolute inset-0 z-0 bg-gradient-to-b from-black/45 via-black/35 to-black/55" aria-hidden />
            <div className="absolute inset-0 z-0 overflow-hidden">
                <Image
                    fill
                    className="object-cover"
                    src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2400&auto=format&fit=crop"
                    alt="Modern architectural facade with strong geometric lines"
                    priority
                />
            </div>
            <div className="relative z-10 text-center px-4">
                <div className="inline-block py-1.5 px-5 mb-6 rounded-sm border border-primary/35 bg-background/75 backdrop-blur-md shadow-lg shadow-black/20">
                    <span className="font-label text-primary text-[0.75rem] tracking-[0.28em] uppercase font-semibold">{dict.badge}</span>
                </div>
                <h1 className="font-headline text-5xl md:text-7xl font-extrabold text-white mb-4 tracking-tighter drop-shadow-[0_6px_28px_rgba(0,0,0,0.45)]">
                    {dict.title}
                </h1>
                <div className="w-32 h-1 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mt-8" />
            </div>
        </section>
    );
}
