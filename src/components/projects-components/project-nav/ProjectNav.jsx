// src/components/ProjectNav.jsx
import React from "react";
import { Link, useParams } from "react-router-dom";
import "../../blog-components/topic-nav/TopicNav.css"; 

// Keep the slugify util consistent
const slugify = (text) =>
  text.toLowerCase().replace(/[^\w\s-]/g, "").replace(/\s+/g, "-");

const topics = [
  "Full-Stack Development",
  "Cybersecurity Projects",
  "Cloud & DevOps",
  "Web Applications",
  "Mobile Apps",
  "Data Science & AI",
  "Freelance Projects",
];

const ProjectNav = () => {
  const { topicSlug } = useParams();

  return (
    <nav className="topic-nav">
      {topics.map((topic) => {
        const slug = slugify(topic);
        const isActive = slug === topicSlug;

        return (
          <Link
            key={slug}
            to={`/projects/topic/${slug}`}
            className={`topic-nav-item ${isActive ? "active" : ""}`}
          >
            {topic}
          </Link>
        );
      })}
      <Link to="/projects/topic/all" className="topic-nav-item">
        All
      </Link>
    </nav>
  );
};

export default ProjectNav;
