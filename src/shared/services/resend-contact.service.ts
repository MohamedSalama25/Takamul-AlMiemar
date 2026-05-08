import { buildContactEmailTemplate, type ContactPayload } from "@/shared/lib/contact-email-template";

export async function sendContactEmail(payload: ContactPayload) {
    const apiKey = process.env.RESEND_API_KEY;
    const toEmail =  "info@takamulsaudi.com";
    const fromEmail = "Takamul Contact <info@takamulsaudi.com>";

    if (!apiKey) {
        throw new Error("RESEND_API_KEY is missing");
    }

    const subject = `New contact request - ${payload.name}`;
    const html = buildContactEmailTemplate(payload);

    const response = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
            Authorization: `Bearer ${apiKey}`,
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            from: fromEmail,
            to: [toEmail],
            subject,
            html,
            reply_to: payload.email,
        }),
    });

    if (!response.ok) {
        const details = await response.text();
        throw new Error(`Resend request failed: ${details}`);
    }

    return response.json();
}
