"use client";

import React from "react";
import Kakaotalk from "../svg/share/Kakaotalk";

interface KakaoShareButtonProps {
  requestUrl: string;
}

const KakaoShareBtn = ({ requestUrl }: KakaoShareButtonProps) => {
  const handleShearToKakao = () => {
    const { Kakao } = window;
    Kakao.Share.sendScrap({
      requestUrl,
    });
  };

  return (
    <button
      type="button"
      className=" cursor-pointer flex flex-col items-center"
      onClick={handleShearToKakao}
    >
      <Kakaotalk />
      <p className="label-xs mt-1 text-content-secondary">카카오톡</p>
    </button>
  );
};

export default KakaoShareBtn;
