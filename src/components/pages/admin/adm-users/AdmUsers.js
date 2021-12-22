import React from "react";
import AdmDashboardHeader from "../../../header/backend/adm/AdmDashboardHeader";
import BackAdminSidebar from "../../../sidebar/backend/admin/BackAdminSidebar";
import TableNodata from "../../../table-nodata/TableNodata";
import SpinnerTable from "../../../spinner/SpinnerTable";
import { BsFillGearFill } from "react-icons/bs";

import AdmModalAddUser from "../adm-modal/users/AdmModalAddUser";
import AdmModalSuspendUser from "../adm-modal/users/AdmModalSuspendUser";
import AdmModalResetPasswordUser from "../adm-modal/users/AdmModalResetPasswordUser";
import AdmModalActiveUser from "../adm-modal/users/AdmModalActiveUser";
import AdmPagination from "../../../pagination/AdmPagination";
import ModalLogin from "../../../modal/ModalLogin";

const AdmUsers = () => {
  const [addUser, isAddUser] = React.useState(false);
  const [suspendUser, isSuspendUser] = React.useState(false);
  const [activeUser, isActiveUser] = React.useState(false);
  const [resetPasswordUser, isResetPasswordUser] = React.useState(false);

  const handleAddUser = () => isAddUser(!addUser);
  const handleSuspendUser = () => isSuspendUser(!suspendUser);
  const handleResetPasswordUser = () => isResetPasswordUser(!resetPasswordUser);
  const handleActiveUser = () => isActiveUser(!activeUser);

  return (
    <>
      <ModalLogin />

      <AdmDashboardHeader />
      <div className="dashboard">
        <div className="container">
          <div className="dashboard__grid">
            <BackAdminSidebar />
            <div className="dashboard__main">
              <div className="dashboard__main__header">
                <h2>Manage User</h2>
              </div>

              <div className="dashboard__body">
                <div className="dashboard__body__action">
                  <button onClick={handleAddUser}>+Add User</button>
                </div>
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
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Status</th>

                            <th>Action</th>
                          </tr>
                        </thead>

                        <tbody>
                          <tr>
                            <td>1</td>
                            <td>Patrick</td>
                            <td>Reyes</td>
                            <td className="table__status">
                              <span class="status--active">Active</span>
                            </td>

                            <td className="table__option">
                              <div className="table__option__icon">
                                <BsFillGearFill />
                                <div className="table__option__list">
                                  <ul>
                                    <li>
                                      <button>Edit</button>
                                    </li>
                                    <li>
                                      <button>Suspend</button>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </td>
                          </tr>

                          <tr>
                            <td>1</td>
                            <td>Ramon</td>
                            <td>Plaza</td>
                            <td className="table__status">
                              <span class="status--active">Active</span>
                            </td>

                            <td className="table__option">
                              <div className="table__option__icon">
                                <BsFillGearFill />
                                <div className="table__option__list">
                                  <ul>
                                    <li>
                                      <button>Edit</button>
                                    </li>
                                    <li>
                                      <button>Suspend</button>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </td>
                          </tr>

                          <SpinnerTable colspan={7} />
                          <TableNodata colspan={7} />
                        </tbody>
                      </table>
                      {/* <AdmPagination /> */}
                    </div>
                  </div>

                  <input type="radio" name="tableBlock" id="blockTwo" />
                  <label htmlFor="blockTwo">Suspend</label>
                  <div className="table__wrapper">
                    <div className="table__responsive">
                      <table>
                        <thead>
                          <tr>
                            <th>#</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Status</th>

                            <th>Action</th>
                          </tr>
                        </thead>

                        <tbody>
                          <tr>
                            <td>1</td>
                            <td>Patrick</td>
                            <td>Reyes</td>
                            <td>
                              <span class="status--inactive">Inactive</span>
                            </td>

                            <td className="table__option">
                              <div className="table__option__icon">
                                <BsFillGearFill />
                                <div className="table__option__list">
                                  <ul>
                                    <li>
                                      <button>Edit</button>
                                    </li>
                                    <li>
                                      <button>Suspend</button>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </td>
                          </tr>

                          <tr>
                            <td>1</td>
                            <td>Ramon</td>
                            <td>Plaza</td>
                            <td>
                              <span class="status--inactive">Inactive</span>
                            </td>

                            <td className="table__option">
                              <div className="table__option__icon">
                                <BsFillGearFill />
                                <div className="table__option__list">
                                  <ul>
                                    <li>
                                      <button>Edit</button>
                                    </li>
                                    <li>
                                      <button>Suspend</button>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </td>
                          </tr>

                          <SpinnerTable colspan={7} />
                          <TableNodata colspan={7} />
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

      {addUser && <AdmModalAddUser onClickClose={handleAddUser} />}
      {suspendUser && <AdmModalSuspendUser onClickClose={handleSuspendUser} />}
      {activeUser && <AdmModalActiveUser onClickClose={handleActiveUser} />}
      {resetPasswordUser && (
        <AdmModalResetPasswordUser onClickClose={handleResetPasswordUser} />
      )}
    </>
  );
};

export default AdmUsers;
