import React from "react";

function NoMatching({ children }) {
  return (
    <div className="p-5 bg-indigo-500 text-white text-3xl">{children}</div>
  );
}

export default NoMatching;
