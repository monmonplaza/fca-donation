import React from "react";
import {
  devApiUrl,
  getPercentage,
} from "../../../../helpers/general-functions";
import { StoreContext } from "../../../../../store/StoreContext";
import { setMode } from "../../../../../store/StoreAction";
import fetchApi from "../../../../helpers/fetchApi";

const useLoadMoreResident = (
  childrenUrl,
  childrenUrlAfter,
  classification = "resident"
) => {
  const { store, dispatch } = React.useContext(StoreContext);
  const [loading, setLoading] = React.useState(false);
  const [btnLoading, setBtnLoading] = React.useState(false);
  const [isMode, setIsMode] = React.useState(false);
  const [listData, setListData] = React.useState([]);
  const [masterList, setMasterList] = React.useState([]);
  const [prodTotal, setProdTotal] = React.useState([]);
  const [subsTotal, setSubsTotal] = React.useState([]);
  // sort the children by percent value
  let list = [];

  React.useEffect(() => {
    fetchMode();
    isMode && fetchChildren();
  }, [store.mode]);

  const fetchMode = () => {
    setLoading(true);
    fetch(devApiUrl + "/mode/read-mode.php", {
      method: "post",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({}),
    })
      .then((res) => res.json())
      .then(
        (result) => {
          //   console.log(result);

          if (!result.status) {
            setIsMode(false);
            return;
          }

          if (result.status) {
            setIsMode(true);
            dispatch(setMode(result.data[0].app_mode));
          }
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          console.log(error);
        }
      );
  };

  const fetchChildren = async () => {
    setLoading(true);
    // get total product
    let totalProd = [];
    let prod = await fetchApi(childrenUrl, {});

    prod.data.map((item) => {
      totalProd.push(item);
      return null;
    });

    while (prod.has_more) {
      prod = await fetchApi(childrenUrlAfter, {
        after: prod.data[prod.data.length - 1].id,
      });

      prod.data.map((item) => {
        totalProd.push(item);
        return null;
      });
    }
    console.log(totalProd);
    setProdTotal(totalProd);

    // get total subscription
    let totalSubs = [];
    let subs = await fetchApi(
      devApiUrl + "/stripe-api/subscriptions/list-subscriptions.php",
      {}
    );

    subs.data.map((item) => {
      totalSubs.push(item);
      return null;
    });

    while (subs.has_more) {
      subs = await fetchApi(
        devApiUrl +
          "/stripe-api/subscriptions/list-subscriptions-pagination-after.php",
        { after: subs.data[subs.data.length - 1].id }
      );

      subs.data.map((item) => {
        totalSubs.push(item);
        return null;
      });
    }
    console.log(totalSubs);
    setSubsTotal(totalSubs);

    // fetch children by pagination
    const child = await fetchApi(childrenUrl, {});

    child.data.map((item) => {
      if (item.metadata.class === classification) {
        totalProd.map((val) => {
          if (val.id === item.id) {
            list.push({
              id: item.id,
              photo: item.metadata.photo,
              name: item.name,
              birthday: item.metadata.birthday,
              description: item.description,
              created: item.created,
              percent: getPercentage(item, totalSubs),
            });
          }
        });
      }

      return null;
    });

    list.sort(
      (a, b) =>
        // a.percent > b.percent ? 1 : b.percent > a.percent ? -1 : 0
        a.percent - b.percent
    );

    setListData(list);
    setMasterList(child);
    setLoading(false);
  };

  const handleLoadMore = async () => {
    // let list2 = [];
    if (masterList.has_more) {
      setBtnLoading(true);

      // fetch children by pagination
      const child = await fetchApi(childrenUrlAfter, {
        after: masterList.data[masterList.data.length - 1].id,
      });

      child.data.map((item) => {
        if (item.metadata.class === classification) {
          prodTotal.map((val) => {
            if (val.id === item.id) {
              list.push({
                id: item.id,
                photo: item.metadata.photo,
                name: item.name,
                birthday: item.metadata.birthday,
                description: item.description,
                created: item.created,
                percent: getPercentage(item, subsTotal),
              });
            }
          });
        }

        return null;
      });

      let listToSort = [...listData, ...list];
      listToSort.sort(
        (a, b) =>
          // a.percent > b.percent ? 1 : b.percent > a.percent ? -1 : 0
          a.percent - b.percent
      );
      setListData(listToSort);
      setMasterList(child);
      setBtnLoading(false);
    }
  };

  return { loading, btnLoading, listData, masterList, handleLoadMore };
};

export default useLoadMoreResident;
