import React from "react";
import { BsFillGearFill } from "react-icons/bs";
import { formatDate, setDate } from "../../../helpers/general-functions";
import AdmPagination from "../../../pagination/AdmPagination";
import TableNodata from "../../../table-nodata/TableNodata";

const AdmChildrenTable = ({
  masterList,
  listData,
  btnLoading,
  handleLoadMore,
}) => {
  let count = 0;
  let isData = false;

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Percentage</th>
            <th>Created</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {listData.length > 0 ? (
            listData.map((item) => {
              // if (item.metadata.class === classification) {
              count += 1;
              isData = true;
              return (
                <tr key={item.id}>
                  <td>{count}</td>
                  <td>{item.name}</td>

                  <td>{item.percent}%</td>
                  <td>{formatDate(setDate(item.created))}</td>
                  <td className="table__option">
                    <div className="table__option__icon">
                      <BsFillGearFill />
                      <div className="table__option__list">
                        <ul>
                          <li>
                            <button> Edit Child</button>
                          </li>
                          <li>
                            <button> View Donor</button>
                          </li>
                          <li>
                            <button>Delete Child</button>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </td>
                </tr>
              );
              // }
              return null;
            })
          ) : (
            <TableNodata colspan={5} />
          )}
        </tbody>

        {/* show no data if there is a product but no resident child */}
        {listData.length > 0 && !isData && (
          <tbody>
            <TableNodata colspan={5} />
          </tbody>
        )}
      </table>
      <AdmPagination
        masterList={masterList}
        btnLoading={btnLoading}
        count={count}
        handleLoadMore={handleLoadMore}
      />
    </>
  );
};

export default AdmChildrenTable;
