import React from 'react'
import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="about" className="about">
      <div className="container section-center">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          About Me
        </motion.h2>
        
        <motion.div 
          className="about-content"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <p>
            I'm an Electronics and Telecommunication (EXTC) Engineering student with a strong passion for technology, innovation, and problem-solving. I enjoy building practical solutions by combining embedded systems, IoT, and modern web technologies to solve real-world challenges.
          </p>

          <p>
            My experience includes developing IoT-based hardware projects, responsive web applications, and full-stack solutions. I continuously explore new technologies while enhancing my skills in programming, electronics, and system design.
          </p>

          <div className="career-goal">
            <h4>Career Goal</h4>
            <p>
              To build innovative and impactful technology solutions by integrating electronics, embedded systems, and software development while continuously learning and contributing to meaningful engineering projects.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
