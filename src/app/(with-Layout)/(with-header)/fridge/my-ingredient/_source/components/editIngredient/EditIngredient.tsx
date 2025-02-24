import { useState } from "react";

import Head from "./Category";
import ExpirationDate from "./ExpirationDate";
import Quantity from "./Quantity";
import StorageCondition from "./StorageCondition";

import { categories } from "@/constants/categories";
import {
  Ingredient,
  StorageCondition as TStorageCondition,
} from "@/app/(with-layout)/(with-header)/fridge/_source/types/fridge";
import CalendarModal from "@/components/modal/CalendarModal";

interface Props {
  ingredient: Ingredient;
}

const EditIngredient = ({ ingredient }: Props) => {
  const [newIngredient, setNewIngredient] = useState(ingredient);
  const [active, setActive] = useState(false);

  const handleChangeQuantity = (quantity: number) =>
    setNewIngredient({ ...newIngredient, quantity });
  const handleChangeCondition = (storageCondition: TStorageCondition) =>
    setNewIngredient({ ...newIngredient, storageCondition });
  const handleChangeExpirationDate = (date: Date) =>
    setNewIngredient({ ...newIngredient, expirationDate: date.toString() });

  return (
    <div className="px-3 pb-3 pt-2 bg-foundation-secondary rounded-[20px] mb-5">
      <Head
        category={categories[newIngredient.category].name}
        name={newIngredient.name}
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
          storageCondition={newIngredient.storageCondition}
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
