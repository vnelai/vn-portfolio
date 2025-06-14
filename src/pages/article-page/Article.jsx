import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { supabase } from "../../lib/supabaseClient";
import "./Article.css";

const Article = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [article, setArticle] = useState(null);

  useEffect(() => {
    const fetchArticle = async () => {
      const { data, error } = await supabase
        .from("posts")
        .select("*")
        .eq("slug", slug)
        .single();

      if (error || !data) {
        navigate("/404"); // Navigate to 404 if the article is not found
      } else {
        setArticle(data);
      }
    };

    if (slug) {
      fetchArticle();
    }
  }, [slug, navigate]);

  if (!article) return <div>Loading...</div>;

  return (
    <div className="article-page">
      {/* Display article title */}
      <h1>{article?.title}</h1>

      {/* Meta (date + author) */}
    <div className="article-meta">
      <span className="article-date">
        {new Date(article.date).toLocaleDateString(undefined, {
          year: "numeric",
          month: "long",
          day: "numeric",
        })}
      </span>

      {/* Author */}
      {article.author?.url ? (
        <a
          className="article-author"
          href={article.author.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          {article.author.name}
        </a>
      ) : (
        <span className="article-author">{article.author?.name}</span>
      )}
    </div>

      {/* Display article image */}
      <img
        src={`${article.image}`}
        alt={article.title}
        className="article-image"
      />

      {/* Display article content */}
      <div
        className="article-content"
        dangerouslySetInnerHTML={{ __html: article.content }}
      />

      {/* Back Button */}
      <button className="back-btn" onClick={() => navigate(-1)}>
        Back
      </button>
    </div>
  );
};

export default Article;
