"use client"

import type React from "react"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { useState, useEffect } from "react"

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [input, setInput] = useState("")
  const [content, setContent] = useState(["Welcome to Harsh's terminal. Type 'help' for available commands."])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setContent([...content, `$ ${input}`])

    switch (input.toLowerCase()) {
      case "help":
        setContent((prev) => [...prev, "Available commands: about, skills, projects, clear"])
        break
      case "about":
        setContent((prev) => [...prev, ...aboutContent])
        break
      case "skills":
        setContent((prev) => [...prev, ...skillsContent])
        break
      case "projects":
        setContent((prev) => [...prev, ...projectsContent])
        break
      case "clear":
        setContent([])
        break
      default:
        setContent((prev) => [...prev, "Command not recognized. Type 'help' for available commands."])
    }
    setInput("")
  }

  const aboutContent = [
    "Harsh Gupta: Cybersecurity Specialist in Training",
    "- MSc student in Cybersecurity and Digital Forensics at Rashtriya Raksha University",
    "- Background in IT-IMS & Cybersecurity from Gujarat University",
    "- Passionate about securing digital infrastructures and ethical hacking",
    "- Constantly learning and adapting to the evolving threat landscape",
  ]

  const skillsContent = [
    "Core Skills:",
    "- Network Security",
    "- Cloud Computing (AWS, Azure)",
    "- Linux Administration",
    "- Ethical Hacking",
    "- Digital Forensics",
    "- Penetration Testing",
  ]

  const projectsContent = ["Notable Projects:", "1. Developed a secure cloud infrastructure on AWS"]

  useEffect(() => {
    const cursor = document.createElement("span")
    cursor.textContent = "█"
    cursor.className = "animate-blink"
    const container = document.querySelector("form")
    container?.appendChild(cursor)
    return () => cursor.remove()
  }, [])

  return (
    <section id="about" className="py-20 relative matrix-bg">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          ref={ref}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-green-400 glitch neon-text">About Me</h2>
        </motion.div>
        <div className="terminal">
          <div className="bg-green-900 bg-opacity-20 border border-green-500 p-3 mb-4 rounded">
            <pre className="text-green-400 font-mono text-sm">
              {`
 _   _                _       ____            _    __       _ _       
| | | | __ _ _ __ ___| |__   |  _ \\ ___  _ __| |_ / _| ___ | (_) ___  
| |_| |/ _\` | '__/ __| '_ \\  | |_) / _ \\| '__| __| |_ / _ \\| | |/ _ \\ 
|  _  | (_| | |  \\__ \\ | | | |  __/ (_) | |  | |_|  _| (_) | | | (_) |
|_| |_|\\__,_|_|  |___/_| |_| |_|   \\___/|_|   \\__|_|  \\___/|_|_|\\___/ 
                                                                      
Available Commands:
▶ about    - Display information about Harsh Gupta
▶ skills   - List core cybersecurity skills
▶ projects - View notable security projects
▶ clear    - Clear the terminal screen
`}
            </pre>
          </div>
          <div className="mb-4">
            {content.map((line, index) => (
              <p key={index} className="mb-2">
                {line.startsWith("$") ? (
                  <span className="text-green-400">{line}</span>
                ) : (
                  <span className="text-green-200">{line}</span>
                )}
              </p>
            ))}
          </div>
          <form onSubmit={handleSubmit} className="flex">
            <span className="text-green-400 mr-2">$</span>
            <input
              type="text"
              value={input}
              onChange={handleInputChange}
              className="flex-grow bg-transparent outline-none text-green-200"
              autoFocus
            />
          </form>
        </div>
      </div>
    </section>
  )
}

export default About
