"use client";

import { useEffect, useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import { getLanguage } from "@/shared/lib/i18n";

export default function LanguageToggle() {
    const [lang, setLang] = useState<"ar" | "en">("ar");
    const [isPending, startTransition] = useTransition();
    const router = useRouter();

    useEffect(() => {
        const currentLang = getLanguage();
        setLang(currentLang);
    }, []);

    const toggleLanguage = () => {
        const newLang = lang === "ar" ? "en" : "ar";
        setLang(newLang);
        startTransition(async () => {
            try {
                await fetch("/api/locale", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ lang: newLang }),
                });
                try {
                    sessionStorage.setItem("NEXT_LOCALE", newLang);
                } catch {
                    // ignore
                }
                router.refresh();
            } catch {
                // Revert to last known language if update fails.
                setLang(lang);
            }
        });
    };

    return (
        <button
            onClick={toggleLanguage}
            disabled={isPending}
            className="font-manrope tracking-widest uppercase text-xs font-semibold text-primary dark:text-blue-200 hover:bg-white/5 transition-all duration-300 px-4 py-2 disabled:opacity-70 disabled:cursor-not-allowed"
        >
            {lang === "ar" ? "EN" : "AR"}
        </button>
    );
}
