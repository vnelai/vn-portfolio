import React, { useState } from "react";
import ProjectsComp from "../components/projects-components/projects/ProjectsComp";
import HeroProjects from "../components/projects-components/hero-projects/HeroProjects";
import FeaturedProjects from "../components/projects-components/featured-projects/FeaturedProjects";
import Categories from "../components/projects-components/categories/Categories";
import projects from "../data/projects";

function Projects() {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const filteredProjects =
    selectedCategory && selectedCategory !== "All"
      ? projects.filter((project) => project.topics.includes(selectedCategory))
      : projects;

  return (
    <div>
      <HeroProjects />
      <FeaturedProjects onViewAll={() => setSelectedCategory(null)} />
      <Categories onCategorySelect={setSelectedCategory} />
      <ProjectsComp projects={filteredProjects} />
    </div>
  );
}

export default Projects;
