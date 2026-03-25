import { getDictionary } from "@/shared/lib/get-dictionary";
import ProjectsView from "@/features/projects/index";

export default async function Projects() {
    const dictionary = await getDictionary();
    return <ProjectsView dictionary={dictionary} />;
}
