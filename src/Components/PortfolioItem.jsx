import React from "react";
import { Link } from "react-router-dom";

export default function PortfolioItem(props) {
  return (
    <div className="portfolioItem">
      <Link to={props.link}>
          <div className="portfolioImageContainer">
            <img src={props.src} />
          </div>
          <div className="portfolioDescription">
            <h4>{props.title}</h4>
            <p>{props.description}</p>
          </div>
      </Link>
    </div>
  );
}
