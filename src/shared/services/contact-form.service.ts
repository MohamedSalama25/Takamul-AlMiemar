import type { ContactPayload } from "@/shared/lib/contact-email-template";

export async function submitContactForm(payload: ContactPayload) {
    const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
    });

    const data = await response.json();
    if (!response.ok || !data.success) {
        throw new Error(data?.message ?? "Unable to submit form.");
    }

    return data;
}
