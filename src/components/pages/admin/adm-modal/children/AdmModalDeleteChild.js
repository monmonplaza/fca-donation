import React from 'react'
import { IoClose } from 'react-icons/io5';

const AdmModalDeleteChild = ({ onClickClose }) => {

    return (
        <>
            <div className="modal " >
                <div className="modal__main">
                    <div className="modal__header">
                        <h3>Delete Child?</h3>
                        <button className="btn__modalClose" onClick={onClickClose}><IoClose /></button>
                    </div>



                    <div className="modal__body message__prompt">
                        <p>Are you sure you want to delete this child?
                        </p>
                    </div>




                    <div className="modal__footer">
                        <ul>
                            <li><button className="btn btn--red">Delete <i className="fa fa-spinner fa-spin"></i></button></li>
                            <li><button className="btn btn--cancel" onClick={onClickClose}>Cancel</button></li>
                        </ul>
                    </div>

                </div>
            </div>
        </>
    )
}

export default AdmModalDeleteChild
