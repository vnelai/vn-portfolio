import React from 'react';
import './FeaturedBlogs.css';

function FeaturedBlogs() {
  return (
    <section id="featured" className="section-blog">
        <h2 className="section-title-blog">✨ Featured Posts</h2>
        <div className="card-grid-blog">
          {/* Replace with dynamic featured blog cards */}
          <div className="card-blog">Top 5 Cybersecurity Labs That Helped Me Grow</div>
          <div className="card-blog">Building Meal Prep Pro: Lessons from My Capstone</div>
          <div className="card-blog">First Freelance Gig: What I Learned Under Pressure</div>
        </div>
        <button className="view-all-blog">View All Featured</button>
      </section>
  );
};
export default FeaturedBlogs;