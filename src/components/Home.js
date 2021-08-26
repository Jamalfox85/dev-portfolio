import { React } from "react";
import "../styles/Home.css";

function Scrolly() {
  const faders = document.querySelectorAll(".fade-in");
  const sliders = document.querySelectorAll(".slide-in");

  const appearOptions = {
    threshold: 0,
    // rootMargin: "0px 0px -100px 0px",
  };

  const appearOnScroll = new IntersectionObserver(function (
    entries,
    appearOnScroll
  ) {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        return;
      } else {
        entry.target.classList.add("appear");
        appearOnScroll.unobserve(entry.target);
      }
    });
  },
  appearOptions);

  faders.forEach((fader) => {
    appearOnScroll.observe(fader);
  });
  sliders.forEach((slider) => {
    appearOnScroll.observe(slider);
  });
}

function Home() {
  Scrolly();
  return (
    <div className="home" id="home">
      <div className="home-wrapper">
        <div className="home-text fade-in">
          <h1 className="main-text">Jamal Fox</h1>
          <h5 className="sub-text">Web Developer and Designer</h5>
        </div>
        <div className="hero-planet-wrapper">
          <div className="hero-planet fade-in rotating"></div>
        </div>
        <div className="home-img">
          <div className="img-text fade-in"></div>
        </div>
      </div>
    </div>
  );
}

export default Home;
