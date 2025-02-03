import { getIngredients } from "./_source/actions/ingredient";
import Create from "./_source/components/buttons/Create";
import { Ingredient } from "./_source/types/fridge";

const page = async () => {
  const data = (await getIngredients()) as Ingredient[];
  return (
    <div>
      {data.map((ingredient) => ingredient.name)}
      <div>
        <Create></Create>
      </div>
    </div>
  );
};

export default page;
