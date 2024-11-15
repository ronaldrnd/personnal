import ContactPage from "../pages/Contact/ContactPage";

export default function ContactSection() {
 

 

  return (
    <div className="p-2 max-w-[80rem] lg:w-3/4 flex flex-col justify-center items-center">
      <h3 className="text-4xl font-semibold text-blue-600 border-b-2 border-blue-600 pb-2 text-center">
        Get in Touch
      </h3>

      {/* CAPTCHA */}
      <div className="my-6">
        
      </div>

     
        <ContactPage />
    
    </div>
  );
}
