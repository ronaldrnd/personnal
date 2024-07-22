import SkillsSectionPage from "../pages/Skills/SkillsSection";



export default function SkillsSection() {
  return (
    <div className="p-2 max-w-[80rem] lg:w-3/4 flex justify-center flex-col gap-10">
         <h3 className="text-4xl font-semibold text-blue-600 border-b-2 border-blue-600 pb-2 text-center">
       Skills 
      </h3>
        <SkillsSectionPage />
    </div>
  )
}
