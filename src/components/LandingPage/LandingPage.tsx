import { cn } from "../../lib/utils";
import GridPattern from "../magicui/animated-grid-pattern";
import { LandingLeft } from "./LandingLeft/LandingLeft";
import { LandingRight } from "./LandingRight/LandingRight";

export default function LandingPage() {
  return (
    <div className="flex justify-center gap-20 px-10 min-h-[32rem] flex-col lg:flex-row">
      <div>
        <LandingLeft />
      </div>
      <div className="flex justify-end">
        <LandingRight />
      </div>
      <GridPattern
        numSquares={80}
        maxOpacity={0.8}
        duration={2}
        repeatDelay={1}
        className={cn(
          "[mask-image:radial-gradient(300px_circle_at_center,white,transparent)]",
          "inset-x-0 inset-y-[-50%] h-[200%] skew-y-12",
        )}
      />
    </div>
  );
}
