function Skills() {
  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Node.js",
    "MongoDB",
    "Git",
    "GitHub"
  ];

  return (
    <section id="skills" className="skills">
      <h2>Skills</h2>

      <div className="skill-box">
        {skills.map((skill) => (
          <span key={skill}>{skill}</span>
        ))}
      </div>
    </section>
  );
}

export default Skills;