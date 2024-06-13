import AboutSectionPage from "../pages/About/AboutSectionPage";
import SectionTitle from "./common/SectionTitle";


export default function AboutSection() {
  return (
    <div className="p-2 max-w-[80rem] lg:w-3/4 flex justify-center flex-col">
        <SectionTitle title="More about Me ?"/>
        <AboutSectionPage />
    </div>
  )
}
