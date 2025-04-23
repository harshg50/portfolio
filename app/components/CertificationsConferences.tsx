"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Award, Users } from "lucide-react"

const certifications = [
  "Google Technical Support",
  "The Bits and Bytes of Computer Networking",
  "Operating Systems: Becoming a Power User",
  "Networking Devices and Initial Configuration",
  "SC-900 Microsoft Certified: Security, Compliance, and Identity Fundamentals",
  "Ethical Hacker",
  "AWS Knowledge: Architecting",
  "OSForensics Triage Certification (OSFTC)",
  "Red Hat Certified System Administrator v9 (RHCSA)",
  "Certified Network Security Practitioner (CNSP)",
  "Certified AppSec Practitioner (CAP)",
]

const conferences = [
  "Hackers Meetup",
  "GDC Google Developer Club Gandhinagar",
  "Seasides Information Security Conference",
]

const CertificationsConferences = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="certifications-conferences" className="py-20 relative matrix-bg">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          ref={ref}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-green-400 glitch neon-text">Security Credentials</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            className="terminal"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-2xl font-semibold text-green-400 mb-4 flex items-center neon-text">
              <Award className="mr-2" /> Certifications
            </h3>
            <ul className="space-y-2">
              {certifications.map((cert, index) => (
                <motion.li
                  key={index}
                  className="text-green-300"
                  whileHover={{ color: "#4ade80", x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  {cert}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            className="terminal"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h3 className="text-2xl font-semibold text-green-400 mb-4 flex items-center neon-text">
              <Users className="mr-2" /> Conferences & Meetups
            </h3>
            <ul className="space-y-2">
              {conferences.map((conf, index) => (
                <motion.li
                  key={index}
                  className="text-green-300"
                  whileHover={{ color: "#4ade80", x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  {conf}
                </motion.li>
              ))}
            </ul>
            <motion.p
              className="mt-4 text-green-400"
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              Additionally, I am an active CTF player and have participated in numerous Capture The Flag competitions.
            </motion.p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default CertificationsConferences
