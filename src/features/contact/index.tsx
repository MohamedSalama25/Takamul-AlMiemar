"use client";

import React from "react";
import Navigation from "@/shared/components/layout/Navigation";
import Footer from "@/shared/components/layout/Footer";
import ContactHero from "./components/ContactHero";
import ContactForm from "./components/ContactForm";
import ContactDetails from "./components/ContactDetails";
import PartnerSection from "./components/PartnerSection";

export default function ContactView({ dictionary }: { dictionary: any }) {
    const dict = dictionary.contactPage;

    return (
        <main className="min-h-screen bg-background text-on-background selection:bg-tertiary/30 overflow-x-hidden">
            <Navigation dict={dictionary.nav} />
            <ContactHero dict={dict.hero} />

            {/* Main Content Grid */}
            <section className="max-w-7xl mx-auto px-8 -mt-32 relative z-20 pb-24">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                    <ContactForm dict={dict.form} />
                    <ContactDetails
                        info={dict.info}
                        hubs={dict.hubs}
                    />
                </div>
            </section>

            <PartnerSection dict={dict.partner} />
            <Footer dict={dictionary.footer} />
        </main>
    );
}
