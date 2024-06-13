import ProjectsSectionPage from "../pages/Projects/ProjectsSectionPage";
import SectionTitle from "./common/SectionTitle";

export default function ProjectsSection() {
  return (
    <div className="p-2 max-w-[80rem] lg:w-3/4 flex justify-center flex-col">
        <SectionTitle title="See projects I have done"/>
        <ProjectsSectionPage />
    </div>
  )
}
