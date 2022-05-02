import React from "react";
import "./projectcard.css";
// import { projects } from "./data";

// eslint-disable-next-line react/prop-types
function ProjectCard({ img, link }) {
  return (
    <div className="product">
      <div className="project-browser">
        <div className="project-circle" />
        <div className="project-circle" />
        <div className="project-circle" />
        <a href={link} target="_blank" rel="noreferrer">
          <img src={img} alt="my projects" className="project-img" />
        </a>
      </div>
    </div>
  );
}
export default ProjectCard;

// function ProjectCard({ name, img, link }) {
//   return (
//     <div className="product">
//       <div className="project-browser">
//         <div className={name} />
//         <div className="project-circle" />
//         <div className="project-circle" />
//         <div className="project-circle" />
//         <a href={link} target="_blank" rel="noreferrer">
//           <img src={img} alt="my projects" className="project-img" />
//         </a>
//       </div>
//     </div>
//   );
// }
// export default ProjectCard;
