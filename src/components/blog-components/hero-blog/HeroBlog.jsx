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
        <h1 className="hero-title-blog">Cyber Tech Journal</h1>
        <h2>I’m Virginia (aka V⚡), a cybersecurity + software engineer on a mission to break into tech.</h2>
        <p>This blog is my digital trail — wins, flops, and lessons from the front lines of code and cyber.</p>
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
          <a
            href="https://discord.gg/qpeRhGs6"
            className="cta-button-blog community"
            target="_blank"
            rel="noopener noreferrer"
          >
            🤝 Join the Community
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroBlog;

