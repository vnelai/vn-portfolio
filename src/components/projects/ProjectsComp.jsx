import React from 'react';
import './ProjectsComp.css';

function ProjectsComp({ projects }) { 
  return (
    <section className='projects-component'>
        <h1>My Projects</h1>
        <div className='projects-container'>
            {projects.map((project, index) =>(
                <div key={index} className='project-card'>
                    <img src={project.image} alt={project.title}/>
                    <h2>{project.title}</h2>
                    <p>{project.description}</p>
                    <div className='project-links'>
                        <a href={project.liveLink} target="_blank" rel="noopener noreferrer">Live Demo</a>
                        <a href={project.repoLink} target="_blank" rel="noopener noreferrer">GitHub Repo</a>
                    </div>
                </div>
            ))}
        </div> 
    </section>
  );
};

export default ProjectsComp;