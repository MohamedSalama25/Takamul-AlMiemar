"use client";

import React from "react";
import Navigation from "@/shared/components/layout/Navigation";
import Footer from "@/shared/components/layout/Footer";
import ServicesHero from "./components/ServicesHero";
import MainServicesGrid from "./components/MainServicesGrid";
import MethodicalApproach from "./components/MethodicalApproach";
import IntegrationBanner from "./components/IntegrationBanner";
import ServicesCTA from "./components/ServicesCTA";

export default function ServicesView({ dictionary }: { dictionary: any }) {
    const dict = dictionary.ourServicesPage;
    const dir = (dictionary.common?.dir as "rtl" | "ltr") ?? "rtl";

    return (
        <main className="min-h-screen bg-background text-on-background selection:bg-tertiary/30">
            <Navigation dict={dictionary.nav} dir={dir} />
            <ServicesHero dict={dict.hero} />
            <MainServicesGrid items={dictionary.services.items} />
            <MethodicalApproach dict={dict.approach} />
            <IntegrationBanner dict={dict.integration} />
            <ServicesCTA dict={dict.cta} />
            <Footer dict={dictionary.footer} />
        </main>
    );
}
