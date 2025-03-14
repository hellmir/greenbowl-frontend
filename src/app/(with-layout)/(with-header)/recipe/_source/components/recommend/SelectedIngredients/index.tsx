"use client";

import Ingredients from "./Ingredients";
import { Dispatch, SetStateAction, useRef } from "react";
import { Input } from "@/components/ui/input";
import ArrowRightIcon from "@/components/icons/ArrowRightIcon";
import Link from "next/link";
import route from "@/constants/route";

interface Props {
  selectedIngredients: {
    name: string;
  }[];
  setSelectedIngredients: Dispatch<
    SetStateAction<
      {
        name: string;
      }[]
    >
  >;
}

const SelectedIngredients = ({
  selectedIngredients,
  setSelectedIngredients,
}: Props) => {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <div className="py-3 px-4 bg-foundation-secondary rounded-xl">
      <div className="flex items-center justify-between mb-3">
        <div className="label-s  text-content-secondary ">
          내 재료({selectedIngredients.length})
        </div>
        <Link href={route.myFridge.myIngredient}>
          <div className="flex items-center hover:cursor-pointer text-content-tertiary">
            <p className="label-xs flex items-end">냉장고에서 선택하기</p>
            <ArrowRightIcon stroke="content-tertiary" />
          </div>
        </Link>
      </div>
      <div className="mb-1 flex h-12 p-2 pl-0 items-center bg-scale-gray-100 border border-border-default rounded-lg">
        <Ingredients
          ingredients={selectedIngredients}
          setSelectedIngredients={setSelectedIngredients}
        />
        <Input
          id="ingredientInput"
          placeholder={
            selectedIngredients.length > 0 ? "" : "재료를 선택해 주세요"
          }
          className=" focus-visible:ring-transparent border-none rounded-none border-inherit placeholder:text-content-quarternary text-content-secondary"
          ref={inputRef}
          onSubmit={(e) => {
            e.preventDefault();
          }}
          onChange={(e) => {
            const isSame =
              selectedIngredients.filter(
                (ingredient) => ingredient.name === e.target.value.trim()
              ).length > 0;

            if (e.target.value[e.target.value.length - 1] !== " ") return;
            if (e.target.value === " " || isSame) {
              e.target.value = "";
              return;
            }

            const name = e.target.value.trim();

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
