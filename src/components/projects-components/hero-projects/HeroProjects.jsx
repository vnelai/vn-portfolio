import React from "react";
import { Link } from 'react-router-dom';
import "./HeroProjects.css";

function HeroProjects() {
  // Scroll function to smoothly scroll to a section by id
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="hero-section-projects">
      <div className="hero-content-projects">
        <h1 className="hero-title-projects">Secure Code Lab</h1>
        <h2 className="hero-subtitle-projects">
          Building secure, innovative web experiences with a focus on full-stack
          development and cybersecurity.
        </h2>
        <p className="hero-paragraph-projects">
          This is my project vault — apps, tools, and experiments blending code
          with cyber to solve real-world problems.
        </p>
        <div className="cta-buttons-projects">
          <button
            onClick={() => scrollToSection("featured-projects")}
            className="cta-button-projects"
          >
            🌟 View Featured Work
          </button>
          <button
            onClick={() => scrollToSection("categories")}
            className="cta-button-projects"
          >
            📚 View Categories
          </button>
          <Link to="/contact" className="cta-button-projects community">
            💼 Work With Me
          </Link>
        </div>
      </div>
    </section>
  );
}

export default HeroProjects;
