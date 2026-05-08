export type Language = "ar" | "en";

const COOKIE_NAME = "NEXT_LOCALE";

export const getLanguage = (): Language => {
    try {
        const cookieValue = document.cookie
            .split("; ")
            .find((part) => part.startsWith(`${COOKIE_NAME}=`))
            ?.split("=")[1];
        const fromCookie = decodeURIComponent(cookieValue ?? "") as Language;
        if (fromCookie === "ar" || fromCookie === "en") return fromCookie;
    } catch {
        // ignore
    }

    try {
        const fromSession = sessionStorage.getItem(COOKIE_NAME) as Language | null;
        if (fromSession === "ar" || fromSession === "en") return fromSession;
    } catch {
        // ignore
    }

    return "ar";
};

export const isRTL = (lang: Language): boolean => {
    return lang === "ar";
};
