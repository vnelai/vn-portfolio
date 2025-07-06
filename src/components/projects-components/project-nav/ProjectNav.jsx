// src/components/ProjectNav.jsx
import React from "react";
import { Link, useParams } from "react-router-dom";
import "./ProjectNav.css"; // Create this CSS file or reuse your blog nav styles

// Utility to convert category to slug
const slugify = (text) =>
  text.toLowerCase().replace(/[^\w\s-]/g, "").replace(/\s+/g, "-");

const categories = [
  "Full-Stack Development",
  "Cybersecurity Projects",
  "Cloud & DevOps",
  "Web Applications",
  "Mobile Apps",
  "Data Science & AI",
  "Freelance Projects",
];

const ProjectNav = () => {
  const { categorySlug } = useParams();

  return (
    <nav className="project-nav">
      {categories.map((category) => {
        const slug = slugify(category);
        const isActive = slug === categorySlug;

        return (
          <Link
            key={slug}
            to={`/projects/category/${slug}`}
            className={`project-nav-item ${isActive ? "active" : ""}`}
          >
            {category}
          </Link>
        );
      })}
      <Link to="/projects/category/all" className="project-nav-item">
        All
      </Link>
    </nav>
  );
};

export default ProjectNav;
