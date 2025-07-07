import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProjectNav from "../../components/projects-components/project-nav/ProjectNav";
import Projects from "../../components/projects-components/projects/Projects";
import { supabase } from "../../lib/supabaseClient";
import "../blog-page/BlogPage.css";

function ProjectsPage() {
  const { topicSlug } = useParams();
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showLoader, setShowLoader] = useState(false); // ✅ required for delay logic


  useEffect(() => {
    const loaderTimeout = setTimeout(() => {
      setShowLoader(true);
    }, 300); // Show loader only if loading takes longer than 300ms

    const fetchProjects = async () => {
      const { data, error } = await supabase.from("projects").select("*");
      if (error) {
        console.error("Error fetching projects:", error);
      } else {
        setProjects(data);
      }
      setLoading(false);
      clearTimeout(loaderTimeout); // Clear timeout if data loads quickly
    };

    fetchProjects();
  }, []);

  // Filter projects by projectSlug (which is the URL value)
  // Slugify function (same one used in Topics.jsx)
  const slugify = (text) =>
    text
      .toLowerCase()
      .replace(/[^\w\s-]/g, "")
      .replace(/\s+/g, "-");

  // Category Descriptions
  const topicDescriptions = {
    "blue-team-projects":
      "SOC-focused projects: log analysis, threat detection, SIEM workflows, incident response, and defensive tooling.",
    "red-team-projects":
      "Offensive security labs: exploitation, malware analysis, persistence techniques, and attacker emulation.",
    "full-stack-development":
      "Secure end-to-end web apps with protected APIs, auth systems, and hardened infrastructure.",
    "cloud-devops":
      "Secure cloud deployments, IAM setups, and DevSecOps pipelines built with automation and resilience.",
    "ai-automation":
      "AI-powered enrichment tools, triage agents, and intelligent automation for security ops.",
    "freelance-projects":
      "Client-facing deliverables that prioritize security and privacy — from audits to full-stack builds.",
  };

  // Filter projects by checking slug match
  const filteredProjects=
    topicSlug === "all"
      ? projects
      : projects.filter((project) =>
          projects.topics.some((topic) => slugify(topic) === topicSlug)
        );

  const displayTopic =
    topicSlug === "all"
      ? "All Projects"
      : topicSlug.replace(/-/g, " ").replace(/\b\w/g, (l) => l.toUpperCase());

  if (loading) {
    return (
      <div className="loading-wrapper">
        <div className="loading-spinner"></div>
        <p className="loading-message">Loading projects...</p>
      </div>
    );
  }

  return (
    <div className="topic-page">
      <ProjectNav />
      <h1 className="topic-title">
        {topicSlug === "all" ? "Explore the Full Collection" : displayTopic}
      </h1>
      <p className="topic-description">
        {topicSlug === "all"
          ? "Labs, builds, and real-world tools across Blue Team ops, full-stack dev, AI, and cloud — all from a learner’s hands-on journey."
          : topicDescriptions[slugify(topicSlug)] ||
            `All projects about ${displayTopic}`}
      </p>
      <Projects projects={filteredProjects} />
    </div>
  );
}

export default ProjectsPage;
