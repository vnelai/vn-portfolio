import React from 'react';
import './HeroSection.css';


function HeroSection() {
  return (
    <section className='hero-section'>
        <div className='hero-content'>
            <h1>Hi, I'm Virginia</h1>
            <h2>Software Engineer & Security Enthusiast</h2>
            <p>
                Passionate about building secure, user-friendly websites 
                and applications. Skilled in React, JavaScript, and UI design.
            </p>
            <a href='/public/Virginia_Nelai _Resume.pdf' target="_blank" rel="noopener noreferrer">
                Download My Resume
            </a>

            <a href="/projects">View Projects</a>
        </div>
    </section>
  );
};

export default HeroSection