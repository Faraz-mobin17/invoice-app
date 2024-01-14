import React from "react";

function BottomComponent() {
  return (
    <div className=" container-lg mx-auto bg-slate-50 rounded-tl-lg rounded-tr-lg mt-[50px]">
      <table className="table-auto border-collapse">
        <thead>
          <th>Item Name</th>
          <th>QTY.</th>
          <th>Price</th>
          <th>Total</th>
        </thead>
        <tbody>
          <tr>
            <td className="font-bold">Banner Design</td>
            <td>1</td>
            <td>$156</td>
            <td className="font-bold">$156</td>
          </tr>
          <tr>
            <td className="font-bold">Email Design</td>
            <td>2</td>
            <td>$200</td>
            <td className="font-bold">$400</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default BottomComponent;
