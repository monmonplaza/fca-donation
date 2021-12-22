import React from 'react'
import { IoClose } from 'react-icons/io5';
const AdmModalRemoveManual = ({ onClickClose }) => {
    return (
        <>
            <div className="modal" >
                <div className="modal__main">
                    <div className="modal__header">
                        <h3>Remove Donation</h3>
                        <button className="btn__modalClose" onClick={onClickClose}><IoClose /></button>
                    </div>



                    <div className="modal__body message__prompt">
                        <p>This action will remove the donor from the list .
                        </p>
                    </div>




                    <div className="modal__footer">
                        <ul>
                            <li><button className="btn btn--red">Remove <i className="fa fa-spinner fa-spin"></i></button></li>
                            <li><button className="btn btn--cancel" onClick={onClickClose}>Cancel</button></li>
                        </ul>
                    </div>

                </div>
            </div>
        </>
    )
}

export default AdmModalRemoveManual
