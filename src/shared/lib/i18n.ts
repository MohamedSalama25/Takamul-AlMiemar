import Cookies from "js-cookie";

export type Language = "ar" | "en";

const COOKIE_NAME = "NEXT_LOCALE";

export const getLanguage = (): Language => {
    return (Cookies.get(COOKIE_NAME) as Language) || "ar";
};

export const setLanguage = (lang: Language) => {
    Cookies.set(COOKIE_NAME, lang, { expires: 365 });
    window.location.reload();
};

export const isRTL = (lang: Language): boolean => {
    return lang === "ar";
};
