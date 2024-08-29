import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
  const [shadowNav, setShadowNav] = useState(false);

  //
  useEffect(() => {
    const isAtTop = () => {
      setShadowNav(window.scrollY > 0);
    };

    window.addEventListener("scroll", isAtTop);

    return () => {
      window.removeEventListener("scroll", isAtTop);
    };
  }, []);

  return (
    <nav className={`navBar ${shadowNav ? "shadow" : ""}`}>
      <div className="portfolioName">
        <Link to={"./"}><h2>Vanessa Martin</h2></Link>
      </div>
      <ul>
        <li className="navButton">
          <Link to={"./"}>Home</Link>
        </li>
        <li className="navButton">
          <Link to={"./contact"}>Contact</Link>
        </li>
        <li className="navButton">
          <Link to="./portfolio">Portfolio</Link>
        </li>
      </ul>
    </nav>
  );
}
