"use client";

import React from "react";
import dynamic from "next/dynamic";

const SmallBranchMap = dynamic(
    () => import("./SmallBranchMap").then((mod) => mod.SmallBranchMap),
    {
        ssr: false,
        loading: () => (
            <div className="flex h-full w-full items-center justify-center bg-surface">
                <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent" />
            </div>
        ),
    }
);

export default function ContactDetails({ info, hubs }: { info: any, hubs: any }) {
    return (
        <aside className="lg:col-span-5 flex flex-col gap-6">
            <div className="rounded-sm border border-outline-variant/25 bg-surface p-7 shadow-[0_12px_28px_rgba(17,24,39,0.07)] dark:border-outline-variant/35 dark:bg-surface-container-low dark:shadow-[0_16px_40px_rgba(0,0,0,0.14)] md:p-8">
                <div>
                    <span className="mb-3 block font-label text-[0.65rem] uppercase tracking-widest text-tertiary">{info.hq}</span>
                    <div className="flex items-start gap-3">
                        <span className="material-symbols-outlined text-tertiary">location_on</span>
                        <p className="font-body text-sm leading-relaxed text-on-background">
                            {info.hqAddress}
                        </p>
                    </div>
                </div>
                <div className="mt-6 grid grid-cols-1 gap-6 border-t border-outline-variant/25 pt-6 md:grid-cols-2">
                    <div>
                        <span className="mb-2 block font-label text-[0.65rem] uppercase tracking-widest text-tertiary">{info.inquiries}</span>
                        <div className="flex items-center gap-2 text-sm text-on-background">
                            <span className="material-symbols-outlined text-tertiary text-sm">call</span>
                            <span className="font-body" dir="ltr">+966 53 151 5110</span>
                        </div>
                    </div>
                    <div>
                        <span className="mb-2 block font-label text-[0.65rem] uppercase tracking-widest text-tertiary">{info.email}</span>
                        <div className="flex items-center gap-2 text-sm text-on-background">
                            <span className="material-symbols-outlined text-tertiary text-sm">mail</span>
                            <span className="font-body">{info.emailValue}</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 gap-4">
                <div className="group flex items-center justify-between rounded-sm border border-outline-variant/25 bg-background p-5 transition-all hover:border-primary/40 hover:bg-surface dark:border-outline-variant/30 dark:bg-surface-container-lowest dark:hover:bg-surface-container-low">
                    <div>
                        <h4 className="font-headline text-sm font-bold text-on-background">{hubs.jeddah}</h4>
                        <p className="mt-1 text-[0.72rem] uppercase tracking-wide text-on-surface-variant">{hubs.jeddahDesc}</p>
                    </div>
                    <span className="material-symbols-outlined text-tertiary transition-transform group-hover:scale-110">hub</span>
                </div>
                <div className="group flex items-center justify-between rounded-sm border border-outline-variant/25 bg-background p-5 transition-all hover:border-primary/40 hover:bg-surface dark:border-outline-variant/30 dark:bg-surface-container-lowest dark:hover:bg-surface-container-low">
                    <div>
                        <h4 className="font-headline text-sm font-bold text-on-background">{hubs.jubail}</h4>
                        <p className="mt-1 text-[0.72rem] uppercase tracking-wide text-on-surface-variant">{hubs.jubailDesc}</p>
                    </div>
                    <span className="material-symbols-outlined text-tertiary transition-transform group-hover:scale-110">factory</span>
                </div>
            </div>

            <div className="relative h-[220px] overflow-hidden rounded-sm border border-outline-variant/25 bg-background dark:border-outline-variant/30 dark:bg-surface-container-lowest">
                <SmallBranchMap />
            </div>
        </aside>
    );
}
