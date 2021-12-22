import React from 'react'
import { IoClose } from 'react-icons/io5'

const AdmModalEditDesignation = ({ onClickClose }) => {
    return (
        <>
            <div className="modal" >
                <div className="modal__main">
                    <div className="modal__header">
                        <h3>Update Designation</h3>
                        <button className="btn__modalClose" onClick={onClickClose}><IoClose /></button>
                    </div>


                    <form action="">
                        <div className="modal__body">

                            <div className="form__group">
                                <label htmlFor="">Item</label>
                                <input type="text" className="input--error" />
                                <p className="form__msg msg--error"> Require</p>
                            </div>
                            <div className="form__group">
                                <label htmlFor="">Description</label>
                                <textarea className="input--error modal--textarea" ></textarea>
                                <p className="form__msg msg--error"> Require</p>
                            </div>




                        </div>
                        <div className="modal__footer">
                            <ul>
                                <li><button className="btn btn--process">Update <i className="fa fa-spinner fa-spin"></i></button></li>
                                <li><button className="btn btn--cancel" onClick={onClickClose}>Cancel</button></li>
                            </ul>
                        </div>
                    </form>


                </div>



            </div >

        </>
    )
}

export default AdmModalEditDesignation
