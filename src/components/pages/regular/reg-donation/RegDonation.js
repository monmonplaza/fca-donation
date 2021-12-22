import React from 'react'
import FrontRegHeader from '../../../header/frontend/FrontRegHeader';
import Maintenance from '../../404/Maintenance';
import RegBanner from '../RegBanner';
import RegCallToAction from '../RegCallToAction';
import RegFooter from '../RegFooter';


const RegDonation = () => {
    return (
        <>
            <FrontRegHeader />
            <RegBanner title={"General Donation"} />
            <section className="general__donation">
                <Maintenance />
                <div className="general__donation__wrapper">
                    <div className="general__donation__intro text--center">
                        <p>We Accept the following cards</p>
                        <img src="./images/cards.png" alt="card icons" />
                    </div>

                    <form>
                        <div className="form__group full--width ">
                            <label htmlFor="designation">Designation</label>
                            <select name="designation" id="" className="input--error">
                                <option value="">--</option>
                                <option value="Option 1">Option 1</option>
                                <option value="Option 2">Option 2</option>
                            </select>
                            <p className="form__msg msg--error"> Require</p>
                        </div>

                        <div className="form__group full--width donation--amount">
                            <label htmlFor="amount">Amount</label>
                            <input type="text" name="amount" className="input--error" />
                            <p className="form__msg msg--error"> Require</p>
                        </div>

                        <div className="form__group full--width">
                            <button className="btn btn--blue" disabled > Donate <i className="fa fa-spinner fa-spin"></i></button>
                        </div>
                    </form>

                    <div className="general__donation__content">
                        <h3>Cheque Donation</h3>
                        <p>Write Check to Philippine Frontline Ministries, Inc and send to:</p>
                    </div>

                    <div className="general__donation__content">
                        <h4>US donor</h4>
                        <p><i className="fa fa-map-marker-alt"></i> Philippine Frontline PO Box 208 Sanwich, Illinois 60548</p>
                    </div>

                    <div className="general__donation__content">
                        <h4>Canada donor</h4>
                        <p><i className="fa fa-map-marker-alt"></i> 1399 Buffalo Place Winnipeg, Manitoba Canada, R3T 1L6</p>
                    </div>
                </div>
            </section>

            <RegCallToAction />
            <RegFooter />
        </>
    )
}

export default RegDonation
