import React from 'react';
import './AboutMe.css';

function AboutMe() {
  return (
    <section className="about-container">
      <div className="about-content">
        {/* Left Side - Text */}
        <div className="about-text">
          <h1>About Me</h1>
          <h2>My Journey</h2>
          <p>
            I started my journey in Greece, and after high school, I moved to New York with big dreams of becoming a doctor. 
            I completed my pre-med bachelor's with a 3.93 GPA, driven by my family’s hopes for me to follow a stable, respected career. 
            However, life had other plans. I had to step up to care for my younger siblings, and balancing school with multiple jobs made it impossible to continue toward medical school.
          </p>
          <p>
            My first leadership role was as a shift supervisor at an adult home, where I learned the value of hard work and helping others. 
            Later, I moved into the music industry, starting as an inventory manager and eventually becoming the director of operations for retail, events, and music. 
            This is where I first fell in love with data and technology. I earned Google’s Data Analytics certification, followed by PCEP (Python) and several CompTIA certifications, including ITF+, A+, Network+, and Security+.
          </p>
          <p>
            To strengthen my foundation, I took key prerequisites for a master's in computer science, including Discrete Math, Data Structures, and Operating Systems. 
            Graduating as valedictorian from my software engineering bootcamp was a proud moment, proving that despite challenges, I could succeed. 
            My next goal is to gain cloud certifications and transition into AI engineering.
          </p>
          <p>
            Now, with skills in both cybersecurity and software engineering, I’m looking for my first role in tech and planning to pursue a master’s degree. 
            My journey—from healthcare to tech—has shaped me into who I am today, and I’m ready to tackle whatever comes next.
          </p>
        </div>

        {/* Right Side - Profile Image */}
        <div className="about-image">
          <img src="/dhaval-parmar-dnPniNPUe4o-unsplash.jpg" alt="Laptop" />
        </div>
      </div>

      {/* Skills Section */}
      <div className="skills-section">
        <h2>Tech Skills</h2>
        <div className="skills-icons">
          <i className="fab fa-python"></i>
          <i className="fab fa-js-square"></i>
          <i className="fab fa-react"></i>
          <i className="fab fa-node"></i>
          <i className="fab fa-aws"></i>
          <i className="fab fa-linux"></i>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;