import { NextResponse, type NextRequest } from "next/server";

export function proxy(request: NextRequest) {
    const response = NextResponse.next();
    const localeCookie = request.cookies.get("NEXT_LOCALE")?.value;

    if (localeCookie !== "ar" && localeCookie !== "en") {
        response.cookies.set("NEXT_LOCALE", "ar", {
            path: "/",
            sameSite: "lax",
            maxAge: 60 * 60 * 24 * 365,
        });
    }

    return response;
}

export const config = {
    matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
