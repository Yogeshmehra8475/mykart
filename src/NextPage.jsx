import React from "react";
import { HiArrowSmRight } from "react-icons/hi";
import { Link } from "react-router-dom";

function NextPage() {
  return (
    <div className="flex flex-grow pt-6 gap-1">
      <Link
        to="/"
        className="border-2 border-slate-900 px-2 hover:bg-primary-dark"
      >
        1
      </Link>
      <Link
        to="/"
        className="border-2 border-slate-900 px-2 hover:bg-primary-dark"
      >
        2
      </Link>
      <Link
        to="/"
        className="border-2 border-slate-900 px-2 hover:bg-primary-dark"
      >
        <HiArrowSmRight />
      </Link>
    </div>
  );
}

export default NextPage;
