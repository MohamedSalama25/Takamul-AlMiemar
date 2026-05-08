"use client";

import React from "react";
import Image from "next/image";

export default function AboutIntegrationSection({ dict }: { dict?: any }) {
    return (
        <section className="relative min-h-screen flex items-center overflow-hidden text-on-background bg-[#f7f7fb] dark:bg-[#060f19]">
            {/* Background */}
            <div className="absolute inset-0 pointer-events-none">
                {/* base gradients */}
                <div className="absolute inset-0 bg-[radial-gradient(900px_circle_at_20%_25%,rgba(0,71,133,0.10),transparent_55%),radial-gradient(800px_circle_at_70%_80%,rgba(234,195,74,0.10),transparent_60%)] dark:bg-[radial-gradient(900px_circle_at_20%_25%,rgba(174,199,246,0.16),transparent_55%),radial-gradient(900px_circle_at_75%_80%,rgba(234,195,74,0.12),transparent_60%)]" />

                {/* subtle grid / noise */}
                <div className="absolute inset-0 opacity-[0.08] dark:opacity-[0.06] bg-[radial-gradient(circle_at_1px_1px,rgba(0,0,0,0.9)_1px,transparent_0)] dark:bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.8)_1px,transparent_0)] [background-size:22px_22px]" />

                {/* responsive left rails */}
                <div className="absolute left-0 top-0 h-full w-[160px] md:w-[280px] bg-[linear-gradient(180deg,rgba(0,0,0,0.03),transparent_55%,rgba(0,0,0,0.02))] dark:bg-[linear-gradient(180deg,rgba(255,255,255,0.04),transparent_55%,rgba(255,255,255,0.03))]" />
                <div className="absolute left-6 md:left-10 top-10 md:top-12 h-[calc(100%-5rem)] md:h-[calc(100%-6rem)] w-[1px] bg-outline-variant/60 dark:bg-white/10" />
                <div className="absolute left-6 md:left-10 top-10 md:top-12 h-[1px] w-24 md:w-40 bg-outline-variant/50 dark:bg-white/10" />
                <div className="absolute left-6 md:left-10 bottom-10 md:bottom-12 h-[1px] w-36 md:w-52 bg-outline-variant/50 dark:bg-white/10" />

                {/* watermark word */}
                <div className="absolute left-[-12px] md:left-4 top-40 md:top-1/2 md:-translate-y-1/2 select-none font-headline font-black tracking-tighter text-[140px] md:text-[240px] leading-none text-on-background/[0.05] dark:text-white/[0.06]">
                    IN
                </div>
            </div>

            <div className="container mx-auto px-6 md:px-12 py-20 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">
                    {/* Image */}
                    <div className="relative w-full max-w-[680px] mx-auto lg:mx-0 group">
                        <div className="relative aspect-[4/3] w-full overflow-hidden bg-surface border border-outline-variant/60 dark:border-white/10 shadow-[0_30px_80px_rgba(0,0,0,0.18)]">
                            <Image
                                fill
                                priority
                                className="object-cover scale-[1.03] transition-transform duration-700 ease-out will-change-transform group-hover:scale-[0.99]"
                                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1800&auto=format&fit=crop"
                                alt="Glass office towers"
                            />
                        </div>
                    </div>

                    {/* Content */}
                    <div className="w-full max-w-[560px] mx-auto lg:mx-0">
                        <h2 className="font-headline text-4xl md:text-5xl font-extrabold tracking-tight text-on-background">
                            {dict?.title ?? "About integration"}
                        </h2>
                        <div className="mt-5 h-[2px] w-14 bg-tertiary" />

                        <p className="mt-8 text-on-surface-variant leading-8 text-[15px] md:text-base">
                            {dict?.description ??
                                "Takamul Projects for Professional Consulting offers various services including project management, engineering, management and financial consulting services. It is characterized by the creative and unique solutions it provides to clients by combining technical expertise and management skills enhanced by a spirit of innovation and creativity."}
                        </p>

                        <a
                            href="/Takamul%20Almiemar%20For%20Contracting.pdf"
                            download="Takamul Company Profile.pdf"
                            className="mt-12 inline-flex w-full items-center justify-center gap-3 border border-tertiary text-tertiary px-10 py-4 text-sm font-semibold tracking-wide transition-all duration-300 ease-out active:scale-[0.99] hover:bg-tertiary hover:text-on-tertiary hover:shadow-[0_18px_45px_rgba(0,0,0,0.14)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-tertiary/50 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent"
                            aria-label={dict?.ctaAriaLabel ?? "Company profile"}
                        >
                            <span className="material-symbols-outlined text-[18px]">description</span>
                            {dict?.cta ?? "Company profile"}
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
