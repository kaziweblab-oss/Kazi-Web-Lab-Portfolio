import KTHImage from "../../../assets/KTH-portfolio-image.png";
import { useNavigate } from "react-router-dom";
import { Typewriter } from "../typeWriter";

export const HomeHero = () => {
  const skills = [
    "Welcome to my Portfolio!",
    "I am a Full-stack Developer",
    "I build React Apps",
    "I build Express Server",
  ];

  const name = "Tasin";

  const navigate = useNavigate();
  return (
    <div className="flex flex-col justify-around items-center w-full gap-10 md:flex-row ">
      <div className="w-full md:w-[80%] flex flex-col justify-center items-center gap-3 text-white ">
        <div className="flex gap-1 items-baseline tracking-wide ">
          <h2 className="text-5xl font-bold ">Hi I'm</h2>
          <p className="text-2xl text-[#6a74ff] text-shadow-[0px_0px_15px_rgb(100,118,255,0.6)] font-bold  ">
            {name}
          </p>
        </div>

        <Typewriter texts={skills} />

        <p className="text-[#8892b0] text-lg text-center lg:text-xl xl:text-2xl ">
          Crafting clean, responsive, and high-performance websites that turn
          your ideas into digital reality. Let’s build something extraordinary.
        </p>

        <div className="flex justify-around gap-10 mt-20  ">
          <button
            className="bg-[#6a74ff] py-3 px-5 rounded-lg text-xl font-bold cursor-pointer
            transition-all duration-300 hover:-translate-y-1 hover:shadow-[0px_15px_20px_rgb(100,118,255,0.4)] "
            onClick={() => navigate("/hire-me")}
          >
            Hire Me
          </button>
          <button
            className="py-2 px-4 rounded-lg cursor-pointer border-4 border-double 
          border-[#6a74ff] text-[#6a74ff] text-lg transition-all duration-300
           hover:bg-[rgb(100,118,255,0.1)] hover:-translate-y-1 "
            onClick={() => navigate("/projects")}
          >
            View Work
          </button>
        </div>
      </div>

      <div
        onClick={() => navigate("/about-us")}
        className="group flex w-full cursor-pointer transition-all duration-350
         hover:-translate-y-3 md:w-[20%] "
      >
        <img
          src={KTHImage}
          alt="Kazi Tasin Hossen Image"
          className=" rounded-3xl w-full group-hover:shadow-[0px_20px_40px_rgb(100,118,258,0.25)]  "
        />
      </div>
    </div>
  );
};
