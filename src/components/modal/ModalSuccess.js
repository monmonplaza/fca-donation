import React from 'react'
// import { IoClose } from 'react-icons/io5';
import { FaCheckCircle } from 'react-icons/fa';

const ModalSuccess = (modal) => {
    const { modalSuccessOpen, setModalSuccessOpen } = modal;


    const handleModalOpen = () => {
        setModalSuccessOpen(!modalSuccessOpen);
    }
    return (
        <>
            <div className="modal">
                <div className="modal__main">
                    <div className="modal__header ">
                        <h3>Success </h3>
                        {/* <button className="btn__modalClose" onClick={handleModalOpen}><IoClose /></button> */}
                    </div>
                    <div className="modal__body message__prompt modal--success">
                        <FaCheckCircle />
                        <p>Something went right.
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

export default ModalSuccess
