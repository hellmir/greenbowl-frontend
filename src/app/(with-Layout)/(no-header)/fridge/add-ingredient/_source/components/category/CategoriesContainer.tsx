"use client";

import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { categories } from "@/constants/categories";

import Image from "next/image";
import { useRouter } from "next/navigation";

interface Props {
  categoryId: number;
}

const CategoriesContainer = ({ categoryId }: Props) => {
  const router = useRouter();
  const handleClick = (categoryId: number) => {
    router.replace(`?categoryId=${categoryId}`, { scroll: false });
  };
  return (
    <div className=" w-full sticky top-[3.4rem] flex justify-center grow-0 py-6 z-0 bg-foundation-secondary ">
      <Tabs className="">
        <TabsList className="h-full grid grid-cols-4 gap-4 grid-rows-2 bg-foundation-secondary">
          {categories.map((category) => (
            <TabsTrigger
              key={category.id}
              value={categoryId + ""}
              asChild
              className={`flex flex-col items-center justify-between`}
            >
              <div
                onClick={() => handleClick(category.id)}
                className="hover:cursor-pointer flex flex-col items-center justify-center"
              >
                <Image
                  className={` border-2 ${categoryId === category.id ? " rounded-full border border-foundation-primary" : ""} rounded-full object-cover overflow-hidden mb-1 bg-foundation-quarternary`}
                  src={category.image}
                  alt="카테고리이미지"
                  height={40}
                  width={40}
                />
                <p
                  className={`${categoryId === category.id ? "text-foundation-primary" : "text-content-secondary"} label-xs`}
                >
                  {category.name}
                </p>
              </div>
            </TabsTrigger>
          ))}
        </TabsList>
      </Tabs>
    </div>
  );
};

export default CategoriesContainer;
