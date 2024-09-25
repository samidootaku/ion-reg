import React from "react";
import Image from "next/image";
import Link from "next/link";
import Logo from "./Logo";
import { FaFacebook, FaInstagram } from "react-icons/fa";

const icons = [
  {
    component: <FaInstagram className="text-white object-contain w-6 h-6" />,
    href: "https://www.instagram.com/insideofnano/",
  },
  {
    component: <FaFacebook className="text-white object-contain w-6 h-6" />,
    href: "https://www.facebook.com/share/QVKuyERm9ULfrM6a/?mibextid=qi2Omg",
  },
];
const Footer = () => {
  return (
    <footer className="bg-[#10112f] py-[60px] mt-60">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row items-center gap-12 xl:justify-between">
          <div className="flex-1 flex gap-8 right-4">
            {icons.map((icon, index) => {
              return (
                <Link href={icon.href} key={index}>
                  <div className="relative w-6 h-6 ml-5">{icon.component}</div>
                </Link>
              );
            })}
          </div>
          <div className="flex-1 flex justify-center">
            <Logo />
          </div>
          <p className="flex-1 flex justify-end font-light mr-5">
            © ION club 2024 - All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
