import ContactPage from "../pages/Contact/ContactPage";
import SectionTitle from "./common/SectionTitle";

export default function ContactSection() {
  return (
    <div className="p-2 max-w-[80rem] lg:w-3/4 flex justify-center flex-col">
      <SectionTitle title="Get in touch" />
      <ContactPage />
    </div>
  );
}
