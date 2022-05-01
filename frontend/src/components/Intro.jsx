import React from "react";
import "./intro.css";
import photocv from "../assets/photocv.png";

function Intro() {
  return (
    <div className="intro">
      <div className="intro-left">
        <div className="intro-left-wrapper">
          <h2 className="intro-hello">Hello, my name is</h2>
          <h1 className="intro-name">Wendy Baqué</h1>
          <div className="intro-title">
            <div className="intro-title-wrapper">
              <div className="intro-title-item">
                Développeuse web full stack
              </div>
              <div className="intro-title-item">Javascript</div>
              <div className="intro-title-item">React.js</div>
              <div className="intro-title-item">Express.js | Node.js </div>
              <div className="intro-title-item">Auteure de romans</div>
            </div>
          </div>
          <div className="intro-description">
            <p>
              Après un bilan de compétences réalisé en full remote, je suis en
              reconversion dans le domaine du développement web et web mobile.
              💻
            </p>
          </div>
        </div>
      </div>
      <div className="intro-right">
        <div className="intro-bg" />
        <img src={photocv} alt="Wendy Baqué" className="intro-img" />
        <div className="intro-right-wrapper" />
      </div>
    </div>
  );
}
export default Intro;
