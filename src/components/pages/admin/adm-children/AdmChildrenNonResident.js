import React from "react";
import SpinnerTable from "../../../spinner/SpinnerTable";
import AdmChildrenTable from "./AdmChildrenTable";

const AdmChildrenNonResident = ({
  loading,
  masterList,
  listData,
  btnLoading,
  handleLoadMore,
}) => {
  return (
    <>
      <input type="radio" name="tableBlock" id="blockTwo" />
      <label htmlFor="blockTwo">Non-Resident</label>
      <div className="table__wrapper">
        <div className="table__responsive">
          {loading && <SpinnerTable />}
          <AdmChildrenTable
            classification="non-resident"
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

export default AdmChildrenNonResident;
