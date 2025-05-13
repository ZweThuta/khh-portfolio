import { motion } from "framer-motion";
import brand1 from "../assets/branding/OV-01.png";
import brand2 from "../assets/branding/OV-02.png";
import brand3 from "../assets/branding/OV-03.png";
import brand4 from "../assets/branding/OV-04.png";
import brand5 from "../assets/branding/OV-05.png";
import brand6 from "../assets/branding/OV-06.png";
import brand7 from "../assets/branding/OV-07.png";
import brand8 from "../assets/branding/OV-08.png";


const Branding2 = () => {
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
              <span className="bg-gradient-to-r from-amber-800 via-amber-700 to-amber-900 bg-clip-text text-transparent">
              Oval Shop
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
             Oval Shop Furniture Design is a family-owned Swedish company. 
             The design approach focuses on a diverse color palette and simple typography. 
             The color scheme is inspired by natural tones, creating a harmonious and timeless aesthetic.
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
                src={brand1}
                alt="Branding Design"
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
                src={brand2}
                alt="Branding Design"
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
                src={brand3}
                alt="Branding Design"
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
                src={brand4}
                alt="Branding Design"
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
                src={brand5}
                alt="Branding Design"
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
                src={brand6}
                alt="Branding Design"
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
                src={brand7}
                alt="Branding Design"
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
                src={brand8}
                alt="Branding Design"
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
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl"></div>
      </div>
    </div>
  );
};

export default Branding2;
