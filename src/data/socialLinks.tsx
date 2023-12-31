import {
  SiDevdotto,
  SiDiscord,
  SiGithub,
  SiInstagram,
  SiMedium,
  SiTwitter,
  SiYoutube,
} from "react-icons/si";
import { FiBook } from "react-icons/fi";

export const socialLinks = [
  {
    label: "Blog",
    icon: <FiBook />,
    href: "https://slyro.vercel.app",
    color: "#ff0000",
  },
  {
    label: "Youtube",
    icon: <SiYoutube />,
    href: "https://youtube.com/@slyro",
    color: "#ef4444",
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
