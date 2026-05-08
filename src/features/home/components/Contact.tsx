"use client";

import React from "react";
import { motion } from "framer-motion";
import { submitContactForm } from "@/shared/services/contact-form.service";

export default function Contact({ dict, isRtl = true }: { dict: any; isRtl?: boolean }) {
    const [form, setForm] = React.useState({
        name: "",
        email: "",
        projectType: "",
        message: "",
    });
    const [status, setStatus] = React.useState<"idle" | "loading" | "success" | "error">("idle");
    const [feedback, setFeedback] = React.useState("");

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setStatus("loading");
        setFeedback("");

        try {
            await submitContactForm({
                name: form.name,
                email: form.email,
                projectType: form.projectType,
                message: form.message,
                source: "home",
            });
            setStatus("success");
            setFeedback(dict.successMessage ?? "Your request has been sent successfully.");
            setForm({ name: "", email: "", projectType: "", message: "" });
        } catch {
            setStatus("error");
            setFeedback(dict.errorMessage ?? "Unable to send your request right now.");
        }
    }

    return (
        <section id="contact" className="py-24 px-8 md:px-24 bg-surface relative overflow-hidden">
            <div className="absolute -top-24 -right-24 w-96 h-96 bg-tertiary/5 rounded-full blur-[100px]"></div>
            <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-primary/5 rounded-full blur-[100px]"></div>
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="space-y-12"
                >
                    <div>
                        <h2 className="font-headline text-5xl font-bold mb-6">{dict.title}</h2>
                        <div className={`mb-6 h-1 w-32 md:w-48 rounded-full ${isRtl ? "bg-gradient-to-l" : "bg-gradient-to-r"} from-tertiary to-transparent`} aria-hidden />
                        <p className="text-on-surface-variant text-lg">{dict.desc}</p>
                    </div>
                    <div className="space-y-6">
                        {[
                            { icon: "location_on", title: dict.info1Title, desc: dict.info1Desc },
                            { icon: "call", title: dict.info2Title, desc: dict.info2Desc },
                            { icon: "mail", title: dict.info3Title, desc: dict.info3Desc }
                        ].map((info, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 + 0.3 }}
                                className="flex items-start gap-6"
                            >
                                <div className="w-12 h-12 bg-surface-container-high flex items-center justify-center text-tertiary border border-tertiary/20">
                                    <span className="material-symbols-outlined">{info.icon}</span>
                                </div>
                                <div>
                                    <h4 className="font-bold text-on-surface">{info.title}</h4>
                                    <p className="text-on-surface-variant text-sm">{info.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="glass-panel p-10 relative border border-white/5"
                >
                    <form className="space-y-8" onSubmit={handleSubmit}>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="relative group">
                                <input
                                    required
                                    className="w-full bg-surface-container-lowest border-0 border-b-2 border-outline-variant/30 py-3 px-4 focus:ring-0 focus:border-tertiary focus:bg-surface-container-low transition-all text-on-surface placeholder:text-on-surface-variant/40"
                                    placeholder={dict.formName}
                                    type="text"
                                    value={form.name}
                                    onChange={(e) => setForm((prev) => ({ ...prev, name: e.target.value }))}
                                />
                            </div>
                            <div className="relative group">
                                <input
                                    required
                                    className="w-full bg-surface-container-lowest border-0 border-b-2 border-outline-variant/30 py-3 px-4 focus:ring-0 focus:border-tertiary focus:bg-surface-container-low transition-all text-on-surface placeholder:text-on-surface-variant/40"
                                    placeholder={dict.formEmail}
                                    type="email"
                                    value={form.email}
                                    onChange={(e) => setForm((prev) => ({ ...prev, email: e.target.value }))}
                                />
                            </div>
                        </div>
                        <div className="relative group">
                            <input
                                className="w-full bg-surface-container-lowest border-0 border-b-2 border-outline-variant/30 py-3 px-4 focus:ring-0 focus:border-tertiary focus:bg-surface-container-low transition-all text-on-surface placeholder:text-on-surface-variant/40"
                                placeholder={dict.formType}
                                type="text"
                                value={form.projectType}
                                onChange={(e) => setForm((prev) => ({ ...prev, projectType: e.target.value }))}
                            />
                        </div>
                        <div className="relative group">
                            <textarea
                                required
                                className="w-full bg-surface-container-lowest border-0 border-b-2 border-outline-variant/30 py-3 px-4 focus:ring-0 focus:border-tertiary focus:bg-surface-container-low transition-all text-on-surface placeholder:text-on-surface-variant/40 resize-none"
                                placeholder={dict.formMessage}
                                rows={4}
                                value={form.message}
                                onChange={(e) => setForm((prev) => ({ ...prev, message: e.target.value }))}
                            ></textarea>
                        </div>
                        {feedback ? (
                            <p className={`text-sm ${status === "success" ? "text-green-600 dark:text-green-400" : "text-red-600 dark:text-red-400"}`}>
                                {feedback}
                            </p>
                        ) : null}
                        <motion.button
                            type="submit"
                            disabled={status === "loading"}
                            whileHover={{ scale: 1.01 }}
                            whileTap={{ scale: 0.98 }}
                            className="w-full py-5 bg-primary-container text-primary border-l-4 border-tertiary font-bold tracking-widest uppercase hover:bg-tertiary hover:text-on-tertiary transition-all shadow-lg shadow-tertiary/10 disabled:opacity-70 disabled:cursor-not-allowed"
                        >
                            {dict.formSubmit}
                        </motion.button>
                    </form>
                </motion.div>
            </div>
        </section>
    );
}

