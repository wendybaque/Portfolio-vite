import React from "react";
import "./about.css";
import cv from "../assets/CVrecherchestage.png";
import linkedin from "../assets/linkedin.svg";
import github from "../assets/github.svg";

function About() {
  return (
    <div className="about">
      <div className="about-left">
        {/* <div className="about-card bg" /> */}
        <div className="about-card">
          <img src={cv} alt="curriculum vitae" className="about-img" />
        </div>
      </div>
      <div className="about-right">
        <h1 className="about-title">About me</h1>
        <p className="about-subtitle">
          🚀 Les valeurs les plus importantes dans le monde du travail sont,
          selon moi, lentraide, l écoute, l expression de soi, l épanouissement
          et la réussite.
        </p>
        <p className="about-description">
          ➕ Mon petit plus ? Je suis développeuse, mais aussi psychologue !
          Ainsi, je suis attirée par l UX et l UI. C est un domaine qui me
          parle, et qui me tient toujours à cœur. Mon regard est un bonus : 100%
          user first !
        </p>
        <p className="about-description">
          Motivée, rigoureuse, assidue et ponctuelle, je suis ouverte à tout
          type d entreprise.
        </p>
        <div className="about-social-medias">
          <div className="about-linkedin">
            <img src={linkedin} alt="linkedin" className="about-linkedin-img" />
            <a
              href="https://www.linkedin.com/in/wendy-baqu%C3%A9/"
              target="_blanck"
            >
              LinkedIn
            </a>
          </div>
          <div className="about-github">
            <img src={github} alt="github" className="about-github-img" />
            <a href="https://github.com/wendybaque" target="_blanck">
              Github
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
export default About;
