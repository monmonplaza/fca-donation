import React from "react";
import fetchApi from "./fetchApi";
import { devApiUrl } from "./general-functions";

const useCustomersTotal = () => {
  const [totalCus, setTotal] = React.useState(0);
  const [loading, setLoading] = React.useState(true);
  const [customers, setCustomers] = React.useState([]);

  React.useEffect(() => {
    fetchTotal();
  }, []);

  const fetchTotal = async () => {
    setLoading(true);
    let cusIds = [];
    let list = await fetchApi(
      devApiUrl + "/stripe-api/customer/list-customers.php",
      {}
    );

    list.data.map((item) => {
      cusIds.push(item.id);
      setCustomers((prevState) => [...prevState, item]);

      return null;
    });

    while (list.has_more) {
      list = await fetchApi(
        devApiUrl + "/stripe-api/customer/list-customers-pagination-after.php",
        { after: list.data[list.data.length - 1].id }
      );

      list.data.map((item) => {
        cusIds.push(item.id);
        setCustomers((prevState) => [...prevState, item]);

        return null;
      });
    }

    setTotal(cusIds.length);
    setLoading(false);
  };
  return { totalCus, loading, customers };
};

export default useCustomersTotal;
