import React from 'react'
import { MdDashboard, MdChildCare } from 'react-icons/md'
import { ImHome, ImProfile } from 'react-icons/im'
import { IoMdLogOut } from 'react-icons/io'
import { FaChild } from 'react-icons/fa'
import { Link } from 'react-router-dom'
const RegDashboardMenu = ({ menu }) => {

    return (
        <>
            <div className={menu ? "dashboard__mobile show" : "dashboard__mobile"}>
                <div className="dashboard__mobile__wrap">
                    <ul>
                        <li><a href="https://demo.frontlinebusiness.com.ph/dev/ftc2021/"><ImHome /> Website</a></li>
                        <li><a href="https://demo.frontlinebusiness.com.ph/ftc-staging/children-list"><MdChildCare /> Child List</a></li>
                        <li><Link to="/donor-dashboard-overview"><MdDashboard /> Overview</Link></li>
                        <li><Link to="/donor-dashboard-profile"><ImProfile /> My Profile</Link></li>
                        <li><Link to="/donor-dashboard-sponsor"><FaChild /> Sponsored Children</Link></li>
                        <li><button> <IoMdLogOut />Log Out </button></li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default RegDashboardMenu
