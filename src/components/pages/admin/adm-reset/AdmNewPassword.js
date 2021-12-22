import React from "react";
import { Link } from "react-router-dom";
import SpinnerButton from "../../../spinner/SpinnerButton";
const AdmNewPassword = () => {
  return (
    <>
      <div className="admlogin">
        <div className="admlogin__wrapper">
          <div className="admlogin__header">
            <img src="./images/logo.png" alt="fca logo" />
            <h3>Reset Password</h3>
          </div>
          <form action="">
            <div className="form__group">
              <label htmlFor="useremail">New Password</label>
              <input type="password" className="input--error" />
              <p className="form__msg msg--error"> Require</p>
            </div>

            <div className="form__group">
              <label htmlFor="useremail">Re-type New Password</label>
              <input type="password" className="input--error" />
              <p className="form__msg msg--error"> Require</p>
            </div>

            <button className="btn btn--orange btn--sm" disabled>
              Send <SpinnerButton />
            </button>
          </form>
          <div className="form__msgbox msg--error"> Password mismatch </div>

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

export default AdmNewPassword;
