import { Link } from "react-router-dom";
import { useState } from "react";
import { ReactComponent as BackIcon } from "../Assets/Icons/backIcon.svg";

export default function NavBar(props) {

  const [isMenuActive, setIsMenuActive] = useState(true);

  function toggleMenu() {
    setIsMenuActive((prev) => !prev);
  }

  return (
    <nav >
      <div id="menu" className={`${isMenuActive ? "" : "closed"}`}>
        <ul>
          <li>
            <Link to="./">Home</Link>
          </li>
          <li>
            <Link to="./contact">Contact</Link>
          </li>
          <li>
            <p>Experience:</p>
          </li>
          <li>
            <ul>
              <li>
                <Link to="./ALSNetwork">
                  ALS Network: PR and Marketing Manager
                </Link>
              </li>
              <li>
                <Link to="./PolishingTheProfessional">
                  Polishing the Professional
                </Link>
              </li>
              <li>
                <Link to="./TheAbleShow">The Able Show</Link>
              </li>
              <li>
                <Link to="./VanesVeggieVisits">Vane's Veggie Visits</Link>
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <div id="verticalLine" className={`verticalLine ${isMenuActive ? "" : "invisible"}`}></div>
      <div
        id="collapseMenuButton"
        className={`collapseMenuButton ${isMenuActive ? "" : "flip-rotation"}`}
        onClick={toggleMenu}
      >
        <BackIcon />
      </div>
    </nav>
  );
}
