import { Button } from "@/components/ui/button";
import storageMethodMap from "@/constants/ingredients/storageMethod";

interface Props {
  storageCondition: keyof typeof storageMethodMap;
  onChange: (storageCondition: keyof typeof storageMethodMap) => void;
}

const StorageCondition = ({ storageCondition, onChange }: Props) => {
  return (
    <div className="h-8 flex items-center">
      <p className=" w-1/2">보관장소</p>
      <div className="w-1/2 flex justify-center gap-2 label-xs h-full">
        <Button
          onClick={() => onChange("COLD")}
          variant={"none"}
          className={`rounded-[8px] h-full border w-[3.125rem] border-border-default flex items-center justify-center grow ${storageMethodMap[storageCondition] === "냉장" ? "text-foundation-primary bg-scale-yellowgreen-100 border-foundation-primary" : ""}`}
        >
          냉장
        </Button>
        <Button
          onClick={() => onChange("FROZEN")}
          variant={"none"}
          className={`rounded-[8px] h-full w-[3.125rem] flex border border-border-default items-center justify-center grow ${storageMethodMap[storageCondition] === "냉동" ? "text-foundation-primary bg-scale-yellowgreen-100 border-foundation-primary" : ""}`}
        >
          냉동
        </Button>
        <Button
          onClick={() => onChange("ROOM_TEMP")}
          variant={"none"}
          className={`rounded-[8px] h-full w-[3.125rem] flex border border-border-default items-center justify-center grow ${storageMethodMap[storageCondition] === "실온" ? "text-foundation-primary bg-scale-yellowgreen-100 border-foundation-primary" : ""}`}
        >
          실온
        </Button>
      </div>
    </div>
  );
};

export default StorageCondition;
