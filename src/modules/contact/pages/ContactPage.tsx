import ContactButtons from "../components/ContactButtons";
import useContactInfo from "../hooks/useContactInfo";


export default function ContactPage() {
  const contactInfo = useContactInfo();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white text-black p-10">
      <div className="max-w-4xl w-full bg-white text-black rounded-lg shadow-lg p-8">
        <h2 className="text-3xl font-bold mb-4">Contact Me</h2>
        <p className="text-lg mb-4">Feel free to reach out to me through any of the platforms below:</p>
        <ContactButtons contact={contactInfo} />
      </div>
    </div>
  );
}
