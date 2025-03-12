import { HERO_CONTENT } from "../constants";
import profilePic from "../assets/profile.jpg";
import { motion } from "motion/react";

const container = (delay) => ({
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.7, delay: delay, ease: "easeOut" },
  },
});

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center border-b border-neutral-700/30 py-16 lg:py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap flex-row items-center">
          <div className="w-full lg:w-1/2 lg:pl-20">
            <div className="flex flex-col items-center lg:items-start space-y-6">
              <motion.div
                variants={container(0)}
                initial="hidden"
                animate="visible"
                className="relative"
              >
                <span className="text-sm font-medium text-purple-500 tracking-wider uppercase mb-4 block">
                  Welcome to my portfolio
                </span>
                <h1 className="pb-4 text-4xl font-bold text-white tracking-tight lg:text-6xl">
                  Khin Htet Hlaing
                </h1>
              </motion.div>

              <motion.span
                variants={container(0.3)}
                initial="hidden"
                animate="visible"
                className="lg:text-3xl text-xl font-semibold tracking-tight"
              >
                <span className="bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-400 bg-clip-text text-transparent">
                  Graphic Designer & Freelancer
                </span>
              </motion.span>

              <motion.p
                variants={container(0.6)}
                initial="hidden"
                animate="visible"
                className="lg:text-lg lg:max-w-4xl max-w-lg text-sm  leading-relaxed text-neutral-300 text-justify bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10 shadow-xl"
              >
                {HERO_CONTENT}
              </motion.p>

              <motion.div
                variants={container(0.9)}
                initial="hidden"
                animate="visible"
                className="flex gap-4 mt-8"
              >
                
              </motion.div>
            </div>
          </div>

          <div className="w-full lg:w-1/2 mt-12 lg:mt-0">
            <div className="flex justify-center">
              <motion.div
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.5 }}
                className="relative"
              >
                <div className="absolute -inset-4 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-2xl blur-2xl opacity-30"></div>
                <img
                  src={profilePic}
                  width={400}
                  className="rounded-2xl relative z-10"
                  alt="profile picture"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
