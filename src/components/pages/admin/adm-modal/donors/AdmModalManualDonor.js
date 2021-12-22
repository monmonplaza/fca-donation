import React from "react";
import { IoClose } from "react-icons/io5";
const AdmModalManualDonor = ({ onClickClose }) => {
  return (
    <>
      <div className="modal">
        <div className="modal__main">
          <div className="modal__header">
            <h3>Manual Donation</h3>
            <button className="btn__modalClose" onClick={onClickClose}>
              <IoClose />
            </button>
          </div>

          <form action="">
            <div className="modal__body">
              <div className="form__group ">
                <label htmlFor="">Child Select</label>
                <select name="" id="" className="input--error">
                  <option value="--">--</option>
                  <option value="child1">child1</option>
                  <option value="child2">child2</option>
                  <option value="child3">child3</option>
                  <option value="child4">child4</option>
                </select>
                <p className="form__msg msg--error"> Require</p>
              </div>
              <div className="form__group">
                <label htmlFor="">Amount</label>
                <input type="text" className="input--error" />
                <p className="form__msg msg--error"> Require</p>
              </div>
              <div className="form__group">
                <label htmlFor="">Years at FTC</label>
                <input type="date" className="input--error" />
                <p className="form__msg msg--error"> Require</p>
              </div>
              <div className="modal__grid grid--addchild">
                <div className="form__group ">
                  <label htmlFor="">Age</label>
                  <input type="date" className="input--error" />
                  <p className="form__msg msg--error"> Require</p>
                </div>
              </div>
            </div>
            <div className="modal__footer">
              <ul>
                <li>
                  <button className="btn btn--process">
                    Save <i className="fa fa-spinner fa-spin"></i>
                  </button>
                </li>
                <li>
                  <button className="btn btn--cancel" onClick={onClickClose}>
                    Cancel
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

export default AdmModalManualDonor;
