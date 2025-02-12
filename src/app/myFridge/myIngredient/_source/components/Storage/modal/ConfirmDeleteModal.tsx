import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import MainCharacter from "@/components/character/MainCharacter";
import { Dispatch, SetStateAction } from "react";

interface Props {
  handleOkBtn: () => void;
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  isPending: boolean;
}

const ConfirmDeleteModal = ({
  handleOkBtn,
  isOpen,
  setIsOpen,
  isPending,
}: Props) => {
  return (
    <AlertDialog open={isOpen} onOpenChange={setIsOpen}>
      <AlertDialogContent className=" max-w-[272px] p-0 bg-inherit border-none gap-0 ">
        <div className="w-full flex items-center justify-center z-10">
          <MainCharacter />
        </div>
        <div className="bg-white pt-24 pr-16 pl-16 pb-16 rounded-[20px] z-20">
          <AlertDialogHeader className="sm:text-center">
            <AlertDialogTitle className=" heading-l mb-20">
              선택한 재료를
              <br /> 삭제하시겠어요?
            </AlertDialogTitle>
            <div className="flex w-full justify-between">
              <AlertDialogCancel className="bg-content-quinary hover:bg-content-quinary hover:text-content-secondary text-content-secondary w-[76px]">
                취소
              </AlertDialogCancel>
              <AlertDialogAction
                disabled={isPending}
                onClick={handleOkBtn}
                className="flex-grow ml-8 "
              >
                네, 삭제할게요
              </AlertDialogAction>
            </div>
          </AlertDialogHeader>
        </div>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default ConfirmDeleteModal;
