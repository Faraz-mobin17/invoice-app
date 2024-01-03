// IconPlus.jsx
import React from "react";

function IconPlus() {
  return (
    <div
      className="flex justify-center items-center bg-white rounded-full p-2 cursor-pointer"
      style={{
        backgroundColor: "white",
      }}
    >
      <svg
        width="11"
        height="11"
        xmlns="http://www.w3.org/2000/svg"
        className="text-center"
      >
        <path
          d="M6.313 10.023v-3.71h3.71v-2.58h-3.71V.023h-2.58v3.71H.023v2.58h3.71v3.71z"
          fill="#7C5DFA"
          fillRule="nonzero"
        />
      </svg>
    </div>
  );
}

export default IconPlus;
