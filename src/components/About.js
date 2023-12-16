import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <>
      <section id="about" className="text-gray-600 body-font mx-[10%]">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900 container mx-auto flex justify-center items-center md:pt-24 pt-12 underline decoration-[#2ea673] underline-offset-8 decoration-4 "
        >
          Who We Are
        </motion.div>
        <div className="px-5 md:pt-12 mx-auto flex gap-8 md:flex-nowrap flex-wrap">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className=" md:w-1/2 rounded-lg overflow-hidden mt-6 sm:mt-0"
          >
            <img
              className="object-cover object-center w-full h-full"
              src="/about.jpg"
              alt="about"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className=" md:w-1/2 flex justify-center items-center text-md text-gray-900"
          >
            vKiwiTech is a professional consulting organization, specialized in
            SAP solution integration, business process optimization and web development with
            focus on the Retail industry. Founded in 2023, by an accomplished
            team of SAP consultants with extensive experience of combined
            integrated business management system, vKiwiTech knows how to
            leverage SAP and other technologies to improve and streamline processes for its clients.{" "}
            <br /> <br />
            Our solutions help retailers leverage their ecosystem &#8208;along
            with vital relationships with customers, employees, and suppliers,
            while gaining superior visibility to organizational performance
            across the enterprise. We are
            committed to implementing solutions designed to meet our
            clients&#39; needs, priorities, resources and budgets in the
            softline, hardline and food-retail segments.
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default About;
