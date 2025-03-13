import React from "react";
import { Link } from "react-router-dom";

export default function ProjectCard(props) {
  return (
    <div className="projectCardWrapper">
      <Link to={props.href}>
        <div className="projectPhoto">
          <img src={props.src} />
        </div>
        <div className="projectDescription">
          <h4>{props.title}</h4>
          <p>{props.text}</p>
        </div>
      </Link>
    </div>
  );
}
