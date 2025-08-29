import React from "react";
import { Link, useParams } from "react-router-dom";
import "./TopicNav.css";

// Keep the slugify util consistent
const slugify = (text) =>
  text
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-");

const topics = [
  // Core Cybersecurity Skills
  "Offensive Security (Red Team)",
  "SOC & Cyber Analyst Skills (Blue Team)",
  "Purple Teaming (Red + Blue Integration)",
  "Cybersecurity Fundamentals",
  "Hands-On Labs & Tools",

  // Expanding Tech & Horizons
  "AI & Machine Learning in Security",
  "Software, Cloud & DevSecOps",

  // Career & Growth
  "Career & Self-Taught Journey",
  "Training & Certifications",
  "Freelance & Remote Work",
  "Cyber Talk Digest",
];

const TopicNav = () => {
  const { topicSlug } = useParams();

  return (
    <nav className="topic-nav">
      {topics.map((topic) => {
        const slug = slugify(topic);
        const isActive = slug === topicSlug;

        return (
          <Link
            key={slug}
            to={`/blog/topic/${slug}`}
            className={`topic-nav-item ${isActive ? "active" : ""}`}
          >
            {topic}
          </Link>
        );
      })}
      <Link to="/blog/topic/all" className="topic-nav-item">
        All
      </Link>
    </nav>
  );
};

export default TopicNav;
