import React from "react";
import ProjectCard from "./ProjectCard";
import "../styles/DevProjects.css";

function DevProjects() {
  return (
    <div className="DevProjects-wrapper">
      <ProjectCard />
      <ProjectCard />
    </div>
  );
}

export default DevProjects;
