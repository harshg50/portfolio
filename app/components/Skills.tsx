"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

const skillGroups = [
  {
    category: "Offensive Security",
    image: "/images/offensive-security.svg",
    skills: [
      { name: "Penetration Testing" },
      { name: "Vulnerability Assessment" },
      { name: "Exploit Development" },
      { name: "Malware Analysis" },
    ],
  },
  {
    category: "Defensive Security",
    image: "/images/defensive-security.svg",
    skills: [
      { name: "Incident Response" },
      { name: "Threat Hunting" },
      { name: "Security Information and Event Management" },
      { name: "Malware Reverse Engineering" },
    ],
  },
  {
    category: "Network Security",
    image: "/images/network-security.svg",
    skills: [{ name: "Firewall Configuration" }, { name: "Intrusion Detection Systems" }, { name: "VPN Setup" }],
  },
  {
    category: "Cryptography",
    image: "/images/cryptography.svg",
    skills: [{ name: "Encryption Algorithms" }, { name: "Key Management" }, { name: "Blockchain Security" }],
  },
  {
    category: "Cloud Security",
    image: "/images/cloud-security.svg",
    skills: [
      { name: "AWS Security Services" },
      { name: "Azure Security Center" },
      { name: "Cloud Infrastructure Protection" },
      { name: "Serverless Security" },
      { name: "Container Security" },
    ],
  },
  {
    category: "Digital Forensics",
    image: "/images/digital-forensics.svg",
    skills: [
      { name: "Disk Forensics" },
      { name: "Memory Analysis" },
      { name: "Network Forensics" },
      { name: "Mobile Device Forensics" },
      { name: "Forensic Data Recovery" },
      { name: "Chain of Custody Procedures" },
    ],
  },
]

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="skills" className="py-20 relative matrix-bg">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          ref={ref}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-green-400 glitch neon-text">Skill Arsenal</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillGroups.map((group, groupIndex) => (
            <motion.div
              key={group.category}
              className="terminal relative overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: groupIndex * 0.1 }}
            >
              <div className="relative z-10">
                <h3 className="text-xl font-semibold mb-4 text-green-500">{group.category}</h3>
                <ul>
                  {group.skills.map((skill, index) => (
                    <motion.li
                      key={skill.name}
                      className="flex items-center mb-2"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                    >
                      <div className="flex items-center">
                        <span className="text-green-400 mr-2">▶</span>
                        <span className="text-green-300">{skill.name}</span>
                      </div>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
