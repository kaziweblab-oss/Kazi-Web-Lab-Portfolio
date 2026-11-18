import KTHImage from "../../../assets/KTH-portfolio-image.png";
import { SectionTitle } from "../sectionTitle";

export const AboutHero = () => {
  return (
    <div className="flex flex-col justify-between items-center gap-10 text-lg md:text-xl lg:text-2xl ">
      <SectionTitle title="About Me" />
      <div className="flex flex-col md:flex-row gap-10 " >
        <div className="flex flex-col gap-5 justify-center items-center md:w-[70%] ">
          <div className=" flex flex-col gap-5 ">
            <h4 className=" text-[rgb(108,161,23)] font-bold text-center ">
              Exploring Technology. Building Ideas. Creating Impact.
            </h4>
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
        <div className="w-full flex justify-center items-center transition-all duration-300 hover:-translate-y-1 cursor-pointer group md:w-[30%] ">
          <img
            src={KTHImage}
            alt="KTH Image"
            className="rounded-xl w-[80%] border border-[rgb(100,118,255,0.1)] group-hover:shadow-[0px_20px_40px_rgb(100,118,255,0.25)] "
          />
        </div>
      </div>
    </div>
  );
};
