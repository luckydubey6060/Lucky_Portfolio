import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'

export default function Skills() {
  const { ref, isInView } = useInView()

  const skillCategories = [
    {
      category: 'Programming',
      skills: ['Python', 'Java', 'SQL', 'JavaScript', 'R'],
    },
    {
      category: 'Data Science & ML',
      skills: ['Pandas', 'NumPy', 'Scikit-learn', 'TensorFlow', 'PyTorch', 'Statistics'],
    },
    {
      category: 'ML & AI',
      skills: ['Anomaly Detection', 'Fraud Detection', 'NLP', 'Computer Vision', 'Deep Learning'],
    },
    {
      category: 'Data Visualization',
      skills: ['Power BI', 'Tableau', 'Matplotlib', 'Seaborn', 'Plotly'],
    },
    {
      category: 'Backend & Tools',
      skills: ['Flask', 'Django', 'FastAPI', 'Linux', 'Git', 'Docker'],
    },
    {
      category: 'Other Tools',
      skills: ['Excel', 'Jupyter', 'VS Code', 'AWS', 'GCP'],
    },
  ]

  return (
    <section
      id="skills"
      ref={ref}
      className="min-h-screen flex items-center justify-center py-20 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-6xl mx-auto w-full">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold mb-12 text-center"
        >
          Skills & Expertise
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="p-6 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-700 rounded-xl hover:shadow-lg transition-all transform hover:scale-105"
            >
              <h3 className="text-xl font-bold text-blue-600 dark:text-cyan-400 mb-4">
                {category.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIdx) => (
                  <span
                    key={skillIdx}
                    className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
