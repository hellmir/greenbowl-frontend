import { getBookmarkRecipes } from "../../action/recipe";
import ClientRecipe from "./ClientRecipe";

const Recipe = async () => {
  try {
    const recipes = await getBookmarkRecipes();
    return (
      <div className="px-4 mt-9">
        <ClientRecipe recipes={recipes} />
      </div>
    );
  } catch {
    return (
      <div className="w-full pt-20">
        {" "}
        데이터를 불러오는 도중 에러가 발생했습니다.
      </div>
    );
  }
};

export default Recipe;
