"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
const HeaderSection = () => {
  return (
    <section className="lg:py-16">
      <div className="grid grid-cols-1 lg:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
        >
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-8xl lg:leading-normal font-extrabold ">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-600">
              hello , Im {""}
            </span>
            <br />
            <TypeAnimation
              sequence={[
                "Wassim",
                1000,
                "Full-Stack JS Developer",
                1000, // wait 1s before replacing "Mice" with "Hamsters"
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>

          <p className="text-[#ADB7BE] text-base sm:text-lg lg:text-xl mb-4">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur
            molestias quis in voluptatibus quidem.
          </p>
          <div className="">
            <button className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-500 to-blue-600 text-white hover:bg-slate-200 ">
              Hire Me
            </button>

            <button className="px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-blue-500 to-blue-600 text-white  mt-3">
              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                Download CV
              </span>
            </button>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-4 place-self-center mt-4 lg:mt-0"
        >
          <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:h-[400px] lg:w-[400px] relative">
            <Image
              src="/hero-section-image.jpg"
              alt="hero section image"
              width={300}
              height={300}
              className="rounded-full absolute transform -translate-x-1/2 -translate-y-1/2  top-1/2 left-1/2"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeaderSection;
