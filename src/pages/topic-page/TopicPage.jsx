import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import TopicNav from "../../components/topic-nav/TopicNav";
import Blog from "../../components/blog-components/blog/Blog";
import { supabase } from "../../lib/supabaseClient";
import "./TopicPage.css";

function TopicPage() {
  const { topicSlug } = useParams();
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loaderTimeout = setTimeout(() => {
      setShowLoader(true);
    }, 300); // Show loader only if loading takes longer than 300ms
  
    const fetchArticles = async () => {
      const { data, error } = await supabase.from("posts").select("*");
      if (error) {
        console.error("Error fetching articles:", error);
      } else {
        setArticles(data);
      }
      setLoading(false);
      clearTimeout(loaderTimeout); // Clear timeout if data loads quickly
    };
  
    fetchArticles();
  }, []);
  

  // Filter articles by topicSlug (which is the URL value)
  // Slugify function (same one used in Topics.jsx)
  const slugify = (text) =>
    text
      .toLowerCase()
      .replace(/[^\w\s-]/g, "")
      .replace(/\s+/g, "-");

  // Filter articles by checking slug match
  const filteredArticles = articles.filter((article) =>
    article.topics.some((topic) => slugify(topic) === topicSlug)
  );

  const displayTopic = topicSlug
    .replace(/-/g, " ")
    .replace(/\b\w/g, (l) => l.toUpperCase());

    if (loading) {
        return (
          <div className="loading-wrapper">
            <div className="loading-spinner"></div>
            <p className="loading-message">Loading articles...</p>
          </div>
        );
      }
      
  return (
    <div className="topic-page">
      <TopicNav />
      <h1 className="topic-title">{displayTopic}</h1>
      <p className="topic-description">All articles about {displayTopic}</p>
      <Blog articles={filteredArticles} />
    </div>
  );
}

export default TopicPage;
