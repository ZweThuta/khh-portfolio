import { motion } from "framer-motion";
import art1 from "../assets/illu/iso3.jpg";
import art2 from "../assets/illu/iso2.png";


const Flat = () => {
  return (
    <div className="min-h-screen relative overflow-hidden bg-neutral-900">
      {/* Decorative background patterns */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Animated gradient circles */}
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0]
          }}
          transition={{ duration: 20, repeat: Infinity }}
          className="absolute top-20 left-10 w-[500px] h-[500px] bg-pink-300/10 rounded-full blur-3xl"
        ></motion.div>
        <motion.div
          animate={{ 
            scale: [1.2, 1, 1.2],
            rotate: [0, -90, 0]
          }}
          transition={{ duration: 20, repeat: Infinity }}
          className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-yellow-300/10 rounded-full blur-3xl"
        ></motion.div>
        
        {/* Geometric pattern overlay */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,black,transparent)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_500px_at_50%_50%,rgba(253,224,71,0.05),transparent)]"></div>
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
                  className="inline-block bg-gradient-to-r from-pink-300 via-pink-200 to-pink-400 bg-clip-text text-transparent drop-shadow-sm relative"
                >
                  FLAT
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ delay: 1.8, duration: 0.8 }}
                    className="absolute -bottom-2 left-0 h-[2px] bg-gradient-to-r from-transparent via-pink-400/50 to-transparent"
                  ></motion.div>
                </motion.span>
                <br />
                <motion.span
                  initial={{ x: 100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 1.2, duration: 0.8 }}
                  className="inline-block uppercase bg-gradient-to-r from-pink-300 via-pink-400 to-pink-200 bg-clip-text text-transparent drop-shadow-sm relative"
                >
                  illustration
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ delay: 2, duration: 0.8 }}
                    className="absolute -bottom-2 left-0 h-[2px] bg-gradient-to-r from-transparent via-yellow-300/50 to-transparent"
                  ></motion.div>
                </motion.span>
              </motion.h1>

              {/* Decorative circles */}
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 1.5, duration: 0.5 }}
                className="absolute -top-12 -right-12 w-32 h-32 border border-pink-300/20 rounded-full"
              >
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="absolute inset-1 border border-pink-300/20 rounded-full"
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
              <motion.p
                className="text-xs md:text-2xl text-neutral-300 max-w-2xl mx-auto mb-12 font-light leading-relaxed tracking-wide"
              >
                <span className="text-pink-300 font-medium">Creating depth and dimension</span>{" "}
                through innovative isometric illustrations
              </motion.p>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Project Display Section */}
      <div className="min-h-screen bg-neutral-900 py-20 px-4 relative">
        <div className="max-w-7xl mx-auto">
          {/* Flex container for horizontal layout */}
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
            {/* Image Display - Left Side */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="w-full lg:w-2/3"
            >
              <div className="group relative overflow-hidden rounded-2xl bg-neutral-800/50">
                <div className="relative  overflow-hidden">
                  <img 
                    src={art1} 
                    alt="Flat Design" 
                    className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-700"
                  />
                  {/* Hover overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                
                {/* Decorative elements */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                  className="absolute -top-4 -right-4 w-20 h-20 border border-pink-300/20 rounded-full"
                >
                  <div className="absolute inset-1 border border-yellow-200/20 rounded-full"></div>
                </motion.div>
              </div>
            </motion.div>

            {/* Content - Right Side */}
            <div className="w-full lg:w-1/3">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-left"
              >
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="text-2xl md:text-4xl font-bold mb-6 relative"
                >
                  <span className="bg-gradient-to-r from-pink-300 via-pink-200 to-pink-300 bg-clip-text text-transparent">
                  Flat Illustration
                  </span>
                </motion.h2>

                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="text-neutral-400 text-sm md:text-base leading-relaxed"
                >
                 The train  across the city in the evening as evening as everyone go back home and the sun slowly sets allowing us to see the sunset.
                </motion.p>

                {/* Decorative line */}
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  className="h-px bg-gradient-to-r from-pink-300/20 to-transparent mt-6"
                ></motion.div>
              </motion.div>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12 mt-20">
             {/* Content - Right Side */}
             <div className="w-full lg:w-1/3">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-left"
              >
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="text-2xl md:text-4xl font-bold mb-6 relative"
                >
                  <span className="bg-gradient-to-r from-pink-300 via-pink-200 to-pink-300 bg-clip-text text-transparent">
                    Flat Illustration
                  </span>
                </motion.h2>

                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="text-neutral-400 text-sm md:text-base leading-relaxed"
                >
                There is a shop in downtown called 'NEW LIFE'. I drew this picture using illustration.
                </motion.p>

                {/* Decorative line */}
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  className="h-px bg-gradient-to-r from-pink-300/20 to-transparent mt-6"
                ></motion.div>
              </motion.div>
            </div>
            {/* Image Display - Left Side */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="w-full lg:w-2/3"
            >
              <div className="group relative overflow-hidden rounded-2xl bg-neutral-800/50">
                <div className="relative  overflow-hidden">
                  <img 
                    src={art2} 
                    alt="Flat Design" 
                    className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-700"
                  />
                  {/* Hover overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                
                {/* Decorative elements */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                  className="absolute -top-4 -right-4 w-20 h-20 border border-pink-300/20 rounded-full"
                >
                  <div className="absolute inset-1 border border-yellow-200/20 rounded-full"></div>
                </motion.div>
              </div>
            </motion.div>

           
          </div>
        </div>
      </div>
    </div>
  );
};

export default Flat;
