import { categories } from "@/constants/categories";
import Image from "next/image";

const CategoriesContainer = () => {
  return (
    <div className="grid grid-cols-4 grid-rows-2 w-full py-24 px-16 ">
      {categories.map((category) => (
        <div
          key={category.id}
          className="flex flex-col items-center justify-between"
        >
          <Image
            className=" rounded-full object-cover overflow-hidden mb-[4px]"
            src={category.image}
            alt="카테고리이미지"
            height={40}
            width={40}
          />
          <p className="label-xs text-content-secondary">{category.name}</p>
        </div>
      ))}
    </div>
  );
};

export default CategoriesContainer;
