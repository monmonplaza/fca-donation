import React from 'react'
import FrontRegHeader from '../../../header/frontend/FrontRegHeader'
import RegBanner from '../RegBanner'
import RegCallToAction from '../RegCallToAction'
import RegFooter from '../RegFooter'

const RegChildSponsorGuest = () => {
    return (
        <>
            <FrontRegHeader />
            <RegBanner title={'Guest Donations'} />
            <div className="guest__sponsor">
                <div className="container">
                    <div className="guest__sponsor__wrapper">
                        <div className="guest__sponsor_header">
                            <p>We accept the following cards</p>
                            <img src="./images/cards.png" alt="cards icon" />
                        </div>


                        <form action="">
                            <div className="guest__sponsor__block">
                                <h3>Sponsorship Information</h3>
                                <div className="form__group">
                                    <h4>Child Name</h4>
                                    <p>Loverboy</p>
                                </div>

                                <div className="form__group">
                                    <label htmlFor="">Donation Amount</label>
                                    <ul>
                                        <li><input type="radio" name="amount" /><span>$20</span></li>
                                        <li><input type="radio" name="amount" /><span>$40</span></li>
                                        <li><input type="radio" name="amount" /><span>$100</span></li>
                                        <li><input type="radio" name="amount" /><span>$200 to fully sponsor the child</span></li>
                                    </ul>
                                    <p className="form__msg msg--error"> Require</p>
                                </div>
                            </div>

                            <div className="guest__sponsor__block">
                                <h3>Card Information</h3>
                                <div className="form__group">
                                    <label htmlFor="">Email</label>
                                    <input type="email" className="input--error" />
                                    <p className="form__msg msg--error"> Require</p>
                                </div>
                                <div className="form__group">
                                    <label htmlFor="">Name on card</label>
                                    <input type="text" className="input--error" />
                                    <p className="form__msg msg--error"> Require</p>
                                </div>
                                <div className="form__group">
                                    <label htmlFor="">Card Number</label>
                                    <input type="text" className="input--error" />
                                    <p className="form__msg">Require</p>
                                </div>
                                <div className="form__group">
                                    <label htmlFor="">Security Code</label>
                                    <input type="text" placeholder="CVC" className="input--error" />
                                    <p className="form__msg msg--error"> Require</p>
                                </div>
                                <div className="form__grid cols-2">
                                    <div className="form__group">
                                        <label htmlFor="">Expiration Month</label>
                                        <input type="text" placeholder="MM" className="input--error" />
                                    </div>
                                    <div className="form__group">
                                        <label htmlFor="">Expiration Year</label>
                                        <input type="text" placeholder="YY" className="input--error" />
                                        <p className="form__msg msg--error"> Require</p>
                                    </div>
                                </div>
                            </div>

                            <div className="guest__sponsor__block">
                                <h3>Billing Information</h3>
                                <div className="form__group">
                                    <label htmlFor="">Address Line 1</label>
                                    <input type="text" className="input--error" />
                                    <p className="form__msg msg--error"> Require</p>
                                </div>

                                <div className="form__group">
                                    <label htmlFor="">Address Line 2 (Option)</label>
                                    <input type="text" className="input--error" />

                                </div>

                                <div className="form__group">
                                    <label htmlFor="">City</label>
                                    <input type="text" className="input--error" />
                                    <p className="form__msg msg--error"> Require</p>
                                </div>

                                <div className="form__grid cols-2">
                                    <div className="form__group">
                                        <label htmlFor="">State</label>
                                        <input type="text" placeholder="" className="input--error" />
                                        <p className="form__msg msg--error"> Require</p>
                                    </div>
                                    <div className="form__group ">
                                        <label htmlFor="">Zip</label>
                                        <input type="text" placeholder="Postal Code" className="input--error" />
                                        <p className="form__msg msg--error"> Require</p>
                                    </div>
                                </div>

                                <div className="form__group">
                                    <label htmlFor="">Country</label>
                                    <input type="text" className="input--error" />
                                    <p className="form__msg msg--error"> Require</p>
                                </div>
                            </div>

                            <div className="guest__sponsor__footer">
                                <ul>
                                    <li><button className="btn btn--blue" >Process</button></li>
                                    <li><button className="btn btn--cancel" >Cancel</button></li>
                                </ul>
                            </div>

                        </form>
                    </div>
                </div>
            </div>

            <RegCallToAction />
            <RegFooter />

        </>
    )
}

export default RegChildSponsorGuest
