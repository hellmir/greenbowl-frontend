"use client";

import React from "react";
import URLCopy from "../svg/share/URLCopy";

interface Props {
  requestUrl: string;
}

const URLCopyBtn = ({ requestUrl }: Props) => {
  const handleClickCopy = () => {
    navigator.clipboard.writeText(requestUrl);
  };

  return (
    <div
      onClick={handleClickCopy}
      className=" flex flex-col items-center cursor-pointer"
    >
      <URLCopy />
      <p className="mt-1 ">링크 복사</p>
    </div>
  );
};

export default URLCopyBtn;
