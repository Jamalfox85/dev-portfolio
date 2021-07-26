import React from "react";
import "../styles/ProjectTabs.css";

function ProjectsTab() {
  return (
    <div className="project-tab-wrapper">
      <div className="project-dev-tab project-tab">
        <h2>Development</h2>
      </div>
      <div className="project-des-tab project-tab">
        <h2>Design</h2>
      </div>
    </div>
  );
}

export default ProjectsTab;
