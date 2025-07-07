import React from "react";
import { Link } from "react-router-dom";
import "./HeroContact.css";

const HeroContact = () => {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="hero-section-contact">
      <div className="hero-content-contact">
        <h1 className="hero-title-contact">Protect Innovate Empower</h1>
        <h2>Let’s Connect & Build Secure Solutions</h2>
        <p>
          I build secure apps, defend against threats, and teach others to do
          the same. Let’s safeguard the web, together.
        </p>
        <div className="cta-buttons-blog">
          <Link to="/projects/topic/all" className="cta-button-blog">
            💼 View My Work
          </Link>

          <Link to="/blog/topic/all" className="cta-button-blog">
            📚 View Blog
          </Link>
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

export default HeroContact;
