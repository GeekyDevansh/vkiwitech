import React from 'react';
import { motion } from 'framer-motion'; 

const Contact = () => {
  return (
    <>
    
    <section id='contact' className="text-white body-font relative md:mx-[10%]">
  <div className="container px-5 py-24 mx-auto">
    <motion.div initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  viewport={{ once: true }}
  transition={{duration:1}} className="flex flex-col text-center w-full mb-12">
      <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">Contact Us</h1>
      <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-gray-200">Let's connect, shall we ?</p>
    </motion.div>
    <motion.div initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  viewport={{ once: true }}
  transition={{duration:1}} className="lg:w-1/2 md:w-2/3 mx-auto">
      <div className="flex flex-wrap -m-2">
        <div className="p-2 w-1/2">
          <div className="relative">
            <label for="name" className="leading-7 text-sm text-white">Name</label>
            <input type="text" id="name" name="name" className="w-full rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
          </div>
        </div>
        <div className="p-2 w-1/2">
          <div className="relative">
            <label for="email" className="leading-7 text-sm text-white">Email</label>
            <input type="email" id="email" name="email" className="w-full rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
          </div>
        </div>
        <div className="p-2 w-full">
          <div className="relative">
            <label for="message" className="leading-7 text-sm text-white">Message</label>
            <textarea id="message" name="message" className="w-full rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
          </div>
        </div>
        <div className="p-2 w-full">
          <button className="flex mx-auto text-white bg-[#6fbf8b] border-0 py-2 px-8 focus:outline-none hover:bg-green-500 rounded text-lg">Submit</button>
        </div>
       
      </div>
    </motion.div>
  </div>
</section>

    </>
  )
}

export default Contact