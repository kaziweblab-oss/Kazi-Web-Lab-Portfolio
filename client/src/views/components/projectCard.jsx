import { useNavigate } from "react-router-dom";

import projectThumb from "../../assets/project-1.png";
import { textSlice } from "../../utils/textSlice";

function ProjectCard({ project }) {
  const { _id, name, desc, liveUrl, usedTools } = project;

  const navigate = useNavigate();

  return (
    <div className=" bg-[#1e293b] border rounded-lg border-[rgb(100,118,255,1)] w-full ">
      <div className="group transition-all duration-300 ease-in-out relative w-full h-50 overflow-hidden rounded-t-lg cursor-pointer ">
        <img
          src={projectThumb}
          alt="Project Thumbnail"
          className=" w-full h-full group-hover:scale-105 transition-transform duration-300 rounded-t-lg"
        />
        <div
          className="absolute transition-all duration-300 ease-in-out top-0 flex w-full
                h-full opacity-0 group-hover:opacity-100 justify-center items-center
                bg-[rgba(100,118,255,0.8)] invisible group-hover:visible rounded-t-lg "
        >
          <a
            href={liveUrl}
            target="_blank"
            rel="noreferrer"
            aria-label={name}
            className="bg-white px-5 py-2.5 rounded-full text-sm font-bold
                    translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100
                    transition-all duration-300 delay-100 text-[#6a74ff] "
          >
            View Live
          </a>
        </div>
      </div>
      <div className="p-4 text-lg flex flex-col gap-5 ">
        <div className="flex flex-col gap-2 ">
          <div className="flex justify-between items-center gap-4 ">
            <h3 className="text-white font-bold text-2xl ">{name}</h3>
            <button
              onClick={() => {
                navigate(`/project/${_id}`);
              }}
              className="text-white text-sm p-2 border rounded-lg cursor-pointer font-semibold
                    transition-colors duration-300 bg-blue-600 hover:bg-blue-700 hover:text-blue-200 "
            >
              Project Details
            </button>
          </div>
          <p className="text-[rgb(204,214,246)] text-lg ">
            {textSlice(desc, 90)}
          </p>
        </div>
        <div className="flex gap-3 flex-wrap justify-between items-center ">
          {usedTools.map((tool, index) => {
            return (
              <span
                key={index}
                className="text-cyan-300 text-xs py-1 px-3 bg-cyan-950/50 border-cyan-500/50
                            border rounded-lg "
              >
                {tool.toUpperCase()}
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
