import { NextResponse } from "next/server";
import { sendNewsletterEmail } from "@/shared/services/resend-newsletter.service";

export async function POST(request: Request) {
    try {
        const body = (await request.json()) as { email?: string };
        const email = (body.email ?? "").trim();

        if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            return NextResponse.json(
                { success: false, message: "Invalid email." },
                { status: 400 },
            );
        }

        await sendNewsletterEmail(email);

        return NextResponse.json({ success: true, message: "Subscribed successfully." });
    } catch (error) {
        return NextResponse.json(
            { success: false, message: "Failed to subscribe.", error: String(error) },
            { status: 500 },
        );
    }
}
