"use client";

import React from "react";
import Image from "next/image";

export default function Leadership({ dict }: { dict: any }) {
    const images = [
        "https://lh3.googleusercontent.com/aida-public/AB6AXuCWqBFN2VGLf8RoOMWnXaPgsZ9DsPxJNHjuswIjFFvmSRavoxJ5XJMr1mKrioQMWrcu_sH3uCUkJXtI7NXNlVZVtZiIjh9tKw3JjmdPTCEyb2D5XYiSuBrelGoT17jSn3KhU-KnlSoJNBzhhArDV64jYXctuLgMEU8eFH8CBkC453SdICFnV0TGVsI0pUozy1DC7liTGDQz92Df4R-ds0IvRgBykqsy0UxQYwyyA3tNJ6F8BPZvUAofK3pBKiTYhsNSWH0a3zZnmA69",
        "https://lh3.googleusercontent.com/aida-public/AB6AXuCwmx8aULkHXZHdSv-WntVXIXTP170wc1epi50fJii1pqLq44ToLBzZd7ItXgb4mzdp8M703HD-IPA_aH6yrNxjPDcYNFGRX53GW5b41PtlkBSLF5iX99SnpxRIiwE-uOr-eOkR7OsKvl8OQs6Xc9qUZBy1MEwtjD2JmvDCxz2SmDe1qgZAut4kQ_YoHcijleL8hR26QVNAk-eJbde3sJBs6cH0sHi-IhPrPKqyE1PXAqdLMzq1mkLcyrKyKe7koNVIm75zuW5VXWds",
        "https://lh3.googleusercontent.com/aida-public/AB6AXuD5ZLQDlYl_uqP3eL2FjRHlJX37xPk26kq-2gsRwG7KwTGnByEKPwS5IvGjEiHIYxtkg3J7gTEZUSvXUnXwc8pAkv35YydOGf5LU0hWCye_J0QDQxJnyEEPA0POZao5armwoQUz8cMO1Q7cNJNOHhygvMQ4NaFo_DmRmLr1ewFCSfYGzMiZ39CT2g-6m1patSFmulTT2Z0d7oq4UXtKG6g_01-SVjExs1mW-D5SWtilSFcKOibaP7daBPfd5VJU9blCcgfEOiU-7BxK"
    ];

    return (
        <section className="py-32 bg-surface-variant">
            <div className="container mx-auto px-12">
                <div className="mb-24 flex justify-between items-end border-b border-white/10 pb-12">
                    <div>
                        <h2 className="text-xs font-label tracking-[0.5em] uppercase text-tertiary mb-4 font-label">{dict.badge}</h2>
                        <h3 className="text-4xl font-bold text-on-background tracking-tighter font-headline">{dict.title}</h3>
                    </div>
                    <div className="text-right hidden md:block">
                        <p className="text-xl font-medium text-tertiary leading-loose italic">{dict.subtitle}</p>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
                    {dict.members.map((member: any, index: number) => (
                        <div key={index} className="group">
                            <div className="relative overflow-hidden aspect-[4/5] bg-background mb-8 rounded-sm grayscale contrast-125 border border-tertiary/10">
                                <Image
                                    fill
                                    className="object-cover grayscale transition-transform duration-700 group-hover:scale-105"
                                    src={images[index]}
                                    alt={member.name}
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                />
                                <div className="absolute bottom-0 left-0 w-full p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-500 bg-tertiary/90 backdrop-blur-sm">
                                    <p className="text-xs text-on-tertiary font-bold uppercase tracking-widest font-label">{member.experience}</p>
                                </div>
                            </div>
                            <div className="flex justify-between items-start mb-4">
                                <div>
                                    <h4 className="text-2xl font-bold text-on-background mb-1 font-headline">{member.name}</h4>
                                    <p className="text-tertiary font-label text-xs uppercase tracking-widest font-label">{member.role}</p>
                                </div>
                            </div>
                            <p className="text-sm text-on-surface-variant leading-relaxed italic">{member.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
