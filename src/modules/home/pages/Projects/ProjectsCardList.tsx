import ProjectCard from "./ProjectsCard";
import project from "../../../../assets/images/desktop-application-development.jpg"

export default function ProjectsCardList() {
  return (
    <div className="w-full flex flex-col gap-5">
        <ProjectCard
        image={project}
        title="Mon Projet"
        description="Ceci est une brève description de mon projet."
        repoUrl="https://github.com/user/repo"
        liveUrl="https://liveproject.com"
        detailsUrl="https://details.com"
      />
        <ProjectCard
        image={project}
        title="Mon Projet"
        description="Ceci est une brève description de mon projet."
        repoUrl="https://github.com/user/repo"
        liveUrl="https://liveproject.com"
        detailsUrl="https://details.com"
      />
    </div>
  )
}
