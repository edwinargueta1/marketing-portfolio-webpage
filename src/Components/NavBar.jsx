import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ReactComponent as BackIcon} from '../Assets/Icons/backIcon.svg';

export default function NavBar() {
  // const [shadowNav, setShadowNav] = useState(false);

  // //
  // useEffect(() => {
  //   const isAtTop = () => {
  //     setShadowNav(window.scrollY > 0);
  //   };

  //   window.addEventListener("scroll", isAtTop);

  //   return () => {
  //     window.removeEventListener("scroll", isAtTop);
  //   };
  // }, []);

  return (
    <nav>
      <div className="menu">
        <ul>
          <li>
            <Link to={"./"}>Home</Link>
          </li>
          <li>
            <Link to={"./contact"}>Contact</Link>
          </li>
          <li>
            <p>Experience:</p>
          </li>
          <li>
            <ul>
              <li>
                <Link to="./ALS">ALS Network: PR and Marketing Manager</Link>
              </li>
              <li>
                <Link>Polishing the Professional</Link>
              </li>
              <li>
                <Link>Vane's Veggie Visits</Link>
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <div className="collapseMenuButton"><BackIcon/></div>
      <div className="verticalLine"></div>
    </nav>
  );
}
