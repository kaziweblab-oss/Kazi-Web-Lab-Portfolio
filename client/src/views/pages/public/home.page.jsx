// import Home Page component Here
import GetInTouchSection from "../../components/getInTouch.section";
import { HomeHero } from "../../components/home/hero.section";
import RecentProject from "../../components/home/recentProject.section";
import HomeTechnologies from "../../components/home/technology.section";

export const HomePage = () => {
  return (
    <>
      <div className="flex flex-col gap-15 ">
        <HomeHero />
        <HomeTechnologies />
        <RecentProject />
        <GetInTouchSection />
      </div>
    </>
  );
};
