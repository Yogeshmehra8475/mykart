import React from "react";
import { Link } from "react-router-dom";

function Product({ title, price, category, thumbnail, rating, id }) {
  return (
    <div className="max-w-xs">
      <div className="w-full aspect-square">
        <img
          className="h-full w-full object-cover drop-shadow-2xl"
          src={thumbnail}
        />
      </div>
      <div className="text-gray-500 text-base pt-2 pl-2">{category}</div>
      <div className="text-lg font-bold">{title}</div>
      <div className=" text-lg pl-2 text-green-700">Ratings : {rating}</div>
      <div className="px-2 font-semibold text-indigo-700">${price}</div>
      <Link className="text-red-600 text-lg" to={"/products/" + id}>
        View Detail
      </Link>
    </div>
  );
}

export default Product;
