import React from 'react'
import { FaCheckCircle } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import RegMsgFooter from './RegMsgFooter'
import RegMsgHeader from './RegMsgHeader'


const RegMsgSuccessPasswordReset = () => {
    return (
        <>
            <div className="flex__wrap">
                <div>
                    <RegMsgHeader />
                    <div className="message__body message--green">
                        <div className="message__wrapper">
                            <FaCheckCircle />
                            <h2>Your New Password is Set</h2>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam, eius.</p>
                            <Link to="/donor-login" className="btn btn--blue">Login Now</Link>
                        </div>
                    </div>
                </div>
                <RegMsgFooter />
            </div>
        </>
    )
}

export default RegMsgSuccessPasswordReset
