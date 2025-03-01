import React from "react";
import images from "../Assets/images.js";

export default function Home() {
  return (
    <div className="pageWrapper">
      <h1 className="title">Vanessa Martin</h1>
      <div className="row">
        <div className="headContent">
          <div className="top">
            <img id="profilePhoto" className="shadow" src={images.profile}></img>
          </div>
        </div>

        <div className="summarySection">
          <div className="summaryTitle">
            <h3>About Me</h3>
          </div>
          <div className="summary">
            <p>
              Vanessa Martin is a dedicated and skilled professional with a
              strong background in public relations, social media management,
              and content creation. With a Bachelor of Arts in Journalism and a
              concentration in Public Relations and Interactive Marketing from
              California State University of Northridge, she brings a solid
              educational foundation to her work. Vanessa is a collaborative
              team player with strong emotional intelligence, empathy, active
              listening skills, adaptability, and a creative mindset.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
