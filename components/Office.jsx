import React from "react";
import { motion } from "framer-motion";
import { fadeInOnScroll } from "@/motion/motionVariants";
import { fadeInScroll } from "@/motion/motionVariants";
import Image from "next/image";

const office = [
  {
    photo: "/chakib.jpg", // Correct path
    name: "Boukoucha Chakib Abderraouf",
    message: "President",
  },
  {
    photo: "/sikou.jpg", // Correct path
    name: "Saiki Abd Samed",
    message: "Vice President & IT Manager",
  },
  {
    photo: "/malek.jpg", // Correct path
    name: "Djaaraoui Abdelmalek",
    message: "MultiMedia Manager",
  },
  {
    photo: "/cama.jpg", // Correct path
    name: "Bellmouloud Saad",
    message: "HR Manager",
  },
  {
    photo: "/standard.png",
    name: "Younes kemmouni",
    message: "General secretary",
  },
  {
    photo: "/standard.png",
    name: "Belm Mehdi",
    message: "External Relationship Manager",
  },
];

const Office = () => {
  return (
    <section className="w-full xl:py-24 mb-24 xl:mb-32 flex justify-center items-center">
      <div className="overflow-hidden">
        <motion.div
          variants={fadeInScroll(0.2, 0.4)}
          initial="hidden"
          whileInView="visible"
          className="mt-10"
        >
          <h2 className="h2 mb-16 text-center">The Office Team</h2>
        </motion.div>
        <div>
          <motion.div
            variants={fadeInScroll(0.2, 0.6)}
            initial="hidden"
            whileInView="visible"
            className="flex"
          >
            <motion.div
              initial={{ x: 0 }}
              animate={{ x: "-100%" }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              className="flex"
            >
              {office.map((item, index) => {
                return (
                  <div
                    key={index}
                    className="relative w-[460px] h-[300px] bg-[#0e11354e] mr-12 rounded-2xl flex flex-col justify-center px-14 items-center"
                  >
                    {/* Use Next.js Image component and crop to a circle */}
                    {item.photo && (
                      <div className="w-28 h-28 mb-4">
                        <Image
                          src={item.photo}
                          alt={item.name}
                          width={120}
                          height={120}
                          className="rounded-full object-cover"
                        />
                      </div>
                    )}
                    <p className="text-xl text-center">{item.name}</p>
                    <p className="mb-4 text-lg text-white/80 text-center">
                      {item.message}
                    </p>
                  </div>
                );
              })}
            </motion.div>
            <motion.div
              initial={{ x: 0 }}
              animate={{ x: "-100%" }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              className="flex"
            >
              {office.map((item, index) => {
                return (
                  <div
                    key={index}
                    className="relative w-[460px] h-[300px] bg-[#0e11354e] mr-12 rounded-2xl flex flex-col justify-center px-14 items-center"
                  >
                    {/* Use Next.js Image component and crop to a circle */}
                    {item.photo && (
                      <div className="w-28 h-28 mb-4">
                        <Image
                          src={item.photo}
                          alt={item.name}
                          width={120}
                          height={120}
                          className="rounded-full object-cover"
                        />
                      </div>
                    )}
                    <p className="text-xl text-center">{item.name}</p>
                    <p className="mb-4 text-lg text-white/80 text-center">
                      {item.message}
                    </p>
                  </div>
                );
              })}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Office;
