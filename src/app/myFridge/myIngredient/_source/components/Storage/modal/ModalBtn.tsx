"use client";

import MoreIcon from "@/components/icons/More";
import {
  Dialog,
  DialogContent,
  DialogClose,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import useIngredientConfigState from "@/store/ingredientConfigStore";

const ModalBtn = () => {
  const changeConfigState = useIngredientConfigState(
    (state) => state.changeConfigState
  );

  return (
    <Dialog>
      <DialogTrigger>
        <MoreIcon fill="content-tertiary" />
      </DialogTrigger>
      <DialogContent className=" bg-inherit border-none rounded-md mx-auto top-3/4 h-0 max-w-[599px] w-screen pr-4 pl-4">
        <DialogTitle className=" hidden"></DialogTitle>
        <DialogClose onClick={() => changeConfigState("none")}>
          <div className="bg-white rounded-lg h-14  border-border-border flex items-center justify-center">
            추가하기
          </div>
        </DialogClose>
        <DialogClose onClick={() => changeConfigState("edit")}>
          <div className="bg-white rounded-lg h-14 flex items-center justify-center">
            수정하기
          </div>
        </DialogClose>
        <DialogClose onClick={() => changeConfigState("delete")}>
          <div className="bg-white rounded-lg h-14 flex items-center justify-center">
            삭제하기
          </div>
        </DialogClose>
      </DialogContent>
    </Dialog>
  );
};

export default ModalBtn;
