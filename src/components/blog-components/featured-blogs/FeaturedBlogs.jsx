import React from 'react';
import { Link } from 'react-router-dom';
import './FeaturedBlogs.css';

function FeaturedBlogs({ onViewAll }) {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleViewAllClick = () => {
    if (onViewAll) onViewAll();         // Reset topic filter
    scrollToSection('topics');          // Scroll to blog topics section
  };

  return (
    <section id="featured" className="section-blog">
      <h2 className="section-title-blog">✨ Featured Posts</h2>
      <div className="card-grid-blog">
        <div className="card-blog">
          <Link to="breaking-into-cybersecurity-a-self-taught-path">Breaking Into Cybersecurity: A Self-Taught Path Fueled by Purpose</Link>
        </div>
        <div className="card-blog">
          <Link to="/...">...</Link>
        </div>
        <div className="card-blog">
          <Link to="/...">...</Link>
        </div>
      </div>
      <button onClick={handleViewAllClick} className="view-all-blog">
        View All Posts
      </button>
    </section>
  );
}

export default FeaturedBlogs;
