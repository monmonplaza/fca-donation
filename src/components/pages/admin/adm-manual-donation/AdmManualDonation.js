import React from "react";
import AdmDashboardHeader from "../../../header/backend/adm/AdmDashboardHeader";
import BackAdminSidebar from "../../../sidebar/backend/admin/BackAdminSidebar";
import { BsFillGearFill } from "react-icons/bs";
import SpinnerTable from "../../../spinner/SpinnerTable";
import TableNodata from "../../../table-nodata/TableNodata";
import AdmModalEditManual from "../adm-modal/manual-donation/AdmModalEditManual";
import AdmModalRemoveManual from "../adm-modal/manual-donation/AdmModalRemoveManual";
import AdmPagination from "../../../pagination/AdmPagination";

const AdmManualDonation = () => {
  const [editDonation, isEditDonation] = React.useState(false);
  const [removeDonation, isRemoveDonation] = React.useState(false);

  const handleEditDonation = () => {
    isEditDonation(!editDonation);
  };
  const handleRemoveDonation = () => {
    isRemoveDonation(!removeDonation);
  };

  return (
    <>
      <AdmDashboardHeader />
      <div className="dashboard">
        <div className="container">
          <div className="dashboard__grid">
            <BackAdminSidebar />
            <div className="dashboard__main">
              <div className="dashboard__main__header">
                <h2>Manual Donation</h2>
              </div>
              <div className="dashboard__body">
                <div className="dashboard__body__flex">
                  <input
                    type="radio"
                    name="tableBlock"
                    id="blockOne"
                    defaultChecked
                  />
                  <label htmlFor="blockOne">Active</label>
                  <div className="table__wrapper">
                    <div className="table__responsive">
                      <table>
                        <thead>
                          <tr>
                            <th>#</th>
                            <th>Child Name</th>
                            <th>Donor</th>
                            <th>Amount</th>
                            <th>Status</th>
                            <th>Start Date</th>
                            <th>End Date</th>
                            <th>Action</th>
                          </tr>
                        </thead>

                        <tbody>
                          <tr>
                            <td>1</td>
                            <td>Angelita A- Special Education </td>
                            <td>$200</td>
                            <td>Wunderlich, John and Sandy</td>
                            <td className="table__status">
                              <span className="status--active">Active</span>
                            </td>
                            <td>2018-03-04</td>
                            <td className="table__status">
                              <span className="status--warning">
                                2022-07-04
                              </span>
                            </td>
                            <td className="table__option">
                              <div className="table__option__icon">
                                <BsFillGearFill />
                                <div className="table__option__list">
                                  <ul>
                                    <li>
                                      <button onClick={handleEditDonation}>
                                        Edit Donation
                                      </button>
                                    </li>
                                    <li>
                                      <button onClick={handleRemoveDonation}>
                                        Remove Donation
                                      </button>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </td>
                          </tr>

                          <tr>
                            <td>2</td>
                            <td>Angelita A- Special Education </td>
                            <td>$200</td>
                            <td>Wunderlich, John and Sandy</td>
                            <td className="table__status">
                              <span className="status--active">Active</span>
                            </td>
                            <td>2018-03-04</td>
                            <td>2022-07-04</td>
                            <td className="table__option">
                              <div className="table__option__icon">
                                <BsFillGearFill />
                                <div className="table__option__list">
                                  <ul>
                                    <li>
                                      <button onClick={handleEditDonation}>
                                        Edit Donation
                                      </button>
                                    </li>
                                    <li>
                                      <button onClick={handleRemoveDonation}>
                                        Remove Donation
                                      </button>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </td>
                          </tr>
                          <SpinnerTable colspan={8} />
                          <TableNodata colspan={8} />
                        </tbody>
                      </table>
                      {/* <AdmPagination /> */}
                    </div>
                  </div>

                  <input type="radio" name="tableBlock" id="blockTwo" />
                  <label htmlFor="blockTwo">Archive</label>
                  <div className="table__wrapper">
                    <div className="table__responsive">
                      <table>
                        <thead>
                          <tr>
                            <th>#</th>
                            <th>Child Name</th>
                            <th>Donor</th>
                            <th>Amount</th>
                            <th>Status</th>
                            <th>Start Date</th>
                            <th>End Date</th>
                            <th>Action</th>
                          </tr>
                        </thead>

                        <tbody>
                          <tr>
                            <td>1</td>
                            <td>Angelita A- Special Education </td>
                            <td>$200</td>
                            <td>Wunderlich, John and Sandy</td>
                            <td className="table__status">
                              <span className="status--active">Active</span>
                            </td>
                            <td>2018-03-04</td>
                            <td>2022-07-04</td>

                            <td className="table__option">
                              <div className="table__option__icon">
                                <BsFillGearFill />
                                <div className="table__option__list">
                                  <ul>
                                    <li>
                                      <button onClick={handleEditDonation}>
                                        Edit Donation
                                      </button>
                                    </li>
                                    <li>
                                      <button onClick={handleRemoveDonation}>
                                        Remove Donation
                                      </button>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </td>
                          </tr>

                          <tr>
                            <td>2 </td>
                            <td>Angelita A- Special Education </td>
                            <td>$200</td>
                            <td>Wunderlich, John and Sandy</td>
                            <td className="table__status">
                              <span className="status--active">Active</span>
                            </td>
                            <td>2018-03-04</td>
                            <td>2022-07-04</td>
                            <td className="table__option">
                              <div className="table__option__icon">
                                <BsFillGearFill />
                                <div className="table__option__list">
                                  <ul>
                                    <li>
                                      <button onClick={handleEditDonation}>
                                        Edit Donation
                                      </button>
                                    </li>
                                    <li>
                                      <button onClick={handleRemoveDonation}>
                                        Remove Donation
                                      </button>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </td>
                          </tr>

                          <SpinnerTable colspan={8} />
                          <TableNodata colspan={8} />
                        </tbody>
                      </table>
                      {/* <AdmPagination /> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {editDonation && <AdmModalEditManual onClickClose={handleEditDonation} />}
      {removeDonation && (
        <AdmModalRemoveManual onClickClose={handleRemoveDonation} />
      )}
    </>
  );
};

export default AdmManualDonation;
