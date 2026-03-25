"use client";

import React from "react";
import Image from "next/image";

export default function AboutHero({ dict }: { dict: any }) {
    return (
        <header className="relative min-h-[700px] flex items-center pt-24 overflow-hidden bg-surface-variant">
            <div className="absolute inset-0 z-0 opacity-20">
                <div className="absolute top-0 right-0 w-1/2 h-full border-l border-tertiary/20"></div>
                <div className="absolute bottom-0 left-0 w-full h-1/2 border-t border-tertiary/20"></div>
            </div>
            <div className="container mx-auto px-12 z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-8">
                    <div className="space-y-2">
                        <span className="text-tertiary font-label tracking-[0.3em] uppercase text-sm block">
                            {dict.badge}
                        </span>
                        <h1 className="text-5xl md:text-7xl font-bold text-on-background leading-none tracking-tighter font-headline">
                            {dict.title} <br />
                            <span className="text-tertiary">{dict.titleAccent}</span>
                        </h1>
                    </div>
                    <div className="flex gap-4 items-center">
                        <div className="w-12 h-[1px] bg-tertiary"></div>
                        <p className="text-lg text-on-surface-variant max-w-md leading-relaxed">
                            {dict.subtitle}
                        </p>
                    </div>
                </div>
                <div className="relative h-[600px] w-full bg-background overflow-hidden gold-shimmer rounded-sm border border-tertiary/20">
                    <Image
                        fill
                        className="object-cover grayscale contrast-125 opacity-70"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuCmPNohk27Ko-osj3hG04yNObs9dBwzXfsg72y0sGkSXXYFYQTpVHnnmWxfLazbBFcP2aur8WdXXS7OBpg4A9FxsJFYO7J9HNlry5zvh5XJDrmzUuHdsDlGXYJN3szy6IM2zLZsjPUmAxLPTkJ2PBpq7a9wXENURKgnx19Kgog6BwKsdAcbXiTesyMFfKvEnGPCIrD2cF7zddlIzYGxBtv-l1ulEP75e-TiI5zv3Ks5GF1f93IVD5Eco9O_UNIda8A1LYg53Xiif1S8"
                        alt="Modern architectural glass building"
                        priority
                    />
                    <div className="absolute inset-0 bg-surface-variant/40 mix-blend-multiply"></div>
                </div>
            </div>
        </header>
    );
}
