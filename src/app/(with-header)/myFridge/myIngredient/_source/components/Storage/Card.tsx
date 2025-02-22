import { Ingredient } from "@/app/(with-header)/myFridge/_source/types/fridge";

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
    return "text-foundation-accent ";
  }
  if (expirationDate <= 3 && expirationDate >= -2) {
    return "text-foundation-negative";
  }
  {
    return "text-content-tertiary";
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
      className={`w-full rounded-lg py-2 px-3 border  ${isSelected ? "bg-yellowgreen-100 border-foundation-primary" : "bg-foundation-secondary border-border-default"}`}
      onClick={() => onClick(+ingredient.id)}
    >
      <div className={`${expirationDateClassName} mb-1 heading-s`}>
        {`D${expirationDate >= 0 ? "+" : ""}${expirationDate}`}
      </div>
      <div className=" text-content-secondary label-m">{ingredient.name}</div>
      <div className="flex mt-1 text-content-tertiary label-s">
        <p>{ingredient.storageCondition}</p>
        <p className="ml-2 mr-2">|</p>
        <p>{ingredient.quantity}개</p>
      </div>
    </div>
  );
};

export default Card;
