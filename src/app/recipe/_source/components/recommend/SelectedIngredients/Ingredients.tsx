import { Ingredient } from "@/app/myFridge/_source/types/fridge";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import XIcon from "@/components/icons/XIcon";
import useEditIngredients from "@/store/editIngredientsStore";

interface Props {
  ingredients: Ingredient[];
}

const Ingredients = ({ ingredients }: Props) => {
  const { uncommitIngredient } = useEditIngredients();

  return (
    <div className=" relative">
      <Swiper
        className="w-full"
        freeMode={true}
        slidesPerView="auto"
        slidesPerGroup={1}
        spaceBetween={16}
        slidesOffsetAfter={40}
      >
        {ingredients.map((ingredient) => (
          <SwiperSlide key={ingredient.id} className="!w-auto">
            <div
              aria-label={ingredient.name}
              className=" relative bg-scale-yellowgreen-100 py-3 px-5 border border-foundation-primary text-foundation-primary rounded-lg"
            >
              <div>{ingredient.name}</div>
              <div className=" absolute right-1 top-1">
                <XIcon
                  onClick={() => uncommitIngredient(+ingredient.id)}
                  width={12}
                  height={12}
                  stroke="foundation-primary"
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div
        className=" z-20 absolute top-0 w-10 h-full right-0"
        style={{
          background:
            "linear-gradient(to left, #fff 0%, rgba(255,255,255,0) 100%)",
        }}
      ></div>
    </div>
  );
};

export default Ingredients;
