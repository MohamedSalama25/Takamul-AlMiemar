"use client";

import React from "react";
import Link from "next/link";

export default function ServicesCTA({ dict }: { dict: any }) {
    return (
        <section className="py-32 bg-background text-center">
            <div className="max-w-3xl mx-auto px-8">
                <h2 className="text-3xl md:text-5xl font-bold text-on-background head-font mb-6 italic">{dict.title}</h2>
                <h3 className="text-2xl font-body font-medium text-tertiary/80 mb-12">{dict.subtitle}</h3>
                <Link
                    href="/contact"
                    className="inline-flex bg-tertiary text-on-tertiary px-12 py-5 text-sm font-bold tracking-[0.2em] uppercase hover:bg-tertiary/90 transition-all duration-300 shadow-[0_10px_40px_rgba(212,175,55,0.2)]"
                >
                    {dict.button}
                </Link>
            </div>
        </section>
    );
}
