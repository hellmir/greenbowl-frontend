"use client";

import React from "react";
import URLCopy from "../svg/share/URLCopy";
import { useAlertStore } from "@/store/alertStore";

interface Props {
  requestUrl: string;
}

const URLCopyBtn = ({ requestUrl }: Props) => {
  const play = useAlertStore((state) => state.play);
  const handleClickCopy = () => {
    navigator.clipboard.writeText(requestUrl);
    play("링크가 복사되었습니다.");
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
