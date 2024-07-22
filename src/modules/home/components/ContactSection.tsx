import ContactPage from "../pages/Contact/ContactPage";


export default function ContactSection() {
  return (
    <div className="p-2 max-w-[80rem] lg:w-3/4 flex justify-center flex-col">
       <h3 className="text-4xl font-semibold text-blue-600 border-b-2 border-blue-600 pb-2 text-center">
        get in touch
      </h3>
      <ContactPage />
    </div>
  );
}
