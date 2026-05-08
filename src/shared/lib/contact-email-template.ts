export interface ContactPayload {
    name: string;
    email: string;
    message: string;
    source: "home" | "contact-page";
    projectType?: string;
    service?: string;
    region?: string;
}

const esc = (value: string) =>
    value
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#39;");

export function buildContactEmailTemplate(payload: ContactPayload) {
    const name = esc(payload.name);
    const email = esc(payload.email);
    const source = payload.source === "home" ? "Home Page Form" : "Contact Page Form";
    const projectType = payload.projectType ? esc(payload.projectType) : "Not provided";
    const service = payload.service ? esc(payload.service) : "Not selected";
    const region = payload.region ? esc(payload.region) : "Not selected";
    const message = esc(payload.message).replace(/\n/g, "<br/>");

    return `
        <div style="font-family: Arial, sans-serif; background:#f5f7fb; padding:24px;">
          <div style="max-width:680px; margin:0 auto; background:#ffffff; border:1px solid #e6e8ef; border-radius:12px; overflow:hidden;">
            <div style="background:#1d2a39; color:#fff; padding:20px 24px;">
              <h2 style="margin:0; font-size:22px;">New Contact Request</h2>
              <p style="margin:6px 0 0; color:#c9d1df; font-size:13px;">Takamul AlMiemar Website</p>
            </div>
            <div style="padding:24px;">
              <table style="width:100%; border-collapse:collapse;">
                <tr><td style="padding:10px 0; color:#6b7280; width:38%;">Name</td><td style="padding:10px 0; color:#111827; font-weight:600;">${name}</td></tr>
                <tr><td style="padding:10px 0; color:#6b7280;">Email</td><td style="padding:10px 0;"><a href="mailto:${email}" style="color:#1f4ed8; text-decoration:none;">${email}</a></td></tr>
                <tr><td style="padding:10px 0; color:#6b7280;">Source</td><td style="padding:10px 0; color:#111827;">${source}</td></tr>
                <tr><td style="padding:10px 0; color:#6b7280;">Project Type</td><td style="padding:10px 0; color:#111827;">${projectType}</td></tr>
                <tr><td style="padding:10px 0; color:#6b7280;">Service</td><td style="padding:10px 0; color:#111827;">${service}</td></tr>
                <tr><td style="padding:10px 0; color:#6b7280;">Region</td><td style="padding:10px 0; color:#111827;">${region}</td></tr>
              </table>
              <div style="margin-top:18px; padding:14px; border:1px solid #e5e7eb; border-radius:8px; background:#fafafa;">
                <div style="font-size:12px; color:#6b7280; margin-bottom:8px;">Message</div>
                <div style="font-size:14px; color:#111827; line-height:1.7;">${message}</div>
              </div>
            </div>
          </div>
        </div>
    `;
}
