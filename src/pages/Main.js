import React from "react";
import Projects from "../components/Projects";
import About from "../components/About";
import Home from "../components/Home";
import Navbar from "../components/Navbar";
import Contact from "../components/Contact";

function Main() {
  return (
    <div>
      <Navbar />
      <Home id="home" />
      <About id="about" />
      <Projects id="projects" />
      <Contact id="contact" />
    </div>
  );
}

export default Main;
