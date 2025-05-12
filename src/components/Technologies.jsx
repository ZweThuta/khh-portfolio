import { SiAdobephotoshop, SiAdobeillustrator } from "react-icons/si";
import { motion } from "framer-motion";
import { EDUCATION } from "../constants";

const iconVariants = (duration) => ({
  initial: { y: -10, opacity: 0 },
  animate: {
    y: [10, -10],
    opacity: 1,
    transition: {
      y: {
        duration: duration,
        ease: "easeInOut",
        repeat: Infinity,
        repeatType: "reverse",
      },
      opacity: {
        duration: 0.8,
      },
    },
  },
});

const softwareTools = [
  {
    name: "Adobe Photoshop",
    icon: <SiAdobephotoshop className="text-6xl lg:text-6xl text-[#31A8FF]" />,
    duration: 2.5,
    description: "Photo Editing & Digital Art",
  },
  {
    name: "Adobe Illustrator",
    icon: (
      <SiAdobeillustrator className="text-6xl lg:text-6xl text-[#FF9A00]" />
    ),
    duration: 3,
    description: "Vector Graphics & Illustrations",
  },
];

const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-32 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl"></div>
      </div>

      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl md:text-6xl font-bold"
      >
        <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-cyan-400 bg-clip-text text-transparent">
          Software & Skills
        </span>
      </motion.h1>

      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Software Tools Section */}
          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 50 }}
            transition={{ duration: 1 }}
            className="w-full backdrop-blur-sm bg-neutral-900/40 rounded-3xl p-8 border border-neutral-800/50 shadow-2xl"
          >
            <div className="relative">
              <h2 className="lg:text-3xl text-xl text-center mb-16 font-bold">
                <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                  Software Proficiency
                </span>
              </h2>
              <div className="absolute top-0 right-0 w-20 h-20 bg-purple-500/10 rounded-full blur-2xl"></div>
            </div>

            <div className="grid grid-cols-1 gap-8">
              {softwareTools.map((tool, index) => (
                <motion.div
                  key={index}
                  variants={iconVariants(tool.duration)}
                  initial="initial"
                  animate="animate"
                  className="group relative"
                >
                  <div className="relative flex items-center space-x-6 rounded-xl border border-neutral-700/50 bg-neutral-900/90 p-6 hover:border-neutral-600 transition-all duration-300 group-hover:scale-[1.02] group-hover:-translate-y-1">
                    <div className="flex-shrink-0">{tool.icon}</div>
                    <div>
                      <p className="lg:text-lg text-sm font-semibold text-white mb-1 bg-gradient-to-r from-white to-neutral-400 bg-clip-text text-transparent">
                        {tool.name}
                      </p>
                      <p className="lg:text-sm text-xs text-neutral-400">
                        {tool.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Education Background Section */}
          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 50 }}
            transition={{ duration: 1 }}
            className="w-full backdrop-blur-sm bg-neutral-900/40 rounded-3xl p-8 border border-neutral-800/50 shadow-2xl"
          >
            <div className="relative">
              <h2 className="lg:text-3xl text-lg text-center mb-16 font-bold">
                <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  Education Background
                </span>
              </h2>
              <div className="absolute top-0 left-0 w-20 h-20 bg-cyan-500/10 rounded-full blur-2xl"></div>
            </div>

            <div className="space-y-6">
              {EDUCATION.map((education, index) => (
                <motion.div
                  key={index}
                  whileInView={{ opacity: 1, x: 0 }}
                  initial={{ opacity: 0, x: 50 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group relative"
                >
                  <div className="relative p-6 rounded-xl border border-neutral-700/50 bg-neutral-900/90 hover:border-neutral-600 transition-all duration-300 group-hover:scale-[1.02] group-hover:-translate-y-1">
                    <div className="flex items-center justify-between mb-4">
                      <span className="lg:px-4 px-3 py-1.5 rounded-full text-sm font-medium bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                        {education.year}
                      </span>
                    </div>
                    <h6 className="lg:text-xl text-sm font-bold mb-2 bg-gradient-to-r from-white to-neutral-400 bg-clip-text text-transparent">
                      {education.role}
                    </h6>
                    <p className="lg:text-base text-sm text-cyan-400 hover:text-cyan-300 transition-colors duration-300">
                      {education.company}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Technologies;
