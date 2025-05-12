import { motion } from "framer-motion";
import package1 from "../assets/package/package1.png";
import package2 from "../assets/package/package2.png";
import package3 from "../assets/package/package3.png";
import package4 from "../assets/package/package6.png";
import Package2 from "./Package2";

const Package = () => {
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
          className="absolute top-20 left-10 w-[500px] h-[500px] bg-amber-500/10 rounded-full blur-3xl"
        ></motion.div>
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [0, -90, 0],
          }}
          transition={{ duration: 20, repeat: Infinity }}
          className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-orange-500/10 rounded-full blur-3xl"
        ></motion.div>

        {/* Geometric pattern overlay */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,black,transparent)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_500px_at_50%_50%,rgba(255,166,0,0.05),transparent)]"></div>
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
                className="text-4xl md:text-8xl font-bold mb-6 relative z-10"
              >
                <motion.span
                  initial={{ x: -100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 1, duration: 0.8 }}
                  className="inline-block bg-gradient-to-r from-amber-400 via-orange-500 to-amber-400 bg-clip-text text-transparent"
                >
                  Packaging
                </motion.span>
                <br />
                <motion.span
                  initial={{ x: 100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 1.2, duration: 0.8 }}
                  className="inline-block bg-gradient-to-r from-orange-400 via-amber-500 to-orange-400 bg-clip-text text-transparent"
                >
                  Design
                </motion.span>
              </motion.h1>

              {/* Decorative elements */}
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 1.5, duration: 0.5 }}
                className="absolute -top-8 -right-8 w-24 h-24 border border-amber-500/20 rounded-full"
              ></motion.div>
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 1.7, duration: 0.5 }}
                className="absolute -bottom-8 -left-8 w-24 h-24 border border-orange-500/20 rounded-full"
              ></motion.div>
            </div>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5, duration: 0.8 }}
              className="text-base md:text-xl text-neutral-400 max-w-2xl mx-auto mb-12"
            >
              Creating memorable unboxing experiences through innovative package
              design
            </motion.p>

            {/* Scroll indicator */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2, duration: 0.8 }}
              className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
            >
              <div className="flex flex-col items-center">
                <span className="text-neutral-500 text-sm mb-2">
                  Scroll to explore
                </span>
                <motion.div
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  className="w-6 h-10 border-2 border-amber-500/30 rounded-full flex justify-center p-2"
                >
                  <motion.div
                    animate={{ y: [0, 12, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    className="w-1 h-1 bg-amber-500/50 rounded-full"
                  ></motion.div>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
      <Package2 />

      {/* Project Display Section */}
      <div className="min-h-screen bg-neutral-900 py-20 px-4 relative">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-20"
          >
            {/* Project Title and Description */}
            <div className="text-center mb-16 relative">
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-24 h-24 border border-amber-500/20 rounded-full"
              ></motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-xl md:text-5xl font-bold mb-8 relative"
              >
                <span className="bg-gradient-to-r from-green-400 via-green-500 to-green-400 bg-clip-text text-transparent">
                  Sayar Moe Herbal Laxative
                </span>

                <br />
                <span className="text-xl md:text-4xl text-neutral-400">
                  Packaging Design
                </span>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-neutral-400 lg:max-w-3xl max-w-xl mx-auto lg:text-lg text-xs leading-relaxed"
              >
                A clean and minimal packaging design for Sayar Moe, a
                traditional herbal laxative. The design incorporates an earthy
                color palette, simple typography, and an intuitive digestive
                health icon to convey a sense of natural wellness and gentle
                relief. The combination of soft tones and structured layout
                ensures clarity and trustworthiness, making it an effective
                design for health and wellness branding.
              </motion.p>
            </div>

            {/* Image Grid - Redesigned Layout */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6">
              {/* Top Row - Full width on mobile, Side-by-Side on desktop */}
              <div className="col-span-12 grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6 }}
                  className="col-span-12 md:col-span-6 group relative overflow-hidden rounded-xl bg-neutral-800/50"
                >
                  <div className="relative aspect-[4/3] md:aspect-square overflow-hidden">
                    <img
                      src={package1}
                      alt="Sayar Moe Package Side View"
                      className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-x-0 bottom-0 p-3 md:p-4 bg-gradient-to-t from-black/90 to-transparent">
                      {/* <p className="text-white text-sm md:text-base font-medium">Front View Packaging</p> */}
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="col-span-12 md:col-span-6 group relative overflow-hidden rounded-xl bg-neutral-800/50"
                >
                  <div className="relative aspect-[4/3] md:aspect-square overflow-hidden">
                    <img
                      src={package2}
                      alt="Sayar Moe Package Front View"
                      className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-x-0 bottom-0 p-3 md:p-4 bg-gradient-to-t from-black/90 to-transparent">
                      {/* <p className="text-white text-sm md:text-base font-medium">Front View Display</p> */}
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Bottom Row - Full width on mobile, Side-by-Side on desktop */}
              <div className="col-span-12 grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6 }}
                  className="col-span-12 md:col-span-6 group relative overflow-hidden rounded-xl bg-neutral-800/50"
                >
                  <div className="relative aspect-[4/3] md:aspect-square overflow-hidden">
                    <img
                      src={package3}
                      alt="Sayar Moe Package Detail View"
                      className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-x-0 bottom-0 p-3 md:p-4 bg-gradient-to-t from-black/90 to-transparent">
                      {/* <p className="text-white text-sm md:text-base font-medium">Package Details</p> */}
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="col-span-12 md:col-span-6 group relative overflow-hidden rounded-xl bg-neutral-800/50"
                >
                  <div className="relative aspect-[4/3] md:aspect-square overflow-hidden">
                    <img
                      src={package4}
                      alt="Sayar Moe Package Back View"
                      className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-x-0 bottom-0 p-3 md:p-4 bg-gradient-to-t from-black/90 to-transparent">
                      {/* <p className="text-white text-sm md:text-base font-medium">Side View Display</p> */}
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-0 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl"></div>
        </div>
      </div>
    </div>
  );
};

export default Package;
