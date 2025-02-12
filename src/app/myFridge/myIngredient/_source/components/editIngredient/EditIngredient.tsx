import { useState } from "react";

import Head from "./Category";
import ExpirationDate from "./ExpirationDate";
import Quantity from "./Quantity";
import StorageCondition from "./StorageCondition";

import { categories } from "@/constants/categories";
import {
  Ingredient,
  StorageCondition as TStorageCondition,
} from "@/app/myFridge/_source/types/fridge";

interface Props {
  ingredient: Ingredient;
}

const EditIngredient = ({ ingredient }: Props) => {
  const [newIngredient, setNewIngredient] = useState(ingredient);

  const handleChangeQuantity = (quantity: number) =>
    setNewIngredient({ ...newIngredient, quantity });
  const handleChangeCondition = (storageCondition: TStorageCondition) =>
    setNewIngredient({ ...newIngredient, storageCondition });

  return (
    <div className="px-12 pb-12 pt-8 bg-foundation-secondary rounded-[20px] mb-20">
      <Head
        category={categories[newIngredient.category].name}
        name={newIngredient.name}
      />
      <div className=" mt-20 flex flex-col gap-12 label-s text-content-tertiary  ">
        <ExpirationDate expirationDate={newIngredient.expirationDate} />
        <Quantity
          quantity={newIngredient.quantity}
          onChange={handleChangeQuantity}
        />
        <StorageCondition
          storageCondition={newIngredient.storageCondition}
          onChange={handleChangeCondition}
        />
      </div>
    </div>
  );
};

export default EditIngredient;
