import { FaGithub, FaLinkedin } from "react-icons/fa";
import Meteors from "../../../../components/magicui/lmeteors";
import image from "../../../../assets/images/20240318_075247_HDR.jpg";
import AboutSectionLeft from "./AboutSectionLeft";
import StyledButton from "../../components/common/StyledButton";
import resume from "../../../../assets/pdf/CV-Ronald-Randrianomendray.en.pdf";

export default function AboutSectionPage() {
  return (
    <div className="flex flex-col lg:flex-row justify-center gap-10 px-4 py-6 md:px-10 md:py-12">
      {/* Left Section with Image */}
      <AboutSectionLeft image={image} />

      {/* Right Section with Content */}
      <div className="w-full flex justify-center items-center">
        <div className="relative flex flex-col gap-10 h-full w-full items-center justify-center overflow-hidden rounded-lg border bg-background p-5 md:shadow-xl">
          <Meteors number={30} />

          {/* Introduction Text */}
          <p className="z-10 text-center text-xl tracking-wide font-medium text-gray-800 md:text-2xl">
            I am Ronald from Madagascar. I started my journey as a full-stack
            developer during an internship at Mada e-tech in April 2024. Initially
            focusing on front-end skills, I soon expanded to back-end development.
            Now, I am honing my web development expertise while exploring my
            interests in networking, security, and AI. I am passionate about
            technology and love what I do. Let's create something amazing together—reach out if you're interested!
          </p>

          {/* Resume Button */}
          <div>
            <StyledButton text="Download my Resume" href={resume} download="resume.pdf" />
          </div>

          {/* Social Media Icons */}
          <div className="flex justify-center gap-8 mt-8">
            <a
              href="https://github.com/your-profile"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit my GitHub"
              className="social-icon"
            >
              <FaGithub className="w-12 h-12 text-gray-800 hover:text-blue-500 transition-all duration-300" />
            </a>

            <a
              href="https://www.linkedin.com/in/your-profile"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit my LinkedIn"
              className="social-icon"
            >
              <FaLinkedin className="w-12 h-12 text-gray-800 hover:text-blue-500 transition-all duration-300" />
            </a>

            {/* <a
              href="mailto:your-email@example.com"
              aria-label="Contact me via Mail"
              className="social-icon"
            >
              <FaMailchimp className="w-12 h-12 text-gray-800 hover:text-blue-500 transition-all duration-300" />
            </a> */}
          </div>
        </div>
      </div>
    </div>
  );
}
