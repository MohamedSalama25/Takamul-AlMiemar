import Navigation from "@/shared/components/layout/Navigation";
import Footer from "@/shared/components/layout/Footer";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Projects from "./components/Projects";
import Statistics from "./components/Statistics";
import Clients from "./components/Clients";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";

export default function HomeView({ dictionary }: { dictionary: any }) {
    return (
        <main className="bg-background text-on-background font-body selection:bg-tertiary selection:text-on-tertiary min-h-screen">
            <Navigation dict={dictionary.nav} />
            <Hero dict={dictionary.hero} />
            <About dict={dictionary.about} />
            <Services dict={dictionary.services} />
            <Projects dict={dictionary.projects} />
            <Statistics dict={dictionary.statistics} />
            <Clients dict={dictionary.clients} />
            <Certifications dict={dictionary.certifications} />
            <Contact dict={dictionary.contact} />
            <Footer dict={dictionary.footer} />
        </main>
    );
}
