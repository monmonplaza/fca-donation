import React from 'react'
import { IoClose } from 'react-icons/io5';
const AdmModalAddUser = ({ onClickClose }) => {

    return (
        <>
            <div className="modal" >
                <div className="modal__main">
                    <div className="modal__header">
                        <h3>Add New User</h3>
                        <button className="btn__modalClose" onClick={onClickClose}><IoClose /></button>
                    </div>
                    <form action="">
                        <div className="modal__body">
                            <div className="form__group input--error">
                                <label htmlFor="">Name</label>
                                <input type="text" className="input--error" />
                                <p className="form__msg msg--error"> Require</p>
                            </div>

                            <div className="form__group input--error">
                                <label htmlFor="">Email</label>
                                <input type="email" className="input--error" />
                                <p className="form__msg msg--error"> Require</p>
                            </div>

                            <div className="modal__grid add--user">
                                <div className="form__group input--error">
                                    <label htmlFor="">Password</label>
                                    <input type="password" className="input--error" />
                                    <p className="form__msg msg--error"> Require</p>
                                </div>
                                <button className="btn btn--orange">Generate</button>
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
        </>
    )
}

export default AdmModalAddUser
