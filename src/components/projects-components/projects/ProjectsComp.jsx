import React from "react";
import "./ProjectsComp.css";

function ProjectsComp({ projects }) {
    // If no articles are provided, show a message
    if (projects.length === 0) {
      return <h2 className="no-projects-message">No articles available for the selected topic.</h2>;
    }

  return (
    <section className="projects-component">
      <div className="projects-container">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <h2> {projects[0].title.split(" - ").map((part, index) => (
          <span key={index}>{part}<br /></span>
        ))}</h2>
            <img src={project.image} alt={project.title} />
            <p>{project.description}</p>

            {/* Key Technologies Section */}
            <div className="project-technologies">
              <strong>Key Technologies</strong>
              <ul>
                {project.technologies.map((tech, techIndex) => (
                  <li key={techIndex}>{tech}</li>
                ))}
              </ul>
            </div>

            <div className="project-links">
              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                Live Demo
              </a>
              <a
                href={project.repoLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub Repo
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ProjectsComp;
