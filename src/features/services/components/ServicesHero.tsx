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
                    className="object-cover opacity-100 dark:opacity-10"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCPRaLZuL8r1vg1V92fa-3i3yiu8MO1YxOIZFvpLE5wQ6JFSsBip4VS9QnOLILIHqmwQGsY4oiz2sC_D4otu8nJiRPSG8LEzIlmmtejYjONVLDmLdu35ILMxrnHMPOGO_6CyS1DrDKotM22_Dk96eh4xos1isg4qL4nCxY4enoS0NF9V1O8UsyZKqrXqxwTTOh2Npz3QmkkFfEsQ9T9orr01be1C8Q2ayS0tLgsgFrqkyPCSPjiZ2Ps7WjCSziT20ayh0sZZkVneqb9"
                    priority
                />
                <div
                    className="absolute inset-0 hidden bg-gradient-to-b from-surface-variant/75 via-transparent to-surface-variant/75 dark:block"
                    aria-hidden
                />
            </div>
            <div className="relative z-10 max-w-screen-xl mx-auto px-8 text-center">
                <div className="inline-flex items-center gap-4 mb-8">
                    <span className="h-px w-12 bg-tertiary/40"></span>
                    <h2 className="uppercase tracking-[0.2em] text-tertiary font-semibold text-xs font-label">
                        {dict.badge}
                    </h2>
                    <span className="h-px w-12 bg-tertiary/40"></span>
                </div>
                <h1 className="text-5xl md:text-7xl font-bold text-on-background tracking-tight leading-[1.1] mb-8 max-w-4xl mx-auto gold-shimmer">
                    {dict.title} <br /> <span className="text-tertiary">{dict.titleAccent}</span>
                </h1>
                <p className="text-xl md:text-2xl text-on-surface-variant font-light max-w-3xl mx-auto leading-relaxed">
                    {dict.description}
                </p>
            </div>
        </section>
    );
}
