import { Button } from "@/components/ui/button";
import { getIngredients } from "../../actions/ingredient";
import EditIngredientList from "./EditIngredientList";

const EditContainer = async () => {
  const ingredients = await getIngredients();

  return (
    <div className=" h-[calc(100vh-64px-48px)]">
      <EditIngredientList ingredients={ingredients} />
      <Button className="w-full mt-16">완료</Button>
    </div>
  );
};

export default EditContainer;
