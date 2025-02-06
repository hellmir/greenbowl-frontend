"use client";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import { ReactNode } from "react";
import useIngredientSwiper from "@/store/ingredientSwiperStore";

interface Props {
  firstChild: ReactNode;
  secondChild: ReactNode;
}

const SwiperContainer = ({ firstChild, secondChild }: Props) => {
  const setSwiper = useIngredientSwiper((state) => state.setSwiper);

  return (
    <Swiper
      className=" max-h-[calc(100vh-110px)]"
      spaceBetween={0}
      allowTouchMove={false}
      allowSlideNext={true}
      onSwiper={(swiper) => setSwiper(swiper)}
    >
      <SwiperSlide>{firstChild}</SwiperSlide>
      <SwiperSlide>{secondChild}</SwiperSlide>
    </Swiper>
  );
};

export default SwiperContainer;
