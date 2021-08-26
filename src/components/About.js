import React from "react";
import "../styles/About.css";

function About() {
  return (
    <div className="about" id="about">
      <div className="section-tag fade-in">About Me!</div>
      <div className="about-text fade-in">
        <h1 className="about-text-hi">Hello!</h1>
        <p>
          My name is Jamal and I'm a freelance web developer and designer. From
          a young age I've had an appreciation for both technology and
          aesthetics. It only made sense that as I grew I woud gravitate to a
          career that combined the two. It's my goal to bring cohesive
          aesthetics to the web and transform blank HTML pages into a fully
          functional, and beautifully designed, web sites.
        </p>
      </div>
    </div>
  );
}

export default About;
