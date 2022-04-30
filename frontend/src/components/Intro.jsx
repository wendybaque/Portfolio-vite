import React from "react";
import "./intro.css";

function Intro() {
  return (
    <div className="intro">
      <div className="intro-left">
        left container
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
              <div className="intro-title-item">Express.js</div>
              <div className="intro-title-item">Node.js</div>
              <div className="intro-title-item">Auteure de romans</div>
            </div>
          </div>
        </div>
      </div>
      <div className="intro-right">
        right container
        <div className="intro-right-wrapper" />
      </div>
    </div>
  );
}
export default Intro;
