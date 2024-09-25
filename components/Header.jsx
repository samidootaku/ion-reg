import React from "react";
import ButtonTwo from "./ButtonTwo";
import Logo from "./Logo";
import Link from "next/link";

const Header = () => {
  return (
    <header className="h-[70px] bg-black/20 backdrop-blur-2xl fixed top-0 left-0 right-0 z-10 flex items-center">
      <div className="container mx-auto flex justify-between items-center px-4">
        <Logo />
        <Link href="#hero">
          <ButtonTwo btnText="Register" />
        </Link>
      </div>
    </header>
  );
};

export default Header;
