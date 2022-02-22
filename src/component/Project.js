import React from "react";
import "../style/Project.css";
import favorite from "../assets/star-plus-outline.svg";
import checked from "../assets/eye-plus-outline.svg";
import share from "../assets/source-fork.svg";

function Project(props) {
  return (
    <div className="project">
      <h4>{props.title}</h4>
      <p>{props.content}</p>
      <div>
        <img src={favorite} alt="favorite" />
        <img src={checked} alt="checked" />
        <img src={share} alt={share} />
      </div>
    </div>
  )
};

export default Project;