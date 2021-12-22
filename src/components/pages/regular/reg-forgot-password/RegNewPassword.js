import React from "react";

import SpinnerButton from "../../../spinner/SpinnerButton";
import RegSideBanner from "../RegSideBanner";

const RegNewPassword = () => {
  return (
    <>
      <section className="login">
        <RegSideBanner />

        <div className="login__form">
          <div className="login__form__wrapper">
            <div className="form__header">
              <img src="./images/logo.png" alt="fca logo" />
              <h3>Create New Password</h3>
            </div>

            <form action="">
              <div className="form__group  full--width">
                <label htmlFor="password">New Password</label>
                <input
                  type="password"
                  name="password"
                  className="input--error"
                />
                <p className="form__msg msg--error"> Require</p>
              </div>
              <div className="form__group  full--width">
                <label htmlFor="repassword">Re-type Password</label>
                <input
                  type="password"
                  name="repassword"
                  className="input--error"
                />
                <p className="form__msg msg--error"> Require</p>
              </div>
              <div className="form__msgbox msg--error"> Password Mismatch</div>

              <div className="form__group">
                <button className="btn btn--blue btn--sm" disabled>
                  {" "}
                  Submit <SpinnerButton />
                </button>
              </div>
            </form>
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

export default RegNewPassword;
