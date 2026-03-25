import { getDictionary } from "@/shared/lib/get-dictionary";
import AboutView from "@/features/about/index";

export default async function About() {
    const dictionary = await getDictionary();
    return <AboutView dictionary={dictionary} />;
}
