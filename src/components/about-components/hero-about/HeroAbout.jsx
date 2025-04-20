import React from "react";
import "./HeroAbout.css";

const HeroAbout = () => {
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="hero-section-about">
      <div className="hero-content-about">
        <h1 className="hero-title-about">My Tech Journey</h1>
        <h2>Hey, I’m Virginia (aka V⚡) — builder, hacker, and tech explorer.</h2>
        <p>I’m breaking into tech with a love for cybersecurity, software, and sharing what I learn.</p>
        <div className="cta-buttons-about">
          <button
            onClick={() => scrollToSection("journey")}
            className="cta-button-about"
          >
            🚀 View My Journey
          </button>
          <button
            onClick={() => scrollToSection("skills")}
            className="cta-button-about"
          >
            💻 View My Skills
          </button>
          <a
            href="https://linkedin.com/in/virginianelai"
            className="cta-button-about connect"
            target="_blank"
            rel="noopener noreferrer"
          >
            📖 Explore My Blog
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroAbout;
