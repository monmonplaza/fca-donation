import React from 'react'
import RegMsgFooter from './RegMsgFooter'
import RegMsgHeader from './RegMsgHeader'
import { FaCheckCircle } from 'react-icons/fa';


const RegMsgEmailVerify = () => {
    return (
        <>

            <RegMsgHeader />
            <div className="message__body message--green">
                <div className="message__wrapper">
                    <FaCheckCircle />
                    <h2>Your Registration is completed</h2>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam, eius.</p>
                </div>
            </div>
            <RegMsgFooter />
        </>
    )
}

export default RegMsgEmailVerify
