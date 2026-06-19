<section id="projects" className="projects"></section>
function Projects() {
  const projects = [
    {
      title: "Farm Connect",
      description:
        "Platform connecting farmers directly with buyers without middlemen.",
    },
    {
      title: "PC Doctors Hub",
      description:
        "Website for booking computer repair and technical support services.",
    },
    {
      title: "Anomaly Detection in IoT systems",
      description:
        "Machine learning system for detecting unusual behavior in IoT devices.",
    },
    {
      title: "Expense Tracker",
      description:
        "Track daily expenses with summaries and reports.",
    },
  ];

  return (
    <section id="projects" className="projects">
      <h2>Projects</h2>

      <div className="project-container">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;