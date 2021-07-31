import React from "react";
import "../styles/Projects.css";
import ProjectsTab from "./ProjectsTab";

function Projects() {
  return (
    <div className="projects">
      <div className="section-tag">Projects</div>
      <div className="project-main-wrapper">
        <ProjectsTab />
      </div>
    </div>
  );
}

export default Projects;
