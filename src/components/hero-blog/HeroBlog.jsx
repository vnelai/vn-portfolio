import React from "react";
import "./HeroBlog.css";

const HeroBlog = () => {
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="hero-section-blog">
      <div className="hero-content-blog">
        <h1 className="hero-title-blog">Starlight Labs Blog</h1>
        <p className="hero-subtitle-blog">
          I’m Virginia (aka V⚡, powered up for tech), a cybersecurity and
          software engineering explorer. This blog is my digital trail —
          breadcrumbs of every win, mistake, and mission as I break into tech.
        </p>
        <div className="cta-buttons-blog">
          <button
            onClick={() => scrollToSection("featured")}
            className="cta-button-blog"
          >
            🔎 Read Featured Posts
          </button>
          <button
            onClick={() => scrollToSection("topics")}
            className="cta-button-blog"
          >
            🧠 Browse Topics
          </button>
          <button
            onClick={() => scrollToSection("freelance")}
            className="cta-button-blog"
          >
            🚀 Follow My Freelance Journey
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroBlog;

