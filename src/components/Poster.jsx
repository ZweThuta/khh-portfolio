import { motion } from "framer-motion";
import poster1 from "../assets/poster/po1.png";
import poster2 from "../assets/poster/po2.png";
import poster3 from "../assets/poster/po3.png";
import poster4 from "../assets/poster/po4.png";
import poster5 from "../assets/poster/po5.png";
import poster6 from "../assets/poster/po6.png";
import poster7 from "../assets/poster/po7.png";
import poster8 from "../assets/poster/po8.png";
import poster9 from "../assets/poster/d25.jpeg";
import poster10 from "../assets/poster/D28.jpeg";


const Poster = () => {
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
          className="absolute top-20 left-10 w-[500px] h-[500px] bg-blue-900/10 rounded-full blur-3xl"
        ></motion.div>
        <motion.div
          animate={{ 
            scale: [1.2, 1, 1.2],
            rotate: [0, -90, 0]
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
                  className="inline-block bg-gradient-to-r from-blue-700 via-blue-500 to-blue-700 bg-clip-text text-transparent drop-shadow-sm relative"
                >
                  POSTER
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
              <motion.p
                className="text-xs md:text-2xl text-neutral-300 max-w-2xl mx-auto mb-12 font-light leading-relaxed tracking-wide"
              >
                <span className="text-blue-400 font-medium">Crafting visual stories</span>{" "}
                through compelling poster designs
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
      <div>
         {/* Project Display Section */}
         <div className="py-20 px-4 relative">
           <div className="max-w-7xl mx-auto">
             {/* Grid Layout Container */}
             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
               {/* First Row */}
               <motion.div
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 transition={{ duration: 0.6 }}
                 className="group relative overflow-hidden rounded-2xl bg-neutral-800/50"
               >
                 <div className="aspect-[3/4] overflow-hidden">
                   <img 
                     src={poster1} 
                     alt="Poster Design 1"
                     className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                   />
                   <div className="absolute inset-0 bg-gradient-to-t from-blue-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                 </div>
               </motion.div>

               <motion.div
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 transition={{ duration: 0.6, delay: 0.1 }}
                 className="group relative overflow-hidden rounded-2xl bg-neutral-800/50"
               >
                 <div className="aspect-[3/4] overflow-hidden">
                   <img 
                     src={poster2} 
                     alt="Poster Design 2"
                     className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                   />
                   <div className="absolute inset-0 bg-gradient-to-t from-blue-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                 </div>
               </motion.div>

               <motion.div
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 transition={{ duration: 0.6, delay: 0.2 }}
                 className="group relative overflow-hidden rounded-2xl bg-neutral-800/50"
               >
                 <div className="aspect-[3/4] overflow-hidden">
                   <img 
                     src={poster3} 
                     alt="Poster Design 3"
                     className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                   />
                   <div className="absolute inset-0 bg-gradient-to-t from-blue-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                 </div>
               </motion.div>

               <motion.div
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 transition={{ duration: 0.6, delay: 0.3 }}
                 className="group relative overflow-hidden rounded-2xl bg-neutral-800/50"
               >
                 <div className="aspect-[3/4] overflow-hidden">
                   <img 
                     src={poster4} 
                     alt="Poster Design 4"
                     className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                   />
                   <div className="absolute inset-0 bg-gradient-to-t from-blue-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                 </div>
               </motion.div>

               {/* Second Row */}
               <motion.div
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 transition={{ duration: 0.6 }}
                 className="group relative overflow-hidden rounded-2xl bg-neutral-800/50"
               >
                 <div className="aspect-[3/4] overflow-hidden">
                   <img 
                     src={poster5} 
                     alt="Poster Design 5"
                     className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                   />
                   <div className="absolute inset-0 bg-gradient-to-t from-blue-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                 </div>
               </motion.div>

               <motion.div
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 transition={{ duration: 0.6, delay: 0.1 }}
                 className="group relative overflow-hidden rounded-2xl bg-neutral-800/50"
               >
                 <div className="aspect-[3/4] overflow-hidden">
                   <img 
                     src={poster6} 
                     alt="Poster Design 6"
                     className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                   />
                   <div className="absolute inset-0 bg-gradient-to-t from-blue-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                 </div>
               </motion.div>

               <motion.div
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 transition={{ duration: 0.6, delay: 0.2 }}
                 className="group relative overflow-hidden rounded-2xl bg-neutral-800/50"
               >
                 <div className="aspect-[3/4] overflow-hidden">
                   <img 
                     src={poster7} 
                     alt="Poster Design 7"
                     className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                   />
                   <div className="absolute inset-0 bg-gradient-to-t from-blue-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                 </div>
               </motion.div>

               <motion.div
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 transition={{ duration: 0.6, delay: 0.3 }}
                 className="group relative overflow-hidden rounded-2xl bg-neutral-800/50"
               >
                 <div className="aspect-[3/4] overflow-hidden">
                   <img 
                     src={poster8} 
                     alt="Poster Design 8"
                     className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                   />
                   <div className="absolute inset-0 bg-gradient-to-t from-blue-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                 </div>
               </motion.div>

               {/* Third Row */}
               <motion.div
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 transition={{ duration: 0.6, delay: 0.3 }}
                 className="group relative overflow-hidden rounded-2xl bg-neutral-800/50"
               >
                 <div className="aspect-[3/4] overflow-hidden">
                   <img 
                     src={poster9} 
                     alt="Poster Design 8"
                     className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                   />
                   <div className="absolute inset-0 bg-gradient-to-t from-blue-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                 </div>
               </motion.div>

               <motion.div
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 transition={{ duration: 0.6, delay: 0.3 }}
                 className="group relative overflow-hidden rounded-2xl bg-neutral-800/50"
               >
                 <div className="aspect-[3/4] overflow-hidden">
                   <img 
                     src={poster10} 
                     alt="Poster Design 8"
                     className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                   />
                   <div className="absolute inset-0 bg-gradient-to-t from-blue-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                 </div>
               </motion.div>

          
             </div>
           </div>
         </div>
      </div>
    </div>
  );
};

export default Poster;
