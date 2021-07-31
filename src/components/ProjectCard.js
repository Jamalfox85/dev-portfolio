import React from "react";
import { Link } from "react-router-dom";
import "../styles/ProjectCard.css";

function ProjectCard({ header, img, tags, demolink, githublink }) {
  return (
    <div className="project-card-wrapper">
      <h3 className="project-header">{header}</h3>
      <div className="project-image">
        <img src={img} alt="portfolio project" />
      </div>
      <div className="project-tags">{tags}</div>
      <div className="project-buttons">
        <Link to={demolink}>Demo</Link>
        <Link to={githublink}>Github</Link>
      </div>
    </div>
  );
}

export default ProjectCard;
