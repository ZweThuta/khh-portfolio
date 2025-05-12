import { motion } from "framer-motion";
import brand1 from "../assets/branding2/NLAGUIDELINE-03.png";
import brand2 from "../assets/branding2/NLAGUIDELINE-05.png";
import brand3 from "../assets/branding2/NLAGUIDELINE-07.jpeg";
import brand4 from "../assets/branding2/NLAGUIDELINE-08.jpeg";
import brand5 from "../assets/branding2/NLAGUIDELINE-09.png";
import brand6 from "../assets/branding2/NLAGUIDELINE-14.jpeg";
import brand12 from "../assets/branding2/NLAGUIDELINE-11.jpeg";
import brand7 from "../assets/branding2/nlmm8.png";
import brand8 from "../assets/branding2/nnn-01.png";
import brand9 from "../assets/branding2/nnn-02.png";
import brand10 from "../assets/branding2/nnn-03.png";
import brand11 from "../assets/branding2/nnn-04.png";

const Branding = () => {
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
              className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-24 h-24 border border-amber-500/20 rounded-full"
            ></motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-xl md:text-5xl  font-bold mb-8 relative"
            >
              <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-400 bg-clip-text text-transparent">
                NA Mobile World Tech
              </span>

              <br />
              <span className="text-xl md:text-4xl text-neutral-400">
                Branding & Logo Design
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-neutral-400 lg:max-w-3xl text-xs max-w-xl mx-auto lg:text-lg leading-relaxed"
            >
              The NA Mobile World Tech branding combines modern minimalism with
              bold typography to create a striking and memorable identity. The
              sleek blue logo represents trust, innovation, and connectivity—key
              values in the mobile tech industry. Paired with a clean typeface
              and a futuristic background, the design reflects the brand’s
              commitment to delivering high-quality mobile solutions with
              clarity and confidence.
            </motion.p>
          </div>
          {/* Project Display Section */}
          <div className="space-y-3">
            {/* First Row */}
            <div>
              <div className="grid grid-cols-5 grid-rows-6 gap-2">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="col-span-3 row-span-6 aspect-auto overflow-hidden"
                >
                  <img
                    src={brand11}
                    alt="Branding Design"
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 rounded-xl"
                  />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="col-span-2 row-span-3 col-start-4 aspect-auto overflow-hidden"
                >
                  <img
                    src={brand9}
                    alt="Branding Design"
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 rounded-xl"
                  />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="col-span-2 row-span-3 col-start-4 row-start-4 aspect-auto overflow-hidden"
                >
                  <img
                    src={brand1}
                    alt="Branding Design"
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 rounded-xl"
                  />
                </motion.div>
              </div>
            </div>
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
                    src={brand3}
                    alt="Branding Design"
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
                    alt="Branding Design"
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
                    alt="Branding Design"
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
                    alt="Branding Design"
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
                    alt="Branding Design"
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
                    alt="Branding Design"
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
                    src={brand12}
                    alt="Branding Design"
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
                    src={brand6}
                    alt="Branding Design"
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
                  src={brand10}
                  alt="Branding Design"
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 rounded-xl"
                />
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl"></div>
      </div>
    </div>
  );
};

export default Branding;
