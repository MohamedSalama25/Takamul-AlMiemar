const esc = (value: string) =>
    value
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#39;");

export function buildNewsletterEmailTemplate(email: string) {
    const safeEmail = esc(email);
    return `
        <div style="font-family: Arial, sans-serif; background:#f5f7fb; padding:24px;">
          <div style="max-width:640px; margin:0 auto; background:#ffffff; border:1px solid #e6e8ef; border-radius:12px; overflow:hidden;">
            <div style="background:#1d2a39; color:#fff; padding:20px 24px;">
              <h2 style="margin:0; font-size:22px;">New Website Subscription</h2>
              <p style="margin:6px 0 0; color:#c9d1df; font-size:13px;">Takamul AlMiemar Newsletter</p>
            </div>
            <div style="padding:24px;">
              <p style="margin:0; color:#4b5563; font-size:14px;">A new user subscribed from the website footer.</p>
              <div style="margin-top:16px; padding:14px; border:1px solid #e5e7eb; border-radius:8px; background:#fafafa;">
                <p style="margin:0; color:#111827; font-size:16px; font-weight:600;">${safeEmail}</p>
              </div>
            </div>
          </div>
        </div>
    `;
}
