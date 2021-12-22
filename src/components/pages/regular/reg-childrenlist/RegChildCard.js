import React from 'react'
import { Link } from 'react-router-dom'
import SpinnerCard from '../../../spinner/SpinnerCard';
import RegModalQuickSponsor from './modal/RegModalQuickSponsor';


const RegChildCard = () => {

    const [isSponsor, setIsSponsor] = React.useState(false);
    const handleQuickModal = () => { setIsSponsor(!isSponsor) }

    return (
        <>
            <div className="child__card child">
                <div className="child__img">
                    <SpinnerCard />
                    {/* <img src="https://demo.frontlinebusiness.com.ph/dev/ftc2021/ftc/images/angelica.jpg" alt="" /> */}
                    <div className="child__content">
                        <div className="child__content__wrap">
                            <h3 className="child__name">test</h3>
                            <Link to="/child-info" >View Info</Link>
                        </div>
                        <button to="/" className="btn btn--blue" onClick={handleQuickModal}>Sponsor</button>
                    </div>
                </div>

                <div className="child__bar">
                    <div className="child__bar__progress"></div>
                    <p className="child__bar__label"> <span>0%</span> - Sponsored</p>
                </div>
            </div>

            {isSponsor && <RegModalQuickSponsor modal={{ handleQuickModal }} />}
        </>
    )
}

export default RegChildCard
