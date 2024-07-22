import { IconCloudDemo } from "./IconCloud";
import SkillsSummary from "./SkillsSummary";

function SkillsSectionPage() {
  return (
    <div className="">
      <div className="w-full flex gap-5">
        <div className="w-full">
          <SkillsSummary />
        </div>
        <div className="w-full">
          <IconCloudDemo />
        </div>
      </div>
    </div>
  );
}

export default SkillsSectionPage;
