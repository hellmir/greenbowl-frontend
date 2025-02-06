import { Ingredient } from "../../../types/fridge";

interface Props {
  ingredient: Ingredient;
  isSelected: boolean;
  onClick: (n: number) => void;
}

const diffDays = (from: Date, to: Date) =>
  Math.ceil((to.valueOf() - from.valueOf()) / 86400000);

const getExpirationDateClassName = (expirationDate: number) => {
  if (expirationDate >= 7) {
    return "text-foundation-primary";
  }
  if (expirationDate >= 4) {
    return "text-orange-500 ";
  }
  if (expirationDate <= 3 && expirationDate >= -2) {
    return "text-red-600";
  }
  {
    return "text-gray-600";
  }
};

const Card = ({ ingredient, isSelected, onClick }: Props) => {
  const expirationDate = diffDays(
    new Date(),
    new Date(ingredient.expirationDate)
  );
  const expirationDateClassName = getExpirationDateClassName(expirationDate);
  return (
    <div
      className={` w-full rounded-lg py-[8px] px-3 border  ${isSelected ? "bg-yellowgreen-100 border-foundation-primary" : "bg-foundation-secondary border-border-border"}`}
      onClick={() => onClick(+ingredient.id)}
    >
      <div className={`${expirationDateClassName} mb-1 text-heading-s`}>
        {`D${expirationDate >= 0 ? "+" : ""}${expirationDate}`}
      </div>
      <div className=" text-content-secondary text-label-m">
        {ingredient.name}
      </div>
      <div className="flex mt-1 text-content-tertiary text-label-s">
        <p>{ingredient.storageCondition}</p>
        <p className="ml-8 mr-8">|</p>
        <p>{ingredient.quantity}개</p>
      </div>
    </div>
  );
};

export default Card;
