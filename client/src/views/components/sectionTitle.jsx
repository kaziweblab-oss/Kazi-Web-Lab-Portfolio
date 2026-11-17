import React from "react";

export const SectionTitle = ({ title }) => {
  return (
    <div className="flex justify-center items-center ">
      <h2 className="relative text-2xl center font-bold inline-block font-bold ">
        {title}
        <span className="absolute left-1/2 -translate-x-1/2 -bottom-2 w-70 h-[0.15rem] bg-[linear-gradient(90deg,transparent,rgb(100,118,255),transparent)] " />
      </h2>
    </div>
  );
};
