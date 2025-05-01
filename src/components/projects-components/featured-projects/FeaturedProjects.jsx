import React from "react";
import { Link } from "react-router-dom";
import "./FeaturedProjects.css";

function FeaturedProjects() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="featured-projects" className="section-projects">
      <h2 className="section-title-projects">✨ Featured Projects</h2>
      <div className="card-grid-projects">
        <div className="card-project">
          <a
            href="https://meal-prep-pro-fe.onrender.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Meal Prep Pro Web App
          </a>
        </div>
        <div className="card-project">
          <a
            href="https://example.com/cybersecurity-challenge"
            target="_blank"
            rel="noopener noreferrer"
          >
            Cybersecurity Challenge Tracker
          </a>
        </div>
        <div className="card-project">
          <a
            href="https://example.com/e-commerce-storefront"
            target="_blank"
            rel="noopener noreferrer"
          >
            E-Commerce Storefront Development
          </a>
        </div>
      </div>

      <button
        onClick={() => scrollToSection("categories")}
        className="view-all-projects"
      >
        View All Projects
      </button>
    </section>
  );
}

export default FeaturedProjects;
