import { motion } from 'framer-motion';
import { FiTrendingUp } from 'react-icons/fi';

export default function GitHubActivity() {
  return (
    <section className="github-activity">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="header-icon-wrapper">
          <FiTrendingUp className="activity-icon" />
        </div>

        <h2>Engineering Journey</h2>

        <p className="activity-subtitle">
          Continuously learning, building innovative projects, and expanding my
          expertise in Electronics & Telecommunication Engineering, embedded
          systems, IoT, and software development.
        </p>

        <div className="activity-stats">
          <div className="stat-item">
            <h4>Embedded Systems</h4>
            <p>Developing practical hardware and microcontroller-based solutions.</p>
          </div>

          <div className="stat-item">
            <h4>IoT & Innovation</h4>
            <p>Building connected devices and exploring emerging technologies.</p>
          </div>

          <div className="stat-item">
            <h4>Continuous Growth</h4>
            <p>Enhancing skills through academic projects and hands-on learning.</p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}