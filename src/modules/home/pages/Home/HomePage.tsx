import Menu from "../../../menu/components/Menu";
import AboutSection from "../../components/AboutSection";
import ContactSection from "../../components/ContactSection";
import HeroSection from "../../components/HeroSection";
import ProjectsSection from "../../components/ProjectsSection";
import SkillsSection from "../../components/SkillsSection";



export default function HomePage() {
  return (
    <div className="flex flex-col items-center justify-between min-h-screen gap-10 md:p-2 md:gap-20 bg-gray-50">
      <Menu />
      <div className="flex justify-center gap-20 md:px-10 min-h-[32rem] flex-col lg:flex-row py-10 w-full" id="hero">
        <HeroSection />
      </div>
      <div className="min-h-[32rem] flex flex-col  justify-center items-center p-5 gap-10 md:p-20 md:gap-20 w-full" id="about">
        <AboutSection />
      </div>
      <div className="min-h-[32rem] flex flex-col justify-center items-center p-5 gap-10 md:p-20 md:gap-20 w-full" id="projects">
        <ProjectsSection />
      </div>
      <div className="min-h-[32rem] flex flex-col justify-center items-center p-5 gap-10 md:p-20 md:gap-20 w-full" id="skills">
        <SkillsSection />
      </div>
      <div className="min-h-[32rem] flex flex-col justify-center items-center p-5 gap-10 md:p-20 md:gap-20 w-full" id="contacts">
        <ContactSection />
      </div>
    </div>
  );
}
