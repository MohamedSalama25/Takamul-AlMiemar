"use client";

import React from "react";
import Navigation from "@/shared/components/layout/Navigation";
import Footer from "@/shared/components/layout/Footer";
import AboutHero from "./components/AboutHero";
import LegacyTimeline from "./components/LegacyTimeline";
import MissionVision from "./components/MissionVision";
import CoreValues from "./components/CoreValues";
import EngineeringStandards from "./components/EngineeringStandards";
import Leadership from "./components/Leadership";

export default function AboutView({ dictionary }: { dictionary: any }) {
    const dict = dictionary.aboutPage;

    return (
        <main className="min-h-screen bg-background text-on-background selection:bg-tertiary/30">
            <Navigation dict={dictionary.nav} />
            <AboutHero dict={dict.hero} />
            <LegacyTimeline dict={dict.story} />
            <MissionVision
                mission={dict.mission}
                vision={dict.vision}
            />
            <CoreValues dict={dict.values} />
            <EngineeringStandards dict={dictionary.certifications} />
            <Leadership dict={dict.leadership} />
            <Footer dict={dictionary.footer} />
        </main>
    );
}
