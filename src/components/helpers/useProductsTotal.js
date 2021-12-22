import React from "react";
import fetchApi from "./fetchApi";
import { devApiUrl } from "./general-functions";

const useProductsTotal = () => {
  const [totalProd, setTotal] = React.useState(0);
  const [loading, setLoading] = React.useState(true);
  const [products, setProducts] = React.useState([]);

  React.useEffect(() => {
    fetchTotal();
  }, []);

  const fetchTotal = async () => {
    setLoading(true);
    let prodIds = [];
    let list = await fetchApi(
      devApiUrl + "/stripe-api/products/list-products.php",
      {}
    );

    // console.log(list);

    list.data.map((item) => {
      prodIds.push(item.id);
      setProducts((prevState) => [...prevState, item]);

      return null;
    });

    while (list.has_more) {
      list = await fetchApi(
        devApiUrl + "/stripe-api/products/list-products-pagination-after.php",
        { after: list.data[list.data.length - 1].id }
      );

      list.data.map((item) => {
        prodIds.push(item.id);
        setProducts((prevState) => [...prevState, item]);

        return null;
      });
    }

    setTotal(prodIds.length);
    setLoading(false);
  };
  return { totalProd, loading, products };
};

export default useProductsTotal;
