import React from 'react'
import { motion } from 'framer-motion'
import { useStore } from '../store/useStore'
import spectrumImage from '../assets/spectrum.jpeg'

const ProjectCard = ({ title, desc, tech, liveUrl, githubUrl, image, project }) => {
  const { setSelectedProject } = useStore()
  
  return (
    <motion.article 
      className="project-card"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -8, boxShadow: '0 12px 32px rgba(37,99,235,0.15)' }}
    >
      <motion.div 
        className="project-thumb"
        onClick={() => setSelectedProject(project)}
        whileHover={{ scale: 1.05 }}
        style={{ cursor: 'pointer' }}
      >
        {image && <img src={image} alt={title} />}
        <div className="project-overlay">
          <span>View Case Study →</span>
        </div>
      </motion.div>
      <div className="project-body">
        <h3>{title}</h3>
        <p>{desc}</p>
        <div className="tech-tags">
          {tech.map((t) => (
            <motion.span 
              key={t} 
              className="tech-tag"
              whileHover={{ scale: 1.1, backgroundColor: '#2563EB', color: '#fff' }}
            >
              {t}
            </motion.span>
          ))}
        </div>
        <div className="project-actions">
          {liveUrl && (
            <motion.a 
              className="btn btn-primary" 
              href={liveUrl} 
              target="_blank" 
              rel="noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Live Demo
            </motion.a>
          )}
          {githubUrl && (
            <motion.a 
              className="btn btn-outline" 
              href={githubUrl} 
              target="_blank" 
              rel="noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              GitHub
            </motion.a>
          )}
        </div>
      </div>
    </motion.article>
  )
}

export default function Projects() {
  const projects = [
    {
      title: 'Spectrum – Smart Obstacle Detection Glasses',
      desc: 'A wearable IoT-based smart glasses prototype that detects nearby obstacles using ultrasonic sensing and provides real-time alerts for safer navigation.',
      fullDescription: 'Spectrum is a wearable IoT-based smart glasses prototype developed as a group project during Electronics and Telecommunication Engineering studies. The device is designed to detect nearby obstacles using ultrasonic sensing technology and provide real-time alerts, helping users navigate their surroundings more safely. The project demonstrates the practical application of embedded systems, sensor integration, and hardware prototyping to solve real-world accessibility and navigation challenges.',
      tech: ['Arduino Uno', 'HC-SR04 Ultrasonic Sensor', 'Embedded C', 'Hardware Prototyping', 'IoT'],
      githubUrl: 'https://github.com/Mrudul122006/',
      image: spectrumImage,
      images: [spectrumImage],
      timeline: '2024',
      role: 'Team Member – Hardware & Integration',
      team: 'Team Project (EXTC Department)',
      features: [
        'Wearable obstacle detection system',
        'Real-time distance measurement',
        'Ultrasonic sensor-based object detection',
        'Lightweight and portable design',
        'Fast response time',
        'Cost-effective hardware implementation',
      ],
      challenges: 'Designed and assembled the wearable prototype. Integrated the ultrasonic sensor with Arduino. Tested and calibrated obstacle detection accuracy. Debugged hardware connections and improved system reliability. Participated in prototype demonstrations during the college project exhibition.',
    },
  ]

  return (
    <section id="projects" className="projects">
      <div className="container section-center">
        <motion.h2 
          className="section-title gradient-text"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Featured Projects
        </motion.h2>
        <p className="section-subtitle">
          Building meaningful solutions that solve real-world problems
        </p>

        <div className="projects-grid">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}
