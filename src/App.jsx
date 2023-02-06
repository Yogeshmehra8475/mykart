import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import ProductListPage from "./ProductListPage";
import ProductDetail from "./ProductDetail";
import NavBar from "./NavBar";
import Copyright from "./Copyright";
import NotFound from "./NotFound";
import Login from "./Login";
import NextPage from "./NextPage";

function App() {
  const savedDataString = localStorage.getItem("my-cart") || "{}";
  const savedData = JSON.parse(savedDataString);

  const [cart, SetCart] = useState(savedData);
  function handleAddToCart(productId, count) {
    const oldCount = cart[productId] || 0;

    const newCart = { ...cart, [productId]: oldCount + count };
    SetCart(newCart);
    const cartString = JSON.stringify(newCart);
    localStorage.setItem("my-cart", cartString);
  }
  const totalCount = Object.keys(cart).reduce(function (output, current) {
    return output + cart[current];
  }, 0);

  return (
    <div className="bg-gray-200 h-screen overflow-scroll">
      <NavBar productCount={totalCount} />
      <div className="grow">
        <Routes>
          <Route index element={<ProductListPage />} />
          <Route
            path="/products/:id"
            element={<ProductDetail onAddToCart={handleAddToCart} />}
          />
          <Route path="*" element={<NotFound />} />
          <Route path="/login/" element={<Login />} />
          <Route path="copyright/" element={<Copyright />} />
        </Routes>
      </div>
      <Copyright />
    </div>
  );
}

export default App;
