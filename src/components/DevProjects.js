import React from "react";
import "../styles/ProjectCard.css";

function DevProjects() {
  return (
    <div className="Projects-wrapper">
      <div className="project-wrapper">
        <h3 className="project-header">Project Header</h3>
        <div className="project-image">Project Image</div>
        <div className="project-tags">Project Tags</div>
        <div className="project-buttons">
          <button>Code</button>
          <button>Github</button>
        </div>
      </div>
    </div>
  );
}

export default DevProjects;
