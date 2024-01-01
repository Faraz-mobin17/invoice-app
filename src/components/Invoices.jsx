import React from "react";

function Invoices() {
  return (
    <div className="invoice-container flex justify-evenly">
      <div>#RT3080</div>
      <div>Due 19 Aug</div>
      <div>John Doe</div>
      <div>$1000</div>
      <div>Paid</div>
      <div>
        <span>&gt;</span>
      </div>
    </div>
  );
}

export default Invoices;
