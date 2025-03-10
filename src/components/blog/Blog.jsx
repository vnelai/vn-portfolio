import React from 'react';
import { Link } from 'react-router-dom';

const Blog = ({ articles }) => {
  return (
    <div className="blog-container">
      <div className="blog-grid">
        {articles.map((article) => (
          <div key={article.id} className="blog-card">
            <img src={article.image} alt={article.title} />
            <h2>{article.title}</h2>
            <p>{article.excerpt}</p>
            <span>{article.date}</span>
            <Link
              to={{
                pathname: `/blog/${article.id}`,  // Navigate to the full article
                state: { article }  // Pass the article data as state
              }}
            >
              Read More
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
