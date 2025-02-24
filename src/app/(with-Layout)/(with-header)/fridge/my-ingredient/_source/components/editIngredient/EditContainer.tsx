import { Button } from "@/components/ui/button";
import EditIngredientList from "./EditIngredientList";
import { Ingredient } from "@/app/(with-layout)/(with-header)/fridge/_source/types/fridge";
import { useEffect } from "react";
import { useHeaderStore } from "@/store/headerStore";
import TertiaryHeader from "@/components/header/TertiaryHeader";

interface Props {
  ingredients: Ingredient[];
  handleEditClose: () => void;
}

const EditContainer = ({ ingredients, handleEditClose }: Props) => {
  const { setHeaderType } = useHeaderStore();

  useEffect(() => {
    setHeaderType("none");
    return () => setHeaderType("show");
  }, [setHeaderType]);

  return (
    <div className=" z-30">
      <TertiaryHeader handleEditClose={handleEditClose} />
      <EditIngredientList ingredients={ingredients} />
      <Button variant={"bottom"} className="">
        완료
      </Button>
    </div>
  );
};

export default EditContainer;
