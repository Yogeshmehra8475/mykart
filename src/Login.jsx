import React from "react";
import Button from "./Button";
import { HiArrowSmLeft } from "react-icons/hi";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="p-2">
      <Link className="pt-2" to="/">
        <HiArrowSmLeft className="text-5xl text-indigo-500" />
      </Link>
      <div className="flex item-center justify-center w-full h-screen bg-gray-800">
        <div className="flex flex-col w-80 p-5 rounded-md shadow-md bg-white">
          <h1 className="text-2xl font-bold self-center mb-4"> Login Page</h1>
          <div>
            <label htmlFor="email-adress" className="sr-only">
              {" "}
              Email address
            </label>
            <input
              id="email-address"
              type="email"
              autoComplete="email"
              required
              className="relative block w-full appearance-none rounded-none 
rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 
placeholder-gray-500 focus:z-10 focus:border-indigo-500 sm:text-sm"
              placeholder="Email address"
            />
          </div>
          <div>
            <label htmlFor="password" className="sr-only">
              Password
            </label>
            <input
              id="password"
              type="password"
              autoComplete="current-password"
              required
              className="relative block w-full appearance-none rounded-none 
             rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 
            placeholder-gray-500 focus:z-10 focus:border-indigo-500 sm:text-sm"
              placeholder="Password"
            />
          </div>
          <Button className="self-end mt-3 ">Login</Button>
        </div>
      </div>
    </div>
  );
}

export default Login;
