import React from 'react'
import FrontRegHeader from '../../../header/frontend/FrontRegHeader'
import RegBanner from '../RegBanner'
import RegFooter from '../RegFooter'
// import RegChildNodata from './RegChildNodata'
import RegCallToAction from '../RegCallToAction'
import { Link } from 'react-router-dom'
import RegModalOptSponsor from './modal/RegModalOptSponsor';
import { FaAngleLeft } from 'react-icons/fa'

const RegChildSingle = () => {
    const [sponsorOpt, setSponsorOpt] = React.useState(false)
    const handleSponsorOpt = () => {
        setSponsorOpt(!sponsorOpt)
    }
    return (
        <>
            <FrontRegHeader />
            <RegBanner title={'Sponsor a Child'} />
            {/* <RegChildNodata /> */}
            <div className="child__single">
                <div className="container">

                    <div className="back__to__childlist">
                        <Link to="/children-list"><FaAngleLeft />Back to Chilren list </Link>
                    </div>

                    <div className="child__single__wrapper grid">
                        <div className="child__single__img">
                            <img src="https://demo.frontlinebusiness.com.ph/dev/ftc2021/ftc/images/angelica.jpg" alt="" />
                        </div>
                        <div className="child__single__profile">
                            <h2 className="childname">Loverboy</h2>
                            <ul className="childinfo">
                                <li>Birthday: <span>2021-02-02</span></li>
                                <li>Age: <span>0</span></li>
                                <li>Sponsor: <span>0%</span></li>
                            </ul>
                            <div className="childstory">
                                <h3>My Story</h3>
                                <p>She has been diagnosed with Cerebral palsy, and also being mentally slow. Angi is mostly crippled in both legs, and has limited use of her hands. For many years when she was just a small child, all she did was beg for alms in the city marketplace, along with her brothers and sisters. When Frontline missionaries noticed her, they began helping Angie by carrying her to the FTC Daycare Center where street kids were being fed and ministered to each day. At first Angie\'s mother did not allow her to go back, and preferred she remain on the streets to collect money. Eventually Social Services escalated the case, and the FTC staff were allowed to rescue Angie from a dangerous and abusive situation, and Angie was brought to the FTC care center permanently. Though limited mentally due to her particular disease, Angie is happy because she has been helped in so many ways. She attended a special needs school for more than 3 years, and is now being taught to read and write through FTC staff.
                                </p>
                            </div>
                            <Link to="/child-info" className="btn btn--orange" onClick={handleSponsorOpt}>Sponsor Loverboy</Link>
                        </div>
                    </div>
                </div>
            </div>



            <RegCallToAction />
            <RegFooter />
            {sponsorOpt && <RegModalOptSponsor modal={{ handleSponsorOpt }} />}


        </>
    )
}

export default RegChildSingle
