import React from "react";
import { Link } from "react-router-dom";

const FrontRegHeader = () => {
  const [active, setActive] = React.useState(false);
  const handleOpenMenu = () => {
    setActive(!active);
  };

  return (
    <header className="header">
      <div className="header__top">
        <div className="container">
          <ul>
            <li>
              <Link to="/">Visit Philippine Frontline Ministries</Link>
            </li>
            <li>
              <Link to="/donor-login">Login</Link>
            </li>
          </ul>
        </div>
      </div>

      <div className={active ? "header__main open" : "header__main"}>
        <div className="container">
          <div className="header__main__wrap grid">
            <div className="branding">
              <img src="./images/logo.png" alt="FCA Logo" />
            </div>

            <nav>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/">About</Link>
                </li>
                <li>
                  <Link to="/">Admission</Link>
                </li>
                <li>
                  <Link to="/">Services</Link>
                </li>
                <li>
                  <Link to="/">Media</Link>
                </li>
                <li>
                  <Link to="/">Contact</Link>
                </li>
                <li>
                  <Link to="/donor-donation" className="btn__header btn--blue">
                    Donate
                  </Link>
                </li>
              </ul>
            </nav>
            <div className="toggle__mobile" onClick={handleOpenMenu}>
              <div className="bar"></div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default FrontRegHeader;
