"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

const Hero = () => {
  const [text, setText] = useState("")
  const fullText = "Initiating Cybersecurity Protocol..."

  useEffect(() => {
    let i = 0
    const typingInterval = setInterval(() => {
      if (i < fullText.length) {
        setText(fullText.substring(0, i + 1))
        i++
      } else {
        clearInterval(typingInterval)
      }
    }, 100)

    return () => clearInterval(typingInterval)
  }, [])

  return (
    <section className="min-h-screen flex items-center justify-center overflow-hidden relative matrix-bg">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          className="text-center max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-green-400 glitch neon-text">
            {text}
            <span className="cursor"></span>
          </h1>
          <h2 className="text-2xl md:text-3xl text-green-300 mb-6 relative typing-animation">
            Harsh Gupta: Cybersecurity Specialist
          </h2>
          <div className="terminal mb-8">
            <p className="text-green-400 mb-2">$ whoami</p>
            <p className="text-green-200 mb-2">MSc student in Cybersecurity and Digital Forensics</p>
            <p className="text-green-400 mb-2">$ skills</p>
            <p className="text-green-200 mb-2">Networking | Cloud Computing | Linux | Ethical Hacking</p>
            <p className="text-green-400 mb-2">$ mission</p>
            <p className="text-green-200">Securing the digital frontier, one byte at a time.</p>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <motion.a
              href="#contact"
              className="group relative inline-flex items-center justify-center px-8 py-3 overflow-hidden rounded-full bg-green-500 text-black font-bold transition-transform duration-300 ease-out hover:scale-105"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10">Initiate Contact</span>
              <span className="absolute inset-0 bg-gradient-to-r from-green-400 via-green-500 to-green-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[length:200%_100%] animate-gradient-x" />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
