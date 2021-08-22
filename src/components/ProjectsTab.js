import React from "react";
import { useState } from "react";
import "../styles/ProjectTabs.css";
import ProjectCard from "./ProjectCard";

import SelfCareThumb from "../assets/SelfCareThumb.png";
import BruiserThumb from "../assets/BruiserThumb.png";
import GlobalThumb from "../assets/GlobalThumbnail.png";
// import GloryThumb from "../assets/GloryThumb.png";

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
          <h4>Development</h4>
        </div>
        {/* <div
          className={
            toggleState === 2 ? "project-tab active-tab" : "project-tab"
          }
          onClick={() => toggleTab(2)}
        >
          <h4>Design</h4>
        </div> */}
      </div>
      <div
        className={
          toggleState === 1
            ? "project-wrapper active-section"
            : "project-wrapper"
        }
      >
        <ProjectCard
          header={"Global"}
          projimg={GlobalThumb}
          tags={"HTML, CSS, JS"}
          demolink={"https://global-jet.vercel.app/"}
          githublink={"https://github.com/Jamalfox85/global"}
        />
        <ProjectCard
          header={"Self Care Manifesto"}
          projimg={SelfCareThumb}
          tags={"HTML, CSS, JS, React.js"}
          demolink={"https://self-care-manifesto.vercel.app/"}
          githublink={"https://github.com/Jamalfox85/self-care-manifesto"}
        />
        <ProjectCard
          header={"Bruiser Outdoors"}
          projimg={BruiserThumb}
          tags={"HTML, CSS, JS, ASP.NET"}
          demolink={"https://bruiser-outdoors.vercel.app/"}
          githublink={"https://github.com/Jamalfox85/BruiserOutdoors"}
        />
        {/* <ProjectCard
          header={"Glory African Braiding"}
          projimg={GloryThumb}
          tags={"HTML, CSS, JS"}
          demolink={
            "https://glory-african-braiding-4lg0twb4c-jamalfox85.vercel.app/"
          }
          githublink={"https://github.com/Jamalfox85/GloryAfricanBraiding"}
        /> */}
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
