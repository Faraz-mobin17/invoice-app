// App.jsx
import React from "react";
import { INVOICES } from "../starter-code/data";
import Invoices from "./components/Invoices";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import DetailInvoices from "./components/DetailInvoices";
const App = () => {
  return (
    <div className="h-full w-full bg-lightbg">
      <Sidebar />
      {/* <Header /> */}
      <DetailInvoices />
      {/* <div className="pt-20">
        {INVOICES.map((invoice) => (
          <Invoices
            key={invoice.id}
            {...invoice} // Spread the invoice properties
            price={invoice.items[0]?.price} // Assuming you want the price of the first item
          />
        ))}
      </div> */}
    </div>
  );
};

export default App;
