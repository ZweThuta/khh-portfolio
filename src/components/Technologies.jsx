import { SiAdobephotoshop, SiAdobeillustrator } from "react-icons/si";
import { MdBrush, MdDesignServices, MdBrandingWatermark, MdPalette } from "react-icons/md";
import { FaBoxOpen, FaPortrait, FaPencilRuler, FaRegImage } from "react-icons/fa";
import { BsVectorPen } from "react-icons/bs";
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
      }
    },
  },
});

const softwareTools = [
  { 
    name: "Adobe Photoshop", 
    icon: <SiAdobephotoshop className="text-6xl lg:text-6xl text-[#31A8FF]" />, 
    duration: 2.5,
    description: "Photo Editing & Digital Art"
  },
  { 
    name: "Adobe Illustrator", 
    icon: <SiAdobeillustrator className="text-6xl lg:text-6xl text-[#FF9A00]" />, 
    duration: 3,
    description: "Vector Graphics & Illustrations"
  },
];

const designSkills = [
  { 
    name: "Digital Illustration", 
    icon: <MdBrush className="text-3xl lg:text-4xl" />, 
    duration: 2,
    color: "from-purple-400 to-purple-600"
  },
  { 
    name: "Graphic Design", 
    icon: <MdDesignServices className="text-3xl lg:text-4xl" />, 
    duration: 2.5,
    color: "from-cyan-400 to-cyan-600"
  },
  { 
    name: "Branding & Logo", 
    icon: <MdBrandingWatermark className="text-4xl lg:text-6xl text-pink-400" />, 
    duration: 3 
  },
  { 
    name: "Packaging Design", 
    icon: <FaBoxOpen className="text-4xl lg:text-6xl text-amber-400" />, 
    duration: 2.8 
  },
  { 
    name: "Portrait Art", 
    icon: <FaPortrait className="text-4xl lg:text-6xl text-rose-400" />, 
    duration: 2.3 
  },
  { 
    name: "Isometric Design", 
    icon: <FaPencilRuler className="text-4xl lg:text-6xl text-blue-400" />, 
    duration: 2.7 
  },
  { 
    name: "Mascot Design", 
    icon: <BsVectorPen className="text-4xl lg:text-6xl text-green-400" />, 
    duration: 3.2 
  },
  { 
    name: "Social Media Design", 
    icon: <MdPalette className="text-4xl lg:text-6xl text-indigo-400" />, 
    duration: 2.4 
  },
  { 
    name: "Poster Design", 
    icon: <FaRegImage className="text-4xl lg:text-6xl text-yellow-400" />, 
    duration: 2.6 
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
        className="my-20 text-center text-5xl md:text-6xl font-bold"
      >
        <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-cyan-400 bg-clip-text text-transparent">
          Software & Skills
        </span>
      </motion.h1>

      <div className="flex flex-col lg:flex-row items-start justify-between gap-12 max-w-7xl mx-auto px-4">
        {/* Left Column: Software Proficiency and Education Background */}
        <div className="w-full lg:w-1/2 flex flex-col gap-12">
          {/* Software Tools Section */}
          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 50 }}
            transition={{ duration: 1 }}
            className="w-full backdrop-blur-sm bg-neutral-900/40 rounded-3xl p-8 border border-neutral-800/50 shadow-2xl"
          >
            <div className="relative">
              <h2 className="text-3xl text-center mb-16 font-bold">
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
                    <div className="flex-shrink-0">
                      {tool.icon}
                    </div>
                    <div>
                      <p className="text-lg font-semibold text-white mb-1 bg-gradient-to-r from-white to-neutral-400 bg-clip-text text-transparent">
                        {tool.name}
                      </p>
                      <p className="text-sm text-neutral-400">{tool.description}</p>
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
              <h2 className="text-3xl text-center mb-16 font-bold">
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
                      <span className="px-4 py-1.5 rounded-full text-sm font-medium bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                        {education.year}
                      </span>
                    </div>
                    <h6 className="text-xl font-bold mb-2 bg-gradient-to-r from-white to-neutral-400 bg-clip-text text-transparent">
                      {education.role}
                    </h6>
                    <p className="text-base text-cyan-400 hover:text-cyan-300 transition-colors duration-300">
                      {education.company}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Right Column: Design Skills */}
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 50 }}
          transition={{ duration: 1 }}
          className="w-full lg:w-1/2 backdrop-blur-sm bg-neutral-900/40 rounded-3xl p-8 border border-neutral-800/50 shadow-2xl"
        >
          <div className="relative">
            <h2 className="text-3xl text-center mb-16 font-bold">
              <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                Design Skills
              </span>
            </h2>
            <div className="absolute top-0 right-0 w-20 h-20 bg-pink-500/10 rounded-full blur-2xl"></div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {designSkills.map((skill, index) => (
              <motion.div
                key={index}
                variants={iconVariants(skill.duration)}
                initial="initial"
                animate="animate"
                className="group"
              >
                <div className="relative">
                  <div className={`absolute -inset-1 bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-20 rounded-xl transition-all duration-300 blur-xl`}></div>
                  <div className="relative rounded-xl border border-neutral-700/50 bg-neutral-900/90 p-6 hover:border-neutral-600 transition-all duration-300 backdrop-blur-sm group-hover:scale-[1.02] group-hover:-translate-y-1">
                    <div className={`bg-gradient-to-br ${skill.color} p-3 rounded-lg inline-block mb-4 shadow-lg`}>
                      {skill.icon}
                    </div>
                    <p className="font-semibold text-base bg-gradient-to-r from-white to-neutral-400 bg-clip-text text-transparent group-hover:from-white group-hover:to-white transition-all duration-300">
                      {skill.name}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Technologies;
