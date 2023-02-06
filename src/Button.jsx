import { memo } from "react";

function Button(props) {
  return (
    <button
      {...props}
      className="rounded-md px-4 py-2 bg-indigo-700 pt-2 text-white"
    ></button>
  );
}

export default memo(Button);
