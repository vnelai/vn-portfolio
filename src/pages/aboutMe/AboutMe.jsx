import React from 'react';
import './AboutMe.css';
import Journey from '../../components/journey/Journey';
import TechSkills from '../../components/tech-skills/TechSkills';


function AboutMe({ isDarkMode }) {
  return (
    <>
      <Journey isDarkMode={isDarkMode}/>
      <TechSkills/>
    </>
  );
}

export default AboutMe;