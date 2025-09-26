import { motion } from "framer-motion";
import event1 from "../assets/social/event1.jpg";    
import event2 from "../assets/social/event2.jpg";    
import event3 from "../assets/social/event3.jpg";
import des1 from "../assets/event/dressingthescreen-01.jpeg"    
import des2 from "../assets/event/dressingthescreen-02.png"    
import des3 from "../assets/event/dressingthescreen-03.png"    
import des4 from "../assets/event/dressingthescreen-04.png"    
import des5 from "../assets/event/dressingthescreen-05.jpeg"    
import des6 from "../assets/event/dressingthescreen-06.jpeg"    
import des7 from "../assets/event/dressingthescreen-07.jpeg"    
import des8 from "../assets/event/dressingthescreen-08.jpeg"    
import des9 from "../assets/event/dressingthescreen-09.jpeg"    
import des10 from "../assets/event/dressingthescreen-10.png"   
import air1 from "../assets/event/air1.jpg"   
import air2 from "../assets/event/air2.jpg"   
import air3 from "../assets/event/air3.jpg"   
import air4 from "../assets/event/air4.png"   
import air5 from "../assets/event/air5.jpg"   
import air6 from "../assets/event/air6.png"   
import air7 from "../assets/event/air7.jpg"   
import air8 from "../assets/event/air8.jpg"   
import air9 from "../assets/event/air9.jpg"   
import air10 from "../assets/event/air10.jpg"   
import air11 from "../assets/event/air11.jpg"   
 

const Event = () => {
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
                  Event 
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
          <span className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-400 bg-clip-text text-transparent">
          Thadingyut Music Festival
          </span>

          <br />
          <span className="text-xl md:text-4xl text-neutral-300 font-medium">
            Event Design
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-neutral-400 lg:max-w-3xl max-w-xl mx-auto lg:text-lg text-sm leading-relaxed"
        >
      Designed a luxury-style promotional poster for the Famous Thadingyut Music Festival 2025. Explored how music, culture, and branding come together to create a strong visual identity for a large-scale event.
        </motion.p>

        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: "100px" }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="h-px bg-gradient-to-r from-transparent via-yellow-500/30 to-transparent mx-auto mt-8"
        ></motion.div>
      </div>

      {/* Project Display Section */}
      <div className="space-y-3 mx-4 md:mx-10">
      <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="aspect-auto overflow-hidden"
          >
            <img
              src={event2}
              alt="Event Design 3"
              className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 rounded-xl"
            />
          </motion.div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-60">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="aspect-auto overflow-hidden"
          >
            <img
              src={event1}
              alt="Event Design 1"
              className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 rounded-xl"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="aspect-auto overflow-hidden"
          >
            <img
              src={event3}
              alt="Event Design 2"
              className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 rounded-xl"
            />
          </motion.div>
        </div>

        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>

    

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
          <span className="text-red-600">
          Dressing the Screen:<br/> Where Pixels Become Pattern 
          </span>

          <br />
          <span className="text-xl md:text-4xl text-neutral-300 font-medium">
            Event Design
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-neutral-400 lg:max-w-3xl max-w-xl mx-auto lg:text-lg text-sm leading-relaxed"
        >
          This project explores the intersection of fashion and film through color, movement, and texture. The identity concept, Where Pixels Become Pattern, blends digital pixel grids with fashion textile textures, reflecting how films are made frame by frame and fashion stitch by stitch. A bilingual layout system in English and Korean ensures flexibility and international adaptability, creating a modern, cohesive visual identity for the exhibition.
        </motion.p>

        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: "100px" }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="h-px bg-gradient-to-r from-transparent via-red-500/30 to-transparent mx-auto mt-8"
        ></motion.div>
      </div>
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-6 grid-rows-3 mt-10 gap-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="col-span-1 sm:col-span-1 md:col-span-2 row-span-3 aspect-auto overflow-hidden"
            >
              <img
                src={des1}
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
                src={des2}
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
                src={des3}
                alt="Social Media Design"
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 rounded-xl"
              />
            </motion.div>
          </div>
        </div>
        
        <div>
          <div className="grid grid-cols-1 md:grid-cols-6 grid-rows-5 gap-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="col-span-1 md:col-span-3 row-span-5 aspect-auto overflow-hidden"
            >
              <img
                src={des4}
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
                src={des5}
                alt="Social Media Design"
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 rounded-xl"
              />
            </motion.div>
          </div>
        </div>

        <div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-6 grid-rows-3 gap-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="col-span-1 sm:col-span-1 md:col-span-2 row-span-3 aspect-auto overflow-hidden"
            >
              <img
                src={des6}
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
                src={des7}
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
                src={des8}
                alt="Social Media Design"
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 rounded-xl"
              />
            </motion.div>
          </div>
        </div>

        <div>
          <div className="grid grid-cols-1 md:grid-cols-6 grid-rows-5 gap-4 mb-60">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="col-span-1 md:col-span-3 row-span-5 aspect-auto overflow-hidden"
            >
              <img
                src={des9}
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
                src={des10}
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
          <span className="text-green-600">
          Air Pollution Awareness Campaign <br/> “The Trash You Breathe”
          </span>

          <br />
          <span className="text-xl md:text-4xl text-neutral-300 font-medium">
            Event Design
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-neutral-400 lg:max-w-3xl max-w-xl mx-auto lg:text-lg text-sm leading-relaxed"
        >
         This project raises awareness about the invisible harm caused by poor waste management in Myanmar. Using poetry and motion typography, we highlight how toxic air from burning trash disproportionately affects sanitation workers. The campaign includes posters, animated poems, and an interactive digital tool that visualizes how pollution “chokes” both the air and those who work closest to it, connecting audiences emotionally to an often-overlooked issue.
        </motion.p>

        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: "100px" }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="h-px bg-gradient-to-r from-transparent via-green-500/30 to-transparent mx-auto mt-8"
        ></motion.div>
      </div>

      <div>
          <div className="grid grid-cols-1 md:grid-cols-6 grid-rows-5 gap-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="col-span-1 md:col-span-3 row-span-5 aspect-auto overflow-hidden"
            >
              <img
                src={air1}
                alt="Social Media Design"
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 rounded-xl"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="col-span-1 md:col-span-3 row-span-5 aspect-auto overflow-hidden"
            >
              <img
                src={air2}
                alt="Social Media Design"
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 rounded-xl"
              />
            </motion.div>
          </div>
        </div>

      <div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-6 grid-rows-3 mt-10 gap-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="col-span-1 sm:col-span-1 md:col-span-2 row-span-3 aspect-auto overflow-hidden"
            >
              <img
                src={air3}
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
                src={air4}
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
                src={air5}
                alt="Social Media Design"
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 rounded-xl"
              />
            </motion.div>
          </div>
        </div>

        <div>
          <div className="grid grid-cols-1 md:grid-cols-6 grid-rows-5 gap-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="col-span-1 md:col-span-3 row-span-5 aspect-auto overflow-hidden"
            >
              <img
                src={air6}
                alt="Social Media Design"
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 rounded-xl"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="col-span-1 md:col-span-3 row-span-5 aspect-auto overflow-hidden"
            >
              <img
                src={air7}
                alt="Social Media Design"
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 rounded-xl"
              />
            </motion.div>
          </div>
        </div>

        
      <div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mt-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="aspect-auto overflow-hidden"
            >
              <img
                src={air8}
                alt="Social Media Design"
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 rounded-xl"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="aspect-auto overflow-hidden"
            >
              <img
                src={air9}
                alt="Social Media Design"
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 rounded-xl"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="aspect-auto overflow-hidden"
            >
              <img
                src={air10}
                alt="Social Media Design"
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 rounded-xl"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="aspect-auto overflow-hidden"
            >
              <img
                src={air11}
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

export default Event;