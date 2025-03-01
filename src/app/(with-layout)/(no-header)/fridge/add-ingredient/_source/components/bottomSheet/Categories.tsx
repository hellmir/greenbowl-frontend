import { categories } from "@/constants/categories";
import { Dispatch, memo, SetStateAction } from "react";

interface Props {
  selectedCategory: number | null;
  setSelectedCategory: Dispatch<SetStateAction<number | null>>;
}

const Categories = memo(function Categories({
  selectedCategory,
  setSelectedCategory,
}: Props) {
  return (
    <div className="grid grid-cols-4 grid-rows-2 w-full py-4 bg-foundation-secondary gap-x-4 gap-y-4">
      {categories.map((category) => (
        <div
          key={category.id}
          className={`flex flex-col items-center justify-between ${category.id === selectedCategory ? "text-foundation-primary" : ""}`}
          onClick={() => setSelectedCategory(category.id)}
        >
          <div className="hover:cursor-pointer flex flex-col items-center justify-center">
            <div
              className={`rounded-full border-2 object-cover overflow-hidden mb-[4px]  ${category.id === selectedCategory ? " border-foundation-primary bg-foundation-quarternary" : ""}`}
            >
              <category.icon />
            </div>
            <p
              className={`${selectedCategory === category.id ? "text-foundation-primary" : "text-content-secondary"} label-xs`}
            >
              {category.name}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
});

export default Categories;
