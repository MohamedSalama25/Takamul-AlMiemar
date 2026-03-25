import type { Metadata } from "next";
import { Inter, Manrope, Cairo } from "next/font/google";
import { cookies } from "next/headers";
import "@/shared/styles/globals.css";
import { ThemeProvider } from "@/shared/components/layout/ThemeProvider";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const manrope = Manrope({ subsets: ["latin"], variable: "--font-manrope" });
const cairo = Cairo({ subsets: ["arabic"], variable: "--font-cairo" });

export const metadata: Metadata = {
    title: "Takamul AlMiemar | Engineering Excellence",
    description: "Architects of Structural Integrity and Premium Construction in Saudi Arabia",
};

export default async function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const cookieStore = await cookies();
    const lang = (cookieStore.get("NEXT_LOCALE")?.value as "ar" | "en") || "ar";
    const dir = lang === "ar" ? "rtl" : "ltr";

    return (
        <html lang={lang} dir={dir} className="scroll-smooth" suppressHydrationWarning>
            <head>
                <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
            </head>
            <body
                className={`${manrope.variable} ${inter.variable} ${cairo.variable} antialiased font-body`}
                suppressHydrationWarning
            >
                <ThemeProvider>
                    {children}
                </ThemeProvider>
            </body>
        </html>
    );
}
