// Invoices.jsx
import React from "react";
import { IconRight } from "./icons_components/index";

// import IconSun from "./IconSun";
function Invoices({ id, paymentDue, clientName, price, status }) {
  const getStatusColor = () => {
    if (status === "paid") {
      return "text-green";
    } else if (status === "pending") {
      return "text-orange";
    } else {
      return "text-black font-bold";
    }
  };

  return (
    <>
      <div className="invoice-container flex justify-evenly shadow-customShadow mt-4 p-6 rounded-[8px] items-center align-middle w-[548px] ">
        <div className="font-bold text-black text-[15px] ">
          <span className="text-gray">#</span>
          {id}
        </div>
        <div className="text-gray font-light text-[13px]">
          Due on {paymentDue}
        </div>
        <div className="text-lightGray font-light text-[13px]">
          {clientName}
        </div>
        <div className="font-bold text-black">${price}</div>
        <div
          className={`font-bold capitalize rounded bg-[#F3FDFA] p-2 w-[104px] h-[40px] text-center ${getStatusColor()}`}
        >
          {status === "draft" ? "Draft" : <span>{status}</span>}
        </div>
        <div>
          <span>
            <IconRight />
          </span>
        </div>
      </div>
    </>
  );
}

export default Invoices;
