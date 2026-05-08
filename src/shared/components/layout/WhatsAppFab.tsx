interface WhatsAppFabProps {
    dir: "rtl" | "ltr";
}

const COMPANY_WHATSAPP = "966583051777";

export default function WhatsAppFab({ dir }: WhatsAppFabProps) {
    const isRtl = dir === "rtl";
    const message = isRtl
        ? "مرحبًا، أود الاستفسار عن خدمات تكامل المعمار."
        : "Hello, I would like to inquire about Takamul AlMiemar services.";
    const href = `https://wa.me/${COMPANY_WHATSAPP}?text=${encodeURIComponent(message)}`;

    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={isRtl ? "تواصل عبر واتساب" : "Contact via WhatsApp"}
            className={`fixed bottom-5 ${isRtl ? "left-5" : "right-5"} z-[90] flex h-12 w-12 items-center justify-center overflow-visible rounded-[9999px] bg-[#25D366] text-white shadow-[0_12px_24px_rgba(0,0,0,0.28)] transition-transform duration-200 hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80 focus-visible:ring-offset-2 focus-visible:ring-offset-[#25D366]`}
        >
            <span
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 rounded-[9999px] bg-[#25D366]/35 [animation:ping_2.6s_cubic-bezier(0,0,0.2,1)_infinite]"
            />
            <svg viewBox="0 0 32 32" className="relative z-10 h-6 w-6 fill-current" aria-hidden="true">
                <path d="M19.11 17.23c-.3-.15-1.77-.87-2.04-.97-.27-.1-.46-.15-.65.15-.2.3-.75.97-.92 1.17-.17.2-.35.22-.64.08-.3-.15-1.25-.46-2.38-1.46-.88-.79-1.47-1.76-1.64-2.06-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.03-.52-.08-.15-.65-1.57-.9-2.15-.23-.55-.47-.47-.65-.48h-.55c-.2 0-.52.08-.79.37-.27.3-1.04 1.02-1.04 2.5 0 1.47 1.06 2.9 1.2 3.1.15.2 2.08 3.18 5.03 4.46.7.3 1.25.48 1.68.62.7.22 1.33.2 1.83.12.56-.08 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.08-.12-.27-.2-.57-.35z" />
                <path d="M16.03 3.2c-7.03 0-12.73 5.7-12.73 12.73 0 2.24.58 4.43 1.68 6.35L3.2 28.8l6.68-1.75a12.7 12.7 0 0 0 6.15 1.58h.01c7.03 0 12.73-5.7 12.73-12.73S23.06 3.2 16.03 3.2zm0 23.13h-.01a10.36 10.36 0 0 1-5.28-1.45l-.38-.22-3.96 1.03 1.05-3.86-.25-.4a10.4 10.4 0 1 1 8.83 4.9z" />
            </svg>
        </a>
    );
}
