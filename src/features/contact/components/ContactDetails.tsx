"use client";

import React from "react";
import dynamic from "next/dynamic";
import { cn } from "@/shared/lib/cn";

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

export default function ContactDetails({ info, dir = "rtl" }: { info: any; dir?: "rtl" | "ltr" }) {
    const isRtl = dir === "rtl";
    const iconRowClass = cn("flex items-center gap-2", isRtl && "flex-row-reverse justify-end");

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
                        <div className="space-y-1.5 text-sm text-on-background">
                            <div className={iconRowClass}>
                                <span className="material-symbols-outlined text-tertiary text-sm">call</span>
                                <span className="font-body" dir="ltr">{info.phoneMain}</span>
                            </div>
                            <div className={iconRowClass}>
                                <span className="material-symbols-outlined text-tertiary text-sm">call</span>
                                <span className="font-body" dir="ltr">{info.phoneAlt1}</span>
                            </div>
                            <div className={iconRowClass}>
                                <span className="material-symbols-outlined text-tertiary text-sm">call</span>
                                <span className="font-body" dir="ltr">{info.phoneAlt2}</span>
                            </div>
                        </div>
                    </div>
                    <div>
                        <span className="mb-2 block font-label text-[0.65rem] uppercase tracking-widest text-tertiary">{info.email}</span>
                        <div className="space-y-1.5 text-sm text-on-background">
                            <div className={iconRowClass}>
                                <span className="material-symbols-outlined text-tertiary text-sm">mail</span>
                                <span className="font-body">{info.emailValue}</span>
                            </div>
                            <div className={iconRowClass}>
                                <span className="material-symbols-outlined text-tertiary text-sm">public</span>
                                <a className="font-body hover:text-tertiary transition-colors" href={`https://${info.website}`} target="_blank" rel="noreferrer">
                                    {info.website}
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="relative h-[220px] overflow-hidden rounded-sm border border-outline-variant/25 bg-background dark:border-outline-variant/30 dark:bg-surface-container-lowest">
                <SmallBranchMap />
            </div>
        </aside>
    );
}
