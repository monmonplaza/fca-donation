import React from "react";
import { devApiUrl } from "../../../helpers/general-functions";
import SpinnerTable from "../../../spinner/SpinnerTable";
import AdmChildrenTable from "./AdmChildrenTable";
import useLoadMore from "./hooks/useLoadMore";

const AdmChildrenResident = ({
  loading,
  masterList,
  listData,
  btnLoading,
  handleLoadMore,
  totalProd,
}) => {
  return (
    <>
      <input type="radio" name="tableBlock" id="blockOne" defaultChecked />
      <label htmlFor="blockOne">Resident</label>
      <div className="table__wrapper">
        <div className="table__responsive">
          {loading && <SpinnerTable />}
          <AdmChildrenTable
            // classification="resident"
            masterList={masterList}
            listData={listData}
            btnLoading={btnLoading}
            handleLoadMore={handleLoadMore}
          />
        </div>
      </div>
    </>
  );
};

export default AdmChildrenResident;
