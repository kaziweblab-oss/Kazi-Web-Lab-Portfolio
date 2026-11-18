import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getContactsData } from "../../store/slices/contactSlices";

import LoadingSpinner from "../../utils/loadingSpinner";
import { SectionTitle } from "../components/sectionTitle";
import { Icon } from "../components/icon";

export const Footer = () => {
  const navigate = useNavigate();

  const scrollX = (top) => {
    window.scrollTo({
      top,
      behavior: "smooth",
    });
  };

  const footerSections = [
    {
      title: "Quick Links",
      links: [
        {
          name: "Back Home",
          path: "/home",
        },
        {
          name: "About Us",
          path: "/about-us",
        },
        {
          name: "Projects",
          path: "/projects",
        },
        {
          name: "Contact",
          path: "/contact",
        },
      ],
    },
  ];

  const dispatch = useDispatch();
  const {
    data: contacts,
    loading,
    error,
  } = useSelector((state) => state.contacts);

  useEffect(() => {
    dispatch(getContactsData());
  }, [dispatch]);

  return (
    <>
      <footer
        className="flex flex-col items-center justify-center
        gap-4 bg-[rgba(15,23,42)] text-white p-4 shadow-[0px,5px,10px,rgba(132,116,240,0.4)] "
      >
        {footerSections.map((section, index) => {
          return (
            <ul
              key={index}
              className="flex flex-col justify-center items-center gap-5 p-4  "
            >
              <SectionTitle title={section.title} />
              {section.links.map((link, index) => {
                return (
                  <li
                    key={index}
                    onClick={() => {
                      navigate(link.path);
                      scrollX(0);
                    }}
                  >
                    <span className="group relative inline-block text-lg cursor-pointer hover:text-[#6a74ff] ">
                      {link.name}
                      <span
                        className="absolute left-0 bottom-0 w-0 h-[0.1rem] rounded-full bg-[#6a74ff] 
                          transition-all duration-300 group-hover:w-full "
                      />
                    </span>
                  </li>
                );
              })}
            </ul>
          );
        })}
        <div className="flex w-full justify-around text-2xl p-2  ">
          {loading && <LoadingSpinner />}
          {error && (
            <p className="text-xl text-red-500 text-center ">{error}</p>
          )}
          {contacts.status && contacts?.data?.length === 0 && (
            <p className="text-center text-red-200 text-lg ">
              No contact Found.
            </p>
          )}
          {!error && !contacts.status && <p>Something Went's Wrong.</p>}
          {contacts?.status &&
            contacts?.data?.[0]?.contacts &&
            Object.entries(contacts.data[0].contacts).map(([name, path]) => {
              if (["phone", "whatsApp", "messenger"].includes(name)) {
                return <Icon key={name} name={name} path={path} />;
              }
            })}

          {contacts?.status && contacts?.data?.socials?.length === 0 && (
            <p className="text-center text-lg text-red-200 ">
              No Socials data found.
            </p>
          )}
          {contacts?.status &&
            contacts?.data?.[0]?.socials &&
            Object.entries(contacts.data[0].socials).map(([name, path]) => {
              if (["facebook", "youtube", "github"].includes(name)) {
                return <Icon key={name} name={name} path={path} />;
              }
            })}
        </div>
        <span className="text-center ">
          &copy; 2026 Kazi Tasin Hossen. All rights reserved.
        </span>
      </footer>
    </>
  );
};
