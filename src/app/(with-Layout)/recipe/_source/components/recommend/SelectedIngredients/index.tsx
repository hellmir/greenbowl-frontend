"use client";

import { Ingredient } from "@/app/(with-layout)/myFridge/_source/types/fridge";
import useEditIngredients from "@/store/editIngredientsStore";
import Ingredients from "./Ingredients";
import { useRef, useState } from "react";
import { Input } from "@/components/ui/input";
import ArrowRightIcon from "@/components/icons/ArrowRightIcon";
import Link from "next/link";
import route from "@/constants/route";

interface Props {
  ingredients: Ingredient[];
}

const SelectedIngredients = ({ ingredients }: Props) => {
  const { ingredientsSet } = useEditIngredients();
  const [selectedIngredients, setSelectedIngredients] = useState(
    ingredients
      .filter((ingredient) => ingredientsSet.has(+ingredient.id))
      .map((ingredient) => ({ name: ingredient.name }))
  );
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <div className="p-3 ">
      <div className="flex items-center justify-between mb-3">
        <div className="label-s  text-content-secondary ">
          선택한 재료({selectedIngredients.length})
        </div>
        <Link href={route.myFridge.myIngredient}>
          <div className="flex items-center hover:cursor-pointer text-content-tertiary">
            <p className="label-xs flex items-end">냉장고에서 선택하기</p>
            <ArrowRightIcon stroke="content-tertiary" />
          </div>
        </Link>
      </div>
      <div className="flex h-12 p-2 items-center bg-scale-gray-100 border border-border-default">
        <Ingredients
          ingredients={selectedIngredients}
          setSelectedIngredients={setSelectedIngredients}
        />
        <Input
          id="ingredientInput"
          placeholder="재료를 선택해 주세요"
          className=" focus-visible:ring-transparent border-none placeholder:text-content-quarternary text-content-secondary"
          ref={inputRef}
          onChange={(e) => {
            const isSame =
              selectedIngredients.filter(
                (ingredient) => ingredient.name === e.target.value
              ).length > 0;

            if (e.target.value[e.target.value.length - 1] !== " ") return;
            if (e.target.value === " " || isSame) {
              e.target.value = "";
              return;
            }

            const name = e.target.value;

            setSelectedIngredients((prev) => {
              return [...prev, { name }];
            });
            e.target.value = "";
          }}
        />
      </div>
      <label
        htmlFor="ingredientInput"
        className=" paragraph-xs text-content-quarternary flex whitespace-pre"
      >
        <p>*재료를 여러 개 입력할 경우,</p>
        <p className="text-foundation-primary "> 띄어쓰기</p>
        <p>를 해주세요.</p>
      </label>
    </div>
  );
};

export default SelectedIngredients;
