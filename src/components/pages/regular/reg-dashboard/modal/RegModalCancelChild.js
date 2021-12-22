import React from 'react'
import { IoClose } from 'react-icons/io5';
import SpinnerButton from '../../../../spinner/SpinnerButton';
function RegModalCancelChild({ onClickClose }) {
    return (
        <>
            <div className="modal ">
                <div className="modal__main">
                    <div className="modal__header">
                        <h3>Remove Sponsorship</h3>
                        <button className="btn__modalClose" onClick={onClickClose}><IoClose /></button>
                    </div>
                    <div className="modal__body message__prompt">
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi expedita voluptate libero velit officiis, error possimus quasi commodi veritatis aliquid!
                        </p>
                    </div>
                    <div className="modal__footer">
                        <ul>
                            <li><button className="btn btn--red"> Proceed  <SpinnerButton /></button></li>
                            <li><button className="btn btn--cancel" onClick={onClickClose}>Cancel</button></li>
                        </ul>
                    </div>
                </div>
            </div>

        </>
    )
}

export default RegModalCancelChild
