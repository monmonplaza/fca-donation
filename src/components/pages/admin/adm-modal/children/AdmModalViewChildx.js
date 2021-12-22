import React from 'react'
import { IoClose } from 'react-icons/io5';
const AdmModalViewChild = ({ onClickClose }) => {
    return (
        <>
            <div className="modal" >
                <div className="modal__main">
                    <div className="modal__header">
                        <h3>Child Profile</h3>
                        <button className="btn__modalClose" onClick={onClickClose}><IoClose /></button>
                    </div>

                    <div className="modal__body">
                        <div className="view__child">
                            <div className="grid">
                                <div className="griditem">
                                    <img src="https://demo.frontlinebusiness.com.ph/dev/ftc2021/ftc/images/angelica.jpg" alt="" />

                                </div>
                                <div className="griditem">
                                    <ul>
                                        <li>Full Name</li>
                                        <li>Ramon Plaza</li>
                                    </ul>

                                    <ul>
                                        <li>Birthday</li>
                                        <li>May 21, 2001</li>
                                    </ul>


                                    <ul>
                                        <li>Age</li>
                                        <li>21</li>
                                    </ul>


                                    <ul>
                                        <li>Classification</li>
                                        <li>Resident</li>
                                    </ul>


                                    <ul>
                                        <li>Created</li>
                                        <li>May 21, 2001</li>
                                    </ul>
                                </div>
                            </div>

                            <ul className="child__story">
                                <li>Story:</li>
                                <li>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis quaerat autem eaque ea? Error consectetur molestias blanditiis similique porro ratione!</p>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur accusamus, adipisci ratione quisquam cupiditate voluptates quas, iure eaque ducimus delectus dolor quo, repudiandae ipsum veritatis amet sequi nemo inventore nostrum sunt modi rem. Culpa libero fugiat, fugit corporis est recusandae!</p>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur accusamus, adipisci ratione quisquam cupiditate voluptates quas, iure eaque ducimus delectus dolor quo, repudiandae ipsum veritatis amet sequi nemo inventore nostrum sunt modi rem. Culpa libero fugiat, fugit corporis est recusandae!</p>
                                </li>
                            </ul>

                        </div>



                    </div>

                    <div className="modal__footer">
                        <ul>
                            <li><button className="btn btn--cancel" onClick={onClickClose}>Close</button></li>
                        </ul>
                    </div>

                </div>
            </div>
        </>
    )
}

export default AdmModalViewChild
