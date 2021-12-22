import React from "react";
import fetchApi from "./fetchApi";
import { devApiUrl } from "./general-functions";

const useSubscriptionsTotal = () => {
  const [totalSubs, setTotal] = React.useState(0);
  const [loading, setLoading] = React.useState(true);
  const [subscription, setSubs] = React.useState([]);

  React.useEffect(() => {
    fetchTotal();
  }, []);

  const fetchTotal = async () => {
    setLoading(true);
    let subsIds = [];
    let list = await fetchApi(
      devApiUrl + "/stripe-api/subscriptions/list-subscriptions.php",
      {}
    );

    // console.log(list);

    list.data.map((item) => {
      subsIds.push(item.id);
      setSubs((prevState) => [...prevState, item]);

      return null;
    });

    while (list.has_more) {
      list = await fetchApi(
        devApiUrl +
          "/stripe-api/subscriptions/list-subscriptions-pagination-after.php",
        { after: list.data[list.data.length - 1].id }
      );

      list.data.map((item) => {
        subsIds.push(item.id);
        setSubs((prevState) => [...prevState, item]);

        return null;
      });
    }

    setTotal(subsIds.length);
    setLoading(false);
  };
  return { totalSubs, loading, subscription };
};

export default useSubscriptionsTotal;
