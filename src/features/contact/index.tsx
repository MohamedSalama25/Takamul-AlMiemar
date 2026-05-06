"use client";

import React from "react";
import Navigation from "@/shared/components/layout/Navigation";
import Footer from "@/shared/components/layout/Footer";
import ContactHero from "./components/ContactHero";
import ContactForm from "./components/ContactForm";
import ContactDetails from "./components/ContactDetails";

export default function ContactView({ dictionary }: { dictionary: any }) {
    const dict = dictionary.contactPage;

    return (
        <main className="min-h-screen bg-background text-on-background selection:bg-tertiary/30 overflow-x-hidden">
            <Navigation dict={dictionary.nav} />
            <ContactHero dict={dict.hero} />

            <section className="relative z-20 mx-auto -mt-28 max-w-7xl px-6 pb-16 md:-mt-32 md:px-8">
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
                    <ContactForm dict={dict.form} />
                    <ContactDetails
                        info={dict.info}
                        hubs={dict.hubs}
                    />
                </div>
            </section>

            <Footer dict={dictionary.footer} />
        </main>
    );
}
