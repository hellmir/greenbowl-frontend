import { CategoryIngredient } from "@/app/type/ingredients";
import XIcon from "@/components/icons/XIcon";
import { categories } from "@/constants/categories";
import { useCategoryIngredientsStore } from "@/store/categoryIngredientsStore";
import Image from "next/image";

interface Props {
  sequence: number;
  selectedIngredient: CategoryIngredient;
}

const Head = ({ sequence, selectedIngredient }: Props) => {
  const { toggleIngredient } = useCategoryIngredientsStore();
  const category = categories[sequence - 1];

  return (
    <div className="w-full min-h-5  flex justify-between items-center h-12 border-b border-border-default">
      <div className="w-full flex justify-between items-center">
        {<category.icon />}
        <div className="flex items-center grow justify-start ml-3 mr-3 label-m text-content-secondary ">
          <p className="">{category.name}</p>
          <div className="h-5 w-5 flex items-center justify-center ml-1 mr-1">
            <Image
              className=""
              src={"/svg/RightTriangle.svg"}
              alt="오른쪽 삼각형"
              height={7}
              width={7}
            />
          </div>

          <p className="flex-grow w-1/3 line-clamp-1">
            {selectedIngredient.categoryDetail}
          </p>
        </div>
        <XIcon
          onClick={() => toggleIngredient(selectedIngredient)}
          stroke="content-tertiary"
        />
      </div>
    </div>
  );
};

export default Head;
