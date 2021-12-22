import React from 'react'
import FrontRegHeader from '../../../header/frontend/FrontRegHeader'
import SpinnerWindow from '../../../spinner/SpinnerWindow'
import RegBanner from '../RegBanner'
import RegFooter from '../RegFooter'
import RegChildCard from './RegChildCard'
import RegChildNodata from './RegChildNodata'
import RegCallToAction from '../RegCallToAction'
import Maintenance404 from '../../404/Maintenance'
import SpinnerButton from '../../../spinner/SpinnerButton'

const RegChildrenlist = () => {
    const [isShow, setShow] = React.useState(1);
    const handleShowResident = () => setShow(1);
    const handleShowNonResident = () => setShow(2)



    return (
        <>
            <FrontRegHeader />
            <RegBanner title={'Children List'} />
            <Maintenance404 />
            <div className="childlist">
                <div className="container">

                    <div className="childlist__nav">
                        <ul>
                            <li><button
                                onClick={handleShowResident}
                                className={isShow === 1 ? "active" : ""}
                            >Resident
                            </button>
                            </li>
                            <li>
                                <button
                                    onClick={handleShowNonResident}
                                    className={isShow === 2 ? "active" : ""}
                                >
                                    Non-Resident
                                </button>
                            </li>
                        </ul>
                    </div>
                    <div className="childlist__body">
                        {/* <RegChildNodata />
                        <SpinnerWindow /> */}

                        <div className={isShow === 1 ? "childlist__block active" : "childlist__block"}>
                            <div className="childlist__wrapper">
                                <RegChildCard />
                                <RegChildCard />
                                <RegChildCard />
                                <RegChildCard />
                                <RegChildCard />
                                <RegChildCard />
                                <RegChildCard />
                                <RegChildCard />

                            </div>
                        </div>

                        <div className={isShow === 2 ? "childlist__block active" : "childlist__block"}>
                            <div className="childlist__wrapper">
                                <RegChildCard />
                                <RegChildCard />
                                <RegChildCard />
                                <RegChildCard />


                            </div>
                        </div>
                    </div>
                </div>

                <div className="pagination no--border children--list">
                    <div className="pagination__wrapper">
                        <button className="btn btn--blue">Show More</button>
                        <div className="load__text show"><SpinnerButton /> <span>Loading...</span></div>
                    </div>
                </div>
            </div>
            <RegCallToAction />
            <RegFooter />


        </>
    )
}

export default RegChildrenlist
