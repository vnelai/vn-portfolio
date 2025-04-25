import React from 'react';
import './FeaturedProjects.css';

function FeaturedProjects() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="featured-projects" className="section-projects">
        <h2 className="section-title-projects">✨ Featured Projects</h2>
        <div className="card-grid-projects">
          {/* Replace with dynamic featured project cards */}
          <div className="card-project">Meal Prep Pro Web App</div>
          <div className="card-project">Cybersecurity Challenge Tracker</div>
          <div className="card-project">E-Commerce Storefront Development</div>
        </div>
        <button 
        onClick={()=> scrollToSection("categories")} 
        className="view-all-projects"
        >
          View All Projects
        </button>
    </section>
  );
};

export default FeaturedProjects;
