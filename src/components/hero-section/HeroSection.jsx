import React from 'react';
import './HeroSection.css';


function HeroSection() {
  return (
    <section className='hero-section'>
        <div className='hero-content'>
            <h1>Hi, I'm Virginia</h1>
            <h2>Software Engineer | Cybersecurity Enthusiast</h2>
            <p>
            Passionate about finding vulnerabilities and building 
            secure, user-friendly web applications.
            </p>
            <div className='hero-btns-div'>
              <a 
                href='/public/Virginia_Nelai _Resume.pdf' 
                target="_blank" 
                rel="noopener noreferrer" 
                className='hero-btn'
              >
                   <i className="fa-solid fa-download"></i> Get Resume
              </a>
              <a href="/projects" className='hero-btn'>
                <i className="fa-solid fa-folder-open"></i> View Projects
              </a>
            </div>
        </div>
    </section>
  );
};

export default HeroSection