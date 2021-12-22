import React from 'react'
import { IoClose } from 'react-icons/io5';
const AdmModalEditManual = ({ onClickClose }) => {
    return (
        <div>
            <div className="modal" >
                <div className="modal__main">
                    <div className="modal__header">
                        <h3>Add New User</h3>
                        <button className="btn__modalClose" onClick={onClickClose}><IoClose /></button>
                    </div>
                    <form action="">
                        <div className="modal__body">
                            <div className="form__group input--error">
                                <label htmlFor="">Child Name</label>
                                <input type="text" className="input--error" />
                                <p className="form__msg msg--error"> Require</p>
                            </div>

                            <div className="form__group input--error">
                                <label htmlFor="">Amount</label>
                                <input type="text" className="input--error" />
                                <p className="form__msg msg--error"> Require</p>
                            </div>

                            <div className="form__group input--error">
                                <label htmlFor="">Start Date</label>
                                <input type="date" className="input--error" />
                                <p className="form__msg msg--error"> Require</p>
                            </div>

                            <div className="form__group input--error">
                                <label htmlFor="">End Date</label>
                                <input type="date" className="input--error" />
                                <p className="form__msg msg--error"> Require</p>
                            </div>


                        </div>

                        <div className="modal__footer">
                            <ul>
                                <li><button className="btn btn--process">Add User  <i className="fa fa-spinner fa-spin"></i></button></li>
                                <li><button className="btn btn--cancel" onClick={onClickClose}>Cancel</button></li>
                            </ul>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default AdmModalEditManual
