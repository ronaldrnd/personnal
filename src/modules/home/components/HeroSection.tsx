import HeroLeft from "../pages/Hero/HeroLeft";
import HeroRight from "../pages/Hero/HeroRight";


export default function HeroSection() {
  return (
    <div className="p-2 max-w-[80rem] lg:w-3/4">
        <div className="flex flex-col items-center justify-center lg:flex-row gap-5">
            <HeroLeft />
            <HeroRight />
        </div>
    </div>
  )
}
