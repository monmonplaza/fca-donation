import React from 'react'
import { FaCheckCircle } from 'react-icons/fa';

const RegMsgbody = ({ header, body }) => {
    return (
        <>
            <div className="message__body">
                <div className="message__wrapper">
                    <FaCheckCircle />
                    <h2>Your Registration is completed</h2>
                    <p>lorem20  </p>
                </div>
            </div>
        </>
    )
}

export default RegMsgbody

