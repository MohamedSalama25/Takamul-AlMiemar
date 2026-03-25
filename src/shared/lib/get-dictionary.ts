import { cookies } from "next/headers";

const dictionaries = {
    en: () => import("../dictionaries/en.json").then((module) => module.default),
    ar: () => import("../dictionaries/ar.json").then((module) => module.default),
};

export const getDictionary = async () => {
    const cookieStore = await cookies();
    const lang = (cookieStore.get("NEXT_LOCALE")?.value as "ar" | "en") || "ar";
    return dictionaries[lang]();
};
