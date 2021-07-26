import React from "react";
import "../styles/Projects.css";
import DevProjects from "./DevProjects";

function Projects() {
  return (
    <div className="projects">
      <div className="section-tag">Projects</div>
      <div className="project-main-wrapper">
        <DevProjects />
      </div>
    </div>
  );
}

export default Projects;
