import React from 'react';
import ProjectsComp from '../components/projects/ProjectsComp';

const projects = [
  {
    title: 'Meal Prep Pro - Full-Stack Meal Planning Web App',
    description: 'Meal Prep Pro is a full-stack web app designed to streamline meal planning, recipe searching, and grocery shopping. Built with React, Node.js, Express, MongoDB, and external API integration, users can search recipes, save favorites, plan meals, and manage a shopping list with full CRUD functionality. The app reduces API calls by saving favorite recipes in a MongoDB database, improving efficiency and cost-effectiveness. It also includes a meal planner for breakfast, lunch, and dinner, and a shopping list feature for users to save grocery items.',    liveLink: 'https://meal-prep-pro-fe.onrender.com',
    repoLink: ' https://github.com/vnelai/Meal_Prep_Pro_FE.git',
    image: '/public/Meal_Prep_Pro.png', // Placeholder image URL
    technologies: ['MongoDB', 'Express', 'React', 'Node.js', 'API', 'Vite', 'JavaScript', 'HTML/CSS'],
  },
  {
    title: 'React To-Do List – Front-End Task Management with Full CRUD',
    description: 'The React To-Do List app was built to demonstrate my understanding of React fundamentals, including handling user interactions, managing state with useState, and utilizing Vite for fast front-end development. The app allows users to create, edit, delete, and display tasks, with additional functionality for rearranging tasks by priority and marking tasks as completed.This project showcases my ability to build a dynamic user interface using React, where state is updated based on user actions without a back-end or database. It highlights my proficiency in React\'s event handling, conditional rendering, and state management to implement a full CRUD functionality.',
    liveLink: ' https://vnelai.github.io/React_Todo_List/',
    repoLink: ' https://github.com/vnelai/React_Todo_List.git',
    image: '/public/to-do-list2.png',
    technologies: ['React', 'Vite', 'JavaScript', 'HTML/CSS'],
  },
  // Add more projects
];

function Projects() {
  return (
    <div>
      <ProjectsComp projects={projects}/>;
    </div>
  );
}

export default Projects;