import React from 'react';
import './Categories.css';

function Categories() {
  return (
    <section id="categories" className="section">
      <h2 className="section-title">📂 Explore by Category</h2>
      <div className="category-buttons">
        <div className='line1'>
          <button className="category">Full-Stack Development</button>
          <button className="category">Cybersecurity Projects</button>
          <button className="category">Cloud & DevOps</button>
          <button className="category">Web Applications</button>
        </div>
        <div className='line2'>
          <button className="category">Mobile Apps</button>
          <button className="category">Data Science & AI</button>
          <button className="category">Freelance Projects</button>
        </div>
      </div>
    </section>
  );
}

export default Categories;
