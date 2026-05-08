"use client";

import React from "react";
import Image from "next/image";

interface CertificateItem {
    title: string;
    image: string;
}

export default function AboutCertificatesSection({ dict }: { dict?: any }) {
    const items: CertificateItem[] = dict?.items ?? [
        { title: "ISO 9001:2015", image: "/certificates/1.png" },
        { title: "ISO 14001:2015", image: "/certificates/2.png" },
        { title: "ISO 45001:2018", image: "/certificates/3.png" },
        { title: "Balady Certificate", image: "/certificates/4.png" },
        { title: "Balady Supplement (Page 1)", image: "/certificates/5.png" },
        { title: "Balady Supplement (Page 2)", image: "/certificates/6.png" },
    ];

    return (
        <section className="relative bg-background py-20 md:py-24">
            <div className="container mx-auto px-6 md:px-12">
                <div className="mx-auto max-w-3xl text-center">
                    <h2 className="font-headline text-4xl md:text-5xl font-black tracking-tight text-on-background">
                        {dict?.title ?? "Certificates"}
                    </h2>
                    <div className="mx-auto mt-5 h-[2px] w-16 bg-tertiary" />
                    <p className="mt-6 text-sm md:text-base text-on-surface-variant leading-relaxed">
                        {dict?.subtitle ?? "Our quality, safety, and compliance certificates."}
                    </p>
                </div>

                <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {items.map((item, idx) => (
                        <article
                            key={`${item.title}-${idx}`}
                            className="group rounded-2xl border border-outline/40 bg-surface p-3 shadow-[0_16px_35px_rgba(0,0,0,0.08)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_45px_rgba(0,0,0,0.15)]"
                        >
                            <div className="relative aspect-[3/4] w-full overflow-hidden rounded-xl bg-surface-container-low">
                                <Image
                                    fill
                                    src={item.image}
                                    alt={item.title}
                                    className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                                    sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                                />
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
