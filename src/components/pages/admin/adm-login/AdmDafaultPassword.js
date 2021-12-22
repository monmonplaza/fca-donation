import React from "react";
import { Link } from "react-router-dom";
import SpinnerButton from "../../../spinner/SpinnerButton";

const AdmDafaultPassword = () => {
  return (
    <>
      <div className="admlogin">
        <div className="admlogin__wrapper">
          <img src="./images/logo.png" alt="fca logo" />
          <form action="">
            <div className="form__group">
              <label htmlFor="useremail">Email Address</label>
              <input type="email" className="input--error" />
              <p className="form__msg msg--error"> Require</p>
            </div>

            <div className="form__group">
              <label htmlFor="userpassword">
                Password (Use the Default Password)
              </label>
              <input type="password" className="input--error" />
              <p className="form__msg msg--error"> Require</p>
            </div>
            <button className="btn btn--orange btn--sm" disabled>
              Next <SpinnerButton />
            </button>
          </form>
          <div className="form__msgbox msg--error">
            {" "}
            Email or Passwod mismatch{" "}
          </div>

          <div className="admlogin__note">
            <p>
              Need assistance? Kindly email <br />{" "}
              <Link to="/">patrick.reyes @frontlinebusiness.com.ph</Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdmDafaultPassword;
