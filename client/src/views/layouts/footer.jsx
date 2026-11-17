import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getContactsData } from "../../store/slices/contactSlices";

import {
  FaFacebook,
  FaFacebookMessenger,
  FaGithub,
  FaPhoneAlt,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa";
import LoadingSpinner from "../../utils/loadingSpinner";

export const Footer = () => {
  const iconsClassName =
    "transition-all duration-300 ease-in-out text-4xl text-[rgb(100,118,255)] hover:text-gray-300 hover:scale-120   ";

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
              className="flex flex-col justify-center items-center gap-4 p-4  "
            >
              <h3 className="relative text-2xl font-bold inline-block ">
                {section.title}

                <span
                  className="absolute left-1/2 -translate-x-1/2 -bottom-1 h-[0.15rem] 
                  w-50 bg-[linear-gradient(90deg,transparent,rgb(100,118,255),transparent)] "
                />
              </h3>
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
              if (name.toLowerCase() === "phone") {
                return (
                  <a
                    key={name}
                    href={`tel:${path}`}
                    target="_blank"
                    aria-label="phone"
                    rel="noreferrer"
                    className={iconsClassName}
                  >
                    <FaPhoneAlt />
                  </a>
                );
              }

              if (name.toLowerCase() === "whatsapp") {
                return (
                  <a
                    key={name}
                    href={`https://wa.me/${path}`}
                    target="_blank"
                    aria-label="whatsApp"
                    rel="noreferrer"
                    className={iconsClassName}
                  >
                    <FaWhatsapp />
                  </a>
                );
              }
              if (name.toLowerCase() === "messenger") {
                return (
                  <a
                    key={name}
                    href={path}
                    target="_blank"
                    aria-label="messenger"
                    rel="noreferrer"
                    className={iconsClassName}
                  >
                    <FaFacebookMessenger />
                  </a>
                );
              }
              return null;
            })}

          {contacts?.status && contacts?.data?.socials?.length === 0 && (
            <p className="text-center text-lg text-red-200 ">
              No Socials data found.
            </p>
          )}
          {contacts?.status &&
            contacts?.data?.[0]?.socials &&
            Object.entries(contacts.data[0].socials).map(([name, path]) => {
              if (name.toLowerCase() === "facebook") {
                return (
                  <a
                    key={name}
                    href={path}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="facebook"
                    className={iconsClassName}
                  >
                    <FaFacebook />
                  </a>
                );
              }
              if (name.toLowerCase() === "youtube") {
                return (
                  <a
                    key={name}
                    href={path}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="youtube"
                    className={iconsClassName}
                  >
                    <FaYoutube />
                  </a>
                );
              }
              if (name.toLowerCase() === "github") {
                return (
                  <a
                    key={name}
                    href={path}
                    aria-label="github"
                    rel="noreferrer"
                    target="_blank"
                    className={iconsClassName}
                  >
                    <FaGithub />
                  </a>
                );
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
