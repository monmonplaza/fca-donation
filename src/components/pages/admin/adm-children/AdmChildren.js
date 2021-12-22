import React from "react";
import AdmDashboardHeader from "../../../header/backend/adm/AdmDashboardHeader";
import BackAdminSidebar from "../../../sidebar/backend/admin/BackAdminSidebar";
import AdmModalAddChild from "../adm-modal/children/AdmModalAddChild";
import { devApiUrl } from "../../../helpers/general-functions";
import BacktoTop from "../../../backtotop/BacktoTop";
import AdmChildrenResident from "./AdmChildrenResident";
import AdmChildrenNonResident from "./AdmChildrenNonResident";
import AdmFooter from "../../../footer/admin/AdmFooter";
import useSubscriptionsTotal from "../../../helpers/useSubscriptionsTotal";
import useLoadMoreResident from "./hooks/useLoadMoreResident";
const AdmChildren = () => {
  const { loading, btnLoading, listData, masterList, handleLoadMore } =
    useLoadMoreResident(
      devApiUrl + "/stripe-api/products/list-products.php",
      devApiUrl + "/stripe-api/products/list-products-pagination-after.php"
    );

  const [addChild, setAddChild] = React.useState(false);

  const handleAddChild = () => {
    setAddChild(!addChild);
  };

  return (
    <>
      <div className="d-flex">
        <div>
          <AdmDashboardHeader />
          <div className="dashboard">
            <div className="container">
              <div className="dashboard__grid">
                <BackAdminSidebar />
                <div className="dashboard__main">
                  <div className="dashboard__main__header">
                    <h2>
                      Manage Children{" "}
                      {/* {totalCus + " " + totalProd + " " + totalSubs} */}
                    </h2>
                  </div>
                  <div className="dashboard__body">
                    <div className="dashboard__body__action">
                      <button onClick={handleAddChild}>+Add Child</button>
                    </div>
                    <div className="dashboard__body__flex">
                      <AdmChildrenResident
                        loading={loading}
                        masterList={masterList}
                        listData={listData}
                        btnLoading={btnLoading}
                        handleLoadMore={handleLoadMore}
                      />
                      <AdmChildrenNonResident
                        loading={loading}
                        masterList={masterList}
                        listData={listData}
                        btnLoading={btnLoading}
                        handleLoadMore={handleLoadMore}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <BacktoTop />
            </div>
          </div>
        </div>
        <AdmFooter />
      </div>
      {addChild && <AdmModalAddChild onClickClose={handleAddChild} />}
    </>
  );
};

export default AdmChildren;
