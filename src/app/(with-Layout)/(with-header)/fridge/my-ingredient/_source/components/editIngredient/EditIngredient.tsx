import { useState } from "react";

import Head from "./Category";
import ExpirationDate from "./ExpirationDate";
import Quantity from "./Quantity";
import StorageCondition from "./StorageCondition";

import { categories } from "@/constants/categories";

import CalendarModal from "@/components/modal/CalendarModal";
import { FridgeIngredient } from "@/app/type/ingredients";
import storageMethodMap from "@/constants/ingredients/storageMethod";

interface Props {
  ingredient: FridgeIngredient;
}

const EditIngredient = ({ ingredient }: Props) => {
  const [newIngredient, setNewIngredient] = useState(ingredient);
  const [active, setActive] = useState(false);

  const handleChangeQuantity = (quantity: number) =>
    setNewIngredient({ ...newIngredient, quantity });
  const handleChangeCondition = (
    storageMethod: keyof typeof storageMethodMap
  ) => setNewIngredient({ ...newIngredient, storageMethod });
  const handleChangeExpirationDate = (date: Date) =>
    setNewIngredient({ ...newIngredient, expirationDate: date.toString() });

  return (
    <div className="px-3 pb-3 pt-2 bg-foundation-secondary rounded-[20px] mb-5">
      <Head
        category={categories[newIngredient.sequence].name}
        name={newIngredient.categoryDetail}
      />
      <div className=" mt-5 flex flex-col gap-3 label-s text-content-tertiary  ">
        <ExpirationDate
          expirationDate={newIngredient.expirationDate}
          handleClick={() => setActive(true)}
        />
        <Quantity
          quantity={newIngredient.quantity}
          onChange={handleChangeQuantity}
        />
        <StorageCondition
          storageCondition={newIngredient.storageMethod}
          onChange={handleChangeCondition}
        />
      </div>
      <CalendarModal
        active={active}
        setActive={setActive}
        date={new Date(ingredient.expirationDate)}
        handleChangeExpirationDate={handleChangeExpirationDate}
      />
    </div>
  );
};

export default EditIngredient;
