import { SectionTitle } from "../sectionTitle";

import { FaBrain, FaBullseye, FaHeart, FaShieldAlt } from "react-icons/fa";

export const MyStory = () => {
  const myStory = [
    {
      icon: FaBrain,
      color: "text-yellow-400",
      desc: `My journey into technology started with curiosity about how websites
            and applications work behind the scenes.`,
    },
    {
      icon: FaHeart,
      color: "text-pink-400",
      desc: ` What began as an interest gradually developed into a passion for
            programming, design, and software development.`,
    },
    {
      icon: FaShieldAlt,
      color: "text-orange-400",
      desc: `I believe that becoming a great developer is not just about writing
          code. It's about understanding problems, thinking creatively, and
          continuously improving.`,
    },
    {
      icon: FaBullseye,
      color: "text-violet-400",
      desc: `I'm currently focused on strengthening my development skills and
          building real-world projects that challenge me to learn something new.`,
    },
  ];
  return (
    <div className="flex flex-col gap-5 ">
      <SectionTitle title="My Story" />
      <div className="flex flex-col gap-5 text-lg md:text-xl lg:text-2xl">
        {myStory.map((story, index) => {
          const Icon = story.icon;
          return (
            <div
              className={`flex items-center gap-5 `}
              key={index}
            >
              <Icon className={` text-2xl md:text-3xl lg:text-4xl mt-1 shrink-0 ${story.color} `} />
              <p className="text-slate-300">{story.desc}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
