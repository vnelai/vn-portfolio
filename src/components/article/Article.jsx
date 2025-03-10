import React from 'react';
import { useLocation, useParams, Link } from 'react-router-dom';

const Article = () => {
  const { id } = useParams();  // To get the article ID from the URL
  const location = useLocation();  // To access the state passed from Blog

  // Retrieve the article from the location state
  const article = location.state?.article;

  if (!article) {
    return <div>Article not found</div>;  // If no article is passed in state
  }

  return (
    <div className="article-container">
      <h1>{article.title}</h1>
      <span>{article.date}</span>
      <p>{article.content}</p> {/* You would replace content with your full article body */}
      <Link to="/blog">Back to Blog</Link>
    </div>
  );
};

export default Article;
