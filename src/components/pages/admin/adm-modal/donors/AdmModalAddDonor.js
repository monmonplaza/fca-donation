import React from 'react'
import { IoClose } from 'react-icons/io5'

const AdmModalAddDonor = ({ onClickClose }) => {
    return (
        <>
            <div className="modal" >
                <div className="modal__main">
                    <div className="modal__header">
                        <h3>Manual Donation</h3>
                        <button className="btn__modalClose" onClick={onClickClose}><IoClose /></button>
                    </div>


                    <form action="">
                        <div className="modal__body form__long">

                            <div className="modal__grid add--donor">
                                <div className="griditem">
                                    <h3>Contact Info</h3>
                                    <div className="form__group">
                                        <label htmlFor="">Name</label>
                                        <input type="text" className="input--error" />
                                        <p className="form__msg msg--error"> Require</p>
                                    </div>

                                    <div className="form__group">
                                        <label htmlFor="">Email</label>
                                        <input type="email" className="input--error" />
                                        <p className="form__msg msg--error"> Require</p>
                                    </div>
                                    <div className="form__group">
                                        <label htmlFor="">Mobile</label>
                                        <input type="text" className="input--error" />
                                        <p className="form__msg msg--error"> Require</p>
                                    </div>
                                </div>

                                <div className="griditem">

                                    <h3>Address</h3>
                                    <div className="form__group ">
                                        <label htmlFor="">Street</label>
                                        <input type="text" className="input--error" />
                                        <p className="form__msg msg--error"> Require</p>
                                    </div>


                                    <div className="form__group ">
                                        <label htmlFor="">City</label>
                                        <input type="text" className="input--error" />
                                        <p className="form__msg msg--error"> Require</p>
                                    </div>


                                    <div className="form__group ">
                                        <label htmlFor="">State</label>
                                        <input type="text" className="input--error" />
                                        <p className="form__msg msg--error"> Require</p>
                                    </div>

                                    <div className="form__group ">
                                        <label htmlFor="">Zip</label>
                                        <input type="text" className="input--error" />
                                        <p className="form__msg msg--error"> Require</p>
                                    </div>


                                    <div className="form__group ">
                                        <label htmlFor="">Country</label>
                                        <input type="text" className="input--error" />
                                        <p className="form__msg msg--error"> Require</p>
                                    </div>
                                </div>
                            </div>


                        </div>
                        <div className="modal__footer">
                            <ul>
                                <li><button className="btn btn--process">Save <i className="fa fa-spinner fa-spin"></i></button></li>
                                <li><button className="btn btn--cancel" onClick={onClickClose}>Cancel</button></li>
                            </ul>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default AdmModalAddDonor
