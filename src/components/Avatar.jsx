import React from "react";

function Avatar({ url, widthSize = "40px", heightSize = "40px" }) {
  return (
    <div className={`w-[${widthSize}] h-[${heightSize}]`}>
      <img
        src={url}
        alt="profile picture"
        className="h-auto max-w-full rounded-full cursor-pointer"
        width={widthSize}
        height={heightSize}
      />
    </div>
  );
}

export default Avatar;
