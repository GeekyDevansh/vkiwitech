import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <>
      <section id='about' className="text-gray-600 body-font mx-[10%]">
        <motion.div initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  viewport={{ once: true }}
  transition={{duration:1}} className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900 container mx-auto flex justify-center items-center md:pt-24 pt-12 underline decoration-[#2ea673] underline-offset-8 decoration-4 ">
          Who We Are
        </motion.div>
        <div className="container px-5 md:pt-12 mx-auto flex gap-8 md:flex-nowrap flex-wrap">
          <motion.div initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  viewport={{ once: true }}
  transition={{duration:1}} className=" w-full rounded-lg overflow-hidden mt-6 sm:mt-0">
            <img
              className="object-cover object-center w-full h-full"
              src="/about.jpg"
              alt="about"
            />
          </motion.div>
          <motion.div initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  viewport={{ once: true }}
  transition={{duration:1}} classNameName=" flex justify-center items-center text-md text-gray-900" >
            vKiwiTech is a conglomerate providing IT Solutions and Staffing
            Services for medium and large organizations in the public and
            private sectors. <br /> <br />
            We enable our customers to solve their complex business challenges
            through innovative, value-adding, and proven deployments of SAP and
            complementary solutions. Unlike most onshore/offshore providers, our
            business is based on client relationships that are driven by value
            and shared goals. <br /> <br />
            Developing the right talent has become an important metric for
            success. We help organizations adopt an integrated approach to
            Talent Acquisition by mobilizing the best resources in the industry.
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default About;
