import React from 'react';
import './BlogSection.css';

function BlogSection() {
  return (
    <section id="topics" className="section">
    <h2 className="section-title">🧠 Explore by Topic</h2>
    <div className="topic-buttons">
      <button className="topic">Cybersecurity</button>
      <button className="topic">Software Dev</button>
      <button className="topic">Freelance Life</button>
      <button className="topic">Bootcamp Journey</button>
      <button className="topic">Certifications</button>
    </div>
  </section>
  );
};

export default BlogSection;