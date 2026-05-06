"use client";

import React from "react";
import Image from "next/image";

export default function Leadership({ dict }: { dict: any }) {
    // We use the first image for the featured leader
    const featuredImage = "https://lh3.googleusercontent.com/aida-public/AB6AXuCWqBFN2VGLf8RoOMWnXaPgsZ9DsPxJNHjuswIjFFvmSRavoxJ5XJMr1mKrioQMWrcu_sH3uCUkJXtI7NXNlVZVtZiIjh9tKw3JjmdPTCEyb2D5XYiSuBrelGoT17jSn3KhU-KnlSoJNBzhhArDV64jYXctuLgMEU8eFH8CBkC453SdICFnV0TGVsI0pUozy1DC7liTGDQz92Df4R-ds0IvRgBykqsy0UxQYwyyA3tNJ6F8BPZvUAofK3pBKiTYhsNSWH0a3zZnmA69";

    const member = dict.members[0];

    return (
        <section className="py-32 bg-background relative overflow-hidden">
            {/* Background Decorative Elements */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-surface-variant/30 -skew-x-12 translate-x-1/2" />

            <div className="container mx-auto px-6 md:px-12 relative z-10">
                <div className="mb-20">
                    <h2 className="text-xs font-label tracking-[0.5em] uppercase text-tertiary mb-4">{dict.badge}</h2>
                    <h3 className="text-4xl md:text-5xl font-bold text-on-background tracking-tighter font-headline">{dict.title}</h3>
                </div>

                <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 items-center">
                    {/* Image Section - First in DOM (Right in RTL, Left in LTR) */}
                    <div className="w-full lg:w-2/5">
                        <div className="relative aspect-[4/5] group overflow-hidden rounded-lg">
                            <div className="absolute inset-0 border-2 border-tertiary/20 translate-x-4 translate-y-4 rounded-lg -z-10 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-500" />
                            <div className="relative h-full w-full overflow-hidden rounded-lg shadow-2xl">
                                <Image
                                    fill
                                    className="object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                                    src={featuredImage}
                                    alt={member.name}
                                    sizes="(max-width: 1024px) 100vw, 40vw"
                                    priority
                                />
                                <div className="absolute inset-x-0 bottom-0 p-8 bg-gradient-to-t from-black/80 to-transparent pointer-events-none">
                                    <p className="text-white/60 text-xs font-label tracking-widest uppercase">
                                        Takamul AlMiemar Excellence
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Content Section - Second in DOM (Left in RTL, Right in LTR) */}
                    <div className="w-full lg:w-3/5">
                        <div className="max-w-2xl text-start">
                            <h4 className="text-3xl md:text-5xl font-bold text-on-background mb-2 font-headline leading-tight">
                                {member.name}
                            </h4>
                            <p className="text-tertiary font-label text-sm uppercase tracking-[0.3em] mb-8">
                                {member.role}
                            </p>

                            <div className="relative mb-8">
                                <div className="absolute -inline-start-6 top-0 text-7xl text-tertiary/10 font-serif lowercase italic">"</div>
                                <p className="text-xl md:text-2xl text-on-background leading-relaxed font-light italic text-balance">
                                    {member.desc}
                                </p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-12 border-t border-on-background/10">
                                <div>
                                    <h5 className="text-xs font-label text-tertiary uppercase tracking-widest mb-2">{dict.experienceLabel || "Expertise"}</h5>
                                    <p className="text-lg font-medium text-on-background">{member.experience}</p>
                                </div>
                                <div>
                                    <h5 className="text-xs font-label text-tertiary uppercase tracking-widest mb-2">{dict.legacyLabel || "Legacy"}</h5>
                                    <p className="text-lg font-medium text-on-background">Est. 2010</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
