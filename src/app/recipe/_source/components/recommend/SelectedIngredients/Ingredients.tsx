import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import XIcon from "@/components/icons/XIcon";

import { SetStateAction, useEffect, useRef } from "react";
import { Swiper as TSwiper } from "swiper/types";

interface Props {
  ingredients: { name: string }[];
  setSelectedIngredients: React.Dispatch<SetStateAction<{ name: string }[]>>;
}

const Ingredients = ({ ingredients, setSelectedIngredients }: Props) => {
  const swiperRef = useRef<TSwiper>(null);

  useEffect(() => {
    swiperRef.current?.slideTo(ingredients.length);
  }, [ingredients]);
  return (
    <div className="relative max-w-[50%]">
      <Swiper
        className="w-full"
        freeMode={true}
        slidesPerView="auto"
        spaceBetween={16}
        slidesOffsetAfter={2}
        onSwiper={(s) => (swiperRef.current = s)}
      >
        {ingredients.map((ingredient, idx) => (
          <SwiperSlide key={idx} className="!w-auto">
            <div
              aria-label={ingredient.name}
              className="flex items-center justify-between relative bg-scale-yellowgreen-100 w-auto  py-[0.3rem] px-[0.3rem]   border border-foundation-primary text-foundation-primary rounded-lg"
            >
              <div>{ingredient.name}</div>
              <div className="ml-1">
                <XIcon
                  onClick={() =>
                    setSelectedIngredients((prev) =>
                      prev.filter((item) => item.name !== ingredient.name)
                    )
                  }
                  width={12}
                  height={12}
                  stroke="foundation-primary"
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Ingredients;
