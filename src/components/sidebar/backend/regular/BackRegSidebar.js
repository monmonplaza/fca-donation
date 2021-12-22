import React from 'react'
import { MdDashboard } from 'react-icons/md'
import { FaChild } from 'react-icons/fa'
import { ImProfile } from 'react-icons/im'
import { NavLink } from 'react-router-dom'

const BackRegSidebar = () => {


    return (
        <>
            <div className="dashboard__sidebar open" >
                <ul>
                    <li><NavLink to="/donor-dashboard-overview" activeClassName="active"><MdDashboard /> Overview</NavLink></li>
                    <li><NavLink to="/donor-dashboard-profile" activeClassName="active"><ImProfile /> My Profile</NavLink></li>
                    <li><NavLink to="/donor-dashboard-sponsor" activeClassName="active"><FaChild /> Sponsored Children</NavLink></li>
                </ul>
            </div>
        </>
    )
}

export default BackRegSidebar
