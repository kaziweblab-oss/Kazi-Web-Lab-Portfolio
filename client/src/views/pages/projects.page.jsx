import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { SearchBar } from "../components/project/searchBar";
import { useEffect } from "react";
import { getProjectsData } from "../../store/slices/projectSlice";
import LoadingSpinner from "../../utils/loadingSpinner";
import ProjectCard from "../components/projectCard";

export const ProjectPage = () => {
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
    <>
      <div className="text-white flex flex-col gap-5 ">
        <SearchBar />
        {loading && <LoadingSpinner />}
        {error && <p className="text-red-200 text-center ">{error}</p>}
        {!error && !projects?.status && (
          <p className="text-red-200 text-center ">Something Went Wrong.</p>
        )}
        {projects.status && projects?.data?.length === 0 && (
          <p className="text-red-200 text-center ">No Projects Found</p>
        )}
        {projects?.status && projects?.data && projects.data.length > 0 && (
          <div className="grid grid-cols-[repeat(auto-fit,minmax(350px,1fr))] gap-6 ">
            {projects.data.map((project) => {
              return <ProjectCard project={project} key={project._id} />;
            })}
          </div>
        )}
      </div>
    </>
  );
};
