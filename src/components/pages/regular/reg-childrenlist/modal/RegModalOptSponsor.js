import React from 'react'
import { IoClose } from 'react-icons/io5';
import { Link } from 'react-router-dom';

const RegModalQuickSponsor = ({ modal }) => {

    const { handleSponsorOpt } = modal;



    return (
        <>
            <div className="modal show">
                <div className="modal__main">
                    <div className="modal__header">
                        <h3>Sponsor <span>Loverboy</span></h3>
                        <button className="btn__modalClose" onClick={handleSponsorOpt}><IoClose /></button>
                    </div>

                    <div className="modal__body">
                        <ul className="modal__opt__sponsorship">
                            <li><Link to="/donor-login">Login or Create an Account</Link></li>
                            <li><Link to="/donor-guest-option">Continue as Guest</Link></li>
                        </ul>
                    </div>
                    <div className="modal__footer">
                        <ul>
                            <li><button className="btn btn--blue" >Okay</button></li>
                            <li><button className="btn btn--cancel" onClick={handleSponsorOpt}>Cancel</button></li>
                        </ul>
                    </div>

                </div>
            </div>

        </ >
    )
}

export default RegModalQuickSponsor
