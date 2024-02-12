import { MdOutlinePolicy } from "react-icons/md";
import { MdSettingsBackupRestore } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";
import { MdOutlinePhone } from "react-icons/md";
import kbz from "../asset/img/kbz.png";
import wave from "../asset/img/wave.png";
import facebook from "../asset/img/facebook.png";
import instagram from "../asset/img/instagram.png";
import viber from "../asset/img/viber.png";
import telegram from "../asset/img/telegram.png";
import twitter from "../asset/img/twitter.png";

export const customerServicesData = [
  {
    id: 1,
    icon: MdOutlinePolicy,
    description: "Terms and Privacry Policy",
  },
  {
    id: 2,
    icon: MdSettingsBackupRestore,
    description: "Return Policy",
  },
];
export const languages = [
  {
    id: 1,
    language: "Myanmar(Unicoe)",
  },
  {
    id: 2,
    language: "Myanmar(ZawGyi)",
  },
  {
    id: 3,
    language: "English",
  },
];
export const contacts = [
  {
    id: 1,
    icon: CiLocationOn,
    description:
      "Lay Daunt Kan Main Road, Cashmere Stop, Near Zawana , Thingangyun Tsp, Yangon",
  },
  {
    id: 2,
    icon: MdOutlinePhone,
    description: "09458489458",
  },
];
export const payments = [
  {
    id: 1,
    img: kbz,
  },
  {
    id: 2,
    img: wave,
  },
];
export const followUsImg = [
  {
    id: 1,
    social: facebook,
  },
  {
    id: 2,
    social: instagram,
  },
  {
    id: 3,
    social: viber,
  },
  {
    id: 4,
    social: telegram,
  },
  {
    id: 5,
    social: twitter,
  },
];
