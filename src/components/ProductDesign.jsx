import { motion } from "framer-motion";
import p1 from "../assets/3d/p1.png";
import p2 from "../assets/3d/p2.png";
import p3 from "../assets/3d/p3.jpeg";
import p4 from "../assets/3d/p4.jpeg";
import p5 from "../assets/3d/p5.jpeg";
import p6 from "../assets/3d/p6.png";

const ProductDesign = () => {
  return (
    <div className="min-h-screen relative overflow-hidden bg-neutral-900">
      {/* Decorative background patterns */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
          transition={{ duration: 20, repeat: Infinity }}
          className="absolute top-20 left-10 w-[500px] h-[500px] bg-amber-500/10 rounded-full blur-3xl"
        ></motion.div>
        <motion.div
          animate={{ scale: [1.2, 1, 1.2], rotate: [0, -90, 0] }}
          transition={{ duration: 20, repeat: Infinity }}
          className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-rose-500/10 rounded-full blur-3xl"
        ></motion.div>
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,black,transparent)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_500px_at_50%_50%,rgba(245,158,11,0.06),transparent)]"></div>
        </div>
      </div>

      {/* Hero */}
      <div className="relative z-10">
        <div className="h-screen flex flex-col items-center justify-center px-4">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }} className="text-center">
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
                  className="inline-block bg-gradient-to-r from-amber-400 via-rose-400 to-amber-400 bg-clip-text text-transparent drop-shadow-sm relative"
                >
                  3D Product
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ delay: 1.8, duration: 0.8 }}
                    className="absolute -bottom-2 left-0 h-[2px] bg-gradient-to-r from-transparent via-amber-400/50 to-transparent"
                  ></motion.div>
                </motion.span>
                <br />
                <motion.span
                  initial={{ x: 100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 1.2, duration: 0.8 }}
                  className="inline-block bg-gradient-to-r from-rose-400 via-amber-400 to-rose-400 bg-clip-text text-transparent drop-shadow-sm relative"
                >
                  Design
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ delay: 2, duration: 0.8 }}
                    className="absolute -bottom-2 left-0 h-[2px] bg-gradient-to-r from-transparent via-rose-400/50 to-transparent"
                  ></motion.div>
                </motion.span>
              </motion.h1>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Project Section: VIBRANCE */}
      <div className="space-y-3 mx-4 md:mx-10 pb-24">
        <div className="text-center mb-16 relative">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-2xl md:text-6xl font-bold mb-6 relative"
          >
            <span className="bg-gradient-to-r from-amber-400 via-rose-400 to-amber-400 bg-clip-text text-transparent">
              VIBRANCE
            </span>
            <br />
            <span className="text-xl md:text-4xl text-neutral-300 font-medium">3D Product Design</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-neutral-400 lg:max-w-3xl max-w-xl mx-auto lg:text-lg text-sm leading-relaxed"
          >
            I created a 3D product visualization of the VIBRANCE wristband in Blender, focusing on realistic materials, premium feel, and showcasing its heartbeat-responsive, color-changing technology.
          </motion.p>

          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "100px" }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="h-px bg-gradient-to-r from-transparent via-amber-400/30 to-transparent mx-auto mt-8"
          ></motion.div>
        </div>

        {/* Image grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[p1, p2, p3, p4, p5, p6].map((img, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: (idx % 6) * 0.05 }}
              className="group relative overflow-hidden rounded-2xl bg-neutral-800/50"
            >
              <div className="aspect-[7/5] overflow-hidden">
                <img
                  src={img}
                  alt={`Vibrance 3D render ${idx + 1}`}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-amber-900/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductDesign