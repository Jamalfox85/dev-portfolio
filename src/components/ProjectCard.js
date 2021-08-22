import React from "react";
// import { Link } from "react-router-dom";
import { ExternalLink as Link } from "react-external-link";

import "../styles/ProjectCard.css";

function ProjectCard({ header, projimg, tags, demolink, githublink }) {
  return (
    <div className="project-card-wrapper">
      <h3 className="project-header">{header}</h3>
      <div
        className="project-image"
        style={{ backgroundImage: `url(${projimg})` }}
      >
        {/* <img src={imgsrc} alt="portfolio project" /> */}
      </div>
      <div className="project-tags">{tags}</div>
      <div className="project-buttons">
        <Link className="demo-link" href={demolink}>
          Demo
        </Link>
        <Link className="github-link" href={githublink}>
          Github
        </Link>
      </div>
    </div>
  );
}

export default ProjectCard;
