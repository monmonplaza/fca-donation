import React from "react";
import FrontRegHeader from "../../../header/frontend/FrontRegHeader";
import SpinnerWindow from "../../../spinner/SpinnerWindow";
import RegBanner from "../RegBanner";
import RegFooter from "../RegFooter";
import RegChildCard from "./RegChildCard";
import RegChildNodata from "./RegChildNodata";
import RegCallToAction from "../RegCallToAction";
import Maintenance404 from "../../404/Maintenance";
import SpinnerButton from "../../../spinner/SpinnerButton";

const RegChildrenlist = () => {
  return (
    <>
      <FrontRegHeader />
      {/* <RegBanner title={"Children List"} /> */}
      {/* <Maintenance404 /> */}

      <div className="childbanner">
        <div className="childbanner__wrapper">
          <div className="childbanner__content">
            <div>
              <h2>Give where it's most needed</h2>
              <p>
                Give unrestricted gifts that allow Frontline to direct these
                funds where they are most needed. Your giving allows us to
                continue to actively partner with needs of people in the
                communities we serve.
              </p>
              <button className="btn btn--blue">DONATE NOW</button>
            </div>
          </div>
          <div className="childbanner__img">
            <img src="./images/services-bg.jpg" alt="Fca Children" />
          </div>
        </div>
      </div>

      <div className="childlist">
        <div className="container">
          <div className="childlist__body">
            {/* <RegChildNodata />
                        <SpinnerWindow /> */}

            <div className="childlist__block active">
              <div className="childlist__wrapper">
                <RegChildCard />
                <RegChildCard />
                <RegChildCard />
                <RegChildCard />
                <RegChildCard />
                <RegChildCard />
                <RegChildCard />
                <RegChildCard />
              </div>
            </div>
          </div>
        </div>

        <div className="pagination no--border children--list">
          <div className="pagination__wrapper">
            <button className="btn btn--blue">Show More</button>
            <div className="load__text show">
              <SpinnerButton /> <span>Loading...</span>
            </div>
          </div>
        </div>
      </div>

      <RegFooter />
    </>
  );
};

export default RegChildrenlist;
