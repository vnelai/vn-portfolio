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
                and applications.
            </p>
            <p>
            Skilled in full-stack development with MongoDB, Express, React, Node.js.
            </p>
            <div className='hero-btns-div'>
              <a 
                href='/public/Virginia_Nelai _Resume.pdf' 
                target="_blank" 
                rel="noopener noreferrer" 
                className='hero-btn'
              >
                   <i class="fa-solid fa-download"></i> Get Resume
              </a>
              <a href="/projects" className='hero-btn'>
                <i class="fa-solid fa-folder-open"></i> View Projects
              </a>
            </div>
            <div class="social-media-div">
              <a href="https://github.com/vnelai" class="sm-button github" target="_blank" rel="noopener noreferrer">
                  <i class="fa-brands fa-github"></i>
              </a> 
              <a href="https://www.linkedin.com/in/virginianelai/" class="sm-button linkedin" target="_blank" rel="noopener noreferrer">
                  <i class="fa-brands fa-linkedin-in"></i>
              </a>
              <a href="https://www.youtube.com/@StarlightLabsX" class="sm-button youtube" target="_blank" rel="noopener noreferrer">
                  <i class="fa-brands fa-youtube"></i>
              </a> 
              <a href="https://www.facebook.com/StarlightLabsX/" class="sm-button facebook" target="_blank" rel="noopener noreferrer">
                  <i class="fa-brands fa-facebook-f"></i>
              </a>
              <a href="https://www.instagram.com/starlightlabsx/" class="sm-button instagram" target="_blank" rel="noopener noreferrer">
                  <i class="fa-brands fa-instagram"></i>
              </a>
              <a href="https://x.com/StarlightLabs_X" class="sm-button twitter" target="_blank" rel="noopener noreferrer">
                  <i class="fa-brands fa-twitter"></i>
              </a>
              <a href="mailto:vnelai01@gmail.com" class="sm-button google" target="_blank" rel="noopener noreferrer">
                  <i class="fa-brands fa-google"></i>
              </a>
              {/* <a href="https://medium.com" class="sm-button medium" target="_blank" rel="noopener noreferrer">
                  <i class="fa-brands fa-medium"></i>
              </a> */}
          </div>
        </div>
    </section>
  );
};

export default HeroSection