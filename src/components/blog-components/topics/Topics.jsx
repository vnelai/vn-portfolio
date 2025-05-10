import React from "react";
import { Link } from "react-router-dom";
import "./Topics.css";

// Slugify function
const slugify = (text) =>
  text.toLowerCase().replace(/[^\w\s-]/g, "").replace(/\s+/g, "-");

function Topics() {
  const topics = [
    "Career & Journey",
    "Certifications & Learning",
    "Hands-On Labs & Tools",
    "Cybersecurity (Beginner to Pro)",
    "Cloud, DevOps & DevSecOps",
    "Bootcamp & Self-Taught Life",
    "Freelance & Remote Life", 
  ];

  return (
    <section id="topics" className="section">
      <h2 className="section-title">🧠 Explore by Topic</h2>
      <div className="topic-buttons-flex">
        {topics.map((topic) => (
          <Link
            key={topic}
            to={`/blog/topic/${slugify(topic)}`}
            className="topic"
          >
            {topic}
          </Link>
        ))}
      </div>
      <Link to="/blog" className="topic all-button">
          All
        </Link>
    </section>
  );
}

export default Topics;
