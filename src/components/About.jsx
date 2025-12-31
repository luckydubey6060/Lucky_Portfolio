import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'

export default function About() {
  const { ref, isInView } = useInView()

  const highlights = [
    { label: 'Education', value: 'IIT Madras BS Data Science' },
    { label: 'Experience', value: 'ML Engineer & Data Scientist' },
    { label: 'Focus', value: 'Real-world Problem Solving' },
  ]

  return (
    <section
      id="about"
      ref={ref}
      className="min-h-screen flex items-center justify-center py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800/50"
    >
      <div className="max-w-4xl mx-auto w-full">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold mb-12 text-center"
        >
          About Me
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-4"
          >
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              I'm a passionate Data Scientist and ML Engineer with a strong foundation in statistics, mathematics, and programming. My expertise spans from data analysis to building production-ready AI solutions.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              Currently focused on solving real-world problems through machine learning and AI. I have hands-on experience with IoT solutions, fraud detection systems, and healthcare data management.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              Beyond code, I'm continuously learning, sharing knowledge through certifications, and contributing to impactful projects with teams that value innovation and excellence.
            </p>
          </motion.div>

          {/* Stats/Highlights */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4"
          >
            {highlights.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                className="p-4 bg-white dark:bg-gray-700 rounded-lg border-l-4 border-blue-600 hover:shadow-lg transition-shadow"
              >
                <div className="text-sm font-semibold text-blue-600 dark:text-cyan-400 mb-1">
                  {item.label}
                </div>
                <div className="text-lg font-bold text-gray-900 dark:text-white">
                  {item.value}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
