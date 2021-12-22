import React from "react";
import Branding from "../../branding/Branding";
import { copyrightYear } from "../../helpers/general-functions";

const AdmFooter = () => {
  return (
    <div className="adm__footer">
      <Branding />
      <p>Developed by FBS - © {copyrightYear()}</p>
    </div>
  );
};

export default AdmFooter;
