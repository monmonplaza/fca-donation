import React from 'react'
import RegDashboardHeader from '../../../header/backend/regular/RegDashboardHeader'
import BackRegSidebar from '../../../sidebar/backend/regular/BackRegSidebar'
import RegModalEditProfile from './modal/RegModalEditProfile'
import RegModalEditCard from './modal/RegModalEditCard'

const RegMyProfile = () => {

    const [isInfo, setInfo] = React.useState(false);
    const [isCard, setCard] = React.useState(false);
    const handleInfo = () => {
        setInfo(true);
    }
    const handleCard = () => {
        setCard(true);
    }


    return (
        <>
            <RegDashboardHeader />
            <div className="dashboard">
                <div className="container">
                    <div className="dashboard__grid">
                        <BackRegSidebar />
                        <div className="dashboard__main">
                            <div className="profile__wrapper">
                                <div className="information__block">
                                    <div className="information__block__header">
                                        <h2>Profile Information</h2>
                                        <button onClick={handleInfo}> Edit</button>
                                    </div>


                                    <div className="field__group">
                                        <h3>Name</h3>
                                        <p>Ramon Plaza</p>
                                    </div>

                                    <div className="field__group">
                                        <h3>Email</h3>
                                        <p>monmon.plaza@gmail.com</p>
                                    </div>

                                    <div className="field__group">
                                        <h3>Phone</h3>
                                        <p>0920 213 1234</p>
                                    </div>

                                    <div className="field__group">
                                        <h3>Address Line 1</h3>
                                        <p>n/a</p>
                                    </div>

                                    <div className="field__group">
                                        <h3>City</h3>
                                        <p>n/a</p>
                                    </div>

                                    <div className="field__group">
                                        <h3>State</h3>
                                        <p>n/a</p>
                                    </div>

                                    <div className="field__group">
                                        <h3>Postal Code</h3>
                                        <p>n/a</p>
                                    </div>

                                    <div className="field__group">
                                        <h3>Country</h3>
                                        <p>n/a</p>
                                    </div>
                                </div>


                                <div className="information__block">
                                    <div className="information__block__header">
                                        <h2>Payment Information</h2>
                                        <button onClick={handleCard}> Edit</button>
                                    </div>

                                    <div className="creditcard__box">
                                        <h3>Ramon Plaza</h3>
                                        <h4>**** **** **** 9201</h4>

                                        <div className="creditcard__box__flex">
                                            <div className="creditcard__valid">
                                                <span>Valid Thru</span>
                                                <h3>1 / 2024</h3>
                                            </div>

                                            <div className="creditcard__img">
                                                <img src="./images/cards.png" alt="cards Icon" />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="information__block">
                                    <div className="information__block__header">
                                        <h2>Change my Account Password</h2>
                                    </div>

                                    <div className="field__group">
                                        <h3>Old Password</h3>
                                        <form action="">
                                            <input type="password" />
                                            <button className="btn btn--blue">Request</button>
                                        </form>
                                        <div className="form__msgbox msg--success">Check your email for the verification</div>
                                        <div className="form__msgbox msg--error">Password not matched</div>
                                        <p className="password__note">To request a change password, please provide first your old password and then we will email you the link to change your password.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {isInfo && <RegModalEditProfile modal={{ setInfo }} />}
            {isCard && <RegModalEditCard modal={{ setCard }} />}

        </>
    )
}

export default RegMyProfile
