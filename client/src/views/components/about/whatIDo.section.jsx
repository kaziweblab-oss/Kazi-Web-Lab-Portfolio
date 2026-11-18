import { SectionTitle } from "../sectionTitle";

import {
  FaArrowRight,
  FaCode,
  FaLaptopCode,
  FaPencilRuler,
  FaServer,
} from "react-icons/fa";

export const WhatIDo = () => {
  const mySkills = [
    {
      icon: FaLaptopCode,
      iColor: "text-sky-400",
      title: "Frontend Development",
      tColor: "text-sky-300",
      desc: `Building responsive, modern, and interactive user interfaces with a focus on usability and performance.`,
    },
    {
      icon: FaServer,
      iColor: "text-violet-400",
      title: "Backend Development",
      tColor: "text-violet-300",
      desc: `Exploring server-side development, APIs, databases, and application architecture.`,
    },
    {
      icon: FaPencilRuler,
      iColor: "text-pink-400",
      title: "UI & UX Design",
      tColor: "text-pink-300",
      desc: `Creating clean, intuitive, and visually engaging digital experiences.`,
    },
    {
      icon: FaCode,
      iColor: "text-emerald-400",
      title: "Software Development",
      tColor: "text-emerald-300",
      desc: `Building practical software solutions and exploring ways to turn ideas into useful applications.`,
    },
  ];
  return (
    <div className="flex flex-col gap-10 text-lg md:text-xl lg:text-2xl ">
      <SectionTitle title="What I Do" />
      <div className="flex flex-col gap-5 ">
        {mySkills.map((skill, index) => {
          const Icon = skill.icon;
          return (
            <div className="flex flex-col gap-2 " key={index}>
              <div className={`flex gap-2 items-center ${skill.iColor} `}>
                <Icon className={`text-xl md:text-2xl lg:text-3xl`} /> <FaArrowRight />
                <h3 className={`font-bold ${skill.tColor}`}>
                  {skill.title} :{" "}
                </h3>
              </div>
              <p className="text-slate-300">{skill.desc}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
