import React from "react";

export default function CircleProfilePhoto(props) {
  return (
    <div id="circleImage">
      <img src={props.src} alt={props.alt} />
    </div>
  );
}
