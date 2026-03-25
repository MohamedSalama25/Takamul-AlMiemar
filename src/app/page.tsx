import { getDictionary } from "@/shared/lib/get-dictionary";
import HomeView from "@/features/home/index";

export default async function Home() {
    const dictionary = await getDictionary();
    return <HomeView dictionary={dictionary} />;
}
