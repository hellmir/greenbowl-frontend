import { Button } from "@/components/ui/button";
import { StorageCondition as TStorageCondition } from "@/app/myFridge/_source/types/fridge";

interface Props {
  storageCondition: string;
  onChange: (storageCondition: TStorageCondition) => void;
}

const StorageCondition = ({ storageCondition, onChange }: Props) => {
  return (
    <div className="h-[34px] flex items-center">
      <p className=" w-1/2">보관장소</p>
      <div className="w-1/2 flex justify-center gap-8 label-xs h-full">
        <Button
          onClick={() => onChange("냉장")}
          variant={"ghost"}
          className={`rounded-[8px] h-full border w-[50px] border-border-border flex items-center justify-center grow ${storageCondition === "냉장" ? "text-foundation-primary bg-yellowgreen-100 border-foundation-primary" : ""}`}
        >
          냉장
        </Button>
        <Button
          onClick={() => onChange("냉동")}
          variant={"ghost"}
          className={`rounded-[8px] h-full w-[50px] flex border border-border-border items-center justify-center grow ${storageCondition === "냉동" ? "text-foundation-primary bg-yellowgreen-100 border-foundation-primary" : ""}`}
        >
          냉동
        </Button>
        <Button
          onClick={() => onChange("실온")}
          variant={"ghost"}
          className={`rounded-[8px] h-full w-[50px] flex border border-border-border items-center justify-center grow ${storageCondition === "실온" ? "text-foundation-primary bg-yellowgreen-100 border-foundation-primary" : ""}`}
        >
          실온
        </Button>
      </div>
    </div>
  );
};

export default StorageCondition;
