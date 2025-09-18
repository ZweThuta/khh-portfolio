import { motion } from "framer-motion";
import leif1 from "../assets/branding3/leiffinal-01.png";
import leif2 from "../assets/branding3/leiffinal-02.png";
import leif3 from "../assets/branding3/leiffinal-03.png";
import leif4 from "../assets/branding3/leiffinal-04.png";
import leif5 from "../assets/branding3/leiffinal-05.png";
import leif6 from "../assets/branding3/leiffinal-06.png";
import leif7 from "../assets/branding3/leiffinal-07.png";
import leif8 from "../assets/branding3/leiffinal-08.png";
import leif9 from "../assets/branding3/leiffinal-09.png";
import leif10 from "../assets/branding3/leiffinal-10.png";
import leif11 from "../assets/branding3/leiffinal-11.png";
import leif12 from "../assets/branding3/leiffinal-12.png";
import leif13 from "../assets/branding3/leiffinal-13.png";
import leif14 from "../assets/branding3/leiffinal-14.png";
import leif15 from "../assets/branding3/leiffinal-15.png";
import leif21 from "../assets/branding3/leiffinal-21.png";
import leif22 from "../assets/branding3/leiffinal-22.png";
import leif23 from "../assets/branding3/leiffinal-23.png";
import leif24 from "../assets/branding3/leiffinal-24.png";

const Branding3 = () => {
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
              className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-24 h-24 border border-[#96BF3D]/20 rounded-full"
            ></motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-xl md:text-5xl font-bold mb-8 relative"
            >
              <span className="bg-gradient-to-r from-[#96BF3D] via-[#7FBF3D] to-[#6EAA36] bg-clip-text text-transparent">
                Leif Sunscreen
              </span>

              <br />
              <span className="text-xl md:text-4xl text-neutral-400">
                Branding & Packaging Design
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-neutral-400 lg:max-w-3xl text-xs max-w-xl mx-auto lg:text-lg leading-relaxed"
            >
              A clean, sun-safe identity for Leif’s daily sunscreen range. The design blends nature-inspired greens with minimal typography to convey freshness, protection, and modern skincare. Packaging and visuals highlight clarity, trust, and an eco-forward ethos.
            </motion.p>
          </div>

          {/* Project Display Section */}
          <div className="space-y-3">
            {/* First Row */}
            <div>
              <div className="grid grid-cols-1 md:grid-cols-6 grid-rows-5 gap-4">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="col-span-1 md:col-span-3 row-span-5 aspect-auto overflow-hidden"
                >
                  <img
                    src={leif1}
                    alt="Leif Sunscreen Branding"
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 rounded-xl"
                  />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="col-span-1 md:col-span-3 md:col-start-4 row-span-5 aspect-auto overflow-hidden"
                >
                  <img
                    src={leif2}
                    alt="Leif Sunscreen Branding"
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 rounded-xl"
                  />
                </motion.div>
              </div>
            </div>
            {/* Second Row */}
            <div>
              <div className="grid grid-cols-1 md:grid-cols-6 grid-rows-5 gap-4">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="col-span-1 md:col-span-3 row-span-5 aspect-auto overflow-hidden"
                >
                  <img
                    src={leif3}
                    alt="Leif Sunscreen Branding"
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 rounded-xl"
                  />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="col-span-1 md:col-span-3 md:col-start-4 row-span-5 aspect-auto overflow-hidden"
                >
                  <img
                    src={leif4}
                    alt="Leif Sunscreen Branding"
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 rounded-xl"
                  />
                </motion.div>
              </div>
            </div>
            {/* Third Row */}
            <div>
              <div className="grid grid-cols-1 md:grid-cols-6 grid-rows-5 gap-4">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="col-span-1 md:col-span-3 row-span-5 aspect-auto overflow-hidden"
                >
                  <img
                    src={leif5}
                    alt="Leif Sunscreen Branding"
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 rounded-xl"
                  />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="col-span-1 md:col-span-3 md:col-start-4 row-span-5 aspect-auto overflow-hidden"
                >
                  <img
                    src={leif6}
                    alt="Leif Sunscreen Branding"
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 rounded-xl"
                  />
                </motion.div>
              </div>
            </div>
            {/* Fourth Row */}
            <div>
              <div className="grid grid-cols-1 md:grid-cols-6 grid-rows-5 gap-4">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="col-span-1 md:col-span-3 row-span-5 aspect-auto overflow-hidden"
                >
                  <img
                    src={leif7}
                    alt="Leif Sunscreen Branding"
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 rounded-xl"
                  />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="col-span-1 md:col-span-3 md:col-start-4 row-span-5 aspect-auto overflow-hidden"
                >
                  <img
                    src={leif8}
                    alt="Leif Sunscreen Branding"
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 rounded-xl"
                  />
                </motion.div>
              </div>
            </div>
            {/* Fifth Row */}
            <div>
              <div className="grid grid-cols-1 md:grid-cols-6 grid-rows-5 gap-4">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="col-span-1 md:col-span-3 row-span-5 aspect-auto overflow-hidden"
                >
                  <img
                    src={leif9}
                    alt="Leif Sunscreen Branding"
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 rounded-xl"
                  />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="col-span-1 md:col-span-3 md:col-start-4 row-span-5 aspect-auto overflow-hidden"
                >
                  <img
                    src={leif10}
                    alt="Leif Sunscreen Branding"
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 rounded-xl"
                  />
                </motion.div>
              </div>
            </div>
            {/* Sixth Row */}
            <div>
              <div className="grid grid-cols-1 md:grid-cols-6 grid-rows-5 gap-4">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="col-span-1 md:col-span-3 row-span-5 aspect-auto overflow-hidden"
                >
                  <img
                    src={leif11}
                    alt="Leif Sunscreen Branding"
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 rounded-xl"
                  />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="col-span-1 md:col-span-3 md:col-start-4 row-span-5 aspect-auto overflow-hidden"
                >
                  <img
                    src={leif12}
                    alt="Leif Sunscreen Branding"
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 rounded-xl"
                  />
                </motion.div>
              </div>
            </div>
            {/* Seventh Row */}
            <div>
              <div className="grid grid-cols-1 md:grid-cols-6 grid-rows-5 gap-4">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="col-span-1 md:col-span-3 row-span-5 aspect-auto overflow-hidden"
                >
                  <img
                    src={leif13}
                    alt="Leif Sunscreen Branding"
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 rounded-xl"
                  />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="col-span-1 md:col-span-3 md:col-start-4 row-span-5 aspect-auto overflow-hidden"
                >
                  <img
                    src={leif14}
                    alt="Leif Sunscreen Branding"
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 rounded-xl"
                  />
                </motion.div>
              </div>
            </div>
            {/* Eighth Row */}
            <div>
              <div className="grid grid-cols-1 md:grid-cols-6 grid-rows-5 gap-4">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="col-span-1 md:col-span-3 row-span-5 aspect-auto overflow-hidden"
                >
                  <img
                    src={leif15}
                    alt="Leif Sunscreen Branding"
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 rounded-xl"
                  />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="col-span-1 md:col-span-3 md:col-start-4 row-span-5 aspect-auto overflow-hidden"
                >
                  <img
                    src={leif21}
                    alt="Leif Sunscreen Branding"
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 rounded-xl"
                  />
                </motion.div>
              </div>
            </div>
            {/* Ninth Row */}
            <div>
              <div className="grid grid-cols-1 md:grid-cols-6 grid-rows-5 gap-4">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="col-span-1 md:col-span-3 row-span-5 aspect-auto overflow-hidden"
                >
                  <img
                    src={leif22}
                    alt="Leif Sunscreen Branding"
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 rounded-xl"
                  />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="col-span-1 md:col-span-3 md:col-start-4 row-span-5 aspect-auto overflow-hidden"
                >
                  <img
                    src={leif23}
                    alt="Leif Sunscreen Branding"
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 rounded-xl"
                  />
                </motion.div>
              </div>
            </div>
            {/* Tenth Row */}
            <div>
              <div className="grid grid-cols-1 md:grid-cols-6 grid-rows-5 gap-4">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="col-span-1 md:col-span-3 row-span-5 aspect-auto overflow-hidden"
                >
                  <img
                    src={leif24}
                    alt="Leif Sunscreen Branding"
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 rounded-xl"
                  />
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-[#96BF3D]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-[#6EAA36]/5 rounded-full blur-3xl"></div>
      </div>
    </div>
  );
};

export default Branding3;