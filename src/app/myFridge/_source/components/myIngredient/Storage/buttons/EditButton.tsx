import { Button } from "@/components/ui/button";
import useEditIngredients from "@/store/editIngredientsStore";
import useIngredientSwiper from "@/store/ingredientSwiperStore";

const EditButton = () => {
  const swiper = useIngredientSwiper((state) => state.swiper);
  const { commit } = useEditIngredients();

  const handleClick = () => {
    commit();
    swiper?.slideNext();
  };

  return (
    <Button
      onClick={handleClick}
      type="button"
      className="w-full mb-[10px] mt-[5px]"
    >
      재료 수정하기
    </Button>
  );
};

export default EditButton;
