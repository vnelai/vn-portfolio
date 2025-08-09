import React from "react";
import "./HeroAbout.css";
import { Link } from "react-router-dom";

const HeroAbout = () => {
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="hero-section-about">
      <div className="hero-content-about">
        <h1 className="hero-title-about">My Tech Journey</h1>

        <h2 className="hero-intro">
          Hey, I’m Virginia (aka V⚡).
          <br className="desktop-br" />
          <span className="line2">
            Cybersecurity professional & tech learner.
          </span>
        </h2>

        <p className="hero-subtitle-about">
          I’m passionate about protecting systems and data,
          <br className="desktop-br" />
          building secure software and sharing what I learn along the way.
        </p>

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
          <Link to="/blog" className="cta-button-about connect">
            📖 Explore My Blog
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroAbout;
