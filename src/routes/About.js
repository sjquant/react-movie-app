import React from "react";
import "./About.css";

function About(props) {
  return (
    <div className="about__container">
      <span>
        “This app is based on nomadcoders'{" "}
        <a href="https://github.com/nomadcoders/movie_app_2019">
          movie_app_2019.
        </a>{" "}
        I just modified a little bit. Thank you Nomadcoders.”
      </span>
      <span>− SJQuant, 2020</span>
    </div>
  );
}

export default About;
