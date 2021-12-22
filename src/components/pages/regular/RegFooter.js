import React from "react";
import { Link } from "react-router-dom";

const RegFooter = () => {
  return (
    <>
      <footer className="footer">
        <div className="container">
          <div className="footer__wrapper">
            <img src="./images/logo-white.png" alt="fca logo white" />

            <h3>Quick Links</h3>
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
                <Link to="/">Donate</Link>
              </li>
            </ul>
          </div>
        </div>
      </footer>
      <div className="copyright">
        <p>
          &copy; 2021 Frontline Christian Academy <br /> Visit
          <Link to="/"> Philippine Frontline Ministries</Link>
        </p>
      </div>
    </>
  );
};

export default RegFooter;
