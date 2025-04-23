"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="projects" className="py-20 relative matrix-bg">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          ref={ref}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-green-400 glitch neon-text">Security Projects</h2>
        </motion.div>
        <div className="terminal p-8 text-center">
          <p className="text-green-300 mb-4">Projects section is currently under development.</p>
          <p className="text-green-400">Check back soon for updates on my latest cybersecurity projects!</p>
        </div>
      </div>
    </section>
  )
}

export default Projects
