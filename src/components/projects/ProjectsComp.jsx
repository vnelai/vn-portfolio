import React from 'react';
import './ProjectsComp.css';

function ProjectsComp() {
    const projects = [
        {
          title: 'Project 1',
          description: 'A short description of project 1.',
          liveLink: 'https://project1.com',
          repoLink: 'https://github.com/vnelai01/project1',
          image: '/public/project1.img', // Placeholder image URL
        },
        {
          title: 'Project 2',
          description: 'A short description of project 2.',
          liveLink: 'https://project2.com',
          repoLink: 'https://github.com/vnelai01/project1',
          image: '/public/project2.img',
        },
        // Add more projects as needed
      ];
  return (
    <section className='projects-component'>
        <h1>My Projects</h1>
        <div className='projects-container'>
            {projects.map((project, index) =>(
                <div className='project-card'>
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