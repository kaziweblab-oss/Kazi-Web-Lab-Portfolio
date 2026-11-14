import React from "react";

import { IoLocation } from "react-icons/io5";
import { TbLocationFilled, TbMailFilled } from "react-icons/tb";
import { FiSend } from "react-icons/fi";

function GetInTouchSection() {
  const FORMSPREE_ENDPOINT = import.meta.env.VITE_FORMSPREE_ENDPOINT;
  return (
    <div className="flex flex-col gap-10 text-white ">
      <h2 className="text-2xl text-center text-white relative ">
        Get In Touch Section{" "}
        <span className="absolute left-1/2 -translate-x-1/2 -bottom-1 w-70  h-[0.15rem] bg-[linear-gradient(90deg,transparent,rgb(100,118,255),transparent)] " />
      </h2>
      <div className="flex flex-col gap-10 md:flex-row md:justify-between">
        <div className="flex flex-col gap-3 text-white gap-10 md:w-[50%] ">
          <button
            className="flex gap-10 w-full bg-[#1e293b] p-4 border border-[rgb(100,118,255,0.1)] rounded-lg transition-all duration-300 cursor-pointer
            hover:border-[rgb(100,118,255)] hover:translate-x-5 "
            onClick={() => {
              window.open("mailto:kaziweblab@gmail.com", "_blank");
            }}
          >
            <span className="flex justify-center items-center text-3xl text-[#6a74ff] ">
              <TbMailFilled />
            </span>
            <div>
              <h3 className="text-left  font-bold text-xl  ">Email Me</h3>
              <p className="text-[#8892b0] ">kaziweblab@gmail.com</p>
            </div>
          </button>
          <button
            className="flex gap-10 bg-[#1e293b] p-4 border border-[rgb(100,118,255,0.1)] rounded-lg transition-all duration-300 cursor-pointer
          hover:border-[rgb(100,118,255)] hover:translate-x-5 "
            onClick={() => {
              window.open(
                "https://maps.app.goo.gl/GcFgmX14Ee5KcJB87",
                "_blank",
              );
            }}
          >
            <span className="flex justify-center items-center text-3xl text-[#6a74ff] ">
              <IoLocation />
            </span>
            <div>
              <h3 className="text-left font-bold text-xl ">Location</h3>
              <p className="text-[#8892b0] ">Barguna,Bangladesh</p>
            </div>
          </button>
        </div>
        <form
          action={FORMSPREE_ENDPOINT}
          method="POST"
          className="flex flex-col gap-5 md:w-100 lg:w-[50%] "
        >
          <div className="flex justify-between gap-5  ">
            <label htmlFor="name" className="w-[50%]">
              <input
                type="text"
                name="name"
                placeholder="Enter Your Name"
                className="p-3 text-lg w-full md:w-full rounded-lg bg-[#1e293b] border border-[rgb(100,118,255,0.1)] 
                focus:outline-none focus:border-[#6a74ff] "
              />
            </label>
            <label htmlFor="email" className="w-[50%]">
              <input
                type="email"
                name="email"
                placeholder="Enter Your Mail"
                className="p-3 text-lg  w-full md:w-full bg-[#1e293b] border rounded-lg border-[rgb(100,118,255,0.1)]
                focus:outline-none focus:border-[#6a74ff] "
              />
            </label>
          </div>
          <label htmlFor="message">
            <textarea
              name="message"
              id="message"
              placeholder="Enter Your Message Here"
              className="w-full h-40 p-3 text-lg bg-[#1e293b] border rounded-lg border-[rgb(100,118,255,0.1)] resize-none  scrollbar-none
              focus:outline-none focus:border-[#6a74ff] "
            ></textarea>
          </label>

          <div className="flex flex-col gap-5 ">
            <button
              type="submit"
              className="group p-3 bg-red flex justify-center items-center gap-2 w-full bg-[#6a74ff] text-lg rounded-lg
              cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:bg-[#4a59d4] hover:shadow-[0_5px_20px_rgb(100,118,255,0.4)] "
            >
              Send Message
              <span className="text-white transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1">
                <FiSend className="group-hover:drop-shadow-[0_5px_10px_rgb(0,0,0,0.8)]" />
              </span>
            </button>
            <button
              type="reset"
              className="w-full text-lg bg-red-500 p-3 rounded-lg cursor-pointer transition-all duration-300 
            hover:bg-[#cb2129] hover:-translate-y-1 hover:shadow-[0_5px_10px_rgb(251,44,54,0.4)] "
            >
              Reset
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default GetInTouchSection;
