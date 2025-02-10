import ConfirmDeleteModal from "@/components/modal/ConfirmModal";
import ModalBtn from "../myFridge/myIngredient/_source/components/Storage/modal/ModalBtn";
import MainCharacter from "@/components/character/MainCharacter";

const page = () => {
  return (
    <div className=" mt-[100px] min-h-[600px]">
      <ModalBtn />

      <MainCharacter />
    </div>
  );
};

export default page;
