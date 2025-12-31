import { motion } from 'framer-motion'
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react'
import { useInView } from '../hooks/useInView'

export default function Hero() {
  const { ref, isInView } = useInView()

  return (
    <section
      id="home"
      ref={ref}
      className="min-h-screen flex items-center justify-center pt-16 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl w-full mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <motion.h2
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight"
            >
              Hello, I'm{' '}
              <span className="bg-gradient-to-r from-blue-600 via-cyan-500 to-teal-500 bg-clip-text text-transparent">
                Lucky Dubey
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl md:text-2xl font-semibold text-gray-700 dark:text-gray-300"
            >
              Data Scientist | ML Engineer | AI Enthusiast
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed max-w-xl"
            >
              Transforming data into actionable insights. Building intelligent solutions with machine learning and AI. IIT Madras graduate passionate about solving real-world problems.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap gap-4 pt-4"
            >
              <button className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white px-8 py-3 rounded-full font-semibold transition-all transform hover:scale-105">
                View Projects
                <ArrowRight size={20} />
              </button>
              <a
                href="https://github.com/luckydubey6060"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 border-2 border-blue-600 dark:border-cyan-500 text-blue-600 dark:text-cyan-400 hover:bg-blue-600 dark:hover:bg-cyan-500 hover:text-white dark:hover:text-gray-900 px-8 py-3 rounded-full font-semibold transition-all"
              >
                <Github size={20} />
                GitHub
              </a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex gap-4 pt-4"
            >
              <a href="https://github.com/luckydubey6060" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-blue-600 dark:hover:bg-cyan-500 text-gray-700 dark:text-gray-300 hover:text-white transition-all transform hover:scale-110">
                <Github size={20} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-blue-600 dark:hover:bg-cyan-500 text-gray-700 dark:text-gray-300 hover:text-white transition-all transform hover:scale-110">
                <Linkedin size={20} />
              </a>
              <a href="mailto:contact@example.com" className="p-3 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-blue-600 dark:hover:bg-cyan-500 text-gray-700 dark:text-gray-300 hover:text-white transition-all transform hover:scale-110">
                <Mail size={20} />
              </a>
            </motion.div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative flex justify-center items-center"
          >
            <motion.div
              animate={{ 
                y: [0, -20, 0],
                rotate: [0, 5, -5, 0]
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="relative"
            >
              {/* Magical outer rings */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-4 rounded-full border-2 border-transparent bg-gradient-to-r from-blue-600 via-cyan-500 to-teal-500 bg-clip-border opacity-30"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-8 rounded-full border-2 border-transparent bg-gradient-to-r from-cyan-500 via-teal-500 to-blue-600 bg-clip-border opacity-20"
              />

              {/* Main circular image */}
              <div className="relative w-80 h-80 rounded-full overflow-hidden border-4 border-gradient-to-r from-blue-600 via-cyan-500 to-teal-500 shadow-2xl">
                <img
                  src="attached_assets/WhatsApp_Image_2025-12-31_at_7.19.15_PM_1767189009049.jpeg"
                  alt="Lucky Dubey"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-cyan-500/20 to-teal-500/20 hover:opacity-0 transition-opacity duration-300"></div>
              </div>

              {/* Floating particles effect */}
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  animate={{
                    x: [0, Math.cos(i * Math.PI * 2 / 3) * 80, 0],
                    y: [0, Math.sin(i * Math.PI * 2 / 3) * 80, 0],
                    opacity: [0.3, 0.8, 0.3],
                  }}
                  transition={{
                    duration: 5 + i,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className={`absolute w-3 h-3 rounded-full ${
                    i === 0 ? 'bg-blue-500' : i === 1 ? 'bg-cyan-400' : 'bg-teal-400'
                  }`}
                  style={{
                    top: '50%',
                    left: '50%',
                    marginTop: '-6px',
                    marginLeft: '-6px',
                  }}
                />
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
