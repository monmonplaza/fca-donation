import React from "react";
import { IoClose } from "react-icons/io5";
const AdmModalEditChild = ({ onClickClose }) => {
  return (
    <>
      <div className="modal">
        <div className="modal__main">
          <div className="modal__header">
            <h3>Add Child</h3>
            <button className="btn__modalClose" onClick={onClickClose}>
              <IoClose />
            </button>
          </div>

          <form action="">
            <div className="modal__body form__long">
              <div className="add__child">
                <div className="upload__thumbnail modal__grid grid--addchild ">
                  <img
                    src="https://static.wikia.nocookie.net/mobile-legends/images/6/66/Zilong.png"
                    className="uploadImg"
                    alt=""
                  />
                  <div className="uploadBtn">
                    <input type="file" className="hide_file" />
                    <p className="note">
                      Make sure the file size of the image is 20kb or less
                    </p>

                    <p className="note note--error">somthing is wrong error</p>
                  </div>
                </div>

                <div className="form__group">
                  <label htmlFor="">Name</label>
                  <input type="text" className="input--error" />
                  <p className="form__msg msg--error"> Require</p>
                </div>
                <div className="form__group">
                  <label htmlFor="">Years at FTC</label>
                  <input type="text" className="input--error" />
                  <p className="form__msg msg--error"> Require</p>
                </div>
                <div className="modal__grid grid--addchild">
                  <div className="form__group ">
                    <label htmlFor="">Age</label>
                    <input type="email" className="input--error" />
                    <p className="form__msg msg--error"> Require</p>
                  </div>

                  <div className="form__group ">
                    <label htmlFor="">Birthday</label>
                    <input type="text" className="input--error" />
                    <p className="form__msg msg--error"> Require</p>
                  </div>
                </div>
                <div className="form__group">
                  <label htmlFor="">Classification</label>
                  <select name="" id="" className="input--error">
                    <option value="resident">Resident</option>
                    <option value="nonresident">Non-Resident</option>
                    <option value="fullysponsored">Fully Sponsored</option>
                  </select>
                  <p className="form__msg msg--error"> Require</p>
                </div>

                <div className="form__group">
                  <label htmlFor="">Story</label>
                  <textarea name="" className="input--error"></textarea>
                  <p className="form__msg msg--error"> Require</p>
                </div>
              </div>
            </div>
            <div className="modal__footer">
              <ul>
                <li>
                  <button className="btn btn--process">
                    Update <i className="fa fa-spinner fa-spin"></i>
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

export default AdmModalEditChild;
