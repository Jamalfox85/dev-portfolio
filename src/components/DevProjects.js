import React from "react";
import ProjectCard from "./ProjectCard";
import "../styles/PortfolioProjects.css";

function DevProjects() {
  return (
    <div className="Projects-wrapper">
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
    </div>
  );
}

export default DevProjects;
