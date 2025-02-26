"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { categories } from "@/constants/categories";
import PlusIcon from "@/components/icons/PlusIcon";

import Image from "next/image";
import { useState } from "react";
import { createCategoryIngredients } from "../../actions/categoryIngredient";

const AddCustomIngredient = () => {
  const [selectedCategory, setSelectedCategory] = useState<number | null>(null);
  const [inputValue, setInputValue] = useState("");
  return (
    <Sheet>
      <SheetTrigger>
        <PlusIcon stroke="content-tertiary" />
      </SheetTrigger>
      <SheetContent
        side={"bottom"}
        className=" max-w-[37.5rem] mx-auto w-screen rounded-t-[20px] pt-3 px-4 pb-0"
        aria-describedby={undefined}
      >
        <SheetHeader>
          <SheetTitle className="label-s text-content-secondary w-full flex items-center justify-center mb-2">
            재료 등록하기
          </SheetTitle>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              if (!selectedCategory) return;
              createCategoryIngredients({
                categoryDetail: inputValue,
                sequence: selectedCategory,
              });
            }}
          >
            <div className="w-full">
              <Input
                className="h-[3.375rem] border-none focus-visible:ring-0 paragraph-s text-content-secondary placeholder:text-content-quarternary"
                placeholder="재료명을 입력해 주세요"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
              />
            </div>
            <div className="grid grid-cols-4 grid-rows-2 w-full py-4 bg-foundation-secondary gap-x-4 gap-y-4">
              {categories.map((category) => (
                <div
                  key={category.id}
                  className={`flex flex-col items-center justify-between ${category.id === selectedCategory ? "text-foundation-primary" : ""}`}
                  onClick={() => setSelectedCategory(category.id)}
                >
                  <div className="hover:cursor-pointer flex flex-col items-center justify-center">
                    <Image
                      className={`rounded-full border-2 object-cover overflow-hidden mb-[4px]  ${category.id === selectedCategory ? " border-foundation-primary" : ""}`}
                      src={category.image}
                      alt="카테고리이미지"
                      height={40}
                      width={40}
                    />
                    <p
                      className={`${selectedCategory === category.id ? "text-foundation-primary" : "text-content-secondary"} label-xs`}
                    >
                      {category.name}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div className=" h-20 w-full py-3">
              <Button
                disabled={
                  typeof selectedCategory !== "number" || inputValue === ""
                }
                className=" h-full w-full text-foundation-secondary heading-m"
              >
                등록하기
              </Button>
            </div>
          </form>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};

export default AddCustomIngredient;
