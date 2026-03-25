"use client";

import React from "react";
import Image from "next/image";

export default function ContactHero({ dict }: { dict: any }) {
    return (
        <section className="relative h-[500px] flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-surface-variant to-background z-0"></div>
            <div className="absolute inset-0 z-0 opacity-40 overflow-hidden">
                <Image
                    fill
                    className="object-cover grayscale mix-blend-overlay"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuA3So6BjjC9xZjD9Vf0hPXBFPyGAFJ5Kh7F2jM0683alUMYXoq5zfG46PNdTrSee_m-dbbnzBiyZxjypyhz60RUEQ0hs0qPwmxcu2gRIYySZoeEVoHheU5CieZZzbQjcfK_6jXE0uHB-aGiu9mmUf780BWD3_H4Ai8iKKHh6Yz8C5WNfHOel2Jsyinj4xGsY4cNnkLlIx4UXU0g9twdkBI2ef24DadYyc4YyNzhJZ98O8liVCMDyHfy3efUMUHlpVp0zikujthzvzGH"
                    alt="Monolithic architectural structure"
                    priority
                />
            </div>
            <div className="relative z-10 text-center px-4">
                <div className="inline-block py-1 px-4 mb-6 border border-tertiary/30 bg-tertiary/10 backdrop-blur-sm">
                    <span className="font-label text-tertiary text-[0.75rem] tracking-[0.3em] uppercase">{dict.badge}</span>
                </div>
                <h1 className="font-headline text-5xl md:text-7xl font-extrabold text-on-background mb-4 tracking-tighter">
                    {dict.title}
                </h1>
                <div className="w-32 h-1 bg-gradient-to-r from-transparent via-tertiary to-transparent mx-auto mt-8 gold-shimmer"></div>
            </div>
        </section>
    );
}
