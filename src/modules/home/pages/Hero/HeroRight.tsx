
import { NeonGradientCard } from "../../../../components/magicui/neon-gradient-card";
import image from "../../../../assets/images/received_1652064728936012-removebg-preview.png"

export default function HeroRight() {
  return (
    <div className="p-5 w-full h-full">

    <NeonGradientCard className="w-full items-center justify-center text-center  h-[35rem]">
      <span className="pointer-events-none z-10 whitespace-pre-wrap bg-gradient-to-br from-[#ff2975] from-35% to-[#00FFF1] bg-clip-text text-center text-2xl font-bold leading-none tracking-tighter text-transparent dark:drop-shadow-[0_5px_5px_rgba(0,0,0,0.8)]">
        Curiosity is one of the great secrets of existence.
      </span>
      <div className="absolute bottom-0">
      <img src={image} alt=""  />
      </div>
    </NeonGradientCard>
    </div>
  );
}
