"use client";

import React from "react";
import Navigation from "@/shared/components/layout/Navigation";
import Footer from "@/shared/components/layout/Footer";
import PortfolioHero from "./components/PortfolioHero";
import PortfolioGrid from "./components/PortfolioGrid";
import PortfolioCTA from "./components/PortfolioCTA";

export default function ProjectsView({ dictionary }: { dictionary: any }) {
    const dict = dictionary.portfolioPage;
    const dir = (dictionary.common?.dir as "rtl" | "ltr") ?? "rtl";

    return (
        <main className="min-h-screen bg-background text-on-background selection:bg-tertiary/30">
            <Navigation dict={dictionary.nav} dir={dir} />
            <PortfolioHero dict={dict.hero} />
            <PortfolioGrid
                projects={dict.projects}
                dir={dir}
            />
            <PortfolioCTA dict={dict.cta} />
            <Footer dict={dictionary.footer} />
        </main>
    );
}
