import React from "react";
import { Link } from "react-router-dom";
import "./Blog.css";

const Blog = ({ articles }) => {
  // If no articles are provided, show a message
  if (articles.length === 0) {
    return <h2 className="no-articles-message">No articles available for the selected topic.</h2>;
  }

  return (
    <div className="blog-container">
      <div className="blog-grid">
        {articles.map((article) => (
          <div key={article.id} className="blog-card">
            <img src={article.image} alt={article.title} />
            <h2>{article.title}</h2>
            <p>{article.excerpt}</p>
            <span  class="article-date">{article.date}</span>
            <Link to={`/blog/${article.slug}`} className="read-more-link">
              Read More
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
