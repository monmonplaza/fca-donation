import React from "react";

const SpinnerBlock = () => {
  return (
    <>
      <div className="spinner spinner--block">
        <div className="lds-ring">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </>
  );
};

export default SpinnerBlock;
