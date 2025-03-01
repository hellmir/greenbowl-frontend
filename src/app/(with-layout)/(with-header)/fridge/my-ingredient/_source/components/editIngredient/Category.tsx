import { FridgeIngredient } from "@/app/type/ingredients";
import XIcon from "@/components/icons/XIcon";
import { categories } from "@/constants/categories";
import useEditIngredients from "@/store/editIngredientsStore";
import Image from "next/image";

interface Props {
  ingredient: FridgeIngredient;
}

const Head = ({ ingredient }: Props) => {
  const toggleIngredient = useEditIngredients(
    (state) => state.toggleIngredient
  );
  const handleClickXBtn = () => toggleIngredient(ingredient);
  return (
    <div className="w-full min-h-5  flex justify-between items-center">
      <Image
        src={"/anything.gif"}
        alt="카테고리 이미지"
        height={40}
        width={40}
      />
      <div className="flex items-center grow justify-start ml-3 mr-3 label-m text-content-secondary ">
        <p className="">{categories[ingredient.sequence].name}</p>
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
          {ingredient.categoryDetail}
        </p>
      </div>
      <XIcon onClick={handleClickXBtn} stroke="content-tertiary" />
    </div>
  );
};

export default Head;
