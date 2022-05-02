import React from "react";
import ProjectCard from "./ProjectCard";
import "./projectlist.css";

function ProjectList() {
  return (
    <div className="project">
      <div className="project-list-texts">
        <h1 className="project-list-title">Mes projets</h1>
        <p className="project-list-description">
          Voici une sélection des mes réalisations web. Enjoy !
        </p>
      </div>
      <div className="project-list">
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
    </div>
  );
}
export default ProjectList;
