// App.jsx
// import React from "react";
// import { INVOICES } from "../starter-code/data";
// import Invoices from "./components/Invoices";
// import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import DetailInvoices from "./components/DetailInvoices";
/**
 * Renders the main layout of the web page.
 * @returns {JSX.Element} The JSX element representing the main layout.
 */
const App = (): JSX.Element => {
  return (
    <div className="h-full w-full bg-lightbg">
      <Sidebar />
      <DetailInvoices status="pending" />
    </div>
  );
};

export default App;
