import React from 'react'
import { MdDashboard, MdChildCare } from 'react-icons/md'
import { ImHome } from 'react-icons/im'
import { IoMdLogOut } from 'react-icons/io'
import { FaChild, FaPeopleCarry, FaUsers, FaHandHoldingUsd, FaMoneyCheckAlt } from 'react-icons/fa'
import { Link } from 'react-router-dom'
const AdmDashboardMenu = ({ menu, logout }) => {

    return (
        <>
            <div className={menu ? "dashboard__mobile show" : "dashboard__mobile"}>
                <div className="dashboard__mobile__wrap">
                    <ul>
                        <li><a href="https://demo.frontlinebusiness.com.ph/dev/ftc2021/"><ImHome /> Website</a></li>
                        <li><a href="https://demo.frontlinebusiness.com.ph/ftc-staging/children-list"><MdChildCare /> Child List</a></li>
                        <li><Link to="/admin-dashboard-overview"><MdDashboard /> Overview</Link></li>
                        <li><Link to="/admin-dashboard-user"><FaUsers /> Users</Link></li>
                        <li><Link to="/admin-dashboard-children"><FaChild /> Children</Link></li>
                        <li><Link to="/admin-dashboard-donors"><FaPeopleCarry /> Donor</Link></li>
                        <li><Link to="/admin-dashboard-designation"><FaHandHoldingUsd /> Donation Designation</Link></li>
                        <li><Link to="/admin-dashboard-manual-donation"><FaMoneyCheckAlt /> Manual Donation</Link></li>
                        <li><button onClick={logout}> <IoMdLogOut />Log Out </button></li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default AdmDashboardMenu
