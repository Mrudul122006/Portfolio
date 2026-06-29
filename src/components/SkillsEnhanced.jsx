import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const SkillBar = ({ name, level }) => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setWidth(level), 300);
    return () => clearTimeout(timer);
  }, [level]);

  return (
    <motion.div
      className="skill-progress"
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.02 }}
    >
      <div className="skill-name">
        <span>{name}</span>
        <span className="skill-level">{level}%</span>
      </div>

      <div className="progress-bar">
        <motion.div
          className="progress-fill"
          initial={{ width: 0 }}
          animate={{ width: `${width}%` }}
          transition={{ duration: 1, ease: 'easeOut' }}
        />
      </div>
    </motion.div>
  );
};

const SkillCard = ({ title, skills }) => (
  <motion.div
    className="skill-card"
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
    whileHover={{
      y: -8,
      boxShadow: '0 12px 32px rgba(37,99,235,0.12)',
    }}
  >
    <h4>{title}</h4>

    {skills.map((skill) => (
      <SkillBar
        key={skill.name}
        name={skill.name}
        level={skill.level}
      />
    ))}
  </motion.div>
);

export default function Skills() {
  const skillCategories = [
    {
      title: 'Programming',
      skills: [
        { name: 'C', level: 40 },
        { name: 'Python', level: 55 },
        { name: 'Embedded C', level: 48 },
      ],
    },
    {
      title: 'Embedded Systems & IoT',
      skills: [
        { name: 'IoT Development', level: 80 },
        { name: 'Sensor Integration', level: 85 },
      ],
    },
    {
      title: 'Electronics & Communication',
      skills: [
        { name: 'Digital Electronics', level: 73 },
        { name: 'Circuit Design', level: 50 },
        { name: 'Communication Systems', level: 40 },
      ],
    },
  ];

  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="gradient-text">
            Technical Skills
          </h2>

          <p className="section-subtitle">
            Developing expertise in embedded systems,
            electronics, IoT, communication technologies,
            and modern engineering tools.
          </p>
        </motion.div>

        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <SkillCard
              key={index}
              title={category.title}
              skills={category.skills}
            />
          ))}
        </div>
      </div>
    </section>
  );
}