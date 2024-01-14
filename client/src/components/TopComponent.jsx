import React from "react";
import Button from "./Button";
export function TopComponent({ getStatusColor, status }) {
  return (
    <div className="w-[548px] h-[88px] container-lg mx-auto  shadow flex justify-center items-center  rounded-md  p-4">
      <div className="flex items-center mr-auto">
        <span>Status</span>
        <div
          className={`ml-2 font-bold capitalize rounded bg-[#F3FDFA] p-2 w-[104px] h-[40px] text-center ${getStatusColor()}`}
        >
          {status === "draft" ? "Draft" : <span>{status}</span>}
        </div>
      </div>
      {/* pill */}
      <Button color="slate">Edit</Button>
      <Button color="rose">Delete</Button>
      <Button color="voilet">Mark as Paid</Button>
    </div>
  );
}
