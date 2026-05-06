"use client";

import React from "react";

export default function ContactForm({ dict }: { dict: any }) {
    return (
        <div className="relative overflow-hidden lg:col-span-7 rounded-sm border border-outline-variant/25 bg-surface p-8 shadow-[0_18px_40px_rgba(17,24,39,0.08)] dark:border-outline-variant/35 dark:bg-surface-container-low/95 dark:shadow-[0_22px_55px_rgba(0,0,0,0.22)] backdrop-blur-md md:p-12">
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-primary/4 via-transparent to-transparent dark:from-primary/6 dark:to-tertiary/8" aria-hidden />
            <div className="pointer-events-none absolute -top-24 -right-20 hidden h-56 w-56 rounded-full bg-primary/10 blur-3xl dark:block" aria-hidden />
            <div className="pointer-events-none absolute -bottom-24 -left-20 hidden h-52 w-52 rounded-full bg-tertiary/10 blur-3xl dark:block" aria-hidden />

            <div className="absolute top-0 right-0 p-8 opacity-[0.04]">
                <span className="material-symbols-outlined text-9xl">engineering</span>
            </div>

            <div className="relative z-10">
                <h2 className="mb-2 flex items-center gap-3 font-headline text-2xl font-bold text-on-background md:text-3xl">
                    <span className="h-px w-10 bg-tertiary" />
                    {dict.title}
                </h2>
                <p className="mb-10 max-w-xl font-body text-sm italic text-on-surface-variant md:mb-12">
                    {dict.subtitle}
                </p>

                <form className="space-y-7" onSubmit={(e) => e.preventDefault()}>
                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                        <div className="relative">
                            <label className="mb-2 block font-label text-[0.65rem] uppercase tracking-widest text-tertiary">{dict.name}</label>
                            <input
                                className="w-full rounded-sm border border-outline-variant/35 bg-background px-4 py-3 text-sm text-on-background placeholder:text-on-surface-variant/45 transition-all duration-200 focus:border-primary focus:bg-surface focus:ring-2 focus:ring-primary/15 focus:outline-none dark:border-outline-variant/45 dark:bg-surface-container-high/85 dark:focus:bg-surface-container-highest"
                                placeholder={dict.namePlaceholder}
                                type="text"
                            />
                        </div>
                        <div className="relative">
                            <label className="mb-2 block font-label text-[0.65rem] uppercase tracking-widest text-tertiary">{dict.email}</label>
                            <input
                                className="w-full rounded-sm border border-outline-variant/35 bg-background px-4 py-3 text-sm text-on-background placeholder:text-on-surface-variant/45 transition-all duration-200 focus:border-primary focus:bg-surface focus:ring-2 focus:ring-primary/15 focus:outline-none dark:border-outline-variant/45 dark:bg-surface-container-high/85 dark:focus:bg-surface-container-highest"
                                placeholder={dict.emailPlaceholder}
                                type="email"
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                        <div className="relative">
                            <label className="mb-2 block font-label text-[0.65rem] uppercase tracking-widest text-tertiary">{dict.service}</label>
                            <select className="w-full cursor-pointer appearance-none rounded-sm border border-outline-variant/35 bg-background px-4 py-3 text-sm text-on-background transition-all duration-200 focus:border-primary focus:bg-surface focus:ring-2 focus:ring-primary/15 focus:outline-none dark:border-outline-variant/45 dark:bg-surface-container-high/85 dark:focus:bg-surface-container-highest">
                                {dict.serviceOptions.map((opt: string) => (
                                    <option key={opt} className="bg-surface">{opt}</option>
                                ))}
                            </select>
                        </div>
                        <div className="relative">
                            <label className="mb-2 block font-label text-[0.65rem] uppercase tracking-widest text-tertiary">{dict.region}</label>
                            <select className="w-full cursor-pointer appearance-none rounded-sm border border-outline-variant/35 bg-background px-4 py-3 text-sm text-on-background transition-all duration-200 focus:border-primary focus:bg-surface focus:ring-2 focus:ring-primary/15 focus:outline-none dark:border-outline-variant/45 dark:bg-surface-container-high/85 dark:focus:bg-surface-container-highest">
                                {dict.regionOptions.map((opt: string) => (
                                    <option key={opt} className="bg-surface">{opt}</option>
                                ))}
                            </select>
                        </div>
                    </div>

                    <div className="relative">
                        <label className="mb-2 block font-label text-[0.65rem] uppercase tracking-widest text-tertiary">{dict.message}</label>
                        <textarea
                            className="w-full resize-none rounded-sm border border-outline-variant/35 bg-background px-4 py-3 text-sm text-on-background placeholder:text-on-surface-variant/45 transition-all duration-200 focus:border-primary focus:bg-surface focus:ring-2 focus:ring-primary/15 focus:outline-none dark:border-outline-variant/45 dark:bg-surface-container-high/85 dark:focus:bg-surface-container-highest"
                            placeholder={dict.messagePlaceholder}
                            rows={5}
                        />
                    </div>

                    <div className="pt-2">
                        <button className="group flex items-center gap-4 bg-tertiary px-10 py-4 text-on-tertiary shadow-xl shadow-tertiary/20 transition-all hover:-translate-y-0.5 hover:bg-tertiary/90 active:translate-y-0 active:scale-95">
                            <span className="font-manrope text-[0.75rem] font-bold uppercase tracking-widest">{dict.submit}</span>
                            <span className="material-symbols-outlined transition-transform group-hover:translate-x-1">arrow_forward</span>
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
