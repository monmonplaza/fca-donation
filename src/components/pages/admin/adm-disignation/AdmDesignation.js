import React from "react";
import AdmDashboardHeader from "../../../header/backend/adm/AdmDashboardHeader";
import BackAdminSidebar from "../../../sidebar/backend/admin/BackAdminSidebar";
import { BsFillGearFill } from "react-icons/bs";
import SpinnerTable from "../../../spinner/SpinnerTable";
import TableNodata from "../../../table-nodata/TableNodata";
import AdmModalAddDesignation from "../adm-modal/designation/AdmModalAddDesignation";
import AdmModalEditDesignation from "../adm-modal/designation/AdmModalEditDesignation";
import AdmModalArchiveDesignation from "../adm-modal/designation/AdmModalArchiveDesignation";
import AdmPagination from "../../../pagination/AdmPagination";

const AdmDesignation = () => {
  const [editDesignation, isEditDesignation] = React.useState(false);
  const [archiveDesignation, isArchiveDesignation] = React.useState(false);
  const [addDesignation, isAddDesignation] = React.useState(false);

  const handleEditDesignation = () => {
    isEditDesignation(!editDesignation);
  };
  const handleArchiveDesignation = () => {
    isArchiveDesignation(!archiveDesignation);
  };
  const handleAddDesignation = () => {
    isAddDesignation(!addDesignation);
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
                <h2>Donation Designation</h2>
              </div>
              <div className="dashboard__body">
                <div className="dashboard__body__action">
                  <button onClick={handleAddDesignation}>
                    +Add Designation
                  </button>
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
                            <th>Designation</th>
                            <th>Classification</th>
                            <th>Created</th>

                            <th>Action</th>
                          </tr>
                        </thead>

                        <tbody>
                          <tr>
                            <td>1</td>
                            <td>TRestt</td>
                            <td>General Donation</td>
                            <td>9/12/2120</td>

                            <td className="table__option">
                              <div className="table__option__icon">
                                <BsFillGearFill />
                                <div className="table__option__list">
                                  <ul>
                                    <li>
                                      <button onClick={handleEditDesignation}>
                                        Edit Designation
                                      </button>
                                    </li>
                                    <li>
                                      <button
                                        onClick={handleArchiveDesignation}
                                      >
                                        Archive Designation
                                      </button>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </td>
                          </tr>

                          <tr>
                            <td>2</td>
                            <td>TRestt</td>
                            <td>General Donation</td>
                            <td>9/12/2120</td>

                            <td className="table__option">
                              <div className="table__option__icon">
                                <BsFillGearFill />
                                <div className="table__option__list">
                                  <ul>
                                    <li>
                                      <button onClick={handleEditDesignation}>
                                        Edit Designation
                                      </button>
                                    </li>
                                    <li>
                                      <button
                                        onClick={handleArchiveDesignation}
                                      >
                                        Archive Designation
                                      </button>
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
                  <label htmlFor="blockTwo">Archive</label>
                  <div className="table__wrapper">
                    <div className="table__responsive">
                      <table>
                        <thead>
                          <tr>
                            <th>#</th>
                            <th>Designation</th>
                            <th>Classification</th>
                            <th>Created</th>

                            <th>Action</th>
                          </tr>
                        </thead>

                        <tbody>
                          <tr>
                            <td>1</td>
                            <td>TRestt</td>
                            <td>General Donation</td>
                            <td>9/12/2120</td>

                            <td className="table__option">
                              <div className="table__option__icon">
                                <BsFillGearFill />
                                <div className="table__option__list">
                                  <ul>
                                    <li>
                                      <button onClick={handleEditDesignation}>
                                        Edit Designation
                                      </button>
                                    </li>
                                    <li>
                                      <button
                                        onClick={handleArchiveDesignation}
                                      >
                                        Archive Designation
                                      </button>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </td>
                          </tr>

                          <tr>
                            <td>2</td>
                            <td>TRestt</td>
                            <td>General Donation</td>
                            <td>9/12/2120</td>

                            <td className="table__option">
                              <div className="table__option__icon">
                                <BsFillGearFill />
                                <div className="table__option__list">
                                  <ul>
                                    <li>
                                      <button onClick={handleEditDesignation}>
                                        Edit Designation
                                      </button>
                                    </li>
                                    <li>
                                      <button
                                        onClick={handleArchiveDesignation}
                                      >
                                        Archive Designation
                                      </button>
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
      {editDesignation && (
        <AdmModalEditDesignation onClickClose={handleEditDesignation} />
      )}
      {archiveDesignation && (
        <AdmModalArchiveDesignation onClickClose={handleArchiveDesignation} />
      )}
      {addDesignation && (
        <AdmModalAddDesignation onClickClose={handleAddDesignation} />
      )}
    </>
  );
};

export default AdmDesignation;
