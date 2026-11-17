import { useNavigate } from "react-router-dom";

import { SectionTitle } from "../sectionTitle";

import { FaLightbulb, FaRocket, FaUser } from "react-icons/fa";

export const Connect = () => {
  const navigate = useNavigate();

  const connectPara = [
    {
      icon: FaLightbulb,
      iColor: "text-amber-400",
      desc: `Have an interesting idea or want to collaborate on a project?`,
    },
    {
      icon: FaUser,
      iColor: "text-purple-400",
      desc: `I'm always interested in connecting with people who enjoy technology, creativity, and building something meaningful.`,
    },
    {
      icon: FaRocket,
      iColor: "text-cyan-400",
      desc: `Let's create something amazing together.`,
      btn: "Contact",
      navigate: "/contact",
    },
  ];
  return (
    <section className="flex flex-col gap-10 ">
      <SectionTitle title="Let's Connect" />
      <div className="flex flex-col gap-5 ">
        {connectPara.map((para, index) => {
          const Icon = para.icon;
          return (
            <div className="flex items-center gap-5 ">
              <Icon className={`${para.iColor} text-2xl`} />
              <p className="flex justify-between items-center w-full ">
                {para.desc}
                {para.navigate && (
                  <button
                    className="p-2 border border-[rgb(100,118,255,0.1)] rounded-lg cursor-pointer transition-all duration-300 ease-in-out bg-[rgb(100,118,255,0.1)]
                      hover:border-[rgb(100,118,255)] hover:-translate-y-1 hover:shadow-[0px_5px_10px_rgb(100,118,255,0.4)] hover:text-cyan-500 "
                    onClick={() => {
                      navigate(para.navigate);
                    }}
                  >
                    {para.btn}
                  </button>
                )}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
};
