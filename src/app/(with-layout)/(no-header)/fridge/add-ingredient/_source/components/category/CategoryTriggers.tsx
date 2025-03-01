"use client";

import { TabsList, TabsTrigger } from "@/components/ui/tabs";
import { categories } from "@/constants/categories";

import { useRouter, useSearchParams } from "next/navigation";
import React from "react";

const CategoryTriggers = () => {
  const currentSearchParams = useSearchParams();

  const currentCategoryId = currentSearchParams.get("categoryId") as string;
  const router = useRouter();
  const handleClick = (categoryId: number) => {
    router.replace(`?categoryId=${categoryId}`);
  };
  return (
    <TabsList className="h-full grid grid-cols-4 gap-4 grid-rows-2 bg-foundation-secondary">
      {categories.map((category) => (
        <TabsTrigger
          key={category.id}
          value={category.id + ""}
          asChild
          className={`flex flex-col items-center justify-between `}
        >
          <div
            onClick={() => handleClick(category.id)}
            className="hover:cursor-pointer flex flex-col items-center justify-center"
          >
            <div
              className={`rounded-full border-2 object-cover overflow-hidden mb-[4px]  ${category.id === +currentCategoryId ? " border-foundation-primary bg-foundation-quarternary" : ""}`}
            >
              <category.icon />
            </div>
            <p
              className={`${+currentCategoryId === category.id ? "text-foundation-primary" : "text-content-secondary"} label-xs`}
            >
              {category.name}
            </p>
          </div>
        </TabsTrigger>
      ))}
    </TabsList>
  );
};

export default CategoryTriggers;
