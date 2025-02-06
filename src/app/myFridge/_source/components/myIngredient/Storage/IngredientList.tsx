import { categories } from "@/constants/categories";
import { categorized } from "./../../../utils/categorized";
import Image from "next/image";
import { Ingredient } from "@/app/myFridge/_source/types/fridge";
import Card from "./Card";
import { useMemo } from "react";
import { ScrollArea } from "@/components/ui/scroll-area";

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
    <ScrollArea className="overflow-x-hidden h-5/6 flex flex-col justify-between ">
      {categories.map((category) => (
        <div
          key={category.id}
          className="mb-20 p-3 bg-foundation-secondary rounded-[12px]"
        >
          <div className="flex items-center text-label-m h-[40px]">
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
    </ScrollArea>
  );
};

export default IngredientList;
