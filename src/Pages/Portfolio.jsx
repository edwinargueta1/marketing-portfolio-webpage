import React from "react";
import PortfolioItem from '../Components/PortfolioItem.jsx';

export default function Portfolio() {
  return (
    <div className="pageWrapper">
      <h3>Portfolio</h3>
      <PortfolioItem
        link="./SomethingElse"
        src="/Media/ALS_Network/ALSNetwork-logo.png"
        title="ALS Network"
        description="The ALS Network is dedicated to empowering the ALS community by fostering partnerships that drive critical research into prevention, treatment, and cures for ALS. We are committed to ensuring access to high-quality care, building strong connections within the community, and advocating for initiatives that enhance the health and well-being of those affected by ALS."
      />
      <PortfolioItem
        link="/portfolio/PolishingTheProfessional"
        src="/Media/Polishing_The_Professional/Icons/Polishing-The-Professional-Logo.png"
        title="Polishing the Professional"
        description="The Social Security Administration has recently announced an outreach development campaign to bring access and information to eligible individuals in underserved communities to apply for Supplemental Security Income."
      />
      <PortfolioItem
        link="./SomethingElse"
        // src={images.profile}
        title="The Able Show"
        description="The Social Security Administration has recently announced an outreach development campaign to bring access and information to eligible individuals in underserved communities to apply for Supplemental Security Income.  "
      />
      <PortfolioItem
        link="./SomethingElse"
        // src={images.profile}
        title="Vane's Veggie Visits"
        description="The Social Security Administration has recently announced an outreach development campaign to bring access and information to eligible individuals in underserved communities to apply for Supplemental Security Income.  "
      />
      
    </div>
  );
}
