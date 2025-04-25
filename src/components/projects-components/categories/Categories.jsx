import React, { useState } from 'react';
import './Categories.css';

function Categories({ onCategorySelect }) {
  const [activeCategory, setActiveCategory] = useState(null);

  const handleCategorySelect = (category) => {
    setActiveCategory(category);
    onCategorySelect(category); // Pass selected category to parent
  };

  return (
    <section id="categories" className="section">
      <h2 className="section-title">📂 Explore by Category</h2>
      <div className="category-buttons">
        <div className="line1">
          <button className="category" onClick={() => handleCategorySelect('Full-Stack Development')}>Full-Stack Development</button>
          <button className="category" onClick={() => handleCategorySelect('Cybersecurity Projects')}>Cybersecurity Projects</button>
          <button className="category" onClick={() => handleCategorySelect('Cloud & DevOps')}>Cloud & DevOps</button>
          <button className="category" onClick={() => handleCategorySelect('Web Applications')}>Web Applications</button>
        </div>
        <div className="line2">
          <button className="category" onClick={() => handleCategorySelect('Mobile Apps')}>Mobile Apps</button>
          <button className="category" onClick={() => handleCategorySelect('Data Science & AI')}>Data Science & AI</button>
          <button className="category" onClick={() => handleCategorySelect('Freelance Projects')}>Freelance Projects</button>
        </div>
      </div>
    </section>
  );
}

export default Categories;
