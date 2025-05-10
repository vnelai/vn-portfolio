import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Blog from "../blog/Blog";
import { supabase } from "../../../lib/supabaseClient";
import "./TopicPage.css"

function TopicPage() {
  const { topicSlug } = useParams();
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchArticles = async () => {
      const { data, error } = await supabase.from("posts").select("*");
      if (error) {
        console.error("Error fetching articles:", error);
      } else {
        setArticles(data);
      }
    };

    fetchArticles();
  }, []);

  // Filter articles by topicSlug (which is the URL value)
// Slugify function (same one used in Topics.jsx)
const slugify = (text) =>
    text.toLowerCase().replace(/[^\w\s-]/g, "").replace(/\s+/g, "-");
  
  // Filter articles by checking slug match
  const filteredArticles = articles.filter((article) =>
    article.topics.some((topic) => slugify(topic) === topicSlug)
  );
  
  const displayTopic = topicSlug
  .replace(/-/g, " ")
  .replace(/\b\w/g, (l) => l.toUpperCase());

  return (
    <div className="topic-page">
      <h1 className="topic-title">{displayTopic}</h1>
      <p className="topic-description">All articles about {displayTopic}</p>

      {/* Placeholder for reusable topic nav – coming later */}
      {/* <TopicNav /> */}

      <Blog articles={filteredArticles} />
    </div>
  );
}

export default TopicPage;
