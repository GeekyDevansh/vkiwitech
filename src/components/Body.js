import React from "react";
import { motion } from "framer-motion";

const Body = () => {
  return (
    <>
      <section className="text-gray-200 body-font md:mx-[10%] ">
        <div className="container px-5 md:py-24 py-12 mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="flex flex-wrap w-full mb-20 flex-col items-center text-center"
          >
            <h1 className="sm:text-4xl text-2xl font-medium title-font mb-2 text-white">
              vKiwiTech IT Consulting and Services
            </h1>
            <p className="lg:w-1/2 w-full leading-relaxed text-gray-200">
            vKiwiTech excels in SAP solutions and website development. We configure, implement, host, and support SAP applications, while also creating modern and seamless websites for our clients.{" "}
            </p>
          </motion.div>
          <div className="flex flex-wrap -m-4">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="xl:w-1/3 md:w-1/2 p-4"
            >
              <motion.div whileHover={{
    scale: 1.1,
    transition: { duration: 0.5 },
  }} className="border border-gray-200 p-6 rounded-lg cursor-pointer">
                <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-white text-indigo-500 mb-4">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    className="w-6 h-6"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                  </svg>
                </div>
                <h2 className="text-lg text-white font-medium title-font mb-2">
                  Innovative Tools
                </h2>
                <p className="leading-relaxed text-base">
                We streamline SAP deployment with minimal changes using advanced tools. Our expertise also spans web development, employing modern tools for seamless solutions.
                </p>
              </motion.div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="xl:w-1/3 md:w-1/2 p-4"
            >
              <motion.div whileHover={{
    scale: 1.1,
    transition: { duration: 0.5 },
  }} className="cursor-pointer border border-gray-200 p-6 rounded-lg">
                <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-white text-indigo-500 mb-4">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    className="w-6 h-6"
                    viewBox="0 0 24 24"
                  >
                    <circle cx="6" cy="6" r="3"></circle>
                    <circle cx="6" cy="18" r="3"></circle>
                    <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
                  </svg>
                </div>
                <h2 className="text-lg text-white font-medium title-font mb-2">
                  Optimized Solutions
                </h2>
                <p className="leading-relaxed text-base">
                  In order to improve performance and channelize all SAP
                  components to give best optimized results.
                </p>
              </motion.div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="xl:w-1/3 md:w-1/2 p-4"
            >
              <motion.div whileHover={{
    scale: 1.1,
    transition: { duration: 0.5 },
  }} className="border border-gray-200 p-6 rounded-lg cursor-pointer">
                <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-white text-indigo-500 mb-4">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    className="w-6 h-6"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </svg>
                </div>
                <h2 className="text-lg text-white font-medium title-font mb-2">
                  High Premium Support
                </h2>
                <p className="leading-relaxed text-base">
                  We have highly dedicated team providing end to end support.
                </p>
              </motion.div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="xl:w-1/3 md:w-1/2 p-4"
            >
              <motion.div whileHover={{
    scale: 1.1,
    transition: { duration: 0.5 },
  }} className="cursor-pointer border border-gray-200 p-6 rounded-lg">
                <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-white text-indigo-500 mb-4">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    className="w-6 h-6"
                    viewBox="0 0 24 24"
                  >
                    <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1zM4 22v-7"></path>
                  </svg>
                </div>
                <h2 className="text-lg text-white font-medium title-font mb-2">
                  Production Support Team
                </h2>
                <p className="leading-relaxed text-base">
                  We have a highly dedicated support team which can work round
                  the clock to provide all the relevant support.
                </p>
              </motion.div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="xl:w-1/3 md:w-1/2 p-4"
            >
              <motion.div whileHover={{
    scale: 1.1,
    transition: { duration: 0.5 },
  }} className="cursor-pointer border border-gray-200 p-6 rounded-lg">
                <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-white text-indigo-500 mb-4">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    className="w-6 h-6"
                    viewBox="0 0 24 24"
                  >
                    <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"></path>
                  </svg>
                </div>
                <h2 className="text-lg text-white font-medium title-font mb-2">
                  24x7 Support
                </h2>
                <p className="leading-relaxed text-base">
                  We have highly dedicated team providing support round the
                  clock.
                </p>
              </motion.div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="xl:w-1/3 md:w-1/2 p-4"
            >
              <motion.div whileHover={{
    scale: 1.1,
    transition: { duration: 0.5 },
  }} className="cursor-pointer border border-gray-200 p-6 rounded-lg">
                <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-white text-indigo-500 mb-4">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    className="w-6 h-6"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                  </svg>
                </div>
                <h2 className="text-lg text-white font-medium title-font mb-2">
                  Mission and Values
                </h2>
                <p className="leading-relaxed text-base">
                  Our approach is focussed on our customer. We are proud of
                  always thinking in terms of what is best for the customer.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Body;
