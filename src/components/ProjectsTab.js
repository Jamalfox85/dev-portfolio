import React from "react";
import { useState } from "react";
import "../styles/ProjectTabs.css";
import ProjectCard from "./ProjectCard";

function ProjectsTab() {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <div className="project-content">
      <div className="project-tab-wrapper">
        <div
          className={
            toggleState === 1 ? "project-tab active-tab" : "project-tab"
          }
          onClick={() => toggleTab(1)}
        >
          <h2>Development</h2>
        </div>
        <div
          className={
            toggleState === 2 ? "project-tab active-tab" : "project-tab"
          }
          onClick={() => toggleTab(2)}
        >
          <h2>Design</h2>
        </div>
      </div>
      <div
        className={
          toggleState === 1
            ? "project-wrapper active-section"
            : "project-wrapper"
        }
      >
        <ProjectCard
          header={"test"}
          img={"../assets/selfcarethumbnail.png"}
          tags={"HTML, CSS, JS, React.js"}
          demolink={""}
          githublink={""}
        />
        <ProjectCard />
      </div>
      <div
        className={
          toggleState === 2
            ? "project-wrapper active-section"
            : "project-wrapper"
        }
      >
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
    </div>
  );
}

export default ProjectsTab;
