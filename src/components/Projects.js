import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "../styles/Projects.css";
import DesProjects from "./DesProjects";
import DevProjects from "./DevProjects";
import ProjectsTab from "./ProjectsTab";

function Projects() {
  return (
    <div className="projects">
      <div className="section-tag">Projects</div>
      <Router>
        <ProjectsTab />
        <div className="project-main-wrapper">
          <Switch>
            <Route>
              <DevProjects />
            </Route>
            <Route>
              <DesProjects />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default Projects;
