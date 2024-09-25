import Link from "next/link";
import React from "react";

const Logo = () => {
  return (
    <Link href="#" className="relative w-[148px] flex">
      <img
        src="/hero/logo.png"
        fill
        alt="logo"
        className="object-contain"
      ></img>
    </Link>
  );
};
export default Logo;
