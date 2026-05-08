"use client";

import React from "react";
import Navigation from "@/shared/components/layout/Navigation";
import Footer from "@/shared/components/layout/Footer";
import AboutIntegrationSection from "./components/AboutIntegrationSection";
import AboutCertificatesSection from "./components/AboutCertificatesSection";

export default function AboutView({ dictionary }: { dictionary: any }) {
    const dir = (dictionary.common?.dir as "rtl" | "ltr") ?? "rtl";

    return (
        <main className="min-h-screen bg-background text-on-background selection:bg-tertiary/30">
            <Navigation dict={dictionary.nav} dir={dir} />
            <div className="pt-20">
                <AboutIntegrationSection dict={dictionary.aboutPage?.integration} />
                <AboutCertificatesSection dict={dictionary.aboutPage?.certificates} />
            </div>
            <Footer dict={dictionary.footer} />
        </main>
    );
}
