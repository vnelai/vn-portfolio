import React from "react";
import { Link, useParams } from "react-router-dom";
import "./TopicNav.css";

// Keep the slugify util consistent
const slugify = (text) =>
  text.toLowerCase().replace(/[^\w\s-]/g, "").replace(/\s+/g, "-");

const topics = [
  "Career & Journey",
  "Certifications & Learning",
  "Hands-On Labs & Tools",
  "Cybersecurity (Beginner to Pro)",
  "Cloud, DevOps & DevSecOps",
  "Bootcamp & Self-Taught Life",
  "Freelance & Remote Life",
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

      <Link to="/blog" className={`topic-nav-item ${!topicSlug ? "active" : ""}`}>
        All
      </Link>
    </nav>
  );
};

export default TopicNav;
