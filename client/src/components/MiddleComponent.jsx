import React from "react";
import BottomComponent from "./BottomComponent";
export function MiddleComponent({}) {
  return (
    <div className="info-container container mx-auto shadow p-2 w-[548px] bg-white rounded-md mt-10">
      <div className="flex justify-between">
        <div className="flex flex-col justify-center items-center">
          <div className="flex flex-col items-center justify-center">
            <span className="font-bold text-black">#F3FDFA</span>
            <span className="text-slate-400 text-[13px] font-medium  leading-[15px] mt-2">
              Graphic Design
            </span>
          </div>
        </div>
        <div className="flex flex-col w-[150px]">
          <span>19 Union Terrace London E1 3EZ United Kingdom</span>
        </div>
      </div>
      <div className="middle-area flex justify-between p-2 mt-10">
        <div className=" text-center">
          <div>
            <h4>Invoice Date</h4>
            <span className="font-bold">21 Aug 2021</span>
          </div>
          <div>
            <h4>Payment Due</h4>
            <span className="font-bold">20 Sept 2021</span>
          </div>
        </div>
        <div className="text-center">
          <h4>Bill To:</h4>
          <span className="font-bold">John Doe</span>
          <address>84 Church Way Bradford BD1 9PB United Kingdom</address>
        </div>
        <div className="text-center">
          <h4>Sent To:</h4>
          <span className="font-bold">alex@gmail.com</span>
        </div>
      </div>
      <BottomComponent />
    </div>
  );
}
