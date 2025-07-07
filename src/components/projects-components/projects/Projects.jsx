import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Projects.css";

const Projects = ({ projects }) => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");

  // Sort projects by most recent first
  const sortedProjects = [...projects].sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  );

  // Filter projects by search input
  const filteredAndSearched = sortedProjects.filter(
    (project) =>
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (sortedProjects.length === 0) {
    return (
      <h2 className="no-projects-message">
        No projects available for the selected topic.
      </h2>
    );
  }

  return (
    <div className="projects-container">
      {/* 🔍 Search Bar */}
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search projects..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      {/* 🔧 Projects Grid */}
      <div className="projects-grid">
        {filteredAndSearched.map((project) => (
          <div key={project.slug} className="projects-card">
            <img src={project.image} alt={project.title} />
            <h2>{project.title}</h2>
            <span className="author">
              By{" "}
              {project.author_url ? (
                <a
                  href={project.author_url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {project.author_name}
                </a>
              ) : (
                project.author_name
              )}
            </span>
            <p>{project.excerpt}</p>

            {/* 🧰 Skills Applied */}
            {Array.isArray(project.topics) && project.topics.length > 0 && (
              <div className="project-technologies">
                <strong>Skills Applied:</strong> {project.topics.join(", ")}
              </div>
            )}

            {/* 🕒 Date*/}
            <div className="meta-info">
              <span>
                {new Date(project.date).toLocaleDateString(undefined, {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </span>
            </div>

            {/* 🔗 Links */}
            <div className="project-links">
              {project.github_url && (
                <a
                  href={project.github_url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
              )}
              {project.youtube_url && (
                <a
                  href={project.youtube_url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  YouTube
                </a>
              )}
              <Link to={`/projects/${project.slug}`}>Details</Link>
            </div>
          </div>
        ))}
      </div>

      <button className="back-btn" onClick={() => navigate(-1)}>
        Back
      </button>
    </div>
  );
};

export default Projects;
