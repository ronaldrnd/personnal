import BoxReveal from "../../../../components/magicui/box-reveal";
import ShimmerButton from "../../../../components/magicui/shimmer-button";


export default function HeroLeft() {
  return ( 
    <div className="min-h-full w-full max-w-[35rem] items-stretch justify-center  overflow-hidden pt-8 flex flex-col p-5 gap-10">
      <BoxReveal boxColor={"#5046e6"} duration={0.5}>
        <p className="text-[3.5rem] font-semibold">
          Developer<span className="text-[#5046e6]">.</span>
        </p>
      </BoxReveal>

      <BoxReveal boxColor={"#5046e6"} duration={0.5}>
        <h2 className="mt-[.5rem] text-[1rem]">
          I'm Ronald and I'm a fullstack {" "}
          <span className="text-[#5046e6]">Web Developer</span>
        </h2>
      </BoxReveal>

      <BoxReveal boxColor={"#5046e6"} duration={0.5}>
        <div className="mt-[1.5rem]">
          <p>
I'm a full-stack web developer with a passion for AI, data, networking, and cybersecurity. I am autonomous, curious, and always eager to explore new technologies and challenges.
          </p>
        </div>
      </BoxReveal>

      <BoxReveal boxColor={"#5046e6"} duration={0.5}>
      <ShimmerButton className="shadow-2xl">
        <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
          Contact Me
        </span>
      </ShimmerButton>
      </BoxReveal>
    </div>
  );
}
