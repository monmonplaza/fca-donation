import React from "react";
import { Link } from "react-router-dom";
import SpinnerCard from "../../../spinner/SpinnerCard";
import RegModalQuickSponsor from "./modal/RegModalQuickSponsor";

const RegChildCard = () => {
  const [isSponsor, setIsSponsor] = React.useState(false);
  const handleQuickModal = () => {
    setIsSponsor(!isSponsor);
  };

  return (
    <>
      <div className="child__card child">
        <div className="child__img">
          {/* <SpinnerCard /> */}
          <img
            src="https://demo.frontlinebusiness.com.ph/dev/ftc2021/ftc/images/angelica.jpg"
            alt=""
          />
          <div className="child__content">
            <h3>Jhon Luther</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
              nulla laborum ratione doloribus assumenda quibusdam, placeat
              explicabo illum voluptatibus saepe.
            </p>
            <button to="/" className="btn btn--blue" onClick={handleQuickModal}>
              Sponsor
            </button>
          </div>
        </div>
      </div>

      {isSponsor && <RegModalQuickSponsor modal={{ handleQuickModal }} />}
    </>
  );
};

export default RegChildCard;
