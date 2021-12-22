import React from "react";
import SpinnerButton from "../spinner/SpinnerButton";

const AdmPagination = ({ masterList, btnLoading, count, handleLoadMore }) => {
  return (
    <>
      {masterList.has_more && (
        <div className="pagination">
          <div className="pagination__wrapper">
            {!btnLoading && (
              <button className="btn btn--blue" onClick={handleLoadMore}>
                Show More
              </button>
            )}
            {btnLoading && (
              <div className="load__text show">
                <SpinnerButton /> <span>Loading...</span>
              </div>
            )}
          </div>
        </div>
      )}
      {!masterList.has_more && count > 0 && <p>{`Total records: ${count}`}</p>}
    </>
  );
};

export default AdmPagination;
