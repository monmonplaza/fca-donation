import React from 'react'
import AdmDashboardHeader from '../../../header/backend/adm/AdmDashboardHeader'
import BackAdminSidebar from '../../../sidebar/backend/admin/BackAdminSidebar'
import TableNodata from '../../../table-nodata/TableNodata'
import SpinnerTable from '../../../spinner/SpinnerTable'
import { BsFillGearFill } from 'react-icons/bs'

const AdmDashboardUsers = () => {

    return (
        <>
            <AdmDashboardHeader />
            <div className="dashboard">
                <div className="container">
                    <div className="dashboard__grid">
                        <BackAdminSidebar />

                        <div className="dashboard__main">
                            <div className="dashboard__table sponsor__children__wrapper">
                                <h2>Manage Children</h2>
                                <div className="dashboard__table__main">
                                    <div className="dashboard__tab">
                                        <div className="dashboard__tab__wrapper">
                                            <div className="dashboard__tab__block">
                                                <input type="radio" name="sponsor-children" id="tab1" defaultChecked />
                                                <label htmlFor="tab1" className="tab__label">Resident</label>
                                                <div className="dashboard__tab__content">
                                                    <div className="table__responsive">
                                                        <table cellSpacing="0">
                                                            <thead>
                                                                <tr>
                                                                    <td colSpan="1" rowSpan="1" tabIndex="0"> Name</td>
                                                                    <td colSpan="1" rowSpan="1" tabIndex="0" >Birthday</td>
                                                                    <td colSpan="1" rowSpan="1" tabIndex="0" >Classification</td>
                                                                    <td colSpan="1" rowSpan="1" tabIndex="0" >Created</td>
                                                                    <td colSpan="1" rowSpan="1" tabIndex="0" >Action</td>
                                                                </tr>
                                                            </thead>

                                                            <tbody>
                                                                <tr>
                                                                    <td colSpan="1" rowSpan="1" tabIndex="0" >LOverboy loverboy</td>
                                                                    <td colSpan="1" rowSpan="1" tabIndex="0" >9/21/2020</td>
                                                                    <td colSpan="1" rowSpan="1" tabIndex="0" >Resident</td>
                                                                    <td colSpan="1" rowSpan="1" tabIndex="0" >5/11/2021</td>
                                                                    <td colSpan="1" rowSpan="1" tabIndex="0" className="table__option">
                                                                        <div className="table__option__icon">
                                                                            <BsFillGearFill />
                                                                            <div className="table__option__list">
                                                                                <ul>
                                                                                    <li><button >View</button></li>
                                                                                    <li><button>Edit</button></li>
                                                                                    <li><button >Delete</button></li>
                                                                                </ul>
                                                                            </div>
                                                                        </div>

                                                                    </td>
                                                                </tr>


                                                                <SpinnerTable colspan={4} />
                                                                <TableNodata colspan={4} />

                                                            </tbody>
                                                        </table>
                                                    </div>
                                                </div>
                                            </div>


                                            <div className="dashboard__tab__block">
                                                <input type="radio" name="sponsor-children" id="tab2" />
                                                <label htmlFor="tab2" className="tab__label">Non-Resident</label>
                                                <div className="dashboard__tab__content">
                                                    <div className="table__responsive">
                                                        <table cellSpacing="0">
                                                            <thead>
                                                                <tr>
                                                                    <td colSpan="1" rowSpan="1" tabIndex="0"> Name</td>
                                                                    <td colSpan="1" rowSpan="1" tabIndex="0" >Birthday</td>
                                                                    <td colSpan="1" rowSpan="1" tabIndex="0" >Classification</td>
                                                                    <td colSpan="1" rowSpan="1" tabIndex="0" >Created</td>
                                                                    <td colSpan="1" rowSpan="1" tabIndex="0" >Action</td>
                                                                </tr>
                                                            </thead>

                                                            <tbody>
                                                                <tr>
                                                                    <td colSpan="1" rowSpan="1" tabIndex="0" >asdasdasd loverboy</td>
                                                                    <td colSpan="1" rowSpan="1" tabIndex="0" >9/21/2020</td>
                                                                    <td colSpan="1" rowSpan="1" tabIndex="0" >Resident</td>
                                                                    <td colSpan="1" rowSpan="1" tabIndex="0" >5/11/2021</td>
                                                                    <td colSpan="1" rowSpan="1" tabIndex="0" className="table__option">
                                                                        <div className="table__option__icon">
                                                                            <BsFillGearFill />
                                                                            <div className="table__option__list">
                                                                                <ul>
                                                                                    <li><button >View</button></li>
                                                                                    <li><button>Edit</button></li>
                                                                                    <li><button >Delete</button></li>
                                                                                </ul>
                                                                            </div>
                                                                        </div>

                                                                    </td>
                                                                </tr>


                                                                <SpinnerTable colspan={4} />
                                                                <TableNodata colspan={4} />

                                                            </tbody>
                                                        </table>
                                                    </div>
                                                </div>
                                            </div>


                                            <div className="dashboard__tab__action">
                                                <button >+Add New Child</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}

export default AdmDashboardUsers
