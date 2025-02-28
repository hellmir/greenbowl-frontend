"use client";

import { TabsList, TabsTrigger } from "@/components/ui/tabs";
import { categories } from "@/constants/categories";
import Image from "next/image";
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
            <Image
              className={` border-2 ${+currentCategoryId === category.id ? " rounded-full border border-foundation-primary" : ""} rounded-full object-cover overflow-hidden  bg-foundation-quarternary`}
              src={category.image}
              alt="카테고리이미지"
              height={40}
              width={40}
            />
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
