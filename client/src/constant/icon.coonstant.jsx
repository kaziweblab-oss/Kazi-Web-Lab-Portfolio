import {
  FaFacebook,
  FaFacebookMessenger,
  FaGithub,
  FaPhoneAlt,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa";

import { IoMdMail } from 'react-icons/io'

export const contacts = [
  {
    name: "phone",
    icon: FaPhoneAlt,
  },
  {
    name: "whatsapp",
    icon: FaWhatsapp,
  },
  {
    name: "messenger",
    icon: FaFacebookMessenger,
  },
];

export const socials = [
  {
    name: "facebook",
    icon: FaFacebook,
  },
  {
    name: "youtube",
    icon: FaYoutube,
  },
  {
    name: "github",
    icon: FaGithub,
  },{
    name:"email",
    icon:IoMdMail
  }
];
