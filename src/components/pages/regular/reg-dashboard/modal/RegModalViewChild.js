import React from 'react'
import { IoClose } from 'react-icons/io5';

const RegModalViewChild = ({ onClickClose }) => {

    return (
        <>
            <div className="modal">
                <div className="modal__main">
                    <div className="modal__header">
                        <h3>Child Information</h3>
                        <button className="btn__modalClose" onClick={onClickClose}><IoClose /></button>
                    </div>
                    <div className="modal__body">

                        <div className="child__info__wrapper">
                            <div className="child__info__img">
                                <img src="https://demo.frontlinebusiness.com.ph/dev/ftc2021/ftc/images/trixie.jpg" alt="child1" />
                            </div>
                            <div className="child__info__box">
                                <h3>Profile</h3>
                                <ul>
                                    <li>Name:</li>
                                    <li>Loverboy</li>
                                </ul>

                                <ul>
                                    <li>Age:</li>
                                    <li>16</li>
                                </ul>

                                <ul>
                                    <li>Status:</li>
                                    <li>Active</li>
                                </ul>
                            </div>
                        </div>

                        <div className="child__info__story">
                            <h3>Story</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt doloremque inventore eaque est autem nihil velit id ullam veritatis reiciendis?</p>
                        </div>



                    </div>
                    <div className="modal__footer">
                        <ul>
                            <li><button className="btn btn--cancel" onClick={onClickClose}>Cancel</button></li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default RegModalViewChild
