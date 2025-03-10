import { getBookmarkRecipes } from "../../action/recipe";
import ClientRecipe from "./ClientRecipe";

const Recipe = async () => {
  const recipes = await getBookmarkRecipes();
  return (
    <div className="px-4 mt-9">
      <ClientRecipe recipes={recipes} />
    </div>
  );
};

export default Recipe;
