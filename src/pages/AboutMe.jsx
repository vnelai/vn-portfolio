import React from 'react';
import Journey from '../components/about-components/journey/Journey';
import TechSkills from '../components/about-components/tech-skills/TechSkills';
import HeroAbout from '../components/about-components/hero-about/HeroAbout';


function AboutMe({ isDarkMode }) {
  return (
    <>
      <HeroAbout/>
      <Journey isDarkMode={isDarkMode}/>
      <TechSkills/>
    </>
  );
}

export default AboutMe;