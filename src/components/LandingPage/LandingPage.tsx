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
    </div>
  );
}
