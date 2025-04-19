// FeaturedProject.jsx:
import React from 'react';
import './FeaturedContent.css';
import { useInView } from 'react-intersection-observer';

function FeaturedContent() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section ref={ref} className={`featured-content ${inView ? 'fade-in' : ''}`}>
      <div className="content-grid">
        <div className="featured-teaser">
          <img src="/Meal_Prep_Pro.png" alt="Project Thumbnail" />
          <div className='featured-text'>
            <h2>🚀 Featured Project: Meal Prep Pro</h2>
            <p>Meal Prep Pro streamlines your meal planning with recipe search, favorites, and smart shopping lists. Built with React and Node.js for seamless cooking.</p>
            <a href="https://meal-prep-pro-fe.onrender.com" className="featured-link">View Project</a>
          </div>
        </div>
        <div className="featured-teaser">
          <img src="/Meal_Prep_Pro.png" alt="Project Thumbnail" />
          <div className='featured-text'>
          <h2>📝 Featured Blog: Blog Title....</h2>
          <p>Blog teaser...</p>
          <a href="https://vnelai.github.io/React_Todo_List/" className="featured-link">View Post</a>
          </div>
        </div>
      </div>  
    </section>
  );
}

export default FeaturedContent;