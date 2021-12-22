import React from "react";
import { BsFillGearFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import AdmDashboardHeader from "../../../header/backend/adm/AdmDashboardHeader";
import BackAdminSidebar from "../../../sidebar/backend/admin/BackAdminSidebar";
import SpinnerButton from "../../../spinner/SpinnerButton";
import SpinnerTable from "../../../spinner/SpinnerTable";
import TableNodata from "../../../table-nodata/TableNodata";
import AdmModalAddDonor from "../adm-modal/donors/AdmModalAddDonor";
import AdmModalArchiveDonor from "../adm-modal/donors/AdmModalArchiveDonor";
import AdmModalManualDonor from "../adm-modal/donors/AdmModalManualDonor";
import AdmModalResetDonor from "../adm-modal/donors/AdmModalResetDonor";

const AdmDashboardSearch = () => {
  const [donorArchive, setDonorArchive] = React.useState(false);
  const [resetPassword, setResetPassword] = React.useState(false);
  const [manualDonate, setManualDonate] = React.useState(false);
  const [addDonor, setAddDonor] = React.useState(false);

  const handleResetPassword = () => setResetPassword(!resetPassword);
  const handleDonorArchive = () => setDonorArchive(!donorArchive);
  const handleManualDonate = () => setManualDonate(!manualDonate);
  const handleAddDonor = () => setAddDonor(!addDonor);
  return (
    <>
      <AdmDashboardHeader />
      <div className="dashboard">
        <div className="container">
          <div className="dashboard__grid">
            <BackAdminSidebar />
            <div className="dashboard__main">
              <div className="dashboard__main__header donor--search">
                <h2>Search Result</h2>
                <div className="block__search">
                  <form action="">
                    <input
                      type="text"
                      placeholder="Search Donor (Case Sensitive)"
                    />
                    <button>
                      Search <SpinnerButton />
                    </button>
                  </form>
                </div>
              </div>
              <div className="dashboard__body">
                <div className="dashboard__body__flex">
                  <input
                    type="radio"
                    name="tableBlock"
                    id="blockOne"
                    defaultChecked
                  />
                  <label htmlFor="blockOne">Donor List</label>
                  <div className="table__wrapper">
                    <div className="table__responsive">
                      <table>
                        <thead>
                          <tr>
                            <th>#</th>
                            <th>Email</th>
                            <th>Name</th>
                            <th>Status</th>
                            <th>Action</th>
                          </tr>
                        </thead>

                        <tbody>
                          <tr>
                            <td>1</td>
                            <td>monmon.plaza@gmail.com</td>
                            <td>Ramon Plaza</td>
                            <td className="table__status">
                              <span className="status--active">Active</span>
                            </td>
                            <td className="table__option">
                              <div className="table__option__icon">
                                <BsFillGearFill />
                                <div className="table__option__list">
                                  <ul>
                                    <li>
                                      <Link to="/">View</Link>
                                    </li>
                                    <li>
                                      <button onClick={handleManualDonate}>
                                        Manual Donation
                                      </button>
                                    </li>
                                    <li>
                                      <button onClick={handleResetPassword}>
                                        Change Password
                                      </button>
                                    </li>
                                    <li>
                                      <button onClick={handleDonorArchive}>
                                        Archive Donor
                                      </button>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </td>
                          </tr>

                          <tr>
                            <td>monmon.plaza@gmail.com</td>
                            <td>Ramon Plaza</td>
                            <td className="table__status">
                              <span className="status--active">Active</span>
                            </td>
                            <td className="table__option">
                              <div className="table__option__icon">
                                <BsFillGearFill />
                                <div className="table__option__list">
                                  <ul>
                                    <li>
                                      <Link to="/">View</Link>
                                    </li>
                                    <li>
                                      <button onClick={handleManualDonate}>
                                        Manual Donation
                                      </button>
                                    </li>
                                    <li>
                                      <button onClick={handleResetPassword}>
                                        Change Password
                                      </button>
                                    </li>
                                    <li>
                                      <button onClick={handleDonorArchive}>
                                        Archive Donor
                                      </button>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </td>
                            <SpinnerTable colspan={4} />
                            <TableNodata colspan={4} />
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {donorArchive && (
        <AdmModalArchiveDonor onClickClose={handleDonorArchive} />
      )}
      {resetPassword && (
        <AdmModalResetDonor onClickClose={handleResetPassword} />
      )}
      {manualDonate && (
        <AdmModalManualDonor onClickClose={handleManualDonate} />
      )}
      {addDonor && <AdmModalAddDonor onClickClose={handleAddDonor} />}
    </>
  );
};

export default AdmDashboardSearch;
