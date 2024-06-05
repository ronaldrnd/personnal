import { NeonGradientCard } from "../../magicui/neon-gradient-card";
import image from "../../../assets/images/2093e3ef15b839a7d7dbf81b245662a1-removebg-preview.png"

export function LandingRight() {
  return (
    <div>

    <NeonGradientCard className="max-w-sm items-center justify-center text-center h-[32rem] bg-red-100 relative">
      <span className="pointer-events-none z-10 whitespace-pre-wrap bg-gradient-to-br from-[#ff2975] from-35% to-[#00FFF1] bg-clip-text text-center text-7xl font-bold leading-none tracking-tighter text-transparent dark:drop-shadow-[0_5px_5px_rgba(0,0,0,0.8)]">
        Neon Gradient Card
      </span>
      <div className="absolute bottom-0">
      <img src={image} alt=""  />
      </div>
    </NeonGradientCard>
    </div>
  );
}
