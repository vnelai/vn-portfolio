import React from "react";
import "./HeroProjects.css";

function HeroProjects() {
  return (
    <section className="hero-section-projects">
      <div className="hero-content-projects">
        <h1 className="hero-title-projects">Code & Security Projects</h1>
        <p className="hero-subtitle-projects">
          Building secure, innovative web experiences with a focus on full-stack
          development and cybersecurity.
        </p>
        <p className="hero-paragraph-projects">
          This is my project vault — apps, tools, and experiments blending code
          with cyber to solve real-world problems.
        </p>
        <div className="cta-buttons-projects">
          <button
            onClick={() => scrollToSection("featured-work")}
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
          <a href="/contact" className="cta-button-projects community">
            💼 Work With Me
          </a>
        </div>
      </div>
    </section>
  );
}

export default HeroProjects;
