import { categories } from "@/constants/categories";
import Image from "next/image";

const CategoriesContainer = () => {
  return (
    <div className="grid grid-cols-4 grid-rows-2 gap-x-4 gap-y-4 w-full gap py-6  sticky top-[3.4rem] bg-foundation-secondary ">
      {categories.map((category) => (
        <div
          key={category.id}
          className="flex flex-col items-center justify-between "
        >
          <div className="hover:cursor-pointer flex flex-col items-center justify-center">
            <Image
              className=" rounded-full object-cover overflow-hidden mb-1 bg-foundation-quarternary "
              src={category.image}
              alt="카테고리이미지"
              height={40}
              width={40}
            />
            <p className="label-xs text-content-secondary">{category.name}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CategoriesContainer;
