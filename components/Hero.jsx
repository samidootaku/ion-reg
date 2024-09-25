"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import React,  { useState } from "react";
import Header from "./Header";
import Button from "./Button";
import Modal from "@/components/Modal";

const Hero = () => {
  const { scrollY } = useScroll();
  const imgTopPosition = useTransform(scrollY, [0, 400], ["680px", "140px"]);
  const imgScale = useTransform(scrollY, [0, 50, 1300], [1, 1.1, 1]);
  const textOpacity = useTransform(scrollY, [0, 200], [1, 0]);
  const textScale = useTransform(scrollY, [0, 200], [1, 0.8]);
  const textDisplay = useTransform(scrollY, [0, 800], ["flex", "none"]);
  const handleModalToggle = () => {
    setIsModalVisible(!isModalVisible);
  };
  const [isModalVisible, setIsModalVisible] = useState(false);

  
  return (
    <>
      <section id="hero" className="h-screen xl:h-[1500px] overflow-x-clip relative">
        <Header />
        <div className="container mx-auto h-full flex items-center xl:items-start">
          {/* text */}
          <motion.div
            className="flex flex-col justify-center items-center gap-6 text-center fixed left-0 right-0 mt-24 xl:mt-[160px]"
            style={{
              opacity: textOpacity,
              scale: textScale,
              display: textDisplay,
            }}
          >
            <h1 className="text-[60px] font-bold tracking-[-0.5px] leading-none max-w-[800px] xl:max-w-max">
              Go Inside
            </h1>
            <p className="max-w-[680px] text-[20px] text-white/80 font-light px-8 xl:px-0 mb-2">
              A great trip is waiting for you in ION club, Never miss the chance
            </p>
            <div className="flex justify-center my-8">
              <Button btnText="Join Us" onClick={handleModalToggle} />
            </div>
          </motion.div>

          {/* video */}
          <motion.div
            className="w-full max-w-[720px] mx-auto sticky left-0 right-0 border-8 border-white rounded-lg overflow-hidden mt-8 sm:mt-16 md:mt-16 lg:mt-0"
            style={{
              top: imgTopPosition,
              scale: imgScale,
            }}
          >
            <video
              className="w-full h-full object-contain"
              src="/hero/video.mp4"
              autoPlay
              loop
              muted
            ></video>
          </motion.div>
        </div>
        <Modal isVisible={isModalVisible} onClose={handleModalToggle} />
      </section>
    </>
  );
};
export default Hero;
