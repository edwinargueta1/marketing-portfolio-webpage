import React from "react";
import PortfolioCard from "../Components/PortfolioCard";

export default function PolishingTheProfessionalPage() {
  return (
    <div className="pageWrapper">
      <h2>Polishing The Professional</h2>
      <h4>DREAM MAGIC STUDIOS & POLISHING THE
      PROFESSIONAL: PRODUCTION</h4>
      <p>Date</p>
      <iframe
      className="pdfViewer"
        src={
          "/media/PolishingTheProfessional/PTP_Podcast_Presentation_9-8-23.pdf"
        }
      ></iframe>

      <PortfolioCard 
      media="/media/PolishingTheProfessional/Monthly Newsletter - May 2024.png"
      title="May Monthly Newsletter"
      date="11/14/23"
      />
      <PortfolioCard 
      media="/media/PolishingTheProfessional/Newsletter_ Job Club Dec.png"
      title="Motivation Mondays Job Club"
      date="12/18/23"
      />
      <PortfolioCard 
      media="/media/PolishingTheProfessional/Newsletter_ Job Club MLK.png"
      title="Motivation Mondays Job Club"
      date="1/8/23"
      />
      <PortfolioCard 
      media="/media/PolishingTheProfessional/Newsletter_ Job Club NY.png"
      title="Motivation Mondays Job Club"
      date="12/18/23"
      />
      <PortfolioCard 
      media="/media/PolishingTheProfessional/Social Media Blog Post.jpg"
      title="Social Post"
      />
      <PortfolioCard 
      media="/media/PolishingTheProfessional/Social Media Instagram Reel 1.jpg"
      title="Instagram Reel Post"
      date="11/14/23"
      />
      <PortfolioCard 
      media="/media/PolishingTheProfessional/Social Media Instagram Reel 2.jpg"
      title="May Monthly Newsletter"
      date="11/14/21"
      />
      <PortfolioCard 
      media="/media/PolishingTheProfessional/Social Media Instagram Reel 3.jpg"
      title="May Monthly Newsletter"
      date="11/14/21"
      />
      <PortfolioCard 
      media="/media/PolishingTheProfessional/Social Media Manager - Following Increase.jpg"
      title="May Monthly Newsletter"
      date="11/14/21"
      />
      <PortfolioCard 
      media="/media/PolishingTheProfessional/Social Media Manager Feed_.jpg"
      title="May Monthly Newsletter"
      date="11/14/21"
      />
      <PortfolioCard 
      media="/media/PolishingTheProfessional/Social Media Manager Instagram Feed.jpg"
      title="May Monthly Newsletter"
      date="11/14/21"
      />
      <PortfolioCard 
      media="/media/PolishingTheProfessional/Social Media Manager Instagram Profile_.jpg"
      title="May Monthly Newsletter"
      date="11/14/21"
      />
      <PortfolioCard 
      media="/media/PolishingTheProfessional/Social Media Post TTW Webinar.jpg"
      title="May Monthly Newsletter"
      date="11/14/21"
      />

    </div>
  );
}