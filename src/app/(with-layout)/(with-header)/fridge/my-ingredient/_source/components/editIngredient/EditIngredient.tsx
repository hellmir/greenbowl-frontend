import { Dispatch, memo, SetStateAction, useState } from "react";

import Head from "./Category";
import ExpirationDate from "./ExpirationDate";
import Quantity from "./Quantity";
import StorageCondition from "./StorageCondition";

import CalendarModal from "@/components/modal/CalendarModal";
import { FridgeIngredient } from "@/app/type/ingredients";
import storageMethodMap from "@/constants/ingredients/storageMethod";
import formatDate from "@/utils/date/formatDate";

interface Props {
  ingredient: FridgeIngredient;
  setSelectedIngredients: Dispatch<SetStateAction<FridgeIngredient[]>>;
}

const EditIngredient = memo(function EditIngreDient({
  ingredient,
  setSelectedIngredients,
}: Props) {
  const [active, setActive] = useState(false);

  const handleChangeQuantity = (quantity: number) =>
    setSelectedIngredients((prev) =>
      prev.map((p) =>
        p.id === ingredient.id ? { ...ingredient, quantity } : p
      )
    );

  const handleChangeCondition = (
    storageMethod: keyof typeof storageMethodMap
  ) =>
    setSelectedIngredients((prev) =>
      prev.map((p) =>
        p.id === ingredient.id ? { ...ingredient, storageMethod } : p
      )
    );

  const handleChangeExpirationDate = (date: Date) =>
    setSelectedIngredients((prev) =>
      prev.map((p) =>
        p.id === ingredient.id
          ? { ...ingredient, expirationDate: formatDate(date) }
          : p
      )
    );

  return (
    <div className="px-3 pb-3 pt-2 bg-foundation-secondary rounded-[1.25rem] mb-5">
      <Head ingredient={ingredient} />
      <div className=" mt-3 flex flex-col gap-3 label-s text-content-tertiary  ">
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

export default EditIngredient;
