import React from "react";
import { Link } from "react-router-dom";
import { FaPhoneAlt } from "react-icons/fa";
import { ImMobile } from "react-icons/im";
import { BsEnvelopeFill, BsFillHouseFill } from "react-icons/bs";

const RegFooter = () => {
  return (
    <>
      <footer className="footer">
        <div className="container">
          <div className="footer__wrapper">
            <div className="footer__item">
              <img src="./images/logo-white.png" alt="fca logo white" />
            </div>
            <div className="footer__item">
              <h3>Contact Details</h3>
              <ul>
                <li>
                  <FaPhoneAlt /> 049 521 0732
                </li>
                <li>
                  <ImMobile /> 0908 202 0749
                </li>
                <li>
                  <ImMobile /> 0926 363 9722
                </li>
                <li>
                  <BsEnvelopeFill /> info@fca.edu.ph
                </li>
                <li>
                  <BsFillHouseFill /> Flora Drive, Brgy. San Ignacio, San Pablo
                  City, Laguna, 4000
                </li>
              </ul>
            </div>

            <div className="footer__item">
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

            <div className="footer__item">
              <h3>SCHOOL PORTAL</h3>
              <ul>
                <li>
                  <a href="#">Facebook Page</a>
                </li>
                <li>
                  <a href="#">FCA SMIS</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
      {/* <div className="copyright">
        <p>
          &copy; 2021 Frontline Christian Academy <br /> Visit
          <Link to="/"> Philippine Frontline Ministries</Link>
        </p>
      </div> */}
    </>
  );
};

export default RegFooter;
