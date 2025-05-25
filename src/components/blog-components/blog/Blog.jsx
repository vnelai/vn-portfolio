import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Blog.css";

const Blog = ({ articles }) => {
  const navigate = useNavigate();

  // Sort articles by most recent first
  const sortedArticles = [...articles].sort((a, b) => new Date(b.date) - new Date(a.date));

  // If no articles are provided, show a message
  if (sortedArticles.length === 0) {
    return (
      <h2 className="no-articles-message">
        No articles available for the selected topic.
      </h2>
    );
  }

  return (
    <div className="blog-container">
      <div className="blog-grid">
        {sortedArticles.map((article) => (
          <div key={article.id} className="blog-card">
            <img src={article.image} alt={article.title} />
            <h2>{article.title}</h2>
            <p>{article.excerpt}</p>
            <span className="article-date">
              {new Date(article.date).toLocaleDateString(undefined, {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </span>
            <Link to={`/blog/${article.slug}`} className="read-more-link">
              Read More
            </Link>
          </div>
        ))}
      </div>

      <button className="back-btn" onClick={() => navigate(-1)}>
        Back
      </button>
    </div>
  );
};

export default Blog;
