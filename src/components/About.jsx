import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'

export default function About() {
  const { ref, isInView } = useInView()

  const highlights = [
    { label: 'Education', value: 'IIT Madras BS Data Science' },
    { label: 'Education', value: 'Global Institute of Technology Jaipur (B.Tech CSE)' },
    { label: 'Experience', value: 'ML Engineer & Data Scientist' },
    { label: 'Focus', value: 'Real-world Problem Solving' },
  ]

  return (
    <section
      id="about"
      ref={ref}
      className="min-h-screen flex items-center justify-center py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900"
    >
      <div className="max-w-6xl mx-auto w-full">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold mb-12 text-center"
        >
          About Me
        </motion.h2>

        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* Picture on the left */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.8 }}
            className="flex-shrink-0"
          >
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-2xl">
                <img
                  src="/assets/profile.jpg"
                  alt="Lucky Dubey"
                  className="w-full h-full object-cover transform transition duration-500 group-hover:scale-110"
                />
              </div>
            </div>
          </motion.div>

          {/* Text Content */}
          <div className="flex-grow space-y-8">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-6"
            >
              <p className="text-2xl md:text-3xl text-gray-900 dark:text-white leading-tight font-extrabold tracking-tight">
                I'm a passionate <span className="text-blue-600 dark:text-cyan-400">Data Scientist</span> and <span className="text-blue-600 dark:text-cyan-400">ML Engineer</span> with a strong foundation in statistics, mathematics, and programming.
              </p>
              
              <div className="space-y-4 text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                <p>
                  My expertise spans from complex data analysis to architecting production-ready AI solutions that drive real business value.
                </p>
                <p>
                  Currently focused on solving real-world problems through machine learning and AI. I have hands-on experience with IoT solutions, fraud detection systems, and healthcare data management.
                </p>
                <p>
                  Beyond code, I'm continuously learning, sharing knowledge through certifications, and contributing to impactful projects with teams that value innovation and excellence.
                </p>
              </div>
            </motion.div>

            {/* Stats/Highlights */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4"
            >
              {highlights.map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -5 }}
                  className="p-4 bg-white dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700 shadow-sm hover:shadow-md transition-all"
                >
                  <div className="text-xs font-bold text-blue-600 dark:text-cyan-400 uppercase tracking-widest mb-1">
                    {item.label}
                  </div>
                  <div className="text-base font-bold text-gray-900 dark:text-white">
                    {item.value}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
