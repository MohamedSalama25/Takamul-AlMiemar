"use client";

import { useEffect, useState } from "react";
import Cookies from "js-cookie";

export default function LanguageToggle() {
    const [lang, setLang] = useState<"ar" | "en">("ar");

    useEffect(() => {
        const currentLang = (Cookies.get("NEXT_LOCALE") as "ar" | "en") || "ar";
        setLang(currentLang);
    }, []);

    const toggleLanguage = () => {
        const newLang = lang === "ar" ? "en" : "ar";
        Cookies.set("NEXT_LOCALE", newLang, { expires: 365 });
        window.location.reload();
    };

    return (
        <button
            onClick={toggleLanguage}
            className="font-manrope tracking-widest uppercase text-xs font-semibold text-primary dark:text-blue-200 hover:bg-white/5 transition-all duration-300 px-4 py-2"
        >
            {lang === "ar" ? "EN" : "AR"}
        </button>
    );
}
