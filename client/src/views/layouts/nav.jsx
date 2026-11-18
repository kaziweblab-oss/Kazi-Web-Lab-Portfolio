import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/kwl-nexus-icon-dark.png";
import { useEffect, useRef, useState } from "react";

import { RxCross2, RxHamburgerMenu } from "react-icons/rx";

export const Nav = () => {
  const navigate = useNavigate();

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navMenus = {
    Home: "/home",
    Project: "/projects",
    About: "about-us",
    Contact: "/contact",
  };

  const menuRef = useRef(null);

  useEffect(() => {
    const handelScroll = (e) => {
      setIsMenuOpen(false);
    };

    const handelClick = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setIsMenuOpen(false);
      }
    };

    const handelResize = (e) => {
      setIsMenuOpen(false);
    };

    window.addEventListener("scroll", handelScroll);
    window.addEventListener("mousedown", handelClick);
    window.addEventListener("resize", handelResize);

    return () => {
      window.removeEventListener("scroll", handelScroll);
      window.removeEventListener("mousedown", handelClick);
      window.removeEventListener("resize", handelResize);
    };
  }, []);

  return (
    <>
      <nav
        ref={menuRef}
        className="relative w-full flex bg-[rgb(15,23,42)] h-25 justify-between items-center p-4
         shadow-[0px_5px_10px_rgba(132,116,240,0.5)] border-b-2 border-[rgb(100,118,255,0.1)] "
      >
        <div className="w-20 h-20 flex justify-around items-center left-0 md:ml-4 ">
          <Link to={"/"}>
            <img className="rounded-xl  " src={logo} alt="KWL Logo" />
          </Link>
        </div>

        <button
          onClick={() => {
            setIsMenuOpen(!isMenuOpen);
          }}
          className="text-white text-3xl cursor-pointer transition-transform
          duration-300 ease-in-out hover:scale-110 md:hidden "
        >
          <div
            className={`transition-transform duration-500 z-1000 ${isMenuOpen ? "rotate-90" : "rotate-0"} `}
          >
            {isMenuOpen ? (
              <span className="hover:text-red-600">
                {" "}
                <RxCross2 />
              </span>
            ) : (
              <span className="hover:text-[#6a74ff]">
                <RxHamburgerMenu />
              </span>
            )}
          </div>
        </button>
        {/*---------------
          Mobile Nav Menu
          ----------------*/}
        <ul
          className={`fixed right-0 top-[6.25rem] bottom-0 flex flex-col w-[min(55vw,25rem)] overflow-y-auto overflow-x-hidden
            p-5 gap-5 bg-[rgb(15,23,42,0.97)] shadow-[0px_5px_10px_rgb(132,116,240,0.4)]
            z-[999] transition-transform duration-500 ease-in-out 
            ${isMenuOpen ? "translate-x-0" : "translate-x-full"}`}
        >
          {Object.entries(navMenus).map(([menu, link]) => {
            return (
              <li
                className="group cursor-pointer"
                key={menu}
                onClick={() => {
                  navigate(link);
                  setIsMenuOpen(false);
                }}
              >
                <span className=" relative inline-block  text-lg  font-medium text-white cursor-pointer hover:text-[#6a74ff] ">
                  {menu}
                  <span
                    className="absolute left-0 bottom-0 w-0 h-[0.1rem] 
                  bg-[#6a74ff] transition-all duration-300 ease-in-out 
                    group-hover:w-full "
                  />
                </span>
              </li>
            );
          })}
        </ul>

        {/*---------------
          Desktop Nav Menu
          ----------------*/}
        <ul className="hidden md:flex w-full justify-around p-4 h-auto text-white md:ml-4">
          {Object.entries(navMenus).map(([menu, link]) => {
            return (
              <li
                key={menu}
                onClick={() => {
                  navigate(link);
                  setIsMenuOpen(false);
                }}
              >
                <span className="relative inline-block group text-lg font-medium hover:cursor-pointer hover:text-[#6a74ff] ">
                  {" "}
                  {menu}
                  <span
                    className="absolute left-0 bottom-0 w-0  h-[0.1rem] 
                    rounded-full bg-[#6a74ff] transition-all duration-300
                     ease-in-out group-hover:w-full "
                  />
                </span>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
};
