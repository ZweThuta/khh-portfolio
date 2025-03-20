import { motion } from "framer-motion";

const Thanks = () => {
  return (
    <div className="min-h-screen relative overflow-hidden bg-neutral-900">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
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
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,black,transparent)]"></div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 py-20 md:py-32">
        <div className="flex flex-col items-center text-center">
          {/* Thank You Message */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-16"
          >
            <h2 className="text-4xl md:text-7xl font-black mb-6">
              <span className="bg-gradient-to-r from-blue-400 via-blue-600 to-blue-400 bg-clip-text text-transparent">
                Thank You For Your Time
              </span>
            </h2>
            <div className="h-1 w-40 mx-auto bg-gradient-to-r from-transparent via-blue-600 to-transparent"></div>
          </motion.div>

          {/* Contact Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full max-w-3xl"
          >
            <div className="bg-black/40 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-blue-900/20">
              <h3 className="text-2xl md:text-3xl font-bold mb-8 bg-gradient-to-r from-blue-300 to-blue-500 bg-clip-text text-transparent">
                Let's Connect
              </h3>
              
              {/* Contact Links */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <motion.a
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  href="mailto:khinhtethlaingisme@gmail.com"
                  className="group flex items-center p-4 rounded-xl bg-black/30 hover:bg-blue-900/20 transition-all duration-300"
                >
                  <div className="p-3 rounded-full bg-red-600/20 group-hover:bg-red-600/30 transition-all duration-300">
                    <svg className="w-6 h-6 text-red-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <span className="ml-4 text-neutral-300 group-hover:text-blue-200 transition-colors duration-300">
                    khinhtethlaingisme
                  </span>
                </motion.a>

                <motion.a
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  href="https://www.tiktok.com/@khin.htet.hlaing4?_t=ZS-8ucz4ywEub1&_r=1"
                  target="_blank"
                  className="group flex items-center p-4 rounded-xl bg-black/30 hover:bg-blue-900/20 transition-all duration-300"
                >
                  <div className="p-3 rounded-full bg-black group-hover:bg-black/80 transition-all duration-300">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                    </svg>
                  </div>
                  <span className="ml-4 text-neutral-300 group-hover:text-blue-200 transition-colors duration-300">
                    Khin Htet Hlaing
                  </span>
                </motion.a>
              </div>

              {/* Final Message */}
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-neutral-400 text-lg leading-relaxed"
              >
                Thank you for exploring my portfolio. I'm always excited to collaborate on new projects 
                and bring creative ideas to life. Feel free to reach out!
              </motion.p>
            </div>
          </motion.div>

          {/* Decorative Elements */}
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="absolute -bottom-20 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-gradient-to-r from-blue-900/10 to-blue-800/10 rounded-full blur-3xl"
          ></motion.div>
        </div>
      </div>
   </div>
  );
};

export default Thanks;
