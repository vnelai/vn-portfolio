import React from "react";
import "./FeaturedProjects.css";

function FeaturedProjects({ onViewAll }) {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleViewAllClick = () => {
    if (onViewAll) onViewAll();         // Reset category filter
    scrollToSection("categories");      // Scroll to section
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
            href="0"
            target="_blank"
            rel="noopener noreferrer"
          >
            ...
          </a>
        </div>
        <div className="card-project">
          <a
            href="0"
            target="_blank"
            rel="noopener noreferrer"
          >
            ...
          </a>
        </div>
      </div>
      <button onClick={handleViewAllClick} className="view-all-projects">
        View All Projects
      </button>
    </section>
  );
}

export default FeaturedProjects;
