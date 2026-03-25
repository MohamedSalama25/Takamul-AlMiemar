import { getDictionary } from "@/shared/lib/get-dictionary";
import ContactView from "@/features/contact/index";

export default async function Contact() {
    const dictionary = await getDictionary();
    return <ContactView dictionary={dictionary} />;
}
