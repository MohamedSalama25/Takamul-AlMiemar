"use client";

import { useEffect } from "react";

export default function BfcacheGuard() {
    useEffect(() => {
        const restoreFreshPage = () => {
            window.location.reload();
        };

        const onPageShow = (event: PageTransitionEvent) => {
            if (event.persisted) {
                restoreFreshPage();
            }
        };

        window.addEventListener("pageshow", onPageShow);

        const navEntry = performance.getEntriesByType("navigation")[0] as PerformanceNavigationTiming | undefined;
        if (navEntry?.type === "back_forward") {
            restoreFreshPage();
        }

        return () => {
            window.removeEventListener("pageshow", onPageShow);
        };
    }, []);

    return null;
}
