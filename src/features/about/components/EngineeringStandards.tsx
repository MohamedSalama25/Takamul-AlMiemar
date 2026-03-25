"use client";

import React from "react";
import Image from "next/image";

export default function EngineeringStandards({ dict }: { dict: any }) {
    return (
        <section className="py-32 bg-background">
            <div className="container mx-auto px-12">
                <div className="flex flex-col lg:flex-row gap-20 items-center">
                    <div className="lg:w-1/2">
                        <h2 className="text-xs font-label tracking-[0.4em] uppercase text-tertiary mb-4">{dict.badge}</h2>
                        <h3 className="text-4xl font-bold text-on-background mb-8 tracking-tight font-headline">{dict.title}</h3>
                        <div className="space-y-8">
                            <div className="flex gap-6 items-start">
                                <div className="text-tertiary font-bold text-xl font-headline">01</div>
                                <div>
                                    <h4 className="font-bold text-on-background mb-1 uppercase tracking-tight font-headline">{dict.c1Badge}</h4>
                                    <p className="text-sm text-on-surface-variant mb-2">{dict.c1Desc}</p>
                                </div>
                            </div>
                            <div className="flex gap-6 items-start">
                                <div className="text-tertiary font-bold text-xl font-headline">02</div>
                                <div>
                                    <h4 className="font-bold text-on-background mb-1 uppercase tracking-tight font-headline">{dict.c2Badge}</h4>
                                    <p className="text-sm text-on-surface-variant mb-2">{dict.c2Desc}</p>
                                </div>
                            </div>
                            <div className="flex gap-6 items-start">
                                <div className="text-tertiary font-bold text-xl font-headline">03</div>
                                <div>
                                    <h4 className="font-bold text-on-background mb-1 uppercase tracking-tight font-headline">{dict.c3Badge}</h4>
                                    <p className="text-sm text-on-surface-variant mb-2">{dict.c3Desc}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="lg:w-1/2 grid grid-cols-2 gap-4">
                        <div className="h-64 glass-panel relative flex items-center justify-center p-8 overflow-hidden border border-tertiary/10">
                            <Image
                                fill
                                className="object-cover grayscale opacity-30"
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuD1BUxDPFreiUF03Wqof8lScLGYnys_NLWA7kJhNXMwl_-zkK6-GEU0ByNzfz3HSbCCfN2uTzeGii-jnf_bfRQYNooC0Mb2QkcpS_aC86Eq5cYCO73icImeCxRJfwyRgacXipM77IKQi1x_6jhbLTTP31m-UbEBvFVSj8nmnBVAMSXTDu7_BquVq6LS6O5zz0O5X_mx_dHijIsAa288U7OHlPUaUMMKLmjQyScZ80MGTQsdTUgsm1nSi3e2U0kWLc-N0F7nvu0ApJT0"
                                alt="Technical laboratory"
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                            />
                        </div>
                        <div className="h-64 bg-surface-variant border border-tertiary/20 flex flex-col items-center justify-center text-on-background p-8 gold-shimmer">
                            <span className="text-4xl font-bold mb-2 text-tertiary font-headline">100%</span>
                            <span className="text-[10px] uppercase tracking-widest text-center text-on-surface-variant font-label">Compliance Rate</span>
                        </div>
                        <div className="h-64 bg-tertiary flex flex-col items-center justify-center text-on-tertiary p-8">
                            <span className="material-symbols-outlined text-5xl">verified</span>
                        </div>
                        <div className="h-64 glass-panel relative flex items-center justify-center p-8 overflow-hidden border border-tertiary/10">
                            <Image
                                fill
                                className="object-cover grayscale opacity-20"
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBSf6QTjlqe3nW6coUXw2RXX4kOw7an-UWDpZecBlJIbJy-8VclUBhO6yfuYV_W__5OOHvtafODGYCIvhV3ZprB3ZSL4tJOmbQF6BIDRxAAR5Ms451JYWOORtni9FURpTqdKrIadUhTl-2uMBA83nLcQUUGKr7jgnlLtb_b0QelnPk4LlmeupLl_NGLlz-RHv7xggl5R34ndnq2-Biaaz3NZweek1eu_GCqwotTGMtXHR59jB0zK962qhyoIozDSgDiSfnBoyeT9vt_"
                                alt="Blueprint detail"
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
