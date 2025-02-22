import { categories } from "@/constants/categories";
import Image from "next/image";
import { Ingredient } from "@/app/(with-header)/myFridge/_source/types/fridge";
import Card from "./Card";
import { useMemo } from "react";
import { categorized } from "../../utils/categorized";

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
    <div className="pb-28">
      {categories.map((category) => (
        <div
          key={category.id}
          className="mb-5 bg-foundation-secondary rounded-[12px] p-3"
        >
          <div className="flex items-center label-m h-10 mb-5">
            <Image
              src={category.image}
              alt="카테고리 이미지"
              height={40}
              width={40}
            />
            <p className=" label-m">{`${category.name} (${
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
