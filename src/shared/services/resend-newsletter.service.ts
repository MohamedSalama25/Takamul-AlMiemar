import { buildNewsletterEmailTemplate } from "@/shared/lib/newsletter-email-template";

export async function sendNewsletterEmail(email: string) {
    const apiKey = process.env.RESEND_API_KEY;
    const toEmail = process.env.CONTACT_RECEIVER_EMAIL ?? "info@takamulsaudi.com";
    const fromEmail = process.env.RESEND_FROM_EMAIL ?? "Takamul Contact <info@takamulsaudi.com>";

    if (!apiKey) {
        throw new Error("RESEND_API_KEY is missing");
    }

    const response = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
            Authorization: `Bearer ${apiKey}`,
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            from: fromEmail,
            to: [toEmail],
            subject: "New website subscription",
            html: buildNewsletterEmailTemplate(email),
            reply_to: email,
        }),
    });

    if (!response.ok) {
        const details = await response.text();
        throw new Error(`Resend request failed: ${details}`);
    }

    return response.json();
}
