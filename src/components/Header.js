import React from "react";
import { motion } from "framer-motion";

const header = () => {
  return (
    <>
      <header className="text-gray-600 body-font md:px-[10%] sticky top-0 bg-white shadow-xl z-20 ">
        <div className="container mx-auto flex flex-wrap gap-2 md:gap-0 p-5 flex-col md:flex-row items-center">
          <motion.img
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            src="./logo.png"
            alt="logo"
            className="h-12"
          />

          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <motion.a
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="mr-5 cursor-pointer hover:text-gray-900 hidden md:block"
              href="/"
            >
              Home
            </motion.a>
            <motion.a
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="mr-5 cursor-pointer hover:text-gray-900"
              href="#about"
            >
              About Us
            </motion.a>
            <motion.a
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="mr-5 cursor-pointer hover:text-gray-900"
              href="#services"
            >
              Services
            </motion.a>
            <motion.a
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="md:mr-5 cursor-pointer hover:text-gray-900"
              href="#contact"
            >
              Contact Us
            </motion.a>
          </nav>
        </div>
      </header>
    </>
  );
};

export default header;
