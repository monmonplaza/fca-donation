import React from "react";
import {
  devApiUrl,
  getPercentage,
} from "../../../../helpers/general-functions";
import { StoreContext } from "../../../../../store/StoreContext";
import { setMode } from "../../../../../store/StoreAction";
import useSubscriptionsTotal from "../../../../helpers/useSubscriptionsTotal";

const useLoadMore = (childrenUrl, childrenUrlAfter, classification = "") => {
  const { store, dispatch } = React.useContext(StoreContext);
  const [loading, setLoading] = React.useState(false);
  const [btnLoading, setBtnLoading] = React.useState(false);
  const [isMode, setIsMode] = React.useState(false);
  const [listData, setListData] = React.useState([]);
  const [masterList, setMasterList] = React.useState([]);
  // sort the children by percent value
  let list = [];
  const { subscription } = useSubscriptionsTotal();

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

  const fetchChildren = () => {
    setLoading(true);
    fetch(childrenUrl, {
      method: "post",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({}),
    })
      .then((res) => res.json())
      .then(
        (result) => {
          // console.log(result.data);
          result.data.map((item) => {
            if (item.metadata.class === classification) {
              // console.log(item.name);
              list.push({
                id: item.id,
                photo: item.metadata.photo,
                name: item.name,
                birthday: item.metadata.birthday,
                description: item.description,
                percent: getPercentage(item, subscription),
                created: item.created,
              });
            }
          });
          list.sort(
            (a, b) =>
              // a.percent > b.percent ? 1 : b.percent > a.percent ? -1 : 0
              a.percent - b.percent
          );

          setListData(list);
          setMasterList(result);
          setLoading(false);

          // setListData(result.data);
          // setMasterList(result);
          // setLoading(false);
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          console.log(error);
          setLoading(false);
        }
      );
  };

  const handleLoadMore = () => {
    // let list2 = [];
    if (masterList.has_more) {
      setBtnLoading(true);
      fetch(childrenUrlAfter, {
        method: "post",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          after: masterList.data[masterList.data.length - 1].id,
        }),
      })
        .then((res) => res.json())
        .then(
          (result) => {
            result.data.map((item) => {
              if (item.metadata.class === classification) {
                // console.log(item.name);
                list.push({
                  id: item.id,
                  photo: item.metadata.photo,
                  name: item.name,
                  birthday: item.metadata.birthday,
                  description: item.description,
                  percent: getPercentage(item, subscription),
                  created: item.created,
                });
              }
            });
            let listToSort = [...listData, ...list];
            listToSort.sort(
              (a, b) =>
                // a.percent > b.percent ? 1 : b.percent > a.percent ? -1 : 0
                a.percent - b.percent
            );
            setListData(listToSort);
            // setListData((prevState) => [...prevState, ...list]);
            setMasterList(result);
            setBtnLoading(false);

            // console.log(result);
            // setMasterList(result);
            // setListData((prevState) => [...prevState, ...result.data]);
            // setBtnLoading(false);
          },
          // Note: it's important to handle errors here
          // instead of a catch() block so that we don't swallow
          // exceptions from actual bugs in components.
          (error) => {
            console.log(error);
            setBtnLoading(false);
          }
        );
    }
  };

  return { loading, btnLoading, listData, masterList, handleLoadMore };
};

export default useLoadMore;
