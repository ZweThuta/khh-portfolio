import { motion } from "framer-motion";
import Branding from "./Branding";
import Branding2 from "./Branding2";
import Branding3 from "./Branding3";

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
        <Branding3/>
        <Branding />
        <Branding2/>
      </div>
    </div>
  );
};

export default Projects;
