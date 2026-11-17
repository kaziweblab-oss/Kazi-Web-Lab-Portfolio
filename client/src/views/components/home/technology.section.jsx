import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { FaGlobe } from "react-icons/fa";

//import dynamic icons
import * as FaIcons from "react-icons/fa";

import { getTechnologiesData } from "../../../store/slices/technologiesSlice";
import LoadingSpinner from "../../../utils/loadingSpinner";
import { SectionTitle } from "../sectionTitle";

function HomeTechnologies() {
  const dispatch = useDispatch();

  const getDynamicIcon = (name) => {
    if (!name) return <FaGlobe />;

    const cleanedName = name.toLowerCase().trim();

    const iconKey = `Fa${cleanedName.charAt(0).toUpperCase() + cleanedName.slice(1)}`;

    const colorMap = {
      html: "text-orange-500",
      html5: "text-orange-500",
      css: "text-blue-500",
      css3: "text-blue-500",
      js: "text-yellow-400",
      javascript: "text-yellow-400",
      react: "text-cyan-400",
      reactjs: "text-cyan-400",
      bootstrap: "text-purple-500",
      tailwind: "text-teal-400",
      node: "text-green-500",
      nodejs: "text-green-500",
      git: "text-red-500",
      github: "text-white",
    };

    const IconComponent = FaIcons[iconKey];

    const iconColor = colorMap[cleanedName] || "text-gray-300";
    return IconComponent ? (
      <div className="flex flex-col justify-center items-center gap-1 ">
        <IconComponent
          className={`${iconColor} transition-all duration-300 ease-in-out
          group-hover:scale-110 group-hover:-translate-y-1 `}
        />{" "}
        <p className="text-lg ">{name}</p>
      </div>
    ) : (
      <FaGlobe />
    );
  };

  const {
    data: technologies,
    loading,
    error,
  } = useSelector((state) => state.technologies);
  useEffect(() => {
    dispatch(getTechnologiesData());
  }, [dispatch]);

  /*-------------
   Start Ui Here 
   -------------*/
  return (
    <div className="text-white flex flex-col gap-5 justify-center items-center ">
      {/* <h2 className="relative text-2xl font-bold inline-block ">
        
        <span
          className="absolute w-70 h-[0.15rem] bg-[linear-gradient(90deg,transparent,rgb(100,118,255),transparent)]
          left-1/2 -translate-x-1/2 -bottom-1.5 "
        />
      </h2> */}
      <SectionTitle title="Technologies I used" />

      {loading && <LoadingSpinner />}
      {error && <p className="text-xl text-red-600 ">{error}</p>}
      {!error && !technologies.status && (
        <p className="text-center text-red-200 text-lg ">
          Somethings Went Wrong.
        </p>
      )}
      {technologies.status && technologies?.data?.length === 0 && (
        <p className="text-center text-red-200 text-xl">
          No technologies found.
        </p>
      )}
      {technologies?.status && technologies?.data?.[0]?.technologies && (
        <div className="flex flex-wrap items-center gap-10 justify-center py-10">
          {technologies?.data?.[0]?.technologies?.map((tech, index) => {
            return (
              <div
                key={index}
                className="group p-8 w-40 flex justify-center items-center 
                bg-[rgba(30,41,59,0.5)] border border-[rgb(100,118,255,0.1)]
                rounded-2xl cursor-pointer transition-all duration-300 ease-in-out
                hover:scale-110 hover:-translate-y-2 hover:border-[#6476ff] 
                hover:shadow-[0_10px_30px_rgb(100,118,255,0.2)] hover:bg-[rgb(100,118,255,0.05)] "
              >
                <span className="text-4xl md:text-5xl   ">
                  {getDynamicIcon(tech)}
                </span>
              </div>
            );
          })}
        </div>
      )}
      {technologies?.status &&
        technologies?.data?.[0] &&
        technologies.data[0].length === 0 && (
          <p className="text-red-200 text-xl text-lg">No Technologies found.</p>
        )}
    </div>
  );
}

export default HomeTechnologies;
