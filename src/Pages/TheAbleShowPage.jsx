import React from "react";
import PortfolioCard from "../Components/PortfolioCard.jsx";

export default function TheAbleShowPage(){
    return(
        <div className="pageWrapper">
            <h3>The Able Show</h3>
            <img src="https://theableshow.com/wp-content/uploads/2023/06/cropped-The-Able-Show-LO-FF02-.png" alt="The Able Show Logo"/>
            <PortfolioCard link="link"/>
        </div>
    )
}