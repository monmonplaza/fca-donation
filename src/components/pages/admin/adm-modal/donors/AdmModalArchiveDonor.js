import React from 'react'
import { IoClose } from 'react-icons/io5';

const AdmModalArchiveDonor = ({ onClickClose }) => {

    return (
        <>
            <div className="modal" >
                <div className="modal__main">
                    <div className="modal__header">
                        <h3>Archive Donor?</h3>
                        <button className="btn__modalClose" onClick={onClickClose}><IoClose /></button>
                    </div>
                    <div className="modal__body message__prompt">
                        <p>This action will remove the Donor from the list and become inactive.</p>
                    </div>
                    <div className="modal__footer">
                        <ul>
                            <li><button className="btn btn--red">Archive <i className="fa fa-spinner fa-spin"></i></button></li>
                            <li><button className="btn btn--cancel" onClick={onClickClose}>Cancel</button></li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AdmModalArchiveDonor
