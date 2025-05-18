import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Blog.css";

const Blog = ({ articles }) => {
  const navigate = useNavigate();

  // If no articles are provided, show a message
  if (articles.length === 0) {
    return (
      <h2 className="no-articles-message">
        No articles available for the selected topic.
      </h2>
    );
  }

  return (
    <div className="blog-container">
      <div className="blog-grid">
        {articles.map((article) => (
          <div key={article.id} className="blog-card">
            <img src={article.image} alt={article.title} />
            <h2>{article.title}</h2>
            <p>{article.excerpt}</p>
            <span className="article-date">{article.date}</span>
            <Link to={`/blog/${article.slug}`} className="read-more-link">
              Read More
            </Link>
          </div>
        ))}
      </div>

      {/* Back Button */}
      <button className="back-btn" onClick={() => navigate(-1)}>
        Back
      </button>
    </div>
  );
};

export default Blog;
