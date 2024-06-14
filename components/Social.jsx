import Link from "next/link";

import { FaGithub, FaLinkedinIn, FaYoutube, FaTwitter } from "react-icons/fa";

const socials = [
  { icon: <FaGithub />, path: "https://github.com/KishanthSelvaraj" },
  { icon: <FaLinkedinIn />, path: "https://www.linkedin.com/in/kishanth-selvaraj-a71698259?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" },
  // { icon: <FaYoutube />, path: "" },
  // { icon: <FaTwitter />, path: "" },
];
const Social = ({ containerStyles, iconStyle }) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => {
        return (
          <Link key={index} href={item.path} className={iconStyle}>
            {item.icon}
          </Link>
        );
      })}
    </div>
  );
};

export default Social;
