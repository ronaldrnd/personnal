import { FaGithub, FaLinkedin, FaMailchimp } from "react-icons/fa";
import ShimmerButton from "../../../../components/magicui/shimmer-button";
import Meteors from "../../../../components/magicui/lmeteors";
import image from "../../../../assets/images/20240318_075247_HDR.jpg";
import AboutSectionLeft from "./AboutSectionLeft";

export default function AboutSectionPage() {
  return (
    <div className="flex flex-col lg:flex-row justify-center gap-10">
      <AboutSectionLeft image={image} />
      <div className="w-full  flex justify-center items-center ">
        <div className="relative flex flex-col gap-10 h-full w-full items-center justify-center overflow-hidden rounded-lg border bg-background p-5 md:shadow-xl">
          <Meteors number={30} />
          <p className="z-10 whitespace-pre-wrap text-center text-xl tracking-wide font-medium  text-black">
            I am Ronald from Madagascar. I started my journey as a full-stack
            developer during an internship at Mada e-tech in April 2024.
            Initially focusing on front-end skills, I soon expanded to back-end
            development. Now, I am honing my web development expertise while
            exploring my interests in networking, security, and AI. I am
            passionate about technology and love what I do. Let's create
            something amazing together—reach out if you're interested!
          </p>

          <div>
            <ShimmerButton className="shadow-2xl">
              <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
                Download my resume
              </span>
            </ShimmerButton>
          </div>
          <div className="flex justify-center gap-10">
            <div className="border-2 rounded-xl">
              <FaGithub className="w-10 h-10"/>
            </div>
            <div className="border-2 rounded-xl">
              <FaLinkedin className="w-10 h-10"/>
            </div>
            <div className="border-2 rounded-xl">
              <FaMailchimp className="w-10 h-10"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
