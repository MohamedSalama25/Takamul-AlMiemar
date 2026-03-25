"use client";

import React from "react";

export default function ContactForm({ dict }: { dict: any }) {
    return (
        <div className="lg:col-span-7 glass-panel p-12 border-t border-white/10 shadow-2xl relative overflow-hidden bg-background/50 backdrop-blur-xl">
            <div className="absolute top-0 right-0 p-8 opacity-5">
                <span className="material-symbols-outlined text-9xl">engineering</span>
            </div>
            <h2 className="font-headline text-2xl font-bold mb-2 flex items-center gap-3 text-on-background">
                <span className="w-8 h-px bg-tertiary"></span>
                {dict.title}
            </h2>
            <p className="font-body text-on-surface-variant text-sm mb-12 max-w-xl italic">
                {dict.subtitle}
            </p>
            <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="relative">
                        <label className="font-label text-[0.65rem] uppercase tracking-widest text-tertiary mb-2 block">{dict.name}</label>
                        <input
                            className="w-full bg-surface-variant/30 border-0 border-b-2 border-tertiary/20 focus:border-tertiary focus:ring-0 text-on-background py-3 transition-colors placeholder:text-on-surface-variant/30 text-sm"
                            placeholder={dict.namePlaceholder}
                            type="text"
                        />
                    </div>
                    <div className="relative">
                        <label className="font-label text-[0.65rem] uppercase tracking-widest text-tertiary mb-2 block">{dict.email}</label>
                        <input
                            className="w-full bg-surface-variant/30 border-0 border-b-2 border-tertiary/20 focus:border-tertiary focus:ring-0 text-on-background py-3 transition-colors placeholder:text-on-surface-variant/30 text-sm"
                            placeholder={dict.emailPlaceholder}
                            type="email"
                        />
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="relative">
                        <label className="font-label text-[0.65rem] uppercase tracking-widest text-tertiary mb-2 block">{dict.service}</label>
                        <select className="w-full bg-surface-variant/30 border-0 border-b-2 border-tertiary/20 focus:border-tertiary focus:ring-0 text-on-background py-3 transition-colors appearance-none text-sm cursor-pointer">
                            {dict.serviceOptions.map((opt: string) => (
                                <option key={opt} className="bg-surface-variant">{opt}</option>
                            ))}
                        </select>
                    </div>
                    <div className="relative">
                        <label className="font-label text-[0.65rem] uppercase tracking-widest text-tertiary mb-2 block">{dict.region}</label>
                        <select className="w-full bg-surface-variant/30 border-0 border-b-2 border-tertiary/20 focus:border-tertiary focus:ring-0 text-on-background py-3 transition-colors appearance-none text-sm cursor-pointer">
                            {dict.regionOptions.map((opt: string) => (
                                <option key={opt} className="bg-surface-variant">{opt}</option>
                            ))}
                        </select>
                    </div>
                </div>
                <div className="relative">
                    <label className="font-label text-[0.65rem] uppercase tracking-widest text-tertiary mb-2 block">{dict.message}</label>
                    <textarea
                        className="w-full bg-surface-variant/30 border-0 border-b-2 border-tertiary/20 focus:border-tertiary focus:ring-0 text-on-background py-3 transition-colors placeholder:text-on-surface-variant/30 resize-none text-sm"
                        placeholder={dict.messagePlaceholder}
                        rows={4}
                    ></textarea>
                </div>
                <div className="pt-4">
                    <button className="group flex items-center gap-4 bg-tertiary text-on-tertiary px-10 py-4 transition-all hover:bg-tertiary/90 shadow-xl active:scale-95">
                        <span className="font-manrope uppercase tracking-widest text-[0.75rem] font-bold">{dict.submit}</span>
                        <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
                    </button>
                </div>
            </form>
        </div>
    );
}
