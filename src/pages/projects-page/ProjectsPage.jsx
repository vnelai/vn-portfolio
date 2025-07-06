import React, { useState } from "react";
import { useParams } from "react-router-dom";
import ProjectNav from "../../components/projects-components/project-nav";
import ProjectsComp from "../../components/projects-components/projects/ProjectsComp";
import projects from "../data/projects"; // Your full list of project objects

// 🔧 Utility
const slugify = (text) =>
  text.toLowerCase().replace(/[^\w\s-]/g, "").replace(/\s+/g, "-");

// 💬 Descriptions for each project category
const categoryDescriptions = {
  "blue-team-projects":
    "SOC-focused projects: log analysis, threat detection, SIEM workflows, incident response, and defensive tooling.",

  "red-team-projects":
    "Offensive security labs: exploitation, malware analysis, persistence techniques, and attacker emulation.",

  "full-stack-development":
    "Secure end-to-end web applications with protected APIs, auth systems, and hardened infrastructure.",

  "cloud-devops":
    "Secure cloud deployments, IAM setups, and DevSecOps pipelines built with automation and resilience.",

  "ai-automation":
    "AI-powered enrichment tools, triage agents, and intelligent automation for security operations.",

  "freelance-projects":
    "Client-facing deliverables that prioritize security and privacy — from audits to full-stack builds.",
};

function ProjectsPage() {
  const { categorySlug } = useParams(); // pulled from route param like /projects/category/blue-team-projects
  const [search, setSearch] = useState("");

  const displayCategory =
    categorySlug === "all" || !categorySlug
      ? "All Projects"
      : categorySlug.replace(/-/g, " ").replace(/\b\w/g, (l) => l.toUpperCase());

  const filteredProjects = projects.filter((project) => {
    const matchesCategory =
      !categorySlug || categorySlug === "all"
        ? true
        : project.topics.some((topic) => slugify(topic) === categorySlug);

    const matchesSearch =
      project.title.toLowerCase().includes(search.toLowerCase()) ||
      project.description.toLowerCase().includes(search.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  return (
    <div className="topic-page">
      <ProjectNav />

      <h1 className="topic-title">{displayCategory}</h1>
      <p className="topic-description">
        {categorySlug === "all" || !categorySlug
          ? "Cybersecurity builds, labs, tools, and full-stack experiences — all in one place."
          : categoryDescriptions[slugify(categorySlug)] ||
            `All projects about ${displayCategory}`}
      </p>

      <input
        type="text"
        className="topic-search"
        placeholder="Search projects..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <ProjectsComp projects={filteredProjects} />
    </div>
  );
}

export default ProjectsPage;
