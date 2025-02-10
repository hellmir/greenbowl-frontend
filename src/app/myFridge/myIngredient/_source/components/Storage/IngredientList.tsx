import { categories } from "@/constants/categories";
import Image from "next/image";
import { Ingredient } from "@/app/myFridge/_source/types/fridge";
import Card from "./Card";
import { useMemo } from "react";
import { categorized } from "./../../utils/categorized";

interface Props {
  ingredients: Ingredient[];
  selectedIngredients: Set<number>;
  handleCardClick: (n: number) => void;
}

const IngredientList = ({
  ingredients,
  selectedIngredients,
  handleCardClick,
}: Props) => {
  const categorizedMap = useMemo(() => categorized(ingredients), [ingredients]);

  return (
    <div className="pb-[120px]">
      {categories.map((category) => (
        <div
          key={category.id}
          className="mb-20 bg-foundation-secondary rounded-[12px] p-12"
        >
          <div className="flex items-center text-label-m h-[40px] mb-20">
            <Image
              src={category.image}
              alt="카테고리 이미지"
              height={40}
              width={40}
            />
            <p className=" text-label-m">{`${category.name} (${
              categorizedMap[category.id].ingredients.length
            })`}</p>
          </div>
          <div className="w-full grid grid-cols-2 gap-4">
            {categorizedMap[category.id].ingredients.map((ingredient) => (
              <Card
                key={ingredient.id}
                ingredient={ingredient}
                isSelected={selectedIngredients.has(+ingredient.id)}
                onClick={handleCardClick}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default IngredientList;
