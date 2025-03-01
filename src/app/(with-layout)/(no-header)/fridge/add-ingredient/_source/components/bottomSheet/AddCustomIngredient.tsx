"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { categories } from "@/constants/categories";
import PlusIcon from "@/components/icons/PlusIcon";

import { useState, useTransition } from "react";
import {
  createCategoryIngredients,
  getCategoryIngredients,
} from "../../actions/categoryIngredient";
import { useAlertStore } from "@/store/alertStore";
import { CategoryIngredient } from "@/app/type/ingredients";
import useAfterMutationEffects from "@/hooks/useAfterMutationEffects";

const findSameName = (name: string, ingredients: CategoryIngredient[]) =>
  ingredients.filter((ingredient) => ingredient.categoryDetail === name)
    .length > 0;

const AddCustomIngredient = () => {
  const [selectedCategory, setSelectedCategory] = useState<number | null>(null);
  const [inputValue, setInputValue] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [isPending, startTransition] = useTransition();

  const afterAction = useAfterMutationEffects("등록이 완료되었습니다.");

  const play = useAlertStore((state) => state.play);

  const addAction = async (categoryDetail: string, sequence: number) => {
    const ingredients = await getCategoryIngredients(sequence);

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
        play("등록에 실패했습니다.");
      }
    });
    return true;
  };

  return (
    <Sheet
      onOpenChange={(e) => {
        setIsOpen(e);
        setInputValue("");
        setSelectedCategory(null);
      }}
      open={isOpen}
    >
      <SheetTrigger>
        <PlusIcon stroke="content-tertiary" />
      </SheetTrigger>
      <SheetContent
        side={"bottom"}
        className=" max-w-[37.5rem] mx-auto w-screen rounded-t-[20px] pt-3 px-4 pb-0"
        aria-describedby={undefined}
      >
        <SheetHeader>
          <SheetTitle className="label-s text-content-secondary w-full flex items-center justify-center mb-2">
            재료 등록하기
          </SheetTitle>

          <div className="w-full">
            <Input
              className="h-[3.375rem] border-none focus-visible:ring-0 paragraph-s text-content-secondary placeholder:text-content-quarternary"
              placeholder="재료명을 입력해 주세요"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              name="categoryDetail"
            />
          </div>
          <div className="grid grid-cols-4 grid-rows-2 w-full py-4 bg-foundation-secondary gap-x-4 gap-y-4">
            {categories.map((category) => (
              <div
                key={category.id}
                className={`flex flex-col items-center justify-between ${category.id === selectedCategory ? "text-foundation-primary" : ""}`}
                onClick={() => setSelectedCategory(category.id)}
              >
                <div className="hover:cursor-pointer flex flex-col items-center justify-center">
                  <div
                    className={`rounded-full border-2 object-cover overflow-hidden mb-[4px]  ${category.id === selectedCategory ? " border-foundation-primary bg-foundation-quarternary" : ""}`}
                  >
                    <category.icon />
                  </div>
                  <p
                    className={`${selectedCategory === category.id ? "text-foundation-primary" : "text-content-secondary"} label-xs`}
                  >
                    {category.name}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="py-3">
            <Button
              loading={isPending}
              type={"submit"}
              onClick={async () => {
                if (!selectedCategory) return;
                const success = await addAction(inputValue, selectedCategory);
                if (success) {
                  setIsOpen(false);
                  setSelectedCategory(null);
                }

                setInputValue("");
              }}
              disabled={
                typeof selectedCategory !== "number" || inputValue === ""
              }
              className="  text-foundation-secondary heading-m  w-full py-5"
            >
              등록하기
            </Button>
          </div>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};

export default AddCustomIngredient;
