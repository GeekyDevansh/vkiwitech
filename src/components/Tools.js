import React from "react";
import Slider from "react-slick";
import { motion } from "framer-motion";

const Tools = () => {
  var settingsLg = {
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    speed: 6000,
    pauseOnHover: false,
    cssEase: "linear",
  };

  var settingsSm = {
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    speed: 3000,
    pauseOnHover: false,
    cssEase: "linear",
  };


  return (
    <>
      <div
        id="skills"
        className="border-t-2 border-gray-400 pt-12 mx-auto bg-white "
      >
        <motion.h1
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{duration:1}}
          className="sm:text-3xl text-2xl font-medium text-center title-font text-gray-900 mb-6 underline decoration-[#2ea673] underline-offset-8 decoration-4"
        >
          Tools We Use
        </motion.h1>
      </div>

      <div className=" overflow-x-hidden hidden md:block md:mb-24 md:pt-12" >
        <Slider
          {...settingsLg}
        >
          <div className="mt-2">
            <img
              src="/javascript.png"
              alt="img"
              className="grayscale hover:grayscale-0 duration-200 h-24 w-24"
            />
          </div>
          <div className="mt-2">
            <img
              src="/react.png"
              alt="img"
              className="grayscale hover:grayscale-0 duration-200 h-24 w-44"
            />
          </div>
          <div className="mt-2">
            <img
              src="/aws.png"
              alt="img"
              className="grayscale hover:grayscale-0 duration-200 h-24 w-24"
            />
          </div>
          <div className="mt-2">
            <img
              src="/sap.png"
              alt="img"
              className="grayscale hover:grayscale-0 duration-200 h-24 w-24"
            />
          </div>
          <div className="mt-2">
            <img
              src="/hana.png"
              alt="img"
              className="grayscale hover:grayscale-0 duration-200 h-24 w-52"
            />
          </div>
          <div className="mt-2">
            <img
              src="/sql.png"
              alt="img"
              className="grayscale hover:grayscale-0 duration-200 h-24 w-48"
            />
          </div>
          
        </Slider>
      </div>

      <div className=" overflow-x-hidden md:hidden block mb-12 pt-8" >
        <Slider {...settingsSm}>
         
          
          <div>
            <img
              src="/javascript.png"
              alt="img"
              className="grayscale pt-2 hover:grayscale-0 duration-500 h-12 w-12 "
            />
          </div>
          <div>
            <img
              src="/react.png"
              alt="img"
              className="grayscale pt-2 hover:grayscale-0 duration-500 h-12 w-22 "
            />
          </div>
          <div>
            <img
              src="/sap.png"
              alt="img"
              className="grayscale pt-2 hover:grayscale-0 duration-500 h-12 w-12 "
            />
          </div>
          <div>
            <img
              src="/hana.png"
              alt="img"
              className="grayscale pt-2 hover:grayscale-0 duration-500 h-12 w-22 "
            />
          </div>
          <div>
            <img
              src="/aws.png"
              alt="img"
              className="grayscale pt-2 hover:grayscale-0 duration-500 h-12 w-12 "
            />
          </div>
          <div>
            <img
              src="/sql.png"
              alt="img"
              className="grayscale pt-2 hover:grayscale-0 duration-500 h-12 w-22 "
            />
          </div>
        </Slider>
      </div>
    </>
  );
};

export default Tools;
