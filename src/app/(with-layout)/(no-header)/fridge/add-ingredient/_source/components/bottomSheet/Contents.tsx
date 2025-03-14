import { Input } from "@/components/ui/input";
import Categories from "./Categories";
import { Button } from "@/components/ui/button";
import { useState, useTransition } from "react";
import useAfterMutationEffects from "@/hooks/useAfterMutationEffects";
import {
  createCategoryIngredients,
  getCategoryIngredientsWithClient,
} from "../../actions/categoryIngredient";
import { useAlertStore } from "@/store/alertStore";
import { CategoryIngredient } from "@/app/type/ingredients";

const findSameName = (name: string, ingredients: CategoryIngredient[]) =>
  ingredients.filter((ingredient) => ingredient.categoryDetail === name)
    .length > 0;

interface Props {
  handleClose: () => void;
}

const Contents = ({ handleClose }: Props) => {
  const [selectedCategory, setSelectedCategory] = useState<number | null>(null);
  const [inputValue, setInputValue] = useState("");

  const [isPending, startTransition] = useTransition();

  const afterAction = useAfterMutationEffects("등록이 완료되었습니다.");

  const play = useAlertStore((state) => state.play);

  const addAction = async (categoryDetail: string, sequence: number) => {
    const ingredients = await getCategoryIngredientsWithClient(sequence);

    if (findSameName(categoryDetail, ingredients)) {
      play("기존에 등록된 재료입니다.");
      return false;
    }
    startTransition(async () => {
      try {
        (await createCategoryIngredients({
          categoryDetail,
          sequence,
        })) as CategoryIngredient;

        afterAction();
      } catch (e) {
        console.error(e);
        console.log("요를레이히~");
        play("등록에 실패했습니다.");
      }
    });

    return true;
  };
  return (
    <>
      <div className="w-full">
        <Input
          className="h-[3.375rem] focus-visible:ring-0 paragraph-s text-content-secondary border-border-default border bg-scale-gray-100 placeholder:text-content-quarternary"
          placeholder="재료명을 입력해 주세요"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          name="categoryDetail"
        />
      </div>
      <Categories
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
      <div className="py-3">
        <Button
          loading={isPending}
          type={"submit"}
          onClick={async () => {
            if (!selectedCategory) return;
            const success = await addAction(inputValue, selectedCategory);
            if (success) {
              handleClose();
              setSelectedCategory(null);
            }

            setInputValue("");
          }}
          disabled={typeof selectedCategory !== "number" || inputValue === ""}
          className="  text-foundation-secondary heading-m  w-full py-5"
        >
          등록하기
        </Button>
      </div>
    </>
  );
};

export default Contents;
