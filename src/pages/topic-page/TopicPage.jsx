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

  // Topic Descriptions
  const topicDescriptions = {
    "cybersecurity-fundamentals":
      "Foundational knowledge every cyber pro needs — from network basics to security principles. Ideal for learners, mentors, and recruiters evaluating core skills.",

    "certifications-learning":
      "Guides, strategies, and reflections on earning top certifications and mastering the cyber learning curve — whether you're self-taught or structured.",

    "career-self-taught-journey":
      "My personal journey into cybersecurity — sharing what I’m learning, overcoming, and building as I grow in this space with curiosity and grit.",

    "advanced-cybersecurity-soc-skills":
      "In-depth tactics and blue-team wisdom from the front lines. For those building SOC muscle or hiring for real-world defensive skill.",

    "software-cloud-devsecops":
      "From securing cloud infrastructure to hardening application code — insights into cloud security, AppSec, and DevSecOps practices that bridge development and defense.",

    "hands-on-labs-tools":
      "Walkthroughs, setups, and reviews of labs, platforms, and tools — from TryHackMe to custom labs. If you build or hire hands-on, this is your zone.",

    "freelance-remote-work":
      "The cybersecurity hustle beyond the 9–5. Lessons in freelancing, remote gigs, contract work, and building freedom in your cyber career.",

    "cyber-talk-digest":
      "Sharp takes and reflections on the latest cyber news, podcasts, and real-world stories. Curated for those who think critically and hire wisely.",
  };
    
  // Filter articles by checking slug match
  const filteredArticles =
    topicSlug === "all"
      ? articles
      : articles.filter((article) =>
          article.topics.some((topic) => slugify(topic) === topicSlug)
        );

  const displayTopic =
    topicSlug === "all"
      ? "All Articles"
      : topicSlug.replace(/-/g, " ").replace(/\b\w/g, (l) => l.toUpperCase());

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
      <p className="topic-description">
        {topicSlug === "all"
          ? "Browse the full archive of posts across all topics."
          : topicDescriptions[topicSlug] || `All articles about ${displayTopic}`}
      </p>

      <Blog articles={filteredArticles} />
    </div>
  );
}

export default TopicPage;
