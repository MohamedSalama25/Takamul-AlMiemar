"use client";

import React from "react";
import Image from "next/image";

export default function IntegrationBanner({ dict }: { dict: any }) {
    return (
        <section className="py-24 bg-surface-variant text-on-background overflow-hidden relative">
            <div className="absolute inset-y-0 ltr:right-0 rtl:left-0 w-full lg:w-1/2 opacity-20 md:opacity-40 pointer-events-none">
                <Image
                    fill
                    alt="Turnkey Project"
                    className="object-cover mix-blend-overlay grayscale contrast-125"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuC1jCdgQcBBtdKFcTf46sWQ-dy3X0TYR9j-Xr4JlcUDMricXf4UAqQJuEvTxdqIVLkMpGVzieFv0tAuBcy9Vu7tSio86KDOrJx4CajYscOYVDKi1yqjJstpAID-1PAHXgoxXTZoeuuZt9aETkOxnNIA6__AeIRZtWG0CIbr8Bd64YjIh9EOXWzE6WEPPXfG8RtwNpprk47585V7-mZ6WPs5t0LQO8yjMuTQqKbK8UfCQ8Lcu04fdgxeE6RQS7Fo8yuK0pM5bKtz4JNm"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 ltr:bg-gradient-to-l rtl:bg-gradient-to-r from-transparent to-surface-variant"></div>
            </div>
            <div className="max-w-screen-2xl mx-auto px-6 md:px-12 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center min-h-[500px]">
                <div className="relative">
                    <div className="absolute -top-10 -start-10 w-32 h-32 bg-tertiary/5 rounded-full blur-3xl" />
                    <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-6 font-headline leading-tight">{dict.title}</h2>
                    <h3 className="text-2xl md:text-3xl font-light mb-8 text-tertiary leading-relaxed">
                        {dict.subtitle}
                    </h3>
                    <p className="text-lg text-on-surface-variant leading-relaxed mb-10 max-w-xl text-balance">
                        {dict.description}
                    </p>
                    <div className="flex flex-wrap gap-4">
                        {dict.badges.map((badge: string, index: number) => (
                            <div key={index} className="px-8 py-4 bg-tertiary/10 border border-tertiary/20 rounded-sm backdrop-blur-md">
                                <span className="text-xs font-bold text-tertiary uppercase tracking-[0.2em]">{badge}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
