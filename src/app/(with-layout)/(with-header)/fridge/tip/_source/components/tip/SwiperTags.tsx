"use client";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

interface Props {
  tags: string[];
}

const SwiperTags = ({ tags }: Props) => {
  return (
    <Swiper
      className="w-full"
      freeMode={true}
      slidesPerView="auto"
      slidesPerGroup={1}
    >
      {tags.map((tag, idx) => (
        <SwiperSlide key={idx} className="!w-auto">
          <p className="px-1 py-[2px] rounded-[5px]">{tag}</p>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SwiperTags;
