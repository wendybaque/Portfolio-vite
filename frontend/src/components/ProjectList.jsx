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
        <ProjectCard /> KodeWork
        <ProjectCard /> Mood
        <ProjectCard /> Projet 3 à venir
        <ProjectCard /> Hackathon 1
        <ProjectCard /> Hackathon 2
        <ProjectCard /> Checkpoint 4
      </div>
    </div>
  );
}
export default ProjectList;
