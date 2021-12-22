import React from "react";
import { Link } from "react-router-dom";
import SpinnerButton from "../../../spinner/SpinnerButton";
import RegSideBanner from "../RegSideBanner";

const RegForgotPassword = () => {
  return (
    <>
      <section className="login">
        <RegSideBanner />

        <div className="login__form">
          <div className="login__form__wrapper">
            <div className="form__header">
              <img src="./images/logo.png" alt="fca logo " />
              <h3>Forgot your Password?</h3>
              <p>
                Don't worry! Just fill in your email and we'll send you a link
                to reset your password
              </p>
            </div>

            <form action="">
              <div className="form__group  full--width">
                <label htmlFor="email">Email Address</label>
                <input type="email" name="email" className="input--error" />
                <p className="form__msg msg--error"> Require</p>
              </div>

              <div className="form__group">
                <button className="btn btn--blue btn--sm" disabled>
                  {" "}
                  Reset <SpinnerButton />
                </button>
              </div>

              <Link to="/" className="goto__home">
                Go back to Login
              </Link>
            </form>
            <div className="form__msgbox msg--error">
              {" "}
              Email is not registered{" "}
            </div>
          </div>
          <div className="login__footer">
            <p>
              If you are having problems about your account, contact us at{" "}
              <br /> help@ftc.com or call (+623) 1234 1234
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default RegForgotPassword;
