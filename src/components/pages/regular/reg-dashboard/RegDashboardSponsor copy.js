import React from 'react'
import RegDashboardHeader from '../../../header/backend/regular/RegDashboardHeader'
import BackRegSidebar from '../../../sidebar/backend/regular/BackRegSidebar'

// import SpinnerTable from '../../../spinner/SpinnerTable'
import { BsFillGearFill } from 'react-icons/bs'
import TableNodata from '../../../table-nodata/TableNodata'

import RegModalViewChild from './modal/RegModalViewChild'
import RegModalCancelChild from './modal/RegModalCancelChild'

const RegDashboardSponsor = () => {

    const [isProfile, setProfile] = React.useState(false);
    const [isCancel, setCancel] = React.useState(false);
    const handleProfile = (e) => {
        e.preventDefault();
        setProfile(true);
    }
    const handleCancel = () => {
        setCancel(true);
    }





    return (
        <>
            <RegDashboardHeader />
            <div className="dashboard">
                <div className="container">
                    <div className="dashboard__grid">
                        <BackRegSidebar />
                        <div className="dashboard__main">
                            <div className="dashboard__table sponsor__children__wrapper">
                                <h2>Sponsored Children</h2>

                                <div className="dashboard__table__main">
                                    <div className="dashboard__tab">
                                        <div className="dashboard__tab__wrapper">
                                            <div className="dashboard__tab__block">
                                                <input type="radio" name="sponsor-children" id="tab1" defaultChecked />
                                                <label htmlFor="tab1" className="tab__label">Active</label>
                                                <div className="table__responsive">
                                                    <table>
                                                        <thead>
                                                            <tr>
                                                                <td>Childname</td>
                                                                <td>Amount</td>
                                                                <td>Status</td>
                                                                <td>Created</td>
                                                                <td>Action</td>
                                                            </tr>
                                                        </thead>

                                                        <tbody>
                                                            <tr>
                                                                <td>Loverboy 123</td>
                                                                <td>100.00</td>
                                                                <td className="table__status"><span className=" status--active">Active</span></td>
                                                                <td>08-27-2021</td>
                                                                <td className="table__option">
                                                                    <div className="table__option__icon">
                                                                        <BsFillGearFill />
                                                                        <div className="table__option__list">
                                                                            <ul>
                                                                                <li><button onClick={handleProfile}>View</button></li>
                                                                                <li><button onClick={handleCancel}>Cancel</button></li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>

                                                                </td>
                                                            </tr>

                                                            <tr>
                                                                <td>Loverboy 123</td>
                                                                <td>100.00</td>
                                                                <td className="table__status"><span className=" status--active">Active</span></td>
                                                                <td>08-27-2021</td>
                                                                <td className="table__option">
                                                                    <div className="table__option__icon">
                                                                        <BsFillGearFill />
                                                                        <div className="table__option__list">
                                                                            <ul>
                                                                                <li><button onClick={handleProfile}>View</button></li>
                                                                                <li><button onClick={handleCancel}>Cancel</button></li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>

                                                                </td>
                                                            </tr>


                                                            <tr>
                                                                <td>Loverboy 123</td>
                                                                <td>100.00</td>
                                                                <td className="table__status"><span className=" status--active">Active</span></td>
                                                                <td>08-27-2021</td>
                                                                <td className="table__option">
                                                                    <div className="table__option__icon">
                                                                        <BsFillGearFill />
                                                                        <div className="table__option__list">
                                                                            <ul>
                                                                                <li><button onClick={handleProfile}>View</button></li>
                                                                                <li><button onClick={handleCancel}>Cancel</button></li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>

                                                                </td>
                                                            </tr>



                                                            {/* <TableNodata colspan={5} />
                                                            <SpinnerTable colspan={5} /> */}
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>

                                            <div className="dashboard__tab__block">
                                                <input type="radio" name="sponsor-children" id="tab2" />
                                                <label htmlFor="tab2" className="tab__label">Cancelled Sponsored</label>
                                                <div className="table__responsive">
                                                    <table>
                                                        <thead>
                                                            <tr>
                                                                <td>Childname</td>
                                                                <td>Amount</td>
                                                                <td>Status</td>
                                                                <td>Created</td>
                                                                <td>Action</td>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <TableNodata colspan={5} />
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
                </div>
            </div>


            {isProfile && <RegModalViewChild modal={{ setProfile }} />}
            {isCancel && <RegModalCancelChild modal={{ setCancel }} />}
        </>
    )
}

export default RegDashboardSponsor
