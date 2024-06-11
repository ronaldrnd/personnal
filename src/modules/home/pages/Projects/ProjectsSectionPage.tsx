import ProjectCard from "./ProjectsCard";
import project from "../../../../assets/images/desktop-application-development.jpg"

export default function ProjectsSectionPage() {
  return (
    <div className="flex flex-wrap">
        <ProjectCard>
            <ProjectCard.Image>
                <img src={project} alt="" />
            </ProjectCard.Image>
            <ProjectCard.Content>
                <div className="flex flex-col gap-10 justify-center items-center">
                    <div>

               <button className="bg-white text-gray-800 border-4 border-blue-800 rounded-xl p-5 px-10">
                Repo
               </button>
               <button className="bg-white text-gray-800 border-4 border-blue-800 rounded-xl p-5 px-10">
                Live
               </button>
               <button className="bg-white text-gray-800 border-4 border-blue-800 rounded-xl p-5 px-10">
                More
               </button>
                    </div>
               <p className="w-1/2 text-white text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, nobis nihil consequuntur maiores aliquid error unde voluptates maxime consequatur molestias commodi rem debitis sapiente veritatis sit minima modi, cum fugit!</p>
                </div>
            </ProjectCard.Content>
        </ProjectCard>
    </div>
  )
}
