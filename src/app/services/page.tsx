import { getDictionary } from "@/shared/lib/get-dictionary";
import ServicesView from "@/features/services/index";

export default async function Services() {
    const dictionary = await getDictionary();
    return <ServicesView dictionary={dictionary} />;
}
