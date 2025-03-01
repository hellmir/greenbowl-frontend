"use client";

import MoreIcon from "@/components/icons/More";
import {
  Dialog,
  DialogContent,
  DialogClose,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import useEditIngredients from "@/store/editIngredientsStore";
import useIngredientConfigState from "@/store/ingredientConfigStore";
import { Config } from "../MyIngredients";
import Link from "next/link";
import route from "@/constants/route";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { DialogDescription } from "@radix-ui/react-dialog";

const SelectConfigTypeModal = () => {
  const { changeConfigState } = useIngredientConfigState();
  const { clear } = useEditIngredients();

  const handleClick = (s: Config) => {
    changeConfigState(s);
    clear();
  };

  return (
    <Dialog>
      <DialogTrigger>
        <MoreIcon fill="content-tertiary" />
      </DialogTrigger>
      <DialogContent className=" bg-inherit border-none rounded-md mx-auto fixed bottom-20 h-52  translate-y-0 max-w-[37.5rem] w-screen pr-4 pl-4 py-0">
        <VisuallyHidden>
          <DialogTitle />
          <DialogDescription />
        </VisuallyHidden>

        <DialogClose className="h-0" onClick={() => handleClick("recipe")}>
          <Link href={route.myFridge.addIngredient}>
            <div className="bg-white rounded-lg h-14  border-border-default flex items-center justify-center">
              추가하기
            </div>
          </Link>
        </DialogClose>
        <DialogClose className="h-0" onClick={() => handleClick("edit")}>
          <div className="bg-white rounded-lg h-14 flex items-center justify-center">
            수정하기
          </div>
        </DialogClose>
        <DialogClose className="h-0" onClick={() => handleClick("delete")}>
          <div className="bg-white rounded-lg h-14 flex items-center justify-center">
            삭제하기
          </div>
        </DialogClose>
      </DialogContent>
    </Dialog>
  );
};

export default SelectConfigTypeModal;
