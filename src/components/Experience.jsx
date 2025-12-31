import { motion } from 'framer-motion'
import { Award, Briefcase, ExternalLink, Calendar, MapPin } from 'lucide-react'
import { useInView } from '../hooks/useInView'

export default function Experience() {
  const { ref, isInView } = useInView()

  const certifications = [
    {
      title: 'HSS Abhivyakti Hackathon (5th Position)',
      date: 'Oct 2024',
      org: 'Gov. of Rajasthan, Jaipur',
      description: 'Team Leader. Secured 5th position nationally.'
    },
    {
      title: 'MNIT Hackathon & Minute-To-Pitch',
      date: 'Jan 2024',
      org: 'MNIT Jaipur',
      description: 'Team Leader. Secured Top 20 position out of 5000 competitors.'
    },
    {
      title: 'NPTEL Elite Silver Certificate',
      date: 'Jan 2024 - Apr 2024',
      org: 'MoE, Govt. of India',
      description: 'Successfully completed Data Analytics With Python.'
    },
    {
      title: 'Logic Loom and ParaVerse AI',
      date: 'Jan 2024',
      org: 'IIT Madras',
      description: 'Participated in Logic Loom and ParaVerse AI competition.'
    },
    {
      title: 'Rajasthan IT Day Hackathon',
      date: 'Mar 2023',
      org: 'Rajasthan IT Day, Jaipur',
      description: 'Team Leader. Joined national-level hackathon.'
    }
  ]

  const practicalTraining = [
    {
      title: 'Catalyst AIC (Supported by AIM, NITI Aayog)',
      role: 'Start-up Owner (On-Site)',
      date: 'July 2024 – Sept 2024',
      description: 'Working on a startup idea building a smart irrigation platform that automates water distribution based on soil moisture levels.'
    },
    {
      title: 'RHCSA Certified',
      role: 'Red Hat Certified System Administrator',
      date: 'Jul 2025',
      description: 'Skilled in Linux system administration, automation, and security. by Redhat'
    }
  ]

  return (
    <section id="experience" ref={ref} className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Certifications & Awards */}
          <div>
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              className="text-3xl font-bold mb-8 flex items-center gap-3"
            >
              <Award className="text-blue-600 dark:text-cyan-400" />
              Certifications & Awards
            </motion.h2>
            
            <div className="space-y-6">
              {certifications.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ delay: idx * 0.1 }}
                  className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-md border-l-4 border-blue-600"
                >
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-bold text-lg">{item.title}</h3>
                    <span className="text-sm font-medium text-blue-600 dark:text-cyan-400 bg-blue-100 dark:bg-blue-900/30 px-2 py-1 rounded">
                      {item.date}
                    </span>
                  </div>
                  <p className="text-sm font-semibold text-gray-600 dark:text-gray-400 mb-2">{item.org}</p>
                  <p className="text-sm text-gray-700 dark:text-gray-300">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Practical Training */}
          <div>
            <motion.h2
              initial={{ opacity: 0, x: 20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
              className="text-3xl font-bold mb-8 flex items-center gap-3"
            >
              <Briefcase className="text-blue-600 dark:text-cyan-400" />
              Practical Training
            </motion.h2>
            
            <div className="space-y-6">
              {practicalTraining.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  className="p-8 bg-gradient-to-br from-blue-50 to-white dark:from-gray-800 dark:to-gray-900 rounded-2xl shadow-lg border border-blue-100 dark:border-gray-700"
                >
                  <div className="flex items-center gap-2 text-blue-600 dark:text-cyan-400 mb-4">
                    <Calendar size={18} />
                    <span className="text-sm font-bold">{item.date}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-blue-600 dark:text-cyan-400 font-semibold mb-4">{item.role}</p>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed italic border-l-2 border-blue-200 dark:border-gray-600 pl-4">
                    "{item.description}"
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
