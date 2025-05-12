import { motion } from "framer-motion";
import typo1 from "../assets/typo/typo1.jpeg";
import typo2 from "../assets/typo/typo2.png";
import typo3 from "../assets/typo/typo3.png";
import typo4 from "../assets/typo/typo5.png";
import typo5 from "../assets/typo/typo6.png";
import typo6 from "../assets/typo/typo7.png";
import typo7 from "../assets/typo/typo11.jpeg";
import typo8 from "../assets/typo/yuniqproject-11.png";
import typo9 from "../assets/typo/yuniqproject-15.png";
import typo10 from "../assets/typo/typo10.jpeg";

const Typo = () => {
  return (
    <div className="min-h-screen relative overflow-hidden bg-neutral-900">
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
      <div className="relative z-10">
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
                  className="inline-block bg-gradient-to-r from-gray-200 via-white to-gray-400 bg-clip-text text-transparent drop-shadow-[0_2px_16px_rgba(255,255,255,0.25)] relative"
                  style={{
                    textShadow:
                      "0 2px 24px rgba(255,255,255,0.18), 0 1px 0 #fff",
                  }}
                >
                  Typography
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ delay: 1.8, duration: 0.8 }}
                    className="absolute -bottom-2 left-0 h-[2px] bg-gradient-to-r from-transparent via-gray-300/50 to-transparent"
                  ></motion.div>
                </motion.span>
                <br />
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
                  Exploring the art of type
                </span>{" "}
                through experimental typography design and visual expression
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

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
        >
          <div className="flex flex-col items-center">
            <span className="text-neutral-500 text-sm mb-2">
              Scroll to explore
            </span>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-6 h-10 border-2 border-neutral-500 rounded-full flex justify-center p-2"
            >
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="w-1 h-1 bg-neutral-500 rounded-full"
              ></motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
      <div>
        {/* Project Display Section */}
        <div className="max-w-[90rem] mx-auto px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12">
            {/* Project 1 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="group relative overflow-hidden rounded-xl bg-neutral-800/50 backdrop-blur-sm"
            >
              <div className="aspect-w-4 aspect-h-3 overflow-hidden">
                <img
                  src={typo1}
                  alt="Typography Design 1"
                  className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            </motion.div>

            {/* Project 2 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="group relative overflow-hidden rounded-xl bg-neutral-800/50 backdrop-blur-sm"
            >
              <div className="aspect-w-4 aspect-h-3 overflow-hidden">
                <img
                  src={typo2}
                  alt="Typography Design 2"
                  className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            </motion.div>

            {/* Project 3 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="group relative overflow-hidden rounded-xl bg-neutral-800/50 backdrop-blur-sm"
            >
              <div className="aspect-w-4 aspect-h-3 overflow-hidden">
                <img
                  src={typo3}
                  alt="Typography Design 3"
                  className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            </motion.div>

            {/* Project 4 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="group relative overflow-hidden rounded-xl bg-neutral-800/50 backdrop-blur-sm"
            >
              <div className="aspect-w-4 aspect-h-3 overflow-hidden">
                <img
                  src={typo4}
                  alt="Typography Design 4"
                  className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            </motion.div>

            {/* Project 5 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="group relative overflow-hidden rounded-xl bg-neutral-800/50 backdrop-blur-sm"
            >
              <div className="aspect-w-4 aspect-h-3 overflow-hidden">
                <img
                  src={typo5}
                  alt="Typography Design 5"
                  className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            </motion.div>

            {/* Project 6 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="group relative overflow-hidden rounded-xl bg-neutral-800/50 backdrop-blur-sm"
            >
              <div className="aspect-w-4 aspect-h-3 overflow-hidden">
                <img
                  src={typo6}
                  alt="Typography Design 6"
                  className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            </motion.div>

            {/* Project 7 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="group relative overflow-hidden rounded-xl bg-neutral-800/50 backdrop-blur-sm"
            >
              <div className="aspect-w-4 aspect-h-3 overflow-hidden">
                <img
                  src={typo7}
                  alt="Typography Design 7"
                  className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            </motion.div>

            {/* Project 8 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="group relative overflow-hidden rounded-xl bg-neutral-800/50 backdrop-blur-sm"
            >
              <div className="aspect-w-4 aspect-h-3 overflow-hidden">
                <img
                  src={typo8}
                  alt="Typography Design 8"
                  className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            </motion.div>

            {/* Project 9 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="group relative overflow-hidden rounded-xl bg-neutral-800/50 backdrop-blur-sm"
            >
              <div className="aspect-w-4 aspect-h-3 overflow-hidden">
                <img
                  src={typo9}
                  alt="Typography Design 9"
                  className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            </motion.div>

            {/* Project 10 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="group relative overflow-hidden rounded-xl bg-neutral-800/50 backdrop-blur-sm"
            >
              <div className="aspect-w-4 aspect-h-3 overflow-hidden">
                <img
                  src={typo10}
                  alt="Typography Design 9"
                  className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Typo;
