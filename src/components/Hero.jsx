import React from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import profileImage from '../assets/image.jpeg'

export default function Hero() {
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 500], [0, 150])
  const opacity = useTransform(scrollY, [0, 300], [1, 0])

  return (
    <section id="hero" className="hero">
      {/* Ambient gradient background */}
      <div className="ambient-gradient"></div>
      
      <motion.div className="hero-grid" style={{ y, opacity }}>
        <motion.div 
          className="hero-content"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Hi, I'm <span className="highlight gradient-text-animated">Mrudul</span><br />
            a Electronics and Telecommunication Student.
          </motion.h1>
          <motion.p 
            className="lead"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
          Electronics & Telecommunication student passionate about embedded systems and IoT.
                                 </motion.p>
          <motion.p 
            className="tagline"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            Transforming engineering ideas into innovative technology solutions through electronics, communication systems, and software development.
          </motion.p>

          <motion.div 
            className="hero-actions"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            <motion.a 
              className="btn btn-primary" 
              href="#projects"
              whileHover={{ scale: 1.05, boxShadow: '0 8px 24px rgba(37,99,235,0.3)' }}
              whileTap={{ scale: 0.95 }}
            >
              View Projects
            </motion.a>
            <motion.a 
              className="btn btn-outline" 
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Me
            </motion.a>
            <motion.a
              className="btn btn-secondary"
              href="/MrudulResume.pdf"
              download="MrudulResume.pdf"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              title="Download Resume"
            >
              📄 Download Resume
            </motion.a>
          </motion.div>
        </motion.div>

        <motion.div 
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <div className="hero-photo">
            <motion.img 
              src={profileImage} 
              alt="Mrudul Jaykrishna Gawande"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            />
          </div>
        </motion.div>
      </motion.div>
      {/* Hidden resume content used to render the on-the-fly PDF */}
      <div id="resume-content" style={{ position: 'absolute', left: -9999, top: 0, width: '800px', padding: '24px', background: '#fff', color: '#111', fontFamily: 'Poppins, Inter, sans-serif' }}>
        <h1>Mrudul Jaykrishna Gawande</h1>
        <p><strong>Electronics & Telecommunications Engineering Student</strong></p>
        <h3>Summary</h3>
        <p>Electronics and Telecommunications engineering student with a strong interest in renewable energy systems, solar power technologies, and circuit design.</p>
        <h3>Education</h3>
        <ul>
          <li>B.Tech (Electronics and Telecommunications) — Prof. Ram Meghe Institute of Technology and Research (2024-2028)</li>
        </ul>
        <h3>Skills</h3>
        <p>Problem Solving, Team Work, Leadership, Communication Skills, Critical Thinking</p>
      </div>
    </section>
  )
}
