// Header.jsx

import { IconPlus } from "./icons_components/index";

function Header(): JSX.Element {
  return (
    <header className="flex items-center pt-20">
      <div className="flex flex-col">
        <div className="font-bold text-4xl">Invoices</div>
        <div className="text-gray">There are 7 total invoices</div>
      </div>
      <div className="ml-auto flex items-center">
        <select className="outline-none mr-6">
          <option value="filter" className="text-black">
            Filter By Status
          </option>
        </select>
        <div className="cursor-pointer text-white bg-purple rounded-full w-[150px] h-[48px] align-middle text-[15px] font-bold flex items-center justify-center text-center">
          <span>
            <IconPlus />
          </span>
          <span className="text-white ml-4 override">New Invoice</span>
        </div>
      </div>
    </header>
  );
}

export default Header;
