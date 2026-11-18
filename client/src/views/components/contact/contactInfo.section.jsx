import { LuMessageCircle, LuMessageCircleMore } from "react-icons/lu";
import { Icon } from "../icon";
import { textSlice } from "../../../utils/textSlice";
import { SectionTitle } from "../sectionTitle";

export const ContactInfo = ({ socials, contacts }) => {
  return (
    <section className="flex flex-col gap-10 p-[40px_10px] justify-center items-center ">
      <div className="flex flex-col gap-8 ">
        <div className="relative flex gap-3 justify-center items-center ">
          <LuMessageCircleMore className="text-2xl md:text-3xl lg:text-4xl text-sky-400" />
          <h3 className="text-xl md:text-2xl lg:text-3xl ">
            Contact Information
          </h3>
          <span className="absolute left-1/2 -translate-x-1/2 -bottom-2 w-90 h-[0.15rem] bg-[linear-gradient(90deg,transparent,rgb(100,118,255),transparent)] " />
        </div>
        <div className="flex flex-col gap-3 ml-4  ">
          <p>
            Email :{" "}
            <a
              href={socials.email}
              target="_blank"
              aria-label="email"
              rel="noreferrer"
              className="hover:text-blue-400 hover:underline "
            >
              {socials.email.slice(7)}
            </a>{" "}
          </p>
          <p>
            Location :{" "}
            <a
              href="https://maps.app.goo.gl/27wXorqHYD2egUc46"
              target="_blank"
              aria-label="location"
              rel="noreferrer"
              className="hover:text-blue-400 hover:underline "
            >
              Barguna,Barishal,Bangladesh
            </a>{" "}
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-3 ">
        <SectionTitle title="Social Links" />
        <div className="flex gap-5 justify-center items-center flex-wrap p-[20px_0px]">
          {Object.entries(socials).map(([name, path]) => (
            <Icon key={name} name={name} path={path} />
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-3 ">
        <SectionTitle title="Contacts" />
        <div className="flex gap-5 justify-center items-center flex-wrap p-[20px_0px]">
          {Object.entries(contacts).map(([name, path]) => (
            <Icon key={name} name={name} path={path} />
          ))}
        </div>
      </div>
    </section>
  );
};
