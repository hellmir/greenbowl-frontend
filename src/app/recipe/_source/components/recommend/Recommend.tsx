"use client";

import { Button } from "@/components/ui/button";
import { CookTime, CookTimes } from "./CookTime";
import { FoodType, FoodTypes } from "./FoodType";
import SelectedIngredients from "./SelectedIngredients";
import { Ingredient } from "@/app/myFridge/_source/types/fridge";
import useEditIngredients from "@/store/editIngredientsStore";
import { useState } from "react";

interface Props {
  ingredients: Ingredient[];
}

const Recommend = ({ ingredients }: Props) => {
  const { ingredientsSet } = useEditIngredients();
  const [selectedTime, setSelectedTime] = useState<CookTimes>();
  const [selectedType, setSelectedType] = useState<FoodTypes>();

  const message =
    ingredientsSet.size === 0
      ? "냉장고에서 재료를 선택해 주세요"
      : !selectedTime
        ? "요리 시간을 선택해 주세요"
        : !selectedType
          ? "음식 종류를 선택해 주세요"
          : "선택 완료";

  return (
    <div className=" mt-[3.5rem]">
      <div className="flex items-center heading-m text-content-secondary h-[2.4rem]">
        맞춤형 레시피 추천
      </div>
      <div className="flex flex-col gap-5 min-h-[80vh]">
        <SelectedIngredients ingredients={ingredients} />
        <CookTime
          selectedTime={selectedTime}
          handleClickItem={(time: CookTimes) => setSelectedTime(time)}
        />
        <FoodType
          selectedType={selectedType}
          handleClickItem={(type: FoodTypes) => setSelectedType(type)}
        />
      </div>
      <Button type="submit" variant={"bottom"}>
        {message}
      </Button>
    </div>
  );
};

export default Recommend;
