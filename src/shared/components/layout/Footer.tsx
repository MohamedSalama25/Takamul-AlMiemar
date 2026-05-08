"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Footer({ dict }: { dict: any }) {
    const [email, setEmail] = useState("");
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
    const [feedback, setFeedback] = useState("");

    const navHrefs = ["/", "/about", "/services", "/projects", "/contact"];
    const resourceHrefs = [
        "/Takamul%20Almiemar%20For%20Contracting.pdf",
        "/about#certificates",
        "/contact",
        "https://maps.google.com/?q=24.75944,46.73291",
    ];

    async function handleSubscribe(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setStatus("loading");
        setFeedback("");

        try {
            const response = await fetch("/api/newsletter", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email }),
            });
            const data = await response.json();
            if (!response.ok || !data.success) {
                throw new Error(data?.message ?? "Failed to subscribe");
            }
            setStatus("success");
            setFeedback(dict.newsletterSuccess ?? "Subscription received successfully.");
            setEmail("");
        } catch {
            setStatus("error");
            setFeedback(dict.newsletterError ?? "Subscription failed. Please try again.");
        }
    }

    return (
        <footer className="w-full py-16 px-8 md:px-24 grid grid-cols-1 md:grid-cols-4 gap-12 bg-surface-container-low border-t-2 border-tertiary/20">
            <div className="md:col-span-1 space-y-6">
                <Link href="/" className="inline-flex items-center">
                    <Image
                        src="/logo.jpg"
                        alt={dict.title}
                        width={220}
                        height={60}
                        className="h-10 w-auto object-contain"
                    />
                </Link>
                <p className="font-manrope text-sm tracking-normal text-on-surface-variant">{dict.desc}</p>
                <div className="flex gap-4">
                    <a className="w-8 h-8 flex items-center justify-center border border-outline-variant hover:border-tertiary text-on-surface-variant hover:text-tertiary transition-all" href="https://www.takamulsaudi.com" target="_blank" rel="noreferrer">
                        <span className="material-symbols-outlined text-sm">public</span>
                    </a>
                    <a className="w-8 h-8 flex items-center justify-center border border-outline-variant hover:border-tertiary text-on-surface-variant hover:text-tertiary transition-all" href="mailto:info@takamulsaudi.com">
                        <span className="material-symbols-outlined text-sm">link</span>
                    </a>
                </div>
            </div>
            <div>
                <h5 className="text-tertiary font-bold uppercase tracking-widest text-xs mb-8">{dict.navTitle}</h5>
                <ul className="space-y-4 font-manrope text-sm tracking-normal">
                    {dict.navLinks.map((link: string, idx: number) => {
                        return (
                            <li key={idx}>
                                <Link className="text-on-surface-variant hover:text-tertiary transition-colors" href={navHrefs[idx] ?? "/"}>
                                    {link}
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </div>
            <div>
                <h5 className="text-tertiary font-bold uppercase tracking-widest text-xs mb-8">{dict.resourcesTitle}</h5>
                <ul className="space-y-4 font-manrope text-sm tracking-normal">
                    {dict.resourcesLinks.map((link: string, idx: number) => (
                        <li key={idx}>
                            <a
                                className="text-on-surface-variant hover:text-tertiary transition-colors"
                                href={resourceHrefs[idx] ?? "/"}
                                target={idx === 3 ? "_blank" : undefined}
                                rel={idx === 3 ? "noreferrer" : undefined}
                            >
                                {link}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
            <div>
                <h5 className="text-tertiary font-bold uppercase tracking-widest text-xs mb-8">{dict.newsletterTitle}</h5>
                <p className="text-xs text-on-surface-variant mb-4">{dict.newsletterDesc}</p>
                <form className="flex gap-2" onSubmit={handleSubscribe}>
                    <input
                        required
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="bg-surface-container-highest border border-outline-variant/35 focus:ring-0 text-xs w-full py-3 px-3 outline-none transition-colors text-on-surface placeholder:text-on-surface-variant/40"
                        placeholder={dict.newsletterPlaceholder}
                    />
                    <button
                        type="submit"
                        disabled={status === "loading"}
                        className="bg-tertiary text-on-tertiary px-4 flex items-center justify-center disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                        <span className="material-symbols-outlined text-sm">send</span>
                    </button>
                </form>
                {feedback ? (
                    <p className={`mt-2 text-xs ${status === "success" ? "text-green-600 dark:text-green-400" : "text-red-600 dark:text-red-400"}`}>
                        {feedback}
                    </p>
                ) : null}
                <p className="mt-8 text-[10px] text-on-surface-variant/60 font-manrope">{dict.copyright}</p>
            </div>
        </footer>
    );
}
