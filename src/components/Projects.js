import React from "react";
import "../styles/Projects.css";
// import DesProjects from "./DesProjects";
// import DevProjects from "./DevProjects";
import ProjectsTab from "./ProjectsTab";

function Projects() {
  return (
    <div className="projects">
      <div className="section-tag">Projects</div>
      <div className="project-main-wrapper">
        <ProjectsTab />
        {/* <div className="project-section active-section">
          <DevProjects />
        </div>
        <div className="project-section">
          <DesProjects />
        </div> */}
      </div>
    </div>
  );
}

export default Projects;
