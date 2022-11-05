import React, { useEffect, useState } from "react";
import ProductList from "./ProductList";
import { getProductList } from "./api";
import NoMatching from "./NoMatching";
import Loading from "./Loading";
import Nextpage from "./NextPage";

function ProductListPage() {
  const [productList, setProductList] = useState([]);
  const [loading, setLoading] = useState(true);

  const [query, setQuary] = useState("");
  const [sort, setSort] = useState("default");

  useEffect(function () {
    getProductList().then(function (products) {
      setProductList(products);
      setLoading(false);
    });
  }, []);

  let data = productList.filter(function (item) {
    const lowerCaseTitle = item.title.toLowerCase();
    const lowerCaseQuery = query.toLowerCase();

    return lowerCaseTitle.indexOf(lowerCaseQuery) != -1;
  });

  if (sort == "price l2h") {
    data = data.sort(function (x, y) {
      return x.price - y.price;
    });
  } else if (sort == "ratings") {
    data.sort(function (x, y) {
      return x.title > y.title ? 1 : -1;
    });
  } else if (sort == "price h2l") {
    data.sort(function (x, y) {
      return y.price - x.price;
    });
  }

  function handleQueryChange(event) {
    setQuary(event.target.value);
  }
  function handleSortChange(event) {
    setSort(event.target.value);
  }

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="bg-gray-200">
      <div className="p-2 max-w-6xl mx-auto bg-white px-9 py-12.5 my-16">
        <div className="text-right pr-10">
          <input
            value={query}
            placeholder="search"
            className="border border-gray-700 px-2 py-1 text-center text-xl font-semibold mb-2"
            onChange={handleQueryChange}
          />
          <select
            onChange={handleSortChange}
            className="border border-gray-700 px-2 py-1 text-center text-xl font-semibold ml-2"
            value={sort}
          >
            <option value="default"> Default Sorting</option>
            <option value="ratings">Sort by average rating</option>
            <option value="price l2h"> Price : Low to High </option>
            <option value="price h2l"> Price : High to Low</option>
          </select>
        </div>

        {data.length > 0 && <ProductList products={data} />}
        {data.length == 0 && <NoMatching>No Matching products</NoMatching>}
        <Nextpage />
      </div>
    </div>
  );
}
export default ProductListPage;
