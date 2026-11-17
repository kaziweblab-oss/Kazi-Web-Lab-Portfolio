import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProjectsData } from "../../../store/slices/projectSlice";
import ProjectCard from "../projectCard";
import LoadingSpinner from "../../../utils/loadingSpinner";
import { useNavigate } from "react-router-dom";
import { SectionTitle } from "../sectionTitle";

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
          <SectionTitle title="My Recent Projects" />
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
      {!error && !projects.status && (
        <p className="text-center text-red-200 ">Something Went Wrong.</p>
      )}
      {projects?.status && projects?.data && projects.data.length > 0 && (
        <div className="grid grid-cols-[repeat(auto-fit,minmax(350px,1fr))] gap-6 ">
          {projects.data.map((project) => {
            return <ProjectCard project={project} key={project._id} />;
          })}
        </div>
      )}
      {projects.status && projects?.data && projects.data.length === 0 && (
        <p className="text-center text-red-200 text-xl">
          No Recent Project Founds.
        </p>
      )}
    </div>
  );
}

export default RecentProject;
