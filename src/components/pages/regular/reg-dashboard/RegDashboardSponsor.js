import React from "react";
import RegDashboardHeader from "../../../header/backend/regular/RegDashboardHeader";
import BackRegSidebar from "../../../sidebar/backend/regular/BackRegSidebar";

// import SpinnerTable from '../../../spinner/SpinnerTable'
import { BsFillGearFill } from "react-icons/bs";
import TableNodata from "../../../table-nodata/TableNodata";

import RegModalViewChild from "./modal/RegModalViewChild";
import RegModalCancelChild from "./modal/RegModalCancelChild";
import AdmPagination from "../../../pagination/AdmPagination";
import SpinnerTable from "../../../spinner/SpinnerTable";

const RegDashboardSponsor = () => {
  const [isProfile, setProfile] = React.useState(false);
  const [isCancel, setCancel] = React.useState(false);

  const handleProfile = () => {
    setProfile(!isProfile);
  };
  const handleCancel = () => {
    setCancel(!isCancel);
  };

  return (
    <>
      <RegDashboardHeader />
      <div className="dashboard">
        <div className="container">
          <div className="dashboard__grid">
            <BackRegSidebar />
            <div className="dashboard__main">
              <div className="dashboard__main__header">
                <h2>Sponsored Children</h2>
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
                            <th>Amount</th>
                            <th>Status</th>
                            <th>Created</th>
                            <th>Action</th>
                          </tr>
                        </thead>

                        <tbody>
                          <tr>
                            <td>Loverboy 123</td>
                            <td>100.00</td>
                            <td className="table__status">
                              <span className=" status--active">Active</span>
                            </td>
                            <td>08-27-2021</td>
                            <td className="table__option">
                              <div className="table__option__icon">
                                <BsFillGearFill />
                                <div className="table__option__list">
                                  <ul>
                                    <li>
                                      <button onClick={handleProfile}>
                                        View
                                      </button>
                                    </li>
                                    <li>
                                      <button onClick={handleCancel}>
                                        Cancel
                                      </button>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>Loverboy 123</td>
                            <td>100.00</td>
                            <td className="table__status">
                              <span className=" status--active">Active</span>
                            </td>
                            <td>08-27-2021</td>
                            <td className="table__option">
                              <div className="table__option__icon">
                                <BsFillGearFill />
                                <div className="table__option__list">
                                  <ul>
                                    <li>
                                      <button onClick={handleProfile}>
                                        View
                                      </button>
                                    </li>
                                    <li>
                                      <button onClick={handleCancel}>
                                        Cancel
                                      </button>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>Loverboy 123</td>
                            <td>100.00</td>
                            <td className="table__status">
                              <span className=" status--active">Active</span>
                            </td>
                            <td>08-27-2021</td>
                            <td className="table__option">
                              <div className="table__option__icon">
                                <BsFillGearFill />
                                <div className="table__option__list">
                                  <ul>
                                    <li>
                                      <button onClick={handleProfile}>
                                        View
                                      </button>
                                    </li>
                                    <li>
                                      <button onClick={handleCancel}>
                                        Cancel
                                      </button>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </td>
                          </tr>

                          <tr>
                            <td>Loverboy 123</td>
                            <td>100.00</td>
                            <td className="table__status">
                              <span className=" status--active">Active</span>
                            </td>
                            <td>08-27-2021</td>
                            <td className="table__option">
                              <div className="table__option__icon">
                                <BsFillGearFill />
                                <div className="table__option__list">
                                  <ul>
                                    <li>
                                      <button onClick={handleProfile}>
                                        View
                                      </button>
                                    </li>
                                    <li>
                                      <button onClick={handleCancel}>
                                        Cancel
                                      </button>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </td>
                          </tr>

                          <tr>
                            <td>1</td>
                            <td>Loverboy 123</td>
                            <td>100.00</td>
                            <td className="table__status">
                              <span className=" status--active">Active</span>
                            </td>
                            <td>08-27-2021</td>
                            <td className="table__option">
                              <div className="table__option__icon">
                                <BsFillGearFill />
                                <div className="table__option__list">
                                  <ul>
                                    <li>
                                      <button onClick={handleProfile}>
                                        View
                                      </button>
                                    </li>
                                    <li>
                                      <button onClick={handleCancel}>
                                        Cancel
                                      </button>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </td>
                          </tr>

                          <tr>
                            <td>2</td>
                            <td>Loverboy 123</td>
                            <td>100.00</td>
                            <td className="table__status">
                              <span className=" status--active">Active</span>
                            </td>
                            <td>08-27-2021</td>
                            <td className="table__option">
                              <div className="table__option__icon">
                                <BsFillGearFill />
                                <div className="table__option__list">
                                  <ul>
                                    <li>
                                      <button onClick={handleProfile}>
                                        View
                                      </button>
                                    </li>
                                    <li>
                                      <button onClick={handleCancel}>
                                        Cancel
                                      </button>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </td>
                          </tr>

                          <tr>
                            <td>3</td>
                            <td>Loverboy 123</td>
                            <td>100.00</td>
                            <td className="table__status">
                              <span className=" status--active">Active</span>
                            </td>
                            <td>08-27-2021</td>
                            <td className="table__option">
                              <div className="table__option__icon">
                                <BsFillGearFill />
                                <div className="table__option__list">
                                  <ul>
                                    <li>
                                      <button onClick={handleProfile}>
                                        View
                                      </button>
                                    </li>
                                    <li>
                                      <button onClick={handleCancel}>
                                        Cancel
                                      </button>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </td>
                          </tr>

                          <tr>
                            <td>Loverboy 123</td>
                            <td>100.00</td>
                            <td className="table__status">
                              <span className=" status--active">Active</span>
                            </td>
                            <td>08-27-2021</td>
                            <td className="table__option">
                              <div className="table__option__icon">
                                <BsFillGearFill />
                                <div className="table__option__list">
                                  <ul>
                                    <li>
                                      <button onClick={handleProfile}>
                                        View
                                      </button>
                                    </li>
                                    <li>
                                      <button onClick={handleCancel}>
                                        Cancel
                                      </button>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </td>
                          </tr>

                          <tr>
                            <td>Loverboy 123</td>
                            <td>100.00</td>
                            <td className="table__status">
                              <span className=" status--active">Active</span>
                            </td>
                            <td>08-27-2021</td>
                            <td className="table__option">
                              <div className="table__option__icon">
                                <BsFillGearFill />
                                <div className="table__option__list">
                                  <ul>
                                    <li>
                                      <button onClick={handleProfile}>
                                        View
                                      </button>
                                    </li>
                                    <li>
                                      <button onClick={handleCancel}>
                                        Cancel
                                      </button>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </td>
                          </tr>

                          <tr>
                            <td>Loverboy 123</td>
                            <td>100.00</td>
                            <td className="table__status">
                              <span className=" status--active">Active</span>
                            </td>
                            <td>08-27-2021</td>
                            <td className="table__option">
                              <div className="table__option__icon">
                                <BsFillGearFill />
                                <div className="table__option__list">
                                  <ul>
                                    <li>
                                      <button onClick={handleProfile}>
                                        View
                                      </button>
                                    </li>
                                    <li>
                                      <button onClick={handleCancel}>
                                        Cancel
                                      </button>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </td>
                          </tr>

                          <tr>
                            <td>Loverboy 123</td>
                            <td>100.00</td>
                            <td className="table__status">
                              <span className=" status--active">Active</span>
                            </td>
                            <td>08-27-2021</td>
                            <td className="table__option">
                              <div className="table__option__icon">
                                <BsFillGearFill />
                                <div className="table__option__list">
                                  <ul>
                                    <li>
                                      <button onClick={handleProfile}>
                                        View
                                      </button>
                                    </li>
                                    <li>
                                      <button onClick={handleCancel}>
                                        Cancel
                                      </button>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                      <AdmPagination />
                    </div>
                  </div>

                  <input type="radio" name="tableBlock" id="blockTwo" />
                  <label htmlFor="blockTwo">Cancelled Sponsored</label>
                  <div className="table__wrapper">
                    <div className="table__responsive">
                      <table>
                        <thead>
                          <tr>
                            <th>Child Name</th>
                            <th>Amount</th>
                            <th>Status</th>
                            <th>Created</th>
                            <th>Action</th>
                          </tr>
                        </thead>

                        <tbody>
                          <SpinnerTable colspan={5} />
                          <TableNodata colspan={5} />
                        </tbody>
                      </table>
                      <AdmPagination />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {isProfile && <RegModalViewChild onClickClose={handleProfile} />}
      {isCancel && <RegModalCancelChild onClickClose={handleCancel} />}
    </>
  );
};

export default RegDashboardSponsor;
