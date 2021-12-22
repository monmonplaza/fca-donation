import React from "react";
import { Link } from "react-router-dom";
import {
  FaChild,
  FaPeopleCarry,
  FaUsers,
  FaHandHoldingUsd,
  FaMoneyCheckAlt,
} from "react-icons/fa";

import BackAdminSidebar from "../../../sidebar/backend/admin/BackAdminSidebar";
import AdmDashboardHeader from "../../../header/backend/adm/AdmDashboardHeader";
const AdmDashboardOverview = () => {
  return (
    <div>
      <AdmDashboardHeader />
      <div className="dashboard">
        <div className="container">
          <div className="dashboard__grid">
            <BackAdminSidebar />
            <div className="dashboard__main">
              <div className="overview__wrapper">
                <div className="overview__card">
                  <div className="overview__card__wrapper">
                    <FaUsers />
                    <h3>Users</h3>
                    <p>
                      Manage your profile such as personal, card and account
                      information.
                    </p>
                  </div>
                  <Link to="/admin-user">Manage Users</Link>
                </div>

                <div className="overview__card">
                  <div className="overview__card__wrapper">
                    <FaChild />
                    <h3> Children</h3>
                    <p>
                      Manage your profile such as personal, card and account
                      information.
                    </p>
                  </div>
                  <Link to="/admin-children">View Children List</Link>
                </div>

                <div className="overview__card">
                  <div className="overview__card__wrapper">
                    <FaPeopleCarry />
                    <h3>Donor</h3>
                    <p>
                      Manage your profile such as personal, card and account
                      information.
                    </p>
                  </div>
                  <Link to="/admin-donors">View Donor List</Link>
                </div>

                <div className="overview__card">
                  <div className="overview__card__wrapper">
                    <FaHandHoldingUsd />
                    <h3>Donation Designation</h3>
                    <p>
                      Manage your profile such as personal, card and account
                      information.
                    </p>
                  </div>
                  <Link to="/admin-designation">Manage Donation</Link>
                </div>

                <div className="overview__card">
                  <div className="overview__card__wrapper">
                    <FaMoneyCheckAlt />
                    <h3>Manual Donation</h3>
                    <p>
                      Manage your profile such as personal, card and account
                      information.
                    </p>
                  </div>
                  <Link to="/admin-manual-donation">
                    Manage Manual Donation
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdmDashboardOverview;
