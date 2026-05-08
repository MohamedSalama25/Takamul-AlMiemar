import { NextResponse } from "next/server";

type Locale = "ar" | "en";

export async function POST(request: Request) {
    try {
        const body = (await request.json()) as { lang?: Locale };
        const lang = body.lang;

        if (lang !== "ar" && lang !== "en") {
            return NextResponse.json({ success: false, message: "Invalid locale." }, { status: 400 });
        }

        const response = NextResponse.json({ success: true });
        response.cookies.set("NEXT_LOCALE", lang, {
            path: "/",
            sameSite: "lax",
            maxAge: 60 * 60 * 24 * 365,
        });

        return response;
    } catch {
        return NextResponse.json({ success: false, message: "Failed to update locale." }, { status: 500 });
    }
}
