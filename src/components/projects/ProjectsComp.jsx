import React from "react";
import "./ProjectsComp.css";

function ProjectsComp({ projects }) {
  return (
    <section className="projects-component">
      <div className="projects-container">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <h1> {projects[0].title.split(" - ").map((part, index) => (
          <span key={index}>{part}<br /></span>
        ))}</h1>
            <img src={project.image} alt={project.title} />
            <p>{project.description}</p>

            {/* Key Technologies Section */}
            <div className="project-technologies">
              <strong>Key Technologies:</strong>
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
