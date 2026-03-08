import { SkillsContentSection } from "./sections/SkillsContentSection";
import { SkillsHeaderSection } from "./sections/SkillsHeaderSection";

export const FrameScreen = (): JSX.Element => {
  return (
    <div className="flex flex-col items-start gap-[70px] px-[133px] py-[66px] bg-black">
      <SkillsHeaderSection />
      <SkillsContentSection />
    </div>
  );
};
