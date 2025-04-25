import React from 'react';
import './Topics.css';

function Topics() {
  return (
    <section id="topics" className="section">
    <h2 className="section-title">🧠 Explore by Topic</h2>
    <div className="topic-buttons">
      <div className='line1'>
        <button className="topic">Career & Journey</button>
        <button className="topic">Certifications & Learning</button>
        <button className="topic">Hands-On Labs & Tools</button>
        <button className="topic">Cybersecurity (Beginner to Pro)</button>
      </div>
      <div className='line2'>
        <button className="topic">Cloud, DevOps & DevSecOps</button>
        <button className="topic">Bootcamp & Self-Taught Life</button>
        <button className="topic">Freelance & Remote Life</button>
      </div>
    </div>
  </section>
  );
};

export default Topics;