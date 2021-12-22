import React from "react";
import { Link } from "react-router-dom";
import ModalSystemError from "../../../modal/ModalSystemError";
import ModalSuccess from "../../../modal/ModalSuccess";
import SpinnerButton from "../../../spinner/SpinnerButton";
import RegSideBanner from "../RegSideBanner";

const RegLogin = () => {
  const [modalErrorOpen, setModalErrorOpen] = React.useState(false);
  const [modalSuccessOpen, setModalSuccessOpen] = React.useState(false);

  return (
    <>
      <section className="login">
        <RegSideBanner />

        <div className="login__form">
          <div className="login__form__wrapper">
            <div className="form__header">
              <img src="./images/logo.png" alt="ftc logo hand" />
              <h3>Donation Account</h3>
              <p>Please enter your login details</p>
            </div>

            <form action="">
              <div className="form__group full--width ">
                <label htmlFor="email">Email Address</label>
                <input type="text" name="email" className="input--error" />
                <p className="form__msg msg--error"> Require</p>
              </div>

              <div className="form__group full--width ">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  name="password"
                  className="input--error"
                />
                <p className="form__msg msg--error"> Require</p>
              </div>
              <ul>
                <li>
                  <Link to="/donor-signup">Not yet register? Sign Up</Link>
                </li>
                <li>
                  <Link to="/donor-forgot-password">Forgot Password</Link>
                </li>
              </ul>
              <div className="form__group">
                <button className="btn btn--blue btn--sm" disabled>
                  {" "}
                  Login <SpinnerButton />
                </button>
              </div>
              <Link to="/" className="goto__home">
                Go Back Home
              </Link>
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

      {modalErrorOpen && (
        <ModalSystemError modal={{ modalErrorOpen, setModalErrorOpen }} />
      )}
      {modalSuccessOpen && (
        <ModalSuccess modal={{ modalSuccessOpen, setModalSuccessOpen }} />
      )}
    </>
  );
};

export default RegLogin;
