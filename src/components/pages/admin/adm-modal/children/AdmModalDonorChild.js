import React from "react";
import { IoClose } from "react-icons/io5";
import SpinnerTable from "../../../../spinner/SpinnerTable";
const AdmModalDonorChild = ({ onClickClose }) => {
  return (
    <>
      <div className="modal">
        <div className="modal__main modal--table">
          <div className="modal__header">
            <h3>Donor List</h3>
            <button className="btn__modalClose" onClick={onClickClose}>
              <IoClose />
            </button>
          </div>

          <div className="modal__body">
            <div className="view__donor">
              <div className="dashboard__body form__long">
                <div className="dashboard__body__flex">
                  <input
                    type="radio"
                    name="tableBlockmodal"
                    id="modalblockcard"
                    defaultChecked
                  />
                  <label htmlFor="modalblockcard">Card</label>
                  <div className="table__wrapper">
                    <div className="table__responsive">
                      <table>
                        <thead>
                          <tr>
                            <th>Email</th>
                            <th>Fullname</th>
                            <th>Status</th>
                            <th>Created</th>
                          </tr>
                        </thead>

                        <tbody>
                          <tr>
                            <td>ramon.plaza@frontlinebusiness.com.ph</td>
                            <td>Ramon Plaza</td>
                            <td className="table__status">
                              <span className="status--active">Active</span>
                            </td>
                            <td>1/2/21</td>
                          </tr>

                          <tr>
                            <td>ramon.plaza@frontlinebusiness.com.ph</td>
                            <td>Ramon Plaza</td>
                            <td className="table__status">
                              <span className="status--active">Active</span>
                            </td>
                            <td>1/2/21</td>
                          </tr>
                          <SpinnerTable colspan={4} />
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <input
                    type="radio"
                    name="tableBlockmodal"
                    id="modalblockmanual"
                  />
                  <label htmlFor="modalblockmanual">Manual</label>
                  <div className="table__wrapper">
                    <div className="table__responsive">
                      <table>
                        <thead>
                          <tr>
                            <th>Email</th>
                            <th>Fullname</th>
                            <th>Status</th>
                            <th>Created</th>
                          </tr>
                        </thead>

                        <tbody>
                          <tr>
                            <td>ramon.plaza@frontlinebusiness.com.ph</td>
                            <td>Ramon Plaza</td>
                            <td className="table__status">
                              <span className="status--active">Active</span>
                            </td>
                            <td>1/2/21</td>
                          </tr>

                          <tr>
                            <td>ramon.plaza@frontlinebusiness.com.ph</td>
                            <td>Ramon Plaza</td>
                            <td className="table__status">
                              <span className="status--active">Active</span>
                            </td>
                            <td>1/2/21</td>
                          </tr>

                          <SpinnerTable colspan={4} />
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="modal__footer">
            <ul>
              <li>
                <button className="btn btn--cancel" onClick={onClickClose}>
                  Close
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdmModalDonorChild;
