import { NextResponse } from "next/server";
import { sendContactEmail } from "@/shared/services/resend-contact.service";
import type { ContactPayload } from "@/shared/lib/contact-email-template";

export async function POST(request: Request) {
    try {
        const body = (await request.json()) as Partial<ContactPayload>;

        if (!body.name || !body.email || !body.message || !body.source) {
            return NextResponse.json(
                { success: false, message: "Missing required fields." },
                { status: 400 },
            );
        }

        await sendContactEmail({
            name: body.name,
            email: body.email,
            message: body.message,
            source: body.source,
            projectType: body.projectType,
            service: body.service,
        });

        return NextResponse.json({ success: true, message: "Message sent successfully." });
    } catch (error) {
        return NextResponse.json(
            { success: false, message: "Failed to send message.", error: String(error) },
            { status: 500 },
        );
    }
}
