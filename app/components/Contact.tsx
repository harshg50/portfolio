"use client"

import type React from "react"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Mail, Linkedin } from "lucide-react"
import { useState } from "react"

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [message, setMessage] = useState("")
  const [response, setResponse] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setResponse(`Message received: "${message}"\nInitiating secure communication channel...`)
    setMessage("")
  }

  const contactInfo = [
    { icon: Mail, text: "harsh.gupta@outlook.in", href: "mailto:harsh.gupta@outlook.in" },
    { icon: Linkedin, text: "LinkedIn", href: "https://www.linkedin.com/in/harsh-gupta-854937234" },
  ]

  return (
    <section id="contact" className="py-20 relative matrix-bg">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          ref={ref}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-green-400 glitch neon-text">Establish Connection</h2>
        </motion.div>
        <div className="max-w-2xl mx-auto">
          <div className="terminal mb-8">
            <form onSubmit={handleSubmit} className="mb-4">
              <div className="flex mb-2">
                <span className="text-green-400 mr-2">$</span>
                <input
                  type="text"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Enter your message"
                  className="flex-grow bg-transparent outline-none text-green-200"
                />
              </div>
              <button
                type="submit"
                className="bg-green-700 text-green-100 px-4 py-2 rounded hover:bg-green-600 transition-colors"
              >
                Transmit
              </button>
            </form>
            {response && <div className="text-green-300 whitespace-pre-wrap">{response}</div>}
          </div>
          {contactInfo.map((item, index) => (
            <motion.a
              key={index}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center mb-4 p-4 bg-green-900 bg-opacity-50 rounded-lg hover:bg-opacity-75 transition-colors duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <item.icon className="w-6 h-6 mr-4 text-green-400" />
              <span className="text-green-200 text-lg">{item.text}</span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Contact
