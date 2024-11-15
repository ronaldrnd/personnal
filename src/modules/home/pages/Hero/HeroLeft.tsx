import BoxReveal from "../../../../components/magicui/box-reveal";
import StyledButton from "../../components/common/StyledButton";

export default function HeroLeft() {
  return (
    <div className="min-h-screen w-full max-w-[40rem] flex flex-col justify-center gap-8 px-6 md:gap-12 md:py-10 text-center md:text-left">
      {/* Section Title */}
      <BoxReveal boxColor="#5046e6" duration={0.7} width="100%">
        <p className="text-[3.5rem] font-extrabold text-gray-800">
          Hello, I'm a Developer<span className="text-[#5046e6]">.</span>
        </p>
      </BoxReveal>

      {/* Subtitle */}
      <BoxReveal boxColor="#5046e6" duration={0.7} width="100%">
        <h2 className="text-[1.5rem] text-gray-600 font-medium leading-relaxed">
          My name is Ronald, a{" "}
          <span className="text-[#5046e6] font-semibold">
            Full-Stack Web Developer
          </span>{" "}
          driven by a passion for crafting elegant, scalable, and impactful
          solutions.
        </h2>
      </BoxReveal>

      {/* Description */}
      <BoxReveal boxColor="#5046e6" duration={0.7} width="100%">
        <div className="mt-4 text-gray-700 leading-7">
          <p>
            I specialize in building modern web applications and integrating
            cutting-edge technologies. My expertise spans{" "}
            <strong>front-end design</strong>, <strong>back-end logic</strong>,
            and <strong>secure, efficient networking</strong>.
          </p>
          <p className="mt-3">
            I'm passionate about <span className="text-[#5046e6]">AI</span>,{" "}
            <span className="text-[#5046e6]">data-driven solutions</span>, and{" "}
            <span className="text-[#5046e6]">cybersecurity</span>. I thrive in
            environments where I can grow and innovate.
          </p>
        </div>
      </BoxReveal>

      {/* Button */}
      <div className="mt-6 flex justify-center md:justify-start">
        <BoxReveal boxColor="#5046e6" duration={0.7}>
          <StyledButton text="Contact Me" href="#contacts" />
        </BoxReveal>
      </div>
    </div>
  );
}
