import React from 'react'
import RegDashboardHeader from '../../../header/backend/regular/RegDashboardHeader'
import BackRegSidebar from '../../../sidebar/backend/regular/BackRegSidebar'
import { ImProfile } from 'react-icons/im';
import { FaChild } from 'react-icons/fa'
import { Link } from 'react-router-dom';
const RegDashboardOverview = () => {


    const [isOpenMenu, setOpenMenu] = React.useState(false);


    return (
        <>
            <RegDashboardHeader mobileMenu={{ isOpenMenu, setOpenMenu }} />
            <div className="dashboard">
                <div className="container">
                    <div className="dashboard__grid">
                        <BackRegSidebar mobileMenu={{ isOpenMenu }} />

                        <div className="dashboard__main">
                            <div className="overview__wrapper">
                                <div className="overview__card">
                                    <div className="overview__card__wrapper">
                                        <ImProfile />
                                        <h3>My Profile</h3>
                                        <p>Manage your profile such as personal, card and account information.</p>
                                    </div>
                                    <Link to='/donor-dashboard-profile'>View  Profile</Link>
                                </div>

                                <div className="overview__card">
                                    <div className="overview__card__wrapper">
                                        <FaChild />
                                        <h3>Sponsored Children</h3>
                                        <p>Manage your profile such as personal, card and account information.</p>
                                    </div>
                                    <Link to='/donor-dashboard-sponsor'>View  Children</Link>
                                </div>



                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default RegDashboardOverview
