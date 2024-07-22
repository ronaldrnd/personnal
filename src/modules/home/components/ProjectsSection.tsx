import ProjectsSectionPage from "../pages/Projects/ProjectsSectionPage";


export default function ProjectsSection() {
  return (
    <div className="p-2 max-w-[80rem] lg:w-3/4 flex justify-center items-center flex-col gap-10">
          <h3 className="text-4xl font-semibold text-blue-600 border-b-2 border-blue-600 pb-2 text-center w-full">
        My Projects
      </h3>
        <ProjectsSectionPage />
    </div>
  )
}
