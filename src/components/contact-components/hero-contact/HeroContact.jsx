import React from "react";
import "./HeroContact.css";

const HeroContact = () => {
  return (
    <section className="hero-section-contact">
      <div className="hero-content-contact">
        <h1 className="hero-title-contact">Protect Innovate Empower</h1>
        <h2>Let’s Connect & Build Secure Solutions</h2>
        <p>I build secure apps, defend against threats, and teach others to do the same. Let’s safeguard the web, together.</p>
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

export default HeroContact;
