import React from "react";
import { FaSpinner } from "react-icons/fa";

function Loading() {
  return (
    <div className="grow text-primary-dark text-3xl flex items-center justify-center pt-40">
      {" "}
      <FaSpinner className="animate-spin text-6xl " />
    </div>
  );
}

export default Loading;
