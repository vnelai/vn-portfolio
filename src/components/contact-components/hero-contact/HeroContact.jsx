import React from "react";
import { Link } from "react-router-dom";
import "./HeroContact.css";

const HeroContact = () => {
  const scrollToSection = (id, offset = 80) => {
    const el = document.getElementById(id);
    if (!el) return;
    const y = el.getBoundingClientRect().top + window.pageYOffset - offset; // adjust for fixed header
    window.scrollTo({ top: y, behavior: "smooth" });
  };

  return (
    <section className="hero-section-contact">
      <div className="hero-content-contact">
        <h1 className="hero-title-contact">Let's Connect</h1>
        <h2>I share what I learn, and I love learning from others</h2>
        <h3>
          Got a project, opportunity, or just want to talk security?
        </h3>
        <div className="cta-buttons-blog">
          <button
            onClick={() => scrollToSection("contact")}
            className="cta-button-blog"
          >
            ✉️ Send a Message
          </button>
          <Link to="/projects/topic/all" className="cta-button-blog">
            💼 View My Work
          </Link>
          <a
            href="https://discord.gg/Petv3mtA"
            className="cta-button-blog community"
            target="_blank"
            rel="noopener noreferrer"
          >
            🤝 Join Community
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroContact;
