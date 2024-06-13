import AboutSection from "../../components/AboutSection";
import ContactSection from "../../components/ContactSection";
import HeroSection from "../../components/HeroSection";
import ProjectsSection from "../../components/ProjectsSection";
import ServicesSection from "../../components/ServicesSection";

export default function HomePage() {
  return (
    <div className="flex flex-col items-center justify-between min-h-screen gap-10 md:p-2 md:gap-20 bg-gray-200">
      <div className="flex justify-center gap-20 md:px-10 min-h-[32rem] flex-col lg:flex-row py-10 w-full">
        <HeroSection />
      </div>
      <div className="min-h-[32rem] flex flex-col  justify-center items-center p-5 gap-10 md:p-20 md:gap-20 w-full">
        <AboutSection />
      </div>
      <div className="min-h-[32rem] flex flex-col  justify-center items-center p-5 gap-10 md:p-20 md:gap-20 w-full">
        <ServicesSection />
      </div>
      <div className="min-h-[32rem] flex flex-col justify-center items-center p-5 gap-10 md:p-20 md:gap-20 w-full">
        <ProjectsSection />
      </div>
      <div className="min-h-[32rem] flex flex-col justify-center items-center p-5 gap-10 md:p-20 md:gap-20 w-full">
        <ContactSection />
      </div>
    </div>
  );
}
