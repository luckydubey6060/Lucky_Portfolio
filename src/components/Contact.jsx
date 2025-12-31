import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, Phone, ExternalLink } from 'lucide-react'
import { useInView } from '../hooks/useInView'

export default function Contact() {
  const { ref, isInView } = useInView()

  const contacts = [
    {
      icon: Mail,
      label: 'Email',
      value: 'luckydubey6060@gmail.com',
      href: 'mailto:luckydubey6060@gmail.com',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 9649864452',
      href: 'tel:+919649864452',
    },
    {
      icon: Github,
      label: 'GitHub',
      value: '@luckydubey6060',
      href: 'https://github.com/luckydubey6060',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'Lucky Dubey',
      href: 'https://linkedin.com',
    },
  ]

  return (
    <section
      id="contact"
      ref={ref}
      className="min-h-screen flex items-center justify-center py-20 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-6xl mx-auto w-full text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold mb-6"
        >
          Let's Connect
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-lg text-gray-700 dark:text-gray-300 mb-12 max-w-2xl mx-auto font-medium"
        >
          I'm always interested in hearing about new projects and opportunities. Feel free to reach out!
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {contacts.map((contact, idx) => {
            const Icon = contact.icon
            return (
              <motion.a
                key={idx}
                href={contact.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="p-8 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-700 rounded-2xl hover:shadow-xl transition-all group border border-transparent hover:border-blue-500/30"
              >
                <Icon className="w-10 h-10 mb-4 mx-auto text-blue-600 dark:text-cyan-400 group-hover:scale-110 transition-transform" />
                <h3 className="font-bold text-gray-900 dark:text-white mb-2 text-lg">
                  {contact.label}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 font-medium break-all">{contact.value}</p>
              </motion.a>
            )
          })}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex justify-center gap-4 flex-wrap"
        >
          <a
            href="https://github.com/luckydubey6060"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white px-6 py-3 rounded-full font-semibold transition-all transform hover:scale-105"
          >
            <Github size={20} />
            View GitHub
          </a>
          <a
            href="mailto:luckydubey6060@gmail.com"
            className="flex items-center gap-2 border-2 border-blue-600 dark:border-cyan-500 text-blue-600 dark:text-cyan-400 hover:bg-blue-600 dark:hover:bg-cyan-500 hover:text-white dark:hover:text-gray-900 px-6 py-3 rounded-full font-semibold transition-all"
          >
            <Mail size={20} />
            Send Email
          </a>
        </motion.div>
      </div>
    </section>
  )
}
