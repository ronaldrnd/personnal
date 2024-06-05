import { FaGithub, FaLinkedin, FaMailchimp } from "react-icons/fa6";
import image from "../../assets/images/20240318_075247_HDR.jpg";
import Meteors from "../magicui/lmeteors";
import ShimmerButton from "../magicui/shimmer-button";

function About() {
  return (
    <div className="min-h-screen flex flex-col gap-20 justify-center items-center px-32 py-10">
      <div>
        <h1 className="text-5xl font-bold">WHAT ABOUT ME ?</h1>
      </div>
      <div className="flex flex-col lg:flex-row justify-center gap-10">
        <div className="flex justify-center">
          <div className="w-96 rounded-md bg-black">
            <img
              src={image}
              alt=""
              className="w-full h-full object-cover rounded-md"
            />
          </div>
        </div>
        <div className="w-full lg:w-1/2  flex justify-center items-center">
          <div className="relative flex flex-col gap-20 h-full w-full items-center justify-center overflow-hidden rounded-lg border bg-background p-20 md:shadow-xl bg-gray-800">
            <Meteors number={30} />
            <p className="z-10 whitespace-pre-wrap text-center text-xl tracking-wide font-medium  text-white">
              I am Ronald from Madagascar. I started my journey as a full-stack
              developer during an internship at Mada e-tech in April 2024.
              Initially focusing on front-end skills, I soon expanded to
              back-end development. Now, I am honing my web development
              expertise while exploring my interests in networking, security,
              and AI. I am passionate about technology and love what I do. Let's
              create something amazing together—reach out if you're interested!
            </p>
          <div className="flex flex-col md:flex-row justify-center items-center gap-20 ">
            <div>
              <ShimmerButton className="shadow-2xl">
                <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
                  Download my resume
                </span>
              </ShimmerButton>
            </div>
            <div className="flex justify-center gap-10">
                <div className="border-2  p-4 rounded-full bg-white">
                    <FaGithub />
                </div>
                <div className="border-2  p-4 rounded-full bg-white">
                    <FaLinkedin />
                </div>
                <div className="border-2  p-4 rounded-full bg-white">
                    <FaMailchimp />
                </div>
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
