// src/pages/About/AboutPage.tsx

import ContactButtons from "../components/ContactButtons";
import PersonalInfo from "../components/PersonnalInfo";
import usePersonalInfo from "../hooks/usePersonnalInfo";

export default function AboutPage() {
  const personalInfo = usePersonalInfo();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-blue-500 to-purple-500 text-white p-10">
      <div className="max-w-4xl w-full bg-white text-black rounded-lg shadow-lg p-8">
        <div className="flex flex-col lg:flex-row items-center">
          <img 
            src="" 
            alt="Profile" 
            className="w-32 h-32 rounded-full border-4 border-white shadow-lg mb-6 lg:mb-0 lg:mr-6"
          />
          <PersonalInfo personalInfo={personalInfo} />
        </div>
        <div className="mt-8">
          <h3 className="text-2xl font-bold mb-4">Contact Me</h3>
          <ContactButtons contact={personalInfo.contact} />
        </div>
        <div className="mt-8">
          <a href="/path/to/resume.pdf" download>
            <button className="bg-gradient-to-r from-purple-500 to-blue-500 text-white py-2 px-4 rounded-lg shadow-lg hover:from-blue-500 hover:to-purple-500 transition-all duration-300">
              Download my resume
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}
