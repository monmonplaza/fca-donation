import React from 'react'
import { IoClose } from 'react-icons/io5';

const RegModalQuickSponsor = ({ modal }) => {

    const { handleQuickModal } = modal;



    return (
        <>
            <div className="modal show">
                <div className="modal__main">
                    <div className="modal__header">
                        <h3>Sponsor Loverboy</h3>
                        <button className="btn__modalClose" onClick={handleQuickModal}><IoClose /></button>
                    </div>
                    <form action="">
                        <div className="modal__body">
                            <div className="quicksponsor__wrapper">
                                <h4>Select the amount you want to give</h4>

                                <div className="radio__wrap">
                                    <input type="radio" name="sponsorAmount" />
                                    <label htmlFor="">$20</label>
                                </div>
                                <div className="radio__wrap">
                                    <input type="radio" name="sponsorAmount" />
                                    <label htmlFor="">$40</label>
                                </div>
                                <div className="radio__wrap">
                                    <input type="radio" name="sponsorAmount" />
                                    <label htmlFor="">$100</label>
                                </div>
                                <div className="radio__wrap">
                                    <input type="radio" name="sponsorAmount" />
                                    <label htmlFor="">200% to full sponsor</label>
                                </div>


                                <ul className="sponsor__total">
                                    <li>Total</li>
                                    <li>0.00</li>
                                </ul>


                            </div>
                        </div>
                        <div className="modal__footer">
                            <ul>
                                <li><button className="btn btn--blue" >Okay</button></li>
                                <li><button className="btn btn--cancel" onClick={handleQuickModal}>Cancel</button></li>
                            </ul>
                        </div>
                    </form>
                </div>
            </div>

        </ >
    )
}

export default RegModalQuickSponsor
