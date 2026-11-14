import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProjectsData } from "../../../store/slices/projectSlice";
import ProjectCard from "../projectCard";
import LoadingSpinner from "../../../utils/loadingSpinner";
import { useNavigate } from "react-router-dom";

function RecentProject() {
  const {
    data: projects,
    loading,
    error,
  } = useSelector((state) => state.projects);

  const navigate = useNavigate();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProjectsData());
  }, [dispatch]);
  return (
    <div className="flex flex-col gap-10 pb-10 text-2xl ">
      <div className="flex w-full justify-between ">
        <div className="w-full flex justify-center items-center ">
          <h2 className="relative inline-block text-white text-center font-bold ">
            My Recent Projects
            <span className="absolute bg-[linear-gradient(90deg,transparent,rgb(100,118,255),transparent)] w-70 h-[0.15rem] -translate-x-1/2 left-1/2 -bottom-1  " />
          </h2>
        </div>
        <button
          className="right-0 text-sm w-20 py-1 px-2 border-cyan-500/50 hover:border-cyan-400
          rounded-full text-cyan-400 hover:text-cyan-200 cursor-pointer  bg-cyan-950/40 border
          hover:bg-cyan-900/60 hover:scale-105 transition-all duration-300 "
          onClick={() => {
            navigate("/projects");
          }}
        >
          View All
        </button>
      </div>
      {loading && <LoadingSpinner />}
      {error && <p className="text-xl text-red-600 text-center ">{error}</p>}
      {projects?.status && projects?.data.length > 0 ? (
        <div className="grid grid-cols-[repeat(auto-fit,minmax(350px,1fr))] gap-6 ">
          {projects.data.map((project) => {
            return <ProjectCard project={project} key={project._id} />;
          })}
        </div>
      ) : (
        <p className="text-center text-red-200 text-xl">
          No Recent Project Founds.
        </p>
      )}
    </div>
  );
}

export default RecentProject;
