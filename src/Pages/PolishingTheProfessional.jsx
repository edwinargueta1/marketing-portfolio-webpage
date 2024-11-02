import PortfolioCard from "../Components/PortfolioCard.jsx";
import { InstagramEmbed } from "react-social-media-embed";
import images from "../Assets/images.js";
import { Link } from "react-router-dom";
import InstagramIcon from "../Assets/Icons/InstagramIcon.jsx";


export default function PolishingTheProfessionalPage() {
  return (
    <div className="pageWrapper">
      <h3>Polishing the Professional</h3>

      <a href="https://www.instagram.com/polishingtheprofessional/">
        <InstagramIcon color="#FF6EAB" size="2rem"/>
      </a>
      
      
      <PortfolioCard 
      media="/media/Polishing_The_Professional/PTP_Podcast_Presentation_9-8-23.pdf"
      title="Dream Magic Studios & Polishing the Professional: Production"
      date="11/13/20"
      />

      <PortfolioCard 
      media="/media/Polishing_The_Professional/Monthly Newsletter - May 2024.png"
      title="May Monthly Newsletter"
      date="11/14/23"
      />
      <PortfolioCard 
      media="/media/Polishing_The_Professional/Newsletter_ Job Club Dec.png"
      title="Motivation Mondays Job Club"
      date="12/18/23"
      />
      <PortfolioCard 
      media="/media/Polishing_The_Professional/Newsletter_ Job Club MLK.png"
      title="Motivation Mondays Job Club"
      date="1/8/23"
      />
      <PortfolioCard 
      media="/media/Polishing_The_Professional/Newsletter_ Job Club NY.png"
      title="Motivation Mondays Job Club"
      date="12/18/23"
      />
      <PortfolioCard 
      media="/media/Polishing_The_Professional/Social Media Blog Post.jpg"
      title="Social Post"
      />
      <PortfolioCard 
      media="/media/Polishing_The_Professional/Social Media Instagram Reel 1.jpg"
      title="Instagram Reel Post"
      date="11/14/23"
      />
      <PortfolioCard 
      media="/media/Polishing_The_Professional/Social Media Instagram Reel 2.jpg"
      title="Instagram Reel Post - (Caption)"
      date="11/14/21"
      />
      <PortfolioCard 
      media="/media/Polishing_The_Professional/Social Media Instagram Reel 3.jpg"
      title="Instagram Reel Post - (Analytic)"
      date="11/14/21"
      />
      <PortfolioCard 
      media="/media/Polishing_The_Professional/Social Media Manager - Following Increase.jpg"
      title="Polishing the Professional: Instagram Page"
      date="11/14/21"
      />
      <PortfolioCard 
      media="/media/Polishing_The_Professional/Social Media Manager Feed_.jpg"
      title="May Monthly Newsletter"
      date="11/14/21"
      />
      <PortfolioCard 
      media="/media/Polishing_The_Professional/Social Media Manager Instagram Feed.jpg"
      title="May Monthly Newsletter"
      date="11/14/21"
      />
      <PortfolioCard 
      media="/media/Polishing_The_Professional/Social Media Manager Instagram Profile_.jpg"
      title="May Monthly Newsletter"
      date="11/14/21"
      />
      <PortfolioCard 
      media="/media/Polishing_The_Professional/Social Media Post TTW Webinar.jpg"
      title="May Monthly Newsletter"
      date="11/14/21"
      />

    </div>
  );
}