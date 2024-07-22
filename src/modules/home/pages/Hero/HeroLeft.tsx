import BoxReveal from "../../../../components/magicui/box-reveal";
import StyledButton from "../../components/common/StyledButton";


export default function HeroLeft() {

  return ( 
    <div className="min-h-full w-full max-w-[35rem] items-stretch justify-center  md:text-start  overflow-hidden pt-8 flex flex-col md:p-5 gap-10 py-10">
      <BoxReveal boxColor={"#5046e6"} duration={0.5} width="100%" >
        <p className="text-[3rem] font-semibold w-full text-center md:text-start">
          I'm a Developer<span className="text-[#5046e6]">.</span>
        </p>
      </BoxReveal>

      <BoxReveal boxColor={"#5046e6"} duration={0.5} width="100%">
        <h2 className="mt-[.5rem] text-[1.3rem] w-full text-center md:text-start">
          I'm Ronald and I'm a fullstack {" "}
          <span className="text-[#5046e6]">Web Developer</span>
        </h2>
      </BoxReveal>

      <BoxReveal boxColor={"#5046e6"} duration={0.5} width="100%">
        <div className="mt-[1.5rem] w-full text-center md:text-start text-[1.2rem]">
          <p>
I'm a full-stack web developer with a passion for AI, data, networking, and cybersecurity. I am autonomous, curious, and always eager to explore new technologies and challenges.
          </p>
        </div>
      </BoxReveal>

      <div className="flex justify-center md:justify-start">

      <BoxReveal boxColor={"#5046e6"} duration={0.5} >
      <StyledButton text="Contact me" href="#contacts"/>
      </BoxReveal>    
      </div>
    </div>
  );
}
