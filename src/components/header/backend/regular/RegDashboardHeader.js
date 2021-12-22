import React from 'react'
import { BiLogOut } from "react-icons/bi";
import { CgMenuGridR } from "react-icons/cg";
import Branding from '../../../branding/Branding';

import RegDashboardMenu from './RegDashboardMenu';

const RegDashboardHeader = () => {
    const [openMenu, isOpenMenu] = React.useState(false);
    const handleOpenMenu = () => {
        isOpenMenu(!openMenu);

    }
    return (
        <>
            <section className="dashboard__header" id="header">

                <div className="container">
                    <div className="dashboard__header__wrapper">
                        <div className="branding">
                            {/* <img src='./images/ftc_logo_wht.svg' alt="ftc Logo" className="get__path " /> */}
                            <Branding />
                        </div>

                        <ul className="dashboard__nav">
                            <li className="sm__only" onClick={handleOpenMenu}><button ><CgMenuGridR /></button></li>
                            <li className="lg__only"><button ><BiLogOut />  </button></li>

                        </ul>
                    </div>
                    <RegDashboardMenu menu={openMenu} />
                </div>
            </section>
        </>
    )
}

export default RegDashboardHeader
