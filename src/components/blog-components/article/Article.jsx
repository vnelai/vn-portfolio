import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import articles from "../../../data/articles";
import "./Article.css";

const Article = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [article, setArticle] = useState(null);

  useEffect(() => {
    if (slug) {
      const foundArticle = articles.find((article) => article.slug === slug);
      if (foundArticle) {
        setArticle(foundArticle);
      } else {
        navigate("/404"); // Navigate to 404 if the article is not found
      }
    }
  }, [slug, navigate]);

  if (!article) return <div>Loading...</div>;

  return (
    <div className="article-page">
      {/* Display article image */}
      <img
        src={`/${article.image}`}
        alt={article.title}
        className="article-image"
      />

      {/* Display article title */}
      <h1>{article?.title}</h1>

      {/* Display article date */}
      <span>{article.date}</span>

      {/* Display article content */}
      <div className="article-content" dangerouslySetInnerHTML={{ __html: article.content }} />

      {/* Back Button */}
      <button className="back-btn" onClick={() => navigate(-1)}>
        Back
      </button>
    </div>
  );
};

export default Article;
