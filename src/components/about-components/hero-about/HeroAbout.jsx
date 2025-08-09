import React from "react";
import "./HeroAbout.css";
import { Link } from "react-router-dom";

const HeroAbout = () => {
  const scrollToSection = (id, offset = 80) => {
    const el = document.getElementById(id);
    if (!el) return;
    const y = el.getBoundingClientRect().top + window.pageYOffset - offset; // adjust for fixed header
    window.scrollTo({ top: y, behavior: "smooth" });
  };

  return (
    <section className="hero-section-about">
      <div className="hero-content-about">
        <h1 className="hero-title-about">My Tech Journey</h1>

        <h2 className="hero-intro">
          Hey, I’m Virginia (aka V⚡). Cybersecurity professional & tech
          learner.
        </h2>
        <h3 className="hero-subtitle-about">
          I’m passionate about protecting systems and data, building secure
          software and sharing what I learn along the way.
        </h3>

        <div className="cta-buttons-about">
          <button
            onClick={() => scrollToSection("journey")}
            className="cta-button-about"
          >
            🚀 View My Journey
          </button>
          <Link to="/projects/topic/all" className="cta-button-about">
            💻 View My Skills
          </Link>
          <Link to="/blog/topic/all" className="cta-button-about connect">
            📖 Explore My Blog
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroAbout;
