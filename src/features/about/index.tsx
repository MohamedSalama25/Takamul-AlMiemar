"use client";

import React from "react";
import Navigation from "@/shared/components/layout/Navigation";
import Footer from "@/shared/components/layout/Footer";
import AboutIntegrationSection from "./components/AboutIntegrationSection";

export default function AboutView({ dictionary }: { dictionary: any }) {
    return (
        <main className="min-h-screen bg-background text-on-background selection:bg-tertiary/30">
            <Navigation dict={dictionary.nav} />
            {/* Page is intentionally a single primary section, matching the provided design reference. */}
            <div className="pt-20">
                <AboutIntegrationSection />
            </div>
            <Footer dict={dictionary.footer} />
        </main>
    );
}
