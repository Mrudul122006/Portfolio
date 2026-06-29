export default function Skills() {
  const skillCategories = [
    {
      title: 'Programming',
      skills: [
        { name: 'C', level: 90 },
        { name: 'C++', level: 85 },
        { name: 'Python', level: 80 },
      ],
    },
    {
      title: 'Embedded Systems',
      skills: [
        { name: 'Arduino', level: 90 },
        { name: 'Embedded C', level: 85 },
        { name: 'Microcontrollers', level: 80 },
      ],
    },
    {
      title: 'Electronics & IoT',
      skills: [
        { name: 'Circuit Design', level: 85 },
        { name: 'IoT', level: 80 },
        { name: 'Sensor Integration', level: 85 },
      ],
    },
    {
      title: 'Tools & Platforms',
      skills: [
        { name: 'Git & GitHub', level: 90 },
        { name: 'Arduino IDE', level: 90 },
        { name: 'VS Code', level: 95 },
      ],
    },
  ];

  return (
    <section id="skills" className="skills">
      <div className="container section-center">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Technical Skills
        </motion.h2>

        <div className="skills-grid">
          {skillCategories.map((category) => (
            <SkillCard key={category.title} {...category} />
          ))}
        </div>
      </div>
    </section>
  );
}