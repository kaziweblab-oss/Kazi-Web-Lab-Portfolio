import React from "react";
import { CiSearch } from "react-icons/ci";

export const SearchBar = () => {
  return (
    <section className="flex flex-col justify-center items-center gap-5">
      <p className="text-red-200 ">Search Bar is now not setup.</p>
      <div className="flex justify-center items-center w-full ">
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Search a Project"
          className="bg-[#1e293b] p-2 rounded-lg w-full focus:outline-none border border-[rgb(100,118,255,0.1)] focus:border-[rgb(100,118,255)] "
        />
        <span className="group cursor-pointer -translate-x-9 bg-[#6a74ff] rounded-r-lg h-10.5 w-10 flex justify-center items-center ">
          <CiSearch className="text-lg group-hover:scale-120 " />
        </span>
      </div>
    </section>
  );
};
