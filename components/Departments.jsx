"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const departmentsData = [
  {
    imgSrc: "/features/school-building.png",
    title: "Academia Department",
    description:
      "This departement is set to enable the acquiring of essential soft and hard skills by new members to later apply it in new and creative projects, this departement is responsible of holding lectures and introducing courses by experienced members of the domains to be taught",
  },
  {
    imgSrc: "/features/office-building.png",
    title: "Entreprise Department",
    description:
      "This department is responsible of planning and initiating creative and new projects on many scales, utilising the versatility and working hand of the skilled ION club members, the managing of such projects will build the necessary entrepreneurial mindset and skills necessary for the future engineers",
  },
  {
    imgSrc: "/features/arcade.png",
    title: "Arcade Department",
    description:
      "As much as our club works on productivity and skill building it works on providing an amazing academic experience, hosting many events for the enjoyement of the students containing all sorts of fun games and competitions !",
  },
];
const Departments = () => {
  const [index, setIndex] = useState(0);
  const [imgIndex, setImgIndex] = useState(0);
  useEffect(() => {
    setImgIndex(index);
  }, [index]);
  return (
    <section className="text-white pt-32 relative">
      <div className="container mx-auto">
        <div className="flex gap-16">
          <motion.div
            key={departmentsData[index].imgSrc}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 0.4,
              ease: [0.6, -0.05, 0.01, 0.99],
              delay: 0.2,
            }}
            className="hidden xl:flex justify-center flex-1 w-full h-[350px] sticky top-[calc(50%-200px)]"
          >
            <div className="relative w-full h-full">
              <img
                src={departmentsData[imgIndex].imgSrc}
                fill
                className="h-full object-contain"
              />
            </div>
          </motion.div>
          <div className="flex-1 flex flex-col gap-8">
            {departmentsData.map((item, intemIndex) => {
              return (
                <motion.div
                  onViewportEnter={() => setIndex(intemIndex)}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ amount: "all" }}
                  key={intemIndex}
                  className="w-full h-auto xl:h-[380px] flex items-center"
                >
                  <div className="w-[80vw] xl:w-auto mx-auto xl:mx-0">
                    <h2 className="h2 mb-4">{item.title}</h2>
                    <p className="lead mb-8">{item.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
export default Departments;
