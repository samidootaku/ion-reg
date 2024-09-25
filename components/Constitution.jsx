"use client";
import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Button from "./Button";

const Constitution = () => {
  return (
    <div className="container mx-auto text-white pt-32 relative mt-8">
      <div className="flex flex-col justify-center items-center gap-6 text-center relative">
        <h1 className="text-[60px] font-bold leading-none max-w-[800px] xl:max-w-max">
          The Constitution
        </h1>
        <p className="max-w-[680px] text-[20px] text-white/80 font-light px-8 xl:px-0 mb-2">
            For more informations about anything related to ION club read the Constitution below
        </p>
        <a href="/constitution.pdf" download>
            {/* <button>Download ION constitution</button> */}
            <Button btnText="Download ION constitution" />
        </a>
      </div>
    </div>
  );
};
export default Constitution;
