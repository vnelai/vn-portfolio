import React from 'react';
import ProjectsComp from '../components/projects/ProjectsComp';

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

function Projects() {
  return (
    <div>
      <ProjectsComp projects={projects}/>;
    </div>
  );
}

export default Projects;