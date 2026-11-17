import { Connect } from "../components/about/connect.section";
import { AboutHero } from "../components/about/hero.section";
import { MyPhilosophy } from "../components/about/philosophy.section";
import { MyStory } from "../components/about/story.section";
import { WhatIDo } from "../components/about/whatIDo.section";

export const AboutPage = () => {
  return (
    <div className="flex flex-col gap-20 p-[3rem_0]">
      <AboutHero />
      <MyStory />
      <WhatIDo />
      <MyPhilosophy />
      <Connect />
    </div>
  );
};
