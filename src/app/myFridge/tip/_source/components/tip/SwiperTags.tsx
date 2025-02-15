"use client";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

const SwiperTags = () => {
  return (
    <Swiper
      className="w-full"
      freeMode={true}
      slidesPerView="auto"
      slidesPerGroup={1}
    >
      {Array.from({ length: 10 }).map((_, idx) => (
        <SwiperSlide key={idx} className="!w-auto">
          <p className="px-1 py-[2px] rounded-[5px]">냉장고 보관</p>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SwiperTags;
