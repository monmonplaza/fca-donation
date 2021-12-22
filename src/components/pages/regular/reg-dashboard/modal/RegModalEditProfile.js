import React from 'react'
import { IoClose } from 'react-icons/io5';


const RegModalEditProfile = ({ modal }) => {
    const { setInfo } = modal;
    const handleClose = () => {
        setInfo(false);
    }

    return (
        <>
            <div className="modal">
                <div className="modal__main">
                    <div className="modal__header">
                        <h3>Update Profile</h3>
                        <button className="btn__modalClose" onClick={handleClose}><IoClose /></button>
                    </div>
                    <form action="">
                        <div className="modal__body form__long">

                            <div className="form__group">
                                <label htmlFor="">Name</label>
                                <input type="text" className="input--error" />
                                <p className="form__msg msg--error"> Require</p>
                            </div>

                            <div className="form__group">
                                <label htmlFor="">Email</label>
                                <input type="text" className="input--error" />
                                <p className="form__msg msg--error"> Require</p>
                            </div>

                            <div className="form__group">
                                <label htmlFor="">Phone</label>
                                <input type="text" className="input--error" />
                                <p className="form__msg msg--error"> Require</p>
                            </div>
                            <div className="form__group">
                                <label htmlFor="">Address Line 1</label>
                                <input type="text" className="input--error" />
                                <p className="form__msg msg--error"> Require</p>
                            </div>

                            <div className="form__group">
                                <label htmlFor="">Address Line 2</label>
                                <input type="text" className="input--error" />
                                <p className="form__msg msg--error"> Require</p>
                            </div>

                            <div className="form__group">
                                <label htmlFor="">City</label>
                                <input type="text" className="input--error" />
                                <p className="form__msg msg--error"> Require</p>
                            </div>

                            <div className="form__group">
                                <label htmlFor="">State</label>
                                <input type="text" className="input--error" />
                                <p className="form__msg msg--error"> Require</p>
                            </div>

                            <div className="form__group">
                                <label htmlFor="">Zip/Postal</label>
                                <input type="text" className="input--error" />
                                <p className="form__msg msg--error"> Require</p>
                            </div>

                            <div className="form__group">
                                <label htmlFor="">Country</label>
                                <input type="text" className="input--error" />
                                <p className="form__msg msg--error"> Require</p>
                            </div>
                        </div>

                        <div className="modal__footer">
                            <ul>
                                <li><button className="btn btn--process">Process  <i className="fa fa-spinner fa-spin"></i></button></li>
                                <li><button className="btn btn--cancel" onClick={handleClose}>Cancel</button></li>
                            </ul>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default RegModalEditProfile
