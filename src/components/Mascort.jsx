import { motion } from "framer-motion";
import mas1 from "../assets/mascort/mas1.png";
import mas2 from "../assets/mascort/mas2.png";

const Mascort = () => {
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
          className="absolute top-20 left-10 w-[500px] h-[500px] bg-green-500/10 rounded-full blur-3xl"
        ></motion.div>
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [0, -90, 0],
          }}
          transition={{ duration: 20, repeat: Infinity }}
          className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-3xl"
        ></motion.div>

        {/* Geometric pattern overlay */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,black,transparent)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_500px_at_50%_50%,rgba(34,197,94,0.05),transparent)]"></div>
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
              {/* Background decorative elements */}
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="absolute -top-20 -left-20 w-40 h-40 bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-full blur-2xl"
              ></motion.div>
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.7, duration: 0.8 }}
                className="absolute -bottom-20 -right-20 w-40 h-40 bg-gradient-to-l from-green-500/10 to-emerald-500/10 rounded-full blur-2xl"
              ></motion.div>

              {/* Main title */}
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
                  className="inline-block bg-gradient-to-r from-green-300 via-emerald-400 to-green-300 bg-clip-text text-transparent drop-shadow-sm relative"
                >
                  Mascot
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ delay: 1.8, duration: 0.8 }}
                    className="absolute -bottom-2 left-0 h-[2px] bg-gradient-to-r from-transparent via-green-400/50 to-transparent"
                  ></motion.div>
                </motion.span>
                <br />
                <motion.span
                  initial={{ x: 100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 1.2, duration: 0.8 }}
                  className="inline-block bg-gradient-to-r from-emerald-300 via-green-400 to-emerald-300 bg-clip-text text-transparent drop-shadow-sm relative"
                >
                  Design
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ delay: 2, duration: 0.8 }}
                    className="absolute -bottom-2 left-0 h-[2px] bg-gradient-to-r from-transparent via-emerald-400/50 to-transparent"
                  ></motion.div>
                </motion.span>
              </motion.h1>

              {/* Decorative circles */}
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 1.5, duration: 0.5 }}
                className="absolute -top-12 -right-12 w-32 h-32 border border-green-500/20 rounded-full"
              >
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="absolute inset-1 border border-green-500/20 rounded-full"
                ></motion.div>
              </motion.div>
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 1.7, duration: 0.5 }}
                className="absolute -bottom-12 -left-12 w-32 h-32 border border-emerald-500/20 rounded-full"
              >
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="absolute inset-1 border border-emerald-500/20 rounded-full"
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
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "100px" }}
                transition={{ delay: 2.2, duration: 0.8 }}
                className="absolute -top-6 left-1/2 transform -translate-x-1/2 h-[1px] bg-gradient-to-r from-transparent via-green-500/30 to-transparent"
              ></motion.div>
              <motion.p className="text-xs md:text-2xl text-neutral-300 max-w-2xl mx-auto mb-12 font-light leading-relaxed tracking-wide">
                <span className="text-green-400 font-medium">
                  Bringing characters to life
                </span>{" "}
                through creative and memorable mascot designs
              </motion.p>

              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "100px" }}
                transition={{ delay: 2.2, duration: 0.8 }}
                className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 h-[1px] bg-gradient-to-r from-transparent via-green-500/30 to-transparent"
              ></motion.div>
            </motion.div>
          </motion.div>
        </div>

        {/* Project Display Section */}
        <div className="min-h-screen bg-neutral-900 py-20 px-4 relative">
          <div className="max-w-7xl mx-auto">
            {/* Project Title and Description */}
            <div className="text-center mb-16 relative">
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-24 h-24 border border-green-500/20 rounded-full"
              ></motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-2xl md:text-5xl font-bold mb-8 relative"
              >
                <span className="bg-gradient-to-r from-yellow-300 via-yellow-300 to-yellow-400 bg-clip-text text-transparent">
                  The Heartwarming Mascot of YKKO
                </span>

                <br />
                <span className="text-xl md:text-4xl text-neutral-400">
                  Mascort Design
                </span>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-neutral-400 max-w-3xl mx-auto lg:text-lg text-xs leading-relaxed"
              >
                This vibrant mascot design for YKKO embodies warmth,
                hospitality, and the brand's rich legacy. Featuring a cheerful
                green bear dressed as a friendly chef, the character symbolizes
                quality service and dedication to customer satisfaction.
              </motion.p>
            </div>
            {/* Image Grid Layout - Horizontal */}
            <div className="flex flex-col space-y-16">
              {/* First Row */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="relative"
              >
                <div className="flex flex-col md:flex-row gap-8 items-center">
                  {/* Image Container */}
                  <div className="w-full md:w-2/3 lg:w-3/4">
                    <div className="group relative overflow-hidden rounded-2xl bg-neutral-800/50">
                      <div className="relative aspect-[16/9] overflow-hidden">
                        <img
                          src={mas1}
                          alt="YKKO Mascot Front View"
                          className="w-full h-full object-contain object-center transform group-hover:scale-105 transition-transform duration-700"
                        />
                        {/* Overlay gradient */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      </div>
                      {/* Decorative elements */}
                      <motion.div
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        transition={{ delay: 0.3, duration: 0.5 }}
                        className="absolute -top-4 -right-4 w-20 h-20 border border-green-500/20 rounded-full"
                      >
                        <div className="absolute inset-1 border border-green-500/20 rounded-full"></div>
                      </motion.div>
                    </div>
                  </div>
                  {/* Text Content */}
                  <div className="w-full md:w-1/3 lg:w-1/4 text-left">
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 0.3 }}
                    >
                      <h3 className="lg:text-2xl text-xl font-bold bg-gradient-to-r from-yellow-300 to-amber-200 bg-clip-text text-transparent mb-4">
                        {" "}
                        Primary View Design
                      </h3>
                      <p className="text-neutral-400 text-sm leading-relaxed">
                        Showcasing the mascot's friendly and welcoming
                        personality, with carefully crafted details that bring
                        the character to life.
                      </p>
                    </motion.div>
                  </div>
                </div>
              </motion.div>

              {/* Second Row */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="relative"
              >
                <div className="flex flex-col md:flex-row-reverse gap-8 items-center">
                  {/* Image Container */}
                  <div className="w-full md:w-2/3 lg:w-3/4">
                    <div className="group relative overflow-hidden rounded-2xl bg-neutral-800/50">
                      <div className="relative aspect-[16/9] overflow-hidden">
                        <img
                          src={mas2}
                          alt="YKKO Mascot Side View"
                          className="w-full h-full object-contain object-center transform group-hover:scale-105 transition-transform duration-700"
                        />
                        {/* Overlay gradient */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      </div>
                      {/* Decorative elements */}
                      <motion.div
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        transition={{ delay: 0.3, duration: 0.5 }}
                        className="absolute -top-4 -left-4 w-20 h-20 border border-green-500/20 rounded-full"
                      >
                        <div className="absolute inset-1 border border-green-500/20 rounded-full"></div>
                      </motion.div>
                    </div>
                  </div>
                  {/* Text Content */}
                  <div className="w-full md:w-1/3 lg:w-1/4 text-left md:text-right">
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 0.3 }}
                    >
                      <h3 className="lg:text-2xl text-xl font-bold bg-gradient-to-r from-yellow-300 to-amber-200 bg-clip-text text-transparent mb-4">
                        Secondary View Design
                      </h3>
                      <p className="text-neutral-400 text-sm leading-relaxed">
                        Highlighting the mascot's dynamic and expressive
                        character through distinctive poses and engaging
                        gestures.
                      </p>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Additional decorative elements */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="mt-16 h-px bg-gradient-to-r from-transparent via-green-500/20 to-transparent"
            ></motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mascort;
