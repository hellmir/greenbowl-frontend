import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { categories } from "@/constants/categories";

import Image from "next/image";
import Link from "next/link";

const CategoriesContainer = () => {
  return (
    <div className=" w-full sticky top-[3.4rem] flex justify-center grow-0 py-6 z-0 bg-foundation-secondary ">
      <Tabs className="">
        <TabsList className="h-full grid grid-cols-4 gap-4 grid-rows-2 bg-foundation-secondary p-0">
          {categories.map((category) => (
            <TabsTrigger
              key={category.id}
              value={category.name}
              asChild
              className="flex flex-col items-center justify-between "
            >
              <Link
                href={`?${new URLSearchParams({ categoryId: category.id + "" })}`}
              >
                <div className="hover:cursor-pointer flex flex-col items-center justify-center">
                  <Image
                    className=" rounded-full object-cover overflow-hidden mb-1 bg-foundation-quarternary "
                    src={category.image}
                    alt="카테고리이미지"
                    height={40}
                    width={40}
                  />
                  <p className="label-xs text-content-secondary">
                    {category.name}
                  </p>
                </div>
              </Link>
            </TabsTrigger>
          ))}
        </TabsList>
      </Tabs>
    </div>
  );
};

export default CategoriesContainer;
