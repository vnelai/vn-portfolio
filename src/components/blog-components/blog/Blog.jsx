import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Blog.css";

// Estimate reading time
const estimateReadingTime = (content) => {
  const wordsPerMinute = 200;
  const text = content?.replace(/<[^>]+>/g, "") || "";
  const wordCount = text.trim().split(/\s+/).length;
  const time = Math.ceil(wordCount / wordsPerMinute);
  return `${time} min read`;
};

const Blog = ({ articles }) => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");

  // Sort articles by most recent first
  const sortedArticles = [...articles].sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  );

  // Filter articles by search input
  const filteredAndSearched = sortedArticles.filter((article) =>
    article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    article.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (sortedArticles.length === 0) {
    return (
      <h2 className="no-articles-message">
        No articles available for the selected topic.
      </h2>
    );
  }

  return (
    <div className="blog-container">
      {/* 🔍 Search Bar */}
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search articles..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      {/* 🔽 Articles Grid */}
      <div className="blog-grid">
        {filteredAndSearched.map((article) => (
          <div key={article.id} className="blog-card">
            <img src={article.image} alt={article.title} />
            <h2>{article.title}</h2>
            <p>{article.excerpt}</p>

            {/* ⏱️ Reading time + date */}
            <div className="meta-info">
              <span>{estimateReadingTime(article.content)}</span>
              <span>•</span>
              <span>
                {new Date(article.date).toLocaleDateString(undefined, {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </span>
            </div>

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
