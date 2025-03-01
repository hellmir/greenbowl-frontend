"use client";

import { Button } from "@/components/ui/button";
import { CookTime, CookTimes } from "./CookTime";
import { FoodType, FoodTypes } from "./FoodType";
import SelectedIngredients from "./SelectedIngredients";
import useEditIngredients from "@/store/editIngredientsStore";
import { useEffect, useState } from "react";

const Recommend = () => {
  const { ingredientsMap, clear } = useEditIngredients();

  const [selectedTime, setSelectedTime] = useState<CookTimes>("all");
  const [selectedType, setSelectedType] = useState<FoodTypes>("all");

  const excludesSameNameIngredients = [
    ...new Set(
      ingredientsMap.values().map((ingredient) => ingredient.categoryDetail)
    ),
  ];

  const [selectedIngredients, setSelectedIngredients] = useState(
    excludesSameNameIngredients.map((ingredients) => ({ name: ingredients }))
  );

  useEffect(() => {
    return () => clear();
  }, [clear]);

  return (
    <div className="">
      <div className="mb-6">
        <h2 className="h-9 mb-1 text-content-secondary heading-m py-2">
          맞춤형 레시피 추천
        </h2>
        <p className="pr-10 label-s text-content-tertiary">
          냉장고 속 재료를 입력하고 음식 스타일을 설정해 보세요
        </p>
      </div>
      <div className=" flex flex-col gap-5 min-h-[80vh] mb-10">
        <SelectedIngredients
          selectedIngredients={selectedIngredients}
          setSelectedIngredients={setSelectedIngredients}
        />
        <CookTime
          selectedTime={selectedTime}
          handleClickItem={(time: CookTimes) =>
            setSelectedTime((prev) => (prev === time ? "all" : time))
          }
        />
        <FoodType
          selectedType={selectedType}
          handleClickItem={(type: FoodTypes) =>
            setSelectedType((prev) => (prev === type ? "all" : type))
          }
        />
      </div>
      <Button
        type="submit"
        variant={"bottom"}
        disabled={selectedIngredients.length === 0}
      >
        검색하기
      </Button>
    </div>
  );
};

export default Recommend;
