import React from "react";
import { motion } from "framer-motion";

const footer = () => {
  return (
    <>
      <footer className="text-gray-400 body-font bg-gray-900">
        <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-center md:flex-row md:flex-nowrap flex-wrap flex-col md:ml-[4%]">
          <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
            <motion.div initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  viewport={{ once: true }}
  transition={{duration:1}} className="flex items-center justify-center md:justify-start">
              <img src="./logo.png" alt="logo" className="h-12" />
            </motion.div>
            <motion.p initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  viewport={{ once: true }}
  transition={{duration:1}} className="mt-2 text-sm text-gray-400">
              84, Second Floor, Block P, Sanjay Nagar, Sector-23, Ghaziabad,
              Uttar Pradesh 201002{" "}
            </motion.p>{" "}
            <br />{" "}
            <motion.span initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  viewport={{ once: true }}
  transition={{duration:1}} className="text-gray-400"> Phone : +91-9560300384 </motion.span>
          </div>
          <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
            <motion.div initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  viewport={{ once: true }}
  transition={{duration:1}} className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">
                SOLUTIONS
              </h2>
              <nav className="list-none mb-10">
                <li>
                  <a className="text-gray-400 hover:text-gray-200 cursor-pointer">
                    SAP S4/HANA/IS Retail
                  </a>
                </li>
                <li>
                  <a className="text-gray-400 hover:text-gray-200 cursor-pointer">
                    SAP FMS
                  </a>
                </li>
                <li>
                  <a className="text-gray-400 hover:text-gray-200 cursor-pointer">
                    SAP CAR
                  </a>
                </li>
                <li>
                  <a className="text-gray-400 hover:text-gray-200 cursor-pointer">
                    SAP Hybris
                  </a>
                </li>
                <li>
                  <a className="text-gray-400 hover:text-gray-200 cursor-pointer">
                    SAP POSDM
                  </a>
                </li>
              </nav>
            </motion.div>
            <motion.div initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  viewport={{ once: true }}
  transition={{duration:1}} className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">
                ANALYTICS
              </h2>
              <nav className="list-none mb-10">
                <li>
                  <a className="text-gray-400 hover:text-gray-200 cursor-pointer">
                    SAP Business Analytics
                  </a>
                </li>
                <li>
                  <a className="text-gray-400 hover:text-gray-200 cursor-pointer">
                    SAP LUMIRA
                  </a>
                </li>
                <li>
                  <a className="text-gray-400 hover:text-gray-200 cursor-pointer">
                    Retail Analytics - TRACE
                  </a>
                </li>
              </nav>
            </motion.div>
            <motion.div initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  viewport={{ once: true }}
  transition={{duration:1}} className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">
                MOBILITY
              </h2>
              <nav className="list-none mb-10">
                <li>
                  <a className="text-gray-400 hover:text-gray-200 cursor-pointer">
                    SAP Mobile Platform
                  </a>
                </li>
                <li>
                  <a className="text-gray-400 hover:text-gray-200 cursor-pointer">
                    SAP FIORI
                  </a>
                </li>
              </nav>
            </motion.div>
            <motion.div initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  viewport={{ once: true }}
  transition={{duration:1}} className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">
                TECHNOLOGY
              </h2>
              <nav className="list-none mb-10">
                <li>
                  <a className="text-gray-400 hover:text-gray-200 cursor-pointer">
                    SAP PO/PI
                  </a>
                </li>
                <li>
                  <a className="text-gray-400 hover:text-gray-200 cursor-pointer">
                    SAP UI5
                  </a>
                </li>
                <li>
                  <a className="text-gray-400 hover:text-gray-200 cursor-pointer">
                    SAP Personas
                  </a>
                </li>
              </nav>
            </motion.div>
          </div>
        </div>
        <div className="bg-gray-800">
          <motion.div initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  viewport={{ once: true }}
  transition={{duration:1}} className="container mx-auto py-4 px-5 flex justify-between flex-wrap flex-col sm:flex-row">
            <p className="text-gray-400 text-sm text-center sm:text-left">
              Copyright © vKiwiTech 2024. All Rights Reserved.
            </p>
            <span className="text-gray-400 md:mt-0 mt-2 md:text-sm text-xs text-center sm:text-left" >
            Designed and Developed by <a className="underline" href="https://www.linkedin.com/in/devansh-khullar/">Devansh Khullar</a>
            </span>
            {/* <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
              <a className="text-gray-400">
                <svg
                  fill="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                </svg>
              </a>
              <a className="ml-3 text-gray-400">
                <svg
                  fill="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                </svg>
              </a>
              <a className="ml-3 text-gray-400">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                </svg>
              </a>
              <a className="ml-3 text-gray-400">
                <svg
                  fill="currentColor"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="0"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="none"
                    d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                  ></path>
                  <circle cx="4" cy="4" r="2" stroke="none"></circle>
                </svg>
              </a>
            </span> */}
          </motion.div>
        </div>
      </footer>
    </>
  );
};

export default footer;
