import React from "react";
import ProjectCard from "../Components/ProjectCard.jsx";
import images from "../Assets/images.js";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="pageWrapper">
      <h1 className="title">Vanessa Martin</h1>
      <div className="row">
        <div className="headContent">
          <div className="top">
            <img id="profilePhoto" src={images.profile}></img>
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
          {/* <Link className="contactButton" to="./contact">
            Let's Chat
          </Link> */}
        </div>
      </div>

      {/* <div className="projectSection">
        <h3>Sneek Peek of my Portfolio</h3>
        <div className="projects">
          <ProjectCard
            href="./portfolio"
            title="ALS Network"
            text="Non-profit serving people living with ALS in California and Hawaii."
            src="https://alsnetwork.org/wp-content/uploads/2024/01/ALSNetwork-logo.png"
          />
          <ProjectCard
            href=""
            title="The Able Show"
            text="Podcast production by people with disabilities."
            src="https://theableshow.com/wp-content/uploads/2023/06/cropped-The-Able-Show-LO-FF02-.png"
          />
          <ProjectCard
            href=""
            title="Vane's Vegan Visits"
            text="Local Los Angeles food blog."
            src="./media/Vanes_Veggie_Visits/VeggieVisitsLogo1.png"
          />
        </div>
      </div> */}
    </div>
  );
}
