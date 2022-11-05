import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { HiArrowSmLeft, HiArrowSmRight } from "react-icons/hi";
import { getProductData } from "./api";
import Loading from "./Loading";
import NotFound from "./NotFound";

function ProductDetail({ onAddToCart }) {
  const id = +useParams().id;
  const [product, setProduct] = useState();
  const [loading, setLoading] = useState(true);
  const [count, setCount] = useState(1);

  useEffect(
    function () {
      const p = getProductData(id);

      p.then(function (product) {
        setProduct(product);
        setLoading(false);
      });
      p.catch(function () {
        setLoading(false);
      });
    },
    [id]
  );

  function handleCountChange(event) {
    setCount(+event.target.value);
  }

  function handleButtonClick() {
    onAddToCart(id, count);
  }

  if (loading) {
    return <Loading />;
  }

  if (!product) {
    return <NotFound />;
  }

  return (
    <>
      <div className="bg-gray-200">
        <Link className="pt-2" to="/">
          <HiArrowSmLeft className="text-5xl text-indigo-500" />
        </Link>
        <div className="flex m-10  bg-white drop-shadow-2xl border-solid shadow-lg rounded-lg ">
          <img
            className=" h-96 w-96 m-7 shadow-xl drop-shadow-xl rounded-lg"
            src={product.thumbnail}
          />
          <div className=" my-6">
            <p className=" text-gray-500 tracking-wide text-lg pb-3">
              Home / {product.category} / {product.title}
            </p>
            <h1 className="text-3xl">{product.title}</h1>
            <h3 className="pt-3 font-bold text-2xl">${product.price}</h3>
            <p className="pr-48 pt-4 mb-40 text-stone-500">
              {product.description}
            </p>
            <div className="flex pt-6 pb-6 border-b-2 border-gray-200 mr-4 ">
              <input
                value={count}
                onChange={handleCountChange}
                className="border border-gray-700 rounded-md px-2 w-12"
                type="number"
              />
              <button
                onClick={handleButtonClick}
                className="bg-rose-600 px-6 text-white
                rounded-md ml-1"
              >
                {" "}
                Add to Cart{" "}
              </button>
            </div>

            <div className=" mt-3 font-xl text-gray-500 flex">
              {" "}
              Category : <p className=" text-red-600">{product.category}</p>
            </div>
          </div>
        </div>
        <div className="flex justify-between px-5">
          <div>
            {id > 1 && (
              <Link
                className="pt-2 flex items-center"
                to={"/products/" + (id - 1)}
              >
                <HiArrowSmLeft className="text-3xl text-indigo-500" /> Previous
              </Link>
            )}
          </div>
          <div>
            <Link
              className="pt-2 flex items-center"
              to={"/products/" + (id + 1)}
            >
              <HiArrowSmRight className="text-3xl text-indigo-500" /> Next
            </Link>
          </div>
        </div>
        <div className=" bg-slate-600"></div>
      </div>
    </>
  );
}

export default ProductDetail;
