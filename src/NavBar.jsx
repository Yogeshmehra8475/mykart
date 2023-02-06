import React from "react";
import { RiShoppingBagLine } from "react-icons/ri";
import { Link } from "react-router-dom";

function NavBar({ productCount }) {
  return (
    <div className="py-4 bg-white">
      <div className="max-w-6xl flex justify-between mx-auto items-center">
        <img
          className="h-16"
          src="https://cdn.discordapp.com/attachments/999217361037053983/1009093455500296262/Amazon_logo.png"
        />
        <div className="flex justify-right pl-96 pt-6 items-end text-blue-600 text-lg font-dark">
          <Link to="/login/">Login</Link>
          <Link to="/" className="pl-10 pr-10 ">
            Home
          </Link>
          <Link to="/copyright/">Contact</Link>
        </div>
        <div className="flex flex-col items-center">
          <RiShoppingBagLine className="text-5xl text-primary-default" />
          <span className="-m-7">{productCount}</span>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
