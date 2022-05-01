import React from "react";
import "./about.css";
import cv from "../assets/CVrecherchestage.png";

function About() {
  return (
    <div className="about">
      <div className="about-left">
        left
        <div className="about-card bg" />
        <div className="about-card">
          <img src={cv} alt="curriculum vitae" className="about-img" />
        </div>
      </div>
      <div className="about-right">right</div>
    </div>
  );
}
export default About;
