import React from 'react'
import { IoClose } from 'react-icons/io5';


const RegModalEditCard = ({ modal }) => {
    const { setCard } = modal;

    const handleClose = () => {
        setCard(false);
    }

    return (
        <>
            <div className="modal" >
                <div className="modal__main">
                    <div className="modal__header">
                        <h3>Update Card</h3>
                        <button className="btn__modalClose" onClick={handleClose}><IoClose /></button>
                    </div>
                    <form action="">
                        <div className="modal__body">

                            <div className="form__group input--error">
                                <label htmlFor="">Card Number</label>
                                <input type="text" className="input--error" />
                                <p className="form__msg msg--error"> Require</p>
                            </div>

                            <div className="form__group input--error">
                                <label htmlFor="">CVC</label>
                                <input type="text" className="input--error" />
                                <p className="form__msg msg--error"> Require</p>
                            </div>

                            <div className="form__group input--error">
                                <label htmlFor="">Name on card</label>
                                <input type="text" className="input--error" />
                                <p className="form__msg msg--error"> Require</p>
                            </div>
                            <div className="form__group input--error">
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

export default RegModalEditCard
