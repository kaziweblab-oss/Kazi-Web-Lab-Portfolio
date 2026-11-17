import React from "react";

import KTHImage from "../../../assets/KTH-portfolio-image.png";

export const AboutHero = () => {
  return (
    <div className="flex flex-col justify-between items-center gap-15 ">
      <div className="flex flex-col gap-5 justify-center items-center ">
        <h2 className="text-4xl text center relative inline-block font-bold ">
          About Me{" "}
          <span className="absolute left-1/2 -translate-x-1/2 -bottom-0.5 w-70 h-[0.15rem] bg-[linear-gradient(90deg,transparent,rgb(100,118,255),transparent)]  " />
        </h2>
        <h4 className="text-lg text-[rgb(108,161,23)] font-bold text-center ">
          Exploring Technology. Building Ideas. Creating Impact.
        </h4>
        <div className="text-lg flex flex-col gap-5 " >
          <p>
            Hello! I'm a Web Developer passionate about building modern,
            interactive, and user-friendly digital experiences.
          </p>
          <p>
            I enjoy exploring new technologies, solving problems, and turning
            creative ideas into practical solutions. My journey in web
            development is driven by curiosity, continuous learning, and a
            passion for creating things that make a difference.
          </p>
        </div>
      </div>
      <div>
        <img src={KTHImage} alt="KTH Image" />
      </div>
    </div>
  );
};
