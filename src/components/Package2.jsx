import { motion } from "framer-motion";
import package1 from "../assets/package/package4.jpg";
import package2 from "../assets/package/package5.png";
import package3 from "../assets/package/package7.png";

const Package2 = () => {
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
              <span className="bg-gradient-to-r from-orange-400 via-orange-500 to-red-400 bg-clip-text text-transparent">
                Jana Pure Ceylon Tea
              </span>

              <br />
              <span className="text-xl md:text-4xl text-neutral-400">
                Packaging Design
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-neutral-400 lg:max-w-3xl text-xs max-w-xl mx-auto lg:text-lg leading-relaxed"
            >
              This vibrant packaging design for Jana Pure Ceylon Tea embodies
              the essence of organic purity and premium quality. The warm orange
              tones create an inviting aesthetic, while the minimalist landscape
              illustration evokes a sense of tranquility and tradition. The tea
              pot and cup imagery symbolize warmth and comfort, reinforcing the
              brand's heritage. The modern yet natural design ensures shelf
              appeal while effectively communicating the product's authenticity
              and richness.
            </motion.p>
          </div>

          {/* Image Grid - Three Images in a Row Layout */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {/* First Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="group relative overflow-hidden rounded-xl bg-neutral-800/50"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={package3}
                  alt="Jana Pure Ceylon Tea Package"
                  className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-x-0 bottom-0 p-3 md:p-4 bg-gradient-to-t from-black/90 to-transparent">
                  {/* <p className="text-white text-sm md:text-base font-medium">Front View </p> */}
                </div>
              </div>
            </motion.div>

            {/* Second Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="group relative overflow-hidden rounded-xl bg-neutral-800/50"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={package2}
                  alt="Jana Pure Ceylon Tea Display"
                  className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-x-0 bottom-0 p-3 md:p-4 bg-gradient-to-t from-black/90 to-transparent">
                  {/* <p className="text-white text-sm md:text-base font-medium">Side View Display</p> */}
                </div>
              </div>
            </motion.div>

            {/* Third Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="group relative overflow-hidden rounded-xl bg-neutral-800/50 sm:col-span-2 lg:col-span-1"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={package1}
                  alt="Jana Pure Ceylon Tea Details"
                  className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-x-0 bottom-0 p-3 md:p-4 bg-gradient-to-t from-black/90 to-transparent">
                  {/* <p className="text-white text-sm md:text-base font-medium">Package Details</p> */}
                </div>
              </div>
            </motion.div>
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

export default Package2;
