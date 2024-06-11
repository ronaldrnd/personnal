import HeroLeft from "../pages/Hero/HeroLeft";
import HeroRight from "../pages/Hero/HeroRight";


export default function HeroSection() {
  return (
    <div className="">
        <div className="flex gap-5">
            <HeroLeft />
            <HeroRight />
        </div>
    </div>
  )
}
