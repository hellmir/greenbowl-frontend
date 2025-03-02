import { Dispatch, memo, SetStateAction, useState } from "react";

import Head from "./Category";
import ExpirationDate from "./ExpirationDate";
import Quantity from "./Quantity";
import StorageCondition from "./StorageCondition";

import CalendarModal from "@/components/modal/CalendarModal";
import {
  CategoryIngredient,
  CreateFridgeIngredient,
} from "@/app/type/ingredients";
import storageMethodMap from "@/constants/ingredients/storageMethod";
import formatDate from "@/utils/date/formatDate";

interface Props {
  ingredient: CreateFridgeIngredient;

  selectedIngredient: CategoryIngredient;
  setCreateFridgeIngredients: Dispatch<
    SetStateAction<CreateFridgeIngredient[]>
  >;
  sequence: number;
}

const CreateIngredient = memo(function CreateIngredient({
  ingredient,
  selectedIngredient,
  setCreateFridgeIngredients,
  sequence,
}: Props) {
  const [active, setActive] = useState(false);

  const handleChangeQuantity = (quantity: number) =>
    setCreateFridgeIngredients((prev) =>
      prev.map((p) =>
        p.categoryId === ingredient.categoryId ? { ...ingredient, quantity } : p
      )
    );

  const handleChangeCondition = (
    storageMethod: keyof typeof storageMethodMap
  ) =>
    setCreateFridgeIngredients((prev) =>
      prev.map((p) =>
        p.categoryId === ingredient.categoryId
          ? { ...ingredient, storageMethod }
          : p
      )
    );

  const handleChangeExpirationDate = (date: Date) =>
    setCreateFridgeIngredients((prev) =>
      prev.map((p) =>
        p.categoryId === ingredient.categoryId
          ? { ...ingredient, expirationDate: formatDate(date) }
          : p
      )
    );

  return (
    <div className="px-3 pb-3 pt-2 bg-foundation-secondary rounded-[20px] mb-5">
      <Head sequence={sequence} selectedIngredient={selectedIngredient} />
      <div className=" mt-5 flex flex-col gap-3 label-s text-content-tertiary  ">
        <ExpirationDate
          expirationDate={ingredient.expirationDate}
          handleClick={() => setActive(true)}
        />
        <Quantity
          quantity={ingredient.quantity}
          onChange={handleChangeQuantity}
        />
        <StorageCondition
          storageCondition={ingredient.storageMethod}
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
});

export default CreateIngredient;
