import React from 'react'
import { motion } from "framer-motion";
import brand2 from "../assets/branding4/vibrance-02.jpeg";
import brand4 from "../assets/branding4/vibrance-04.jpeg";
import brand5 from "../assets/branding4/vibrance-05.jpeg";
import brand6 from "../assets/branding4/vibrance-06.jpeg";
import brand7 from "../assets/branding4/vibrance-07.jpeg";
import brand8 from "../assets/branding4/vibrance-08.jpeg";
import brand9 from "../assets/branding4/vibrance-09.png";
import brand10 from "../assets/branding4/vibrance-10.png";
import brand17 from "../assets/branding4/vibrance-17.png";
import brand18 from "../assets/branding4/vibrance-18.jpeg";
import brand19 from "../assets/branding4/vibrance-19.jpeg";
import brand20 from "../assets/branding4/vibrance-20.jpeg";

const Branding4 = () => {
  return (
    <div className="min-h-screen bg-neutral-900 py-20 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          {/* Project Title and Description */}
          <div className="text-center mb-16 relative">
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-24 h-24 border border-white/20 rounded-full"
            ></motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-xl md:text-5xl font-bold mb-8 relative"
            >
              <span className="text-white">
                Vibrance
              </span>

              <br />
              <span className="text-xl md:text-4xl text-neutral-400">
                Branding & Product Design
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-neutral-300 lg:max-w-3xl text-xs max-w-xl mx-auto lg:text-lg leading-relaxed"
            >
              A premium, heartbeat-responsive sports wristband that motivates athletes in real time through color-changing technology. Built to last a lifetime, Vibrance blends durability with dynamic feedback to keep performance on track.
            </motion.p>
          </div>

          {/* Project Display Section */}
          <div className="space-y-3">
           
            {/* Second Row */}
            <div>
              <div className="grid grid-cols-5 grid-rows-6 gap-1">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="col-span-3 row-span-6 col-start-3 row-start-1 aspect-auto overflow-hidden"
                >
                  <img
                    src={brand6}
                    alt="Vibrance Lifestyle"
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 rounded-xl"
                  />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="col-span-2 row-span-3 col-start-1 row-start-1 aspect-auto overflow-hidden"
                >
                  <img
                    src={brand8}
                    alt="Vibrance App"
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 rounded-xl"
                  />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="col-span-2 row-span-3 row-start-4 aspect-auto overflow-hidden"
                >
                  <img
                    src={brand2}
                    alt="Vibrance Components"
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 rounded-xl"
                  />
                </motion.div>
              </div>
            </div>

            {/* Third Row */}
            <div>
              <div className="grid grid-cols-6 grid-rows-5 gap-2">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="col-span-3 row-span-5 aspect-auto overflow-hidden"
                >
                  <img
                    src={brand7}
                    alt="Vibrance Athletes"
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 rounded-xl"
                  />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="col-span-3 row-span-5 col-start-4 aspect-auto overflow-hidden"
                >
                  <img
                    src={brand4}
                    alt="Vibrance Branding"
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 rounded-xl"
                  />
                </motion.div>
              </div>
            </div>

 

            {/* Fourth Row */}
            <div>
              <div className="grid grid-cols-6 grid-rows-3 gap-2">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="col-span-2 row-span-3 aspect-auto overflow-hidden"
                >
                  <img
                    src={brand5}
                    alt="Vibrance Detail"
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 rounded-xl"
                  />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="col-span-2 row-span-3 col-start-3 aspect-auto overflow-hidden"
                >
                  <img
                    src={brand10}
                    alt="Vibrance Sensors"
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 rounded-xl"
                  />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="col-span-2 row-span-3 col-start-5 aspect-auto overflow-hidden"
                >
                  <img
                    src={brand9}
                    alt="Vibrance Build"
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 rounded-xl"
                  />
                </motion.div>
              </div>
            </div>

            {/* Fifth Row */}
            <div className="grid grid-cols-3 grid-rows-5 gap-4 aspect-auto overflow-hidden">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="col-span-3 row-span-6"
              >
                <img
                  src={brand5}
                  alt="Vibrance Overview"
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 rounded-xl"
                />
              </motion.div>
            </div>



                        {/* Seventh Row */}
                        <div>
              <div className="grid grid-cols-6 grid-rows-5 gap-2">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="col-span-3 row-span-5 aspect-auto overflow-hidden"
                >
                  <img
                    src={brand18}
                    alt="Vibrance Athletes"
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 rounded-xl"
                  />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="col-span-3 row-span-5 col-start-4 aspect-auto overflow-hidden"
                >
                  <img
                    src={brand19}
                    alt="Vibrance Branding"
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 rounded-xl"
                  />
                </motion.div>
              </div>
            </div>

                            {/* Eighth Row */}
                        <div className="grid grid-cols-3 grid-rows-5 gap-4 aspect-auto overflow-hidden">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="col-span-3 row-span-6"
              >
                <img
                  src={brand20}
                  alt="Vibrance Overview"
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 rounded-xl"
                />
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
      </div>
    </div>
  )
}

export default Branding4