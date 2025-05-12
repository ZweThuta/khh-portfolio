import { motion } from "framer-motion";
import { PROJECTS } from "../constants";
import Branding from "./Branding";

const Projects = () => {
  return (
    <div>
      <div className="min-h-screen relative overflow-hidden bg-neutral-900 rounded-lg">
        {/* Decorative background patterns */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Gradient circles */}
          <div className="absolute top-20 left-10 w-96 h-96 bg-blue-900/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-900/10 rounded-full blur-3xl"></div>

          {/* Grid pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,black,transparent)]"></div>
        </div>

        {/* Main content */}
        <div className="relative z-10">
          {/* Hero section */}
          <div className="h-screen flex flex-col items-center justify-center px-4">
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="text-center"
            >
              {/* Main title */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.8 }}
                className="text-4xl md:text-8xl font-bold mb-6"
              >
                <span className="inline-block bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-400 bg-clip-text text-transparent">
                  Branding
                </span>
                <span className="inline-block ml-4 text-neutral-400">&</span>
                <br />
                <span className="inline-block bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-400 bg-clip-text text-transparent">
                  Logo Design
                </span>
              </motion.h1>

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
            </motion.div>
          </div>
        </div>
      </div>
      <div>
        <Branding />
        {/* Project Display Section */}
        <div className="min-h-screen bg-neutral-900 py-20 px-4 relative">
          <div className="max-w-7xl mx-auto">
            {PROJECTS.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="mb-32"
              >
                {/* Project Title and Description */}
                <div className="text-center mb-16">
                  <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-[#F0C9A6] via-[#883F21] to-[#4A2C18] bg-clip-text text-transparent"
                  >
                    {project.title}
                  </motion.h2>
                  <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-neutral-400 lg:max-w-3xl max-w-xl text-xs mx-auto lg:text-lg"
                  >
                    {project.description}
                  </motion.p>
                </div>

                {/* Image Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-8xl mx-auto">
                  {/* First Column - Vertical Images */}
                  <div className="flex flex-col gap-8">
                    {[project.image.oval, project.image.oval2].map(
                      (img, imgIndex) => (
                        <motion.div
                          key={imgIndex}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.6, delay: imgIndex * 0.2 }}
                          className="group relative overflow-hidden rounded-2xl"
                        >
                          {/* Hover Effect Overlay */}
                          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-neutral-900/50 to-neutral-900 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>

                          {/* Image */}
                          <div className="relative aspect-[4/3] overflow-hidden">
                            <img
                              src={img}
                              alt={`${project.title} design ${imgIndex + 1}`}
                              className="w-full h-full object-cover object-center transform group-hover:scale-110 transition-transform duration-500"
                            />
                          </div>

                          {/* Hover Content */}
                          <div className="absolute inset-0 flex items-end p-6 z-20">
                            <div className="text-white opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                              <h3 className="text-lg font-semibold">
                                Color Palette & Typography
                              </h3>
                            </div>
                          </div>
                        </motion.div>
                      )
                    )}
                  </div>

                  {/* Second Column - Single Tall Image */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="group relative overflow-hidden rounded-2xl h-full"
                  >
                    {/* Hover Effect Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-neutral-900/50 to-neutral-900 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>

                    {/* Image */}
                    <div className="relative h-full">
                      <img
                        src={project.image.oval3}
                        alt={`${project.title} design 3`}
                        className="w-full h-full object-cover object-center transform group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>

                    {/* Hover Content */}
                    <div className="absolute inset-0 flex items-end p-6 z-20">
                      <div className="text-white opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                        <h3 className="text-lg font-semibold">
                          Oval Shop Logo
                        </h3>
                        {/* <p className="text-sm text-neutral-300">
                        Click to view details
                      </p> */}
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Background Elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-1/4 left-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-pink-500/5 rounded-full blur-3xl"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
