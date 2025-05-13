import { motion } from "framer-motion";
import pj1 from "../assets/social/sm5.png";
import pj2 from "../assets/social/SM6.png";
import pj3 from "../assets/social/sm7.png";
import pj4 from "../assets/social/sport1.png";
import pj5 from "../assets/social/sport2.png";
import pj6 from "../assets/social/thai1.jpeg";
import pj7 from "../assets/social/thai2.png";
import pj8 from "../assets/social/thai3.png";
import pj9 from "../assets/social/thai4.png";
import pj10 from "../assets/social/thai5.png";
import pj11 from "../assets/social/shampoo1.jpeg";
import pj12 from "../assets/social/shampoo2.jpeg";
import pj13 from "../assets/social/rhode1.jpeg";
import pj14 from "../assets/social/rhode22.jpeg";
import pj15 from "../assets/social/lip.png";

const Social = () => {
  return (
    <div className="min-h-screen relative overflow-hidden bg-neutral-900 pb-40">
      {/* Decorative background patterns */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Animated gradient circles */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{ duration: 20, repeat: Infinity }}
          className="absolute top-20 left-10 w-[500px] h-[500px] bg-blue-900/10 rounded-full blur-3xl"
        ></motion.div>
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [0, -90, 0],
          }}
          transition={{ duration: 20, repeat: Infinity }}
          className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-blue-800/10 rounded-full blur-3xl"
        ></motion.div>

        {/* Geometric pattern overlay */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,black,transparent)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_500px_at_50%_50%,rgba(30,64,175,0.05),transparent)]"></div>
        </div>
      </div>

      {/* Main content */}
      <div className="relative z-10 mb-20">
        <div className="h-screen flex flex-col items-center justify-center px-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-center"
          >
            {/* Main title with creative animation */}
            <div className="relative">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.8 }}
                className="text-4xl md:text-9xl font-black mb-6 relative z-10 tracking-tight"
              >
                <motion.span
                  initial={{ x: -100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 1, duration: 0.8 }}
                  className="inline-block bg-gradient-to-r from-blue-700 via-blue-500 to-blue-700 bg-clip-text text-transparent drop-shadow-sm relative"
                >
                  Social Media
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ delay: 1.8, duration: 0.8 }}
                    className="absolute -bottom-2 left-0 h-[2px] bg-gradient-to-r from-transparent via-blue-700/50 to-transparent"
                  ></motion.div>
                </motion.span>
                <br />
                <motion.span
                  initial={{ x: 100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 1.2, duration: 0.8 }}
                  className="inline-block bg-gradient-to-r from-blue-600 via-blue-400 to-blue-600 bg-clip-text text-transparent drop-shadow-sm relative"
                >
                  DESIGN
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ delay: 2, duration: 0.8 }}
                    className="absolute -bottom-2 left-0 h-[2px] bg-gradient-to-r from-transparent via-blue-600/50 to-transparent"
                  ></motion.div>
                </motion.span>
              </motion.h1>

              {/* Decorative circles */}
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 1.5, duration: 0.5 }}
                className="absolute -top-12 -right-12 w-32 h-32 border border-blue-700/20 rounded-full"
              >
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="absolute inset-1 border border-blue-600/20 rounded-full"
                ></motion.div>
              </motion.div>

              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 1.7, duration: 0.5 }}
                className="absolute -bottom-12 -left-12 w-32 h-32 border border-blue-800/20 rounded-full"
              >
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="absolute inset-1 border border-blue-700/20 rounded-full"
                ></motion.div>
              </motion.div>
            </div>

            {/* Enhanced Subtitle */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5, duration: 0.8 }}
              className="relative"
            >
              <motion.p className="text-xs md:text-2xl text-neutral-300 max-w-2xl mx-auto mb-12 font-light leading-relaxed tracking-wide">
                <span className="text-blue-400 font-medium">
                  Crafting impactful visuals
                </span>{" "}
                for engaging social media designs
              </motion.p>

              {/* Decorative line */}
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "100px" }}
                transition={{ delay: 2.2, duration: 0.8 }}
                className="h-px bg-gradient-to-r from-transparent via-blue-700/30 to-transparent mx-auto"
              ></motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Project Title and Description */}
      <div className="text-center mb-16 relative">
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-24 h-24 border border-blue-500/20 rounded-full"
        >
          <motion.div
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="absolute inset-2 border border-blue-400/20 rounded-full"
          ></motion.div>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-2xl md:text-6xl font-bold mb-6 relative"
        >
          <span className="bg-gradient-to-r from-blue-400 via-blue-500 to-blue-400 bg-clip-text text-transparent">
            Sports Marketing
          </span>

          <br />
          <span className="text-xl md:text-4xl text-neutral-300 font-medium">
            Social Media Design
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-neutral-400 lg:max-w-3xl max-w-xl mx-auto lg:text-lg text-sm leading-relaxed"
        >
          Elevating sports brands through dynamic social media content that captures the energy and passion of athletic excellence. From game highlights to brand storytelling, create engaging visuals that connect with fans and drive engagement.
        </motion.p>

        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: "100px" }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent mx-auto mt-8"
        ></motion.div>
      </div>

      {/* Project Display Section */}
      <div className="space-y-3 mx-4 md:mx-10">
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
                src={pj1}
                alt="Social Media Design"
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
                src={pj2}
                alt="Social Media Design"
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 rounded-xl"
              />
            </motion.div>
          </div>
        </div>
        
        {/* Second Row */}
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-6 grid-rows-3 gap-2 mb-60">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="col-span-1 sm:col-span-1 md:col-span-2 row-span-3 aspect-auto overflow-hidden"
            >
              <img
                src={pj3}
                alt="Social Media Design"
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 rounded-xl"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="col-span-1 sm:col-span-1 md:col-span-2 md:col-start-3 row-span-3 aspect-auto overflow-hidden"
            >
              <img
                src={pj4}
                alt="Social Media Design"
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 rounded-xl"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="col-span-1 sm:col-span-1 md:col-span-2 md:col-start-5 row-span-3 aspect-auto overflow-hidden"
            >
              <img
                src={pj5}
                alt="Social Media Design"
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 rounded-xl"
              />
            </motion.div>
          </div>
        </div>

        {/* Project Title and Description */}
      <div className="text-center relative">
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-24 h-24 border border-blue-500/20 rounded-full"
        >
          <motion.div
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="absolute inset-2 border border-blue-400/20 rounded-full"
          ></motion.div>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-2xl md:text-6xl font-bold mb-6 relative"
        >
          <span className="bg-gradient-to-r from-blue-500 via-blue-800 to-blue-400 bg-clip-text text-transparent">
            Education & Language
          </span>

          <br />
          <span className="text-xl md:text-4xl text-neutral-300 font-medium">
            Social Media Design
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-neutral-400 lg:max-w-3xl max-w-xl mx-auto lg:text-lg text-sm leading-relaxed"
        >
          Creating engaging educational content that makes learning accessible and enjoyable.
        </motion.p>

        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: "100px" }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent mx-auto mt-8"
        ></motion.div>
      </div>
        {/* Third Row */}
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-6 grid-rows-3 mt-10 gap-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="col-span-1 sm:col-span-1 md:col-span-2 row-span-3 aspect-auto overflow-hidden"
            >
              <img
                src={pj6}
                alt="Social Media Design"
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 rounded-xl"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="col-span-1 sm:col-span-1 md:col-span-2 md:col-start-3 row-span-3 aspect-auto overflow-hidden"
            >
              <img
                src={pj7}
                alt="Social Media Design"
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 rounded-xl"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="col-span-1 sm:col-span-1 md:col-span-2 md:col-start-5 row-span-3 aspect-auto overflow-hidden"
            >
              <img
                src={pj8}
                alt="Social Media Design"
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 rounded-xl"
              />
            </motion.div>
          </div>
        </div>
        {/* Fourth Row */}
        <div>
          <div className="grid grid-cols-1 md:grid-cols-6 grid-rows-5 gap-4 mb-60">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="col-span-1 md:col-span-3 row-span-5 aspect-auto overflow-hidden"
            >
              <img
                src={pj9}
                alt="Social Media Design"
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
                src={pj10}
                alt="Social Media Design"
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 rounded-xl"
              />
            </motion.div>
          </div>
        </div>
            {/* Project Title and Description */}
      <div className="text-center relative">
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-24 h-24 border border-blue-500/20 rounded-full"
        >
          <motion.div
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="absolute inset-2 border border-blue-400/20 rounded-full"
          ></motion.div>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-2xl md:text-6xl font-bold mb-6 relative"
        >
          <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-blue-400 bg-clip-text text-transparent">
            Beauty & Skincare
          </span>

          <br />
          <span className="text-xl md:text-4xl text-neutral-300 font-medium">
            Social Media Design
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-neutral-400 lg:max-w-3xl max-w-xl mx-auto lg:text-lg text-sm leading-relaxed"
        >
          Crafting captivating beauty content that showcases products in their best light. 
        </motion.p>

        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: "100px" }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="h-px bg-gradient-to-r from-transparent via-pink-500/30 to-transparent mx-auto mt-8"
        ></motion.div>
      </div>
        {/* Fifth Row */}
        <div className="grid grid-cols-1 md:grid-cols-5 grid-rows-5 gap-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="col-span-1 md:col-span-2 row-span-5 aspect-auto overflow-hidden mt-10"
          >
            <img
              src={pj13}
              alt="Social Media Design"
              className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 rounded-xl"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="col-span-1 md:col-span-3 md:col-start-3 row-span-5 aspect-auto overflow-hidden mt-10"
          >
            <img
              src={pj14}
              alt="Social Media Design"
              className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 rounded-xl"
            />
          </motion.div>
        </div>
        {/* Sixth Row */}
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-6 grid-rows-3 gap-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="col-span-1 sm:col-span-1 md:col-span-2 row-span-3 aspect-auto overflow-hidden"
            >
              <img
                src={pj11}
                alt="Social Media Design"
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 rounded-xl"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="col-span-1 sm:col-span-1 md:col-span-2 md:col-start-3 row-span-3 aspect-auto overflow-hidden"
            >
              <img
                src={pj12}
                alt="Social Media Design"
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 rounded-xl"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="col-span-1 sm:col-span-1 md:col-span-2 md:col-start-5 row-span-3 aspect-auto overflow-hidden"
            >
              <img
                src={pj15}
                alt="Social Media Design"
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 rounded-xl"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Social;
