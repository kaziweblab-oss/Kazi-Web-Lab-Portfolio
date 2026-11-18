import { FaGlobe } from "react-icons/fa";
import { contacts, socials } from "../../constant/icon.coonstant";

export const Icon = ({ name, path }) => {
  let matchedIcon = contacts.find((contact) => {
    return name && name.toLowerCase() === contact.name.toLowerCase();
  });

  if (!matchedIcon) {
    matchedIcon = socials.find((social) => {
      return name && name.toLowerCase() === social.name.toLowerCase();
    });
  }

  const Icon = matchedIcon ? matchedIcon.icon : FaGlobe;

  return (
    <a
      href={path}
      target="_blank"
      aria-label="phone"
      rel="noreferrer"
      className="transition-all duration-300 ease-in-out text-4xl text-[rgb(100,118,255)] hover:text-gray-300 hover:scale-120 "
    >
      <Icon />
    </a>
  );
};
