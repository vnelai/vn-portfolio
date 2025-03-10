import React from "react";
import "./Journey.css";

function Journey({ isDarkMode }) {
  return (
    <section className="about-container">
      <div className="about-content">
        {/* Left Side - Text */}
        <div className="about-text">
          <h1>My Journey</h1>
          <p>
            I started my journey in Greece, and after high school, I moved to
            New York to pursue a career in medicine. I completed my pre-med
            bachelor's with a 3.93 GPA, encouraged by my family’s hopes for me
            to follow a stable, respected career. However, while balancing
            school, multiple jobs, and caring for my younger siblings, I
            realized that continuing to medical school was no longer the right
            path for me.
          </p>
          <p>
            From leading teams in healthcare, retail, and the music industry to
            diving deep into data, cybersecurity, and software engineering, I
            found my true calling in tech. Once I stepped into this world, I
            couldn’t stop learning. I love problem-solving, troubleshooting, and
            continuously improving—every challenge is a chance to grow.
            Cybersecurity excites me because it feels like solving puzzles and
            unraveling mysteries, and I even play Capture the Flag competitions
            for fun!
          </p>
          <p>
            Graduating as valedictorian from my software engineering bootcamp
            was a proud milestone. Now, with certifications in cybersecurity,
            cloud computing on my radar, and a strong foundation in software
            development, I’m ready for my first tech role. My next goal? To grow
            as an engineer and cybersecurity professional while pursuing a
            master’s in computer science.
          </p>
        </div>

        {/* Right Side - Profile Image */}
        <div className="about-image">
          <img
            src={
              isDarkMode
                ? `/PURPLE GRADIENT.png`
                : `/BLUE GRADIENT.png`
            }
            alt="professional-pic"
          />
        </div>
      </div>
    </section>
  );
}

export default Journey;
