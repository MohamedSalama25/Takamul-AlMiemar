import Navigation from "@/shared/components/layout/Navigation";
import Footer from "@/shared/components/layout/Footer";
import Hero from "./components/Hero";
import About from "./components/About";
import AdvancedServices from "./components/AdvancedServices";
import Projects from "./components/Projects";
import Statistics from "./components/Statistics";
import Clients from "./components/Clients";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";

export default function HomeView({ dictionary }: { dictionary: any }) {
    const dir = (dictionary.common?.dir as "rtl" | "ltr") ?? "rtl";
    const isRtl = dir === "rtl";

    return (
        <main className="bg-background text-on-background font-body selection:bg-tertiary selection:text-on-tertiary min-h-screen">
            <Navigation dict={dictionary.nav} dir={dir} />
            <Hero dict={dictionary.hero} />
            <Statistics dict={dictionary.statistics} />
            <About dict={dictionary.about} isRtl={isRtl} />
            <AdvancedServices dict={dictionary.professionalServices} isRtl={isRtl} />
            <Projects section={dictionary.projects} projects={dictionary.portfolioPage?.projects ?? []} isRtl={isRtl} />
            
            <Clients dict={dictionary.clients} isRtl={isRtl} />
            <Certifications dict={dictionary.certifications} isRtl={isRtl} />
            <Contact dict={dictionary.contact} isRtl={isRtl} />
            <Footer dict={dictionary.footer} />
        </main>
    );
}
