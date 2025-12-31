import { motion } from 'framer-motion'
import { Github, ExternalLink } from 'lucide-react'
import { useInView } from '../hooks/useInView'

export default function Projects() {
  const { ref, isInView } = useInView()

  const projects = [
    {
      title: 'Hospital Data Management System',
      description: 'Comprehensive data management solution for hospital operations with analytics dashboard',
      tech: ['Python', 'SQL', 'Power BI', 'Flask', 'NumPy', 'Pandas', 'Matplotlib', 'Seaborn'],
      outcomes: ['90% improvement in data retrieval', 'Real-time dashboards', 'Automated reporting'],
      github: 'https://github.com/luckydubey6060',
    },
    {
      title: 'LLM Quiz Solver',
      description: 'Automatic quiz solver using Claude AI and Selenium for the TDS LLM Analysis Quiz project.',
      tech: ['Python', 'Claude AI', 'Selenium', 'Data Analysis'],
      outcomes: [
        'Solves data analysis quizzes automatically',
        'Handles JavaScript-rendered pages & sequential questions',
        'Processes PDF/CSV files and submits correct formats'
      ],
      github: 'https://github.com/luckydubey6060',
    },
    {
      title: 'UPI Fraud Detection System',
      description: 'ML-powered fraud detection system for UPI transactions with real-time alerts',
      tech: ['Python', 'Scikit-learn', 'Flask', 'PostgreSQL'],
      outcomes: ['99.2% detection accuracy', 'Sub-second latency', 'Production deployment'],
      github: 'https://github.com/luckydubey6060',
    },
    {
      title: 'Smart Irrigation System',
      description: 'IoT-based intelligent irrigation system using AI/ML for optimal water usage',
      tech: ['Python', 'IoT', 'TensorFlow', 'Django', 'Arduino'],
      outcomes: ['45% water savings', 'Automated scheduling', 'Real-time monitoring'],
      github: 'https://github.com/luckydubey6060',
    },
    {
      title: 'Business Data Management',
      description: 'Excel and SQL-based data management for business intelligence and decision making',
      tech: ['Excel', 'SQL', 'VBA', 'Python'],
      outcomes: ['Automated workflows', 'KPI tracking', 'Executive reporting'],
      github: 'https://github.com/luckydubey6060',
    },
  ]

  return (
    <section
      id="projects"
      ref={ref}
      className="min-h-screen flex items-center justify-center py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800/50"
    >
      <div className="max-w-6xl mx-auto w-full">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold mb-12 text-center"
        >
          Featured Projects
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="group p-6 bg-white dark:bg-gray-700 rounded-xl shadow-lg hover:shadow-2xl transition-all"
            >
              <h3 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-cyan-400 transition-colors">
                {project.title}
              </h3>

              <p className="text-gray-700 dark:text-gray-300 mb-4">
                {project.description}
              </p>

              <div className="mb-4">
                <h4 className="font-semibold text-gray-700 dark:text-gray-300 mb-2">
                  Tech Stack:
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIdx) => (
                    <span
                      key={techIdx}
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mb-4">
                <h4 className="font-semibold text-gray-700 dark:text-gray-300 mb-2">
                  Key Outcomes:
                </h4>
                <ul className="space-y-1">
                  {project.outcomes.map((outcome, outcomeIdx) => (
                    <li key={outcomeIdx} className="text-sm text-gray-600 dark:text-gray-400 flex items-start">
                      <span className="text-blue-600 dark:text-cyan-400 mr-2">✓</span>
                      {outcome}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex gap-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-cyan-400 transition-colors"
                >
                  <Github size={20} />
                  <span className="font-medium">Code</span>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
