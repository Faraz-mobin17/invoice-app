import React from "react";
import { IconLogo, IconMoon } from "./icons_components";
import Avatar from "./Avatar";
// border-radius: 0px 20px 20px 0px;
function Sidebar() {
  const url = "/assets/image-avatar.jpg";
  return (
    <div className="parent flex flex-col justify-start fixed z-10 left-0 h-full bg-sideBarColor rounded-r-[20px] rounded-br-[20px]">
      <div
        className="bg-purple flex justify-center items-center p-5  rounded-r-[20px] rounded-br-[20px] w-[80px] h-[80px] drop-shadow-lg
      "
      >
        <IconLogo />
      </div>
      <div className="mt-auto flex justify-center items-center cursor-pointer">
        <IconMoon />
      </div>
      <div className="flex  justify-center items-center mt-14 mb-5 border-t-[1px] border-t-lightGray pt-8">
        <Avatar url={url} widthSize="40px" heightSize="40px" />
      </div>
    </div>
  );
}

export default Sidebar;
