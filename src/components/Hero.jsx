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
              <a 
                href="#projects"
                className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white px-8 py-3 rounded-full font-semibold transition-all transform hover:scale-105"
              >
                View Projects
                <ArrowRight size={20} />
              </a>
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
              <a href="mailto:luckydubey6060@gmail.com" className="p-3 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-blue-600 dark:hover:bg-cyan-500 text-gray-700 dark:text-gray-300 hover:text-white transition-all transform hover:scale-110">
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
            <div className="relative">
              {/* Rotating gradient ring 1 */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-6 rounded-full bg-gradient-to-r from-blue-600 via-cyan-500 to-teal-500 opacity-25"
              />
              
              {/* Rotating gradient ring 2 */}
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-3 rounded-full bg-gradient-to-r from-cyan-500 via-teal-500 to-blue-600 opacity-15"
              />

              {/* Main circular image */}
              <div className="relative w-96 h-96 rounded-full overflow-hidden border-4 border-blue-600 dark:border-cyan-500 shadow-2xl transition-all duration-500 hover:scale-105">
                <img
                  src="/assets/profile.jpg"
                  alt="Lucky Dubey"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-cyan-500/10 to-teal-500/10"></div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
