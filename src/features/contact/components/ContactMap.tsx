"use client";

import dynamic from "next/dynamic";

const DynamicRealMap = dynamic(
    () => import("./RealMap").then((mod) => mod.RealMap),
    {
        ssr: false,
        loading: () => (
            <div className="flex h-[460px] w-full items-center justify-center bg-surface-container-low">
                <div className="h-12 w-12 animate-spin rounded-full border-4 border-primary border-t-transparent" />
            </div>
        ),
    }
);

export function ContactMap({ info }: { info: any }) {
    return <DynamicRealMap info={info} />;
}
