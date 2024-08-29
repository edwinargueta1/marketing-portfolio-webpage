import React from "react";
import PortfolioItem from '../Components/PortfolioItem.jsx';
import { Outlet } from "react-router-dom";

export default function Portfolio() {
  return (
    <div className="pageWrapper">
      <h3>Portfolio</h3>
      <PortfolioItem
        link="/portfolio/PolishingTheProfessional"
        src="https://polishingtheprofessional.com/wp-content/uploads/elementor/thumbs/Polishing-The-Professional-Logo-q7ctcu78umdm22r03buzkdtkl8m2l5y7re2tvwwk7g.png"
        title="Polishing the Professional"
        description="The Social Security Administration has recently announced an outreach development campaign to bring access and information to eligible individuals in underserved communities to apply for Supplemental Security Income."
      />
      <PortfolioItem
        link="./SomethingElse"
        // src={images.profile}
        title="Polishing the Professional"
        description="The Social Security Administration has recently announced an outreach development campaign to bring access and information to eligible individuals in underserved communities to apply for Supplemental Security Income.  "
      />
      <PortfolioItem
        link="./SomethingElse"
        // src={images.profile}
        title="Polishing the Professional"
        description="The Social Security Administration has recently announced an outreach development campaign to bring access and information to eligible individuals in underserved communities to apply for Supplemental Security Income.  "
      />
      <PortfolioItem
        link="./SomethingElse"
        // src={images.profile}
        title="Polishing the Professional"
        description="The Social Security Administration has recently announced an outreach development campaign to bring access and information to eligible individuals in underserved communities to apply for Supplemental Security Income.  "
      />
    </div>
  );
}
