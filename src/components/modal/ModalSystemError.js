import React from 'react'
import { MdError } from 'react-icons/md';
const ModalSystemError = (modal) => {
    const { modalErrorOpen, setModalErrorOpen } = modal;


    const handleModalOpen = () => {
        setModalErrorOpen(!modalErrorOpen);
    }
    return (
        <>
            <div className="modal">
                <div className="modal__main">
                    <div className="modal__header ">
                        <h3>System Error</h3>
                    </div>
                    <div className="modal__body message__prompt modal--error">
                        <MdError />
                        <p>Something went wrong. If persist, email us at info@facethechildren.org
                        </p>


                    </div>
                    <div className="modal__footer">
                        <ul>
                            <li><button className="btn btn--blue" onClick={handleModalOpen}>Okay</button></li>
                        </ul>
                    </div>
                </div>
            </div>
            )
        </>
    )
}
export default ModalSystemError
