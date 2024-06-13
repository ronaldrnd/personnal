import ServicesSectionPage from "../pages/Services/ServicesSectionPage";
import SectionTitle from "./common/SectionTitle";


export default function ServicesSection() {
  return (
    <div className="p-2 max-w-[80rem] lg:w-3/4 flex justify-center flex-col">
      <SectionTitle title="This is what I offer"/>
        <ServicesSectionPage />
    </div>
  )
}
