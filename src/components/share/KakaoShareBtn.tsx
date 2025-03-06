"use client";

import React from "react";

// type KakaoShareButtonProps = {
//   description: string;
//   link: string;
// };

const KakaoShareBtn = () => {
  const handleShearToKakao = () => {
    const { Kakao } = window;
    Kakao.Share.sendScrap({
      requestUrl: "https://greenbowl-eta.vercel.app/fridge/tip/1",
    });
  };

  return <div onClick={handleShearToKakao}>test</div>;
};

export default KakaoShareBtn;
