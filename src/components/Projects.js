import React from "react";
import "../styles/Projects.css";
import ProjectsTab from "./ProjectsTab";

function Projects() {
  return (
    <div className="projects" id="projects">
      <div className="section-tag fade-in">Projects</div>
      <div className="project-main-wrapper">
        <ProjectsTab />
      </div>
    </div>
  );
}

export default Projects;
