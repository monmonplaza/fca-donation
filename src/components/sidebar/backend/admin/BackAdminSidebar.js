import React from "react";
import { MdDashboard } from "react-icons/md";
import {
  FaChild,
  FaPeopleCarry,
  FaUsers,
  FaHandHoldingUsd,
  FaMoneyCheckAlt,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";
import Toggle from "../../../toggle/Toggle";

const BackAdminSidebar = () => {
  return (
    <>
      <div className="dashboard__sidebar open">
        <Toggle />
        <div className="dashboard__sidebar__welcome">
          <h3>
            {" "}
            Welcome <br /> <span>Loverboy</span>
          </h3>
        </div>
        <ul>
          <li>
            <NavLink to="/admin-overview" activeClassName="active">
              <MdDashboard /> Overview
            </NavLink>
          </li>
          <li>
            <NavLink to="/admin-user" activeClassName="active">
              <FaUsers /> Users
            </NavLink>
          </li>
          <li>
            <NavLink to="/admin-children" activeClassName="active">
              <FaChild /> Children
            </NavLink>
          </li>
          <li>
            <NavLink to="/admin-donors" activeClassName="active">
              <FaPeopleCarry /> Donor
            </NavLink>
          </li>
          <li>
            <NavLink to="/admin-designation" activeClassName="active">
              <FaHandHoldingUsd /> Donation Designation
            </NavLink>
          </li>
          <li>
            <NavLink to="/admin-manual-donation" activeClassName="active">
              <FaMoneyCheckAlt /> Manual Donation
            </NavLink>
          </li>
        </ul>
      </div>
    </>
  );
};

export default BackAdminSidebar;
