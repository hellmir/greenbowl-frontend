"use client";

import { Button } from "@/components/ui/button";
import { CookTime, CookTimes } from "./CookTime";
import { FoodType, FoodTypes } from "./FoodType";
import SelectedIngredients from "./SelectedIngredients";
import useEditIngredients from "@/store/editIngredientsStore";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import route from "@/constants/route";

const RecommendContents = () => {
  const { ingredientsMap, clear } = useEditIngredients();
  const router = useRouter();

  const [selectedTime, setSelectedTime] = useState<CookTimes>("all");
  const [selectedType, setSelectedType] = useState<FoodTypes>("all");

  const excludesSameNameIngredients = [
    ...new Set(
      [...ingredientsMap.values()].map(
        (ingredient) => ingredient.categoryDetail
      )
    ),
  ];

  const [selectedIngredients, setSelectedIngredients] = useState(
    excludesSameNameIngredients.map((ingredients) => ({ name: ingredients }))
  );

  const handleSubmit = () => {
    const params = new URLSearchParams({
      ingredients: selectedIngredients
        .map((ingredient) => ingredient.name)
        .join("&"),
      cookingTime: selectedTime,
      cuisine: selectedType,
    });
    router.push(`${route.recipe.ai}?${params}`);
  };
  useEffect(() => {
    return () => clear();
  }, [clear]);
  return (
    <div className="mb-20">
      <div className=" flex flex-col gap-5">
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
        onClick={handleSubmit}
        disabled={selectedIngredients.length === 0}
      >
        검색하기
      </Button>
    </div>
  );
};

export default RecommendContents;
