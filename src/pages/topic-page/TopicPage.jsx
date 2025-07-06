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
      "Core knowledge every cyber pro should know. From networks and systems to basic security concepts that lay the groundwork for everything else.",

    "certifications-learning":
      "Tips, strategies, and real experiences with cyber certifications and learning paths. Whether you're self-taught or following a course, it’s all here.",

    "career-self-taught-journey":
      "My personal journey into cybersecurity. I'm sharing what I’m learning, building, and figuring out along the way with curiosity and grit.",

    "soc-cyber-analyst-skills":
      "Hands-on skills, tools, and workflows every SOC or Cybersecurity Analyst needs to know. From threat detection and log analysis to SIEM tuning and incident response, this section is built to make you job-ready.",

    "software-cloud-devsecops":
      "Covering cloud security, AppSec, and DevSecOps practices. From securing AWS and Azure to hardening your app code and pipelines.",

    "hands-on-labs-tools":
      "Guides and walkthroughs for hands-on labs and tools. Includes setups, tutorials, and real usage from platforms like TryHackMe and custom labs.",

    "freelance-remote-work":
      "Real talk on freelancing and remote life in cybersecurity. Learn how to land gigs, build a career on your terms, and keep growing outside the 9 to 5.",

    "cyber-talk-digest":
      "Takes and reflections on the latest cyber news, podcasts, and stories. Think of it as a curated stream for learners and thinkers in the space.",
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
      <h1 className="topic-title">
        {topicSlug === "all" ? "Explore the Full Collection" : displayTopic}
      </h1>
      <p className="topic-description">
        {topicSlug === "all"
          ? "Labs, skills, news, and lessons. Everything I’m learning across fundamentals, cloud, SOC tools, and certifications."
          : topicDescriptions[slugify(topicSlug)] ||
            `All articles about ${displayTopic}`}
      </p>
      <Blog articles={filteredArticles} />
    </div>
  );
}

export default TopicPage;
