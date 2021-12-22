import React from "react";
import { Link } from "react-router-dom";
import SpinnerButton from "../../../spinner/SpinnerButton";

const AdmForgotPassword = () => {
  return (
    <>
      <div className="admlogin">
        <div className="admlogin__wrapper">
          <div className="admlogin__header">
            <img src="./images/logo.png" alt="fca logo" />
            <h3>Reset Password</h3>
            <p>
              Fill in your email and we will send you a link to reset your
              password
            </p>
          </div>
          <form action="">
            <div className="form__group">
              <label htmlFor="useremail">Email Address</label>
              <input type="email" className="input--error" />
              <p className="form__msg msg--error"> Require</p>
            </div>

            <button className="btn btn--orange btn--sm" disabled>
              Send <SpinnerButton />
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

export default AdmForgotPassword;
