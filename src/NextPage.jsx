import React from "react";
import { HiArrowSmRight} from "react-icons/hi";

function NextPage() {
  return (
    <div className="flex flex-grow pt-6 gap-1">
      <h1 className="border-2 border-slate-900 px-2 hover:bg-primary-dark">1</h1>
      <h1 className="border-2 border-slate-900 px-2 hover:bg-primary-dark">2</h1>
      <h1 className="border-2 border-slate-900 px-2 hover:bg-primary-dark"><HiArrowSmRight/></h1>
    </div>
  );
}

export default NextPage;
  