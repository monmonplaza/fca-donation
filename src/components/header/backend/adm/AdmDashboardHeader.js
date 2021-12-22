import React from "react";
import { BiLogOut } from "react-icons/bi";
import { CgMenuGridR } from "react-icons/cg";
import AdmDashboardMenu from "./AdmDashboardMenu";
import ModalLogout from "../../../modal/ModalLogout";

import Branding from "../../../branding/Branding";

const AdmDashboardHeader = () => {
  const [openMenu, isOpenMenu] = React.useState(false);
  const [logout, isLogout] = React.useState(false);

  const handleOpenMenu = () => isOpenMenu(!openMenu);
  const handleLogout = () => {
    isLogout(!logout);
  };

  return (
    <>
      <section className="dashboard__header" id="header">
        <div className="container">
          <div className="dashboard__header__wrapper">
            <div className="branding">
              {/* <img src='./images/ftc_logo_wht.svg' alt="ftc Logo" className="get__path" /> */}
              <Branding />
            </div>

            <ul className="dashboard__nav">
              <li className="sm__only">
                <button onClick={handleOpenMenu}>
                  <CgMenuGridR />
                </button>
              </li>
              <li className="lg__only">
                <button onClick={handleLogout}>
                  <BiLogOut />{" "}
                </button>
              </li>
            </ul>
          </div>
          <AdmDashboardMenu menu={openMenu} logout={handleLogout} />
        </div>
      </section>
      {logout && <ModalLogout logout={handleLogout} />}
    </>
  );
};

export default AdmDashboardHeader;
