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
import { AlertDialogDescription } from "@radix-ui/react-alert-dialog";

interface Props {
  handleOkBtn: () => void;
  isActive: boolean;
  setIsActive: Dispatch<SetStateAction<boolean>>;
}

const NavigationLoginRequiredModal = ({
  handleOkBtn,
  isActive,
  setIsActive,
}: Props) => {
  return (
    <AlertDialog open={isActive} onOpenChange={setIsActive}>
      <AlertDialogContent className=" max-w-[272px] p-0 bg-inherit border-none gap-0 ">
        <div className="w-full flex items-center justify-center z-10">
          <MainCharacter />
        </div>
        <div className="bg-white pt-6 pr-4 pl-4 pb-4 rounded-[20px] z-20">
          <AlertDialogHeader className="sm:text-center">
            <AlertDialogTitle className=" heading-l">
              로그인이 필요해요
            </AlertDialogTitle>
            <AlertDialogDescription className=" whitespace-pre paragraph-m text-content-tertiary">
              {"더 다양한 서비스 이용을 위해\n 로그인 하시겠어요?"}
            </AlertDialogDescription>
            <div className="">
              <AlertDialogCancel className="bg-content-quinary hover:bg-content-quinary hover:text-content-secondary text-content-secondary w-[76px]">
                취소
              </AlertDialogCancel>
              <AlertDialogAction
                onClick={handleOkBtn}
                className="flex-grow ml-2 "
              >
                로그인 하러가기
              </AlertDialogAction>
            </div>
          </AlertDialogHeader>
        </div>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default NavigationLoginRequiredModal;
