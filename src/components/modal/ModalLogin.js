import React from "react";
import { IoClose } from "react-icons/io5";
import Branding from "../branding/Branding";
import SpinnerButton from "../spinner/SpinnerButton";

const ModalLogin = () => {
  const [iShow, setIsShow] = React.useState(false);
  // SIR PAT TRUE NINYO LANG YUNG STATE PARA MGSHOW
  const handleClose = (e) => {
    e.preventDefault();
    setIsShow(!iShow);
  };
  return (
    <>
      <div className={iShow ? "modal modal--login show" : "modal modal--login"}>
        <div className="modal__main">
          <div className="modal__header">
            <button className="btn__modalClose">
              <IoClose />
            </button>
            <Branding />
          </div>
          <form action="">
            <div className="modal__body">
              <div className="modal__login">
                <div className="modal__login__note">
                  <h2>Account Already Exist </h2>
                  <p>
                    You have an existing account using that email. Please login
                    to continue sponsoring a child.
                  </p>
                </div>

                <div className="form__group">
                  <label htmlFor="">Email</label>
                  <input type="email" className="input--error" />
                  <p className="form__msg msg--error"> Require</p>
                </div>
                <div className="form__group">
                  <label htmlFor="">Password</label>
                  <input type="password" className="input--error" />
                  <p className="form__msg msg--error"> Require</p>
                </div>
              </div>
            </div>

            <div className="modal__footer">
              <ul>
                <li>
                  <button className="btn btn--blue">
                    Login <SpinnerButton />
                  </button>
                </li>
                <li>
                  <button className="btn btn--cancel" onClick={handleClose}>
                    Close
                  </button>
                </li>
              </ul>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default ModalLogin;
