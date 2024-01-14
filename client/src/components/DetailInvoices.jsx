import { TopComponent } from "./TopComponent";
import { MiddleComponent } from "./MiddleComponent";
import React from "react";

function DetailInvoices({ status = "pending" }) {
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
    <div className="flex flex-col justify-center h-full w-[548px] items-center container mx-auto">
      <TopComponent getStatusColor={getStatusColor} status={status} />
      <MiddleComponent />
    </div>
  );
}

export default DetailInvoices;
