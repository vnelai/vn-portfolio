import React from "react";
import { Link } from "react-router-dom";
import "./Topics.css";

// Slugify function
const slugify = (text) =>
  text
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-");

function Topics() {
  const topics = [
    "Cybersecurity Fundamentals",
    "Certifications & Learning",
    "Career & Self-Taught Journey",
    "Advanced Cybersecurity & SOC Skills",
    "Software,Cloud & DevSecOps",
    "Hands-On Labs & Tools",
    "Freelance & Remote Work",
    "Cyber Talk Digest"
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
      <Link to="/blog/topic/all" className="topic all-button">
        All
      </Link>
    </section>
  );
}

export default Topics;
