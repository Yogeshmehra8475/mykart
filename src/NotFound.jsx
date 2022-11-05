import React from "react";

import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div>
      <div className="flex items-center justify-center p-6">
        <img src="https://cdn.discordapp.com/attachments/999217361037053983/1030909287763025981/e4ec7c5d7af5342f57347c9ada429fba.gif" />
      </div>

      <h1 className="flex justify-center text-8xl font-bold p-6">
        Page Not Found
      </h1>
      <p className="flex justify-center text-xl text-gray-400 p-4">
        We're Sorry The Requested Page Does Not Exist Please Go Back To The
        Homepage
      </p>
      <Link
        className="p-2 text-center mb-2 justify-center flex ml-96 mr-96 border-2 rounded-md bg-blue-700 border-black "
        to="/"
      >
        GO HOME
      </Link>
    </div>
  );
}

export default NotFound;
