// src/pages/Projects/ProjectsSection.tsx

import StyledButton from "../../components/common/StyledButton";
import { projects } from "./Projects";
import ProjectCard from "./ProjectsCard";


function ProjectsSectionPage() {
  return (
    <div className="p-10  w-3/4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
        {projects.map(project => (
          <ProjectCard
            key={project.name}
            name={project.name}
            description={project.description}
            technologies={project.technologies}
            repoLink={project.repoLink}
            liveLink={project.liveLink}
            detailsLink={project.detailsLink}
            coverImage={project.coverImage}
            images={project.images}
          />
        ))}
      </div>
      <div className="flex justify-center mt-12">
        <StyledButton text="view all projects" onClick={() => console.log("test")}/>
      </div>
    </div>
  );
}

export default ProjectsSectionPage;
