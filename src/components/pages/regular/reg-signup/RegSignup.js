import React from 'react'
import FrontRegHeader from '../../../header/frontend/FrontRegHeader'
import RegBanner from '../RegBanner'
import RegCallToAction from '../RegCallToAction'
import RegFooter from '../RegFooter'
import SpinnerButton from '../../../spinner/SpinnerButton'

const RegSignup = () => {
    return (
        <div>
            <FrontRegHeader />
            <RegBanner title={'Donor Signup'} />
            <section className="signup__wrapper">
                <form action="">
                    <div className="signup__block">
                        <div className="signup__block__header">
                            <h3>Step 1 - Personal Information</h3>
                        </div>
                        <div className="signup__block__body">
                            <div className="grid col-2">
                                <div className="form__group input--error full--width">
                                    <label htmlFor="firstName">First Name</label>
                                    <input type="text" name="firstName" />
                                    <p className="form__msg msg--error"> Require</p>
                                </div>
                                <div className="form__group input--error full--width">
                                    <label htmlFor="lastName">Last Name</label>
                                    <input type="text" name="lastName" />
                                    <p className="form__msg msg--error"> Require</p>
                                </div>
                            </div>

                            <div className="form__group input--error full--width">
                                <label htmlFor="phone">Phone</label>
                                <input type="tel" name="phone" />
                                <p className="form__msg msg--error"> Require</p>
                            </div>
                        </div>
                    </div>

                    <div className="signup__block">
                        <div className="signup__block__header">
                            <h3>Step 2 - Payment Information</h3>
                        </div>

                        <img src="./images/cards.png" alt="card icon" />
                        <div className="signup__block__body">

                            <div className="form__group input--error full--width">
                                <label htmlFor="phone">Name on Card</label>
                                <input type="text" name="cardName" />
                                <p className="form__msg msg--error"> Require</p>
                            </div>

                            <div className="form__group input--error full--width">
                                <label htmlFor="cardNumber">Card Number</label>
                                <input type="text" name="cardNumber" />
                                <p className="form__msg msg--error"> Require</p>
                            </div>


                            <div className="grid col-3">
                                <div className="form__group input--error full--width">
                                    <label htmlFor="cvc">CVC</label>
                                    <input type="text" name="cvc" />
                                    <p className="form__msg msg--error"> Require</p>
                                </div>
                                <div className="form__group input--error full--width">
                                    <label htmlFor="expMonth">Expiration - Month</label>
                                    <input type="text" name="expMonth" placeholder="MM" maxLength="2" />
                                    <p className="form__msg msg--error"> Require</p>
                                </div>

                                <div className="form__group input--error full--width">
                                    <label htmlFor="expYear">Expiration - Year</label>
                                    <input type="text" name="expYear" placeholder="MM" maxLength="2" />
                                    <p className="form__msg msg--error"> Require</p>
                                </div>

                            </div>


                            <div className="form__group input--error full--width">
                                <label htmlFor="address1">Address Line 1</label>
                                <input type="text" name="address1" />
                                <p className="form__msg msg--error"> Require</p>
                            </div>

                            <div className="form__group full--width">
                                <label htmlFor="address1">Address Line 2 (Optional)</label>
                                <input type="text" name="address1" />
                            </div>

                            <div className="grid col-2">
                                <div className="form__group input--error full--width">
                                    <label htmlFor="city">City</label>
                                    <input type="text" name="city" />
                                    <p className="form__msg msg--error"> Require</p>
                                </div>
                                <div className="form__group input--error full--width">
                                    <label htmlFor="state">State</label>
                                    <input type="text" name="state" />
                                    <p className="form__msg msg--error"> Require</p>
                                </div>
                            </div>

                            <div className="grid col-2">
                                <div className="form__group input--error full--width">
                                    <label htmlFor="zipcode">Zip/Postal</label>
                                    <input type="text" name="zipcode" />
                                    <p className="form__msg msg--error"> Require</p>
                                </div>
                                <div className="form__group input--error full--width">
                                    <label htmlFor="country">Country</label>
                                    <input type="text" name="country" />
                                    <p className="form__msg msg--error"> Require</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="signup__block">
                        <div className="signup__block__header">
                            <h3>Step 3 - Login Information</h3>
                        </div>
                        <div className="signup__block__body">
                            <div className="form__group input--error full--width">
                                <label htmlFor="email">Email</label>
                                <input type="email" name="email" />
                                <p className="form__msg msg--error"> Require</p>
                            </div>

                            <div className="form__group input--error full--width">
                                <label htmlFor="password">Passowrd</label>
                                <input type="password" name="password" />
                                <p className="form__msg msg--error"> Require</p>
                            </div>


                            <div className="form__group input--error full--width">
                                <label htmlFor="retypepassword">Re-type Password</label>
                                <input type="password" name="retypepassword" />
                                <p className="form__msg msg--error"> Require</p>
                            </div>

                            <div className="form__group input--error text--center">
                                <button className="btn btn--orange btn--sm">Continue <SpinnerButton /></button>
                            </div>

                        </div>
                    </div>
                </form>
            </section>
            <RegCallToAction />
            <RegFooter />
        </div>
    )
}

export default RegSignup
