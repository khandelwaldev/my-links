import {
  SiDevdotto,
  SiDiscord,
  SiGithub,
  SiInstagram,
  SiLeetcode,
  SiMedium,
  SiTwitter,
  SiYoutube,
} from "react-icons/si";
import { FiBook } from "react-icons/fi";
import { ImInfo } from "react-icons/im";
import Project from "../components/icons/Project";

export const socialLinks = [
  {
    label: "About Me",
    icon: <ImInfo />,
    href: "https://slyro.vercel.app/about",
    color: "#fff",
  },
  {
    label: "New Project InnerBeat",
    icon: <Project />,
    href: "https://innerbeat.vercel.app/",
    color: "#09c478",
  },
  {
    label: "Blog",
    icon: <FiBook />,
    href: "https://slyro.vercel.app",
    color: "#ff3366",
  },
  {
    label: "LeetCode",
    icon: <SiLeetcode />,
    href: 'https://leetcode.com/devkhandelwal',
    color: '#ffb700',
  },
  {
    label: "Youtube",
    icon: <SiYoutube />,
    href: "https://youtube.com/error",
    color: "#FF0000",
  },
  {
    label: "Discord",
    icon: <SiDiscord />,
    href: "https://discord.com/users/@slyro",
    color: "#5662f6",
  },
  {
    label: "Instagram",
    icon: <SiInstagram />,
    href: "https://instagram.com/_slyro",
    color: "#f80067",
  },
  {
    label: "Twitter",
    icon: <SiTwitter />,
    href: "https://x.com/i_slyro",
    color: "#1da1f2",
  },
  {
    label: "Github",
    icon: <SiGithub />,
    href: "https://github.com/khandelwaldev",
    color: "#f1f1f1",
  },
  {
    label: "Dev.to",
    icon: <SiDevdotto />,
    href: "https://dev.to/khandelwaldev",
    color: "#fff",
  },
  {
    label: "Medium",
    icon: <SiMedium />,
    href: "https://slyro.medium.com",
    color: "#fff",
  },
];
