"use client";

import React from "react";
import Image from "next/image";

export default function IntegrationBanner({ dict }: { dict: any }) {
    return (
        <section className="py-24 bg-surface-variant text-on-background overflow-hidden relative">
            <div className="absolute right-0 top-0 w-1/2 h-full opacity-30 md:opacity-50">
                <Image
                    fill
                    alt="Turnkey Project"
                    className="object-cover mix-blend-overlay"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuC1jCdgQcBBtdKFcTf46sWQ-dy3X0TYR9j-Xr4JlcUDMricXf4UAqQJuEvTxdqIVLkMpGVzieFv0tAuBcy9Vu7tSio86KDOrJx4CajYscOYVDKi1yqjJstpAID-1PAHXgoxXTZoeuuZt9aETkOxnNIA6__AeIRZtWG0CIbr8Bd64YjIh9EOXWzE6WEPPXfG8RtwNpprk47585V7-mZ6WPs5t0LQO8yjMuTQqKbK8UfCQ8Lcu04fdgxeE6RQS7Fo8yuK0pM5bKtz4JNm"
                    sizes="(max-width: 768px) 50vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-l from-transparent to-surface-variant"></div>
            </div>
            <div className="max-w-screen-2xl mx-auto px-12 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                <div>
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 font-headline">{dict.title}</h2>
                    <h3 className="text-2xl md:text-3xl font-light mb-8 text-tertiary">
                        {dict.subtitle}
                    </h3>
                    <p className="text-lg text-on-surface-variant leading-relaxed mb-10 max-w-xl">
                        {dict.description}
                    </p>
                    <div className="flex flex-wrap gap-4">
                        {dict.badges.map((badge: string, index: number) => (
                            <div key={index} className="px-6 py-3 bg-tertiary/10 border border-tertiary/20 rounded-sm">
                                <span className="text-[10px] font-bold text-tertiary uppercase tracking-widest">{badge}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
