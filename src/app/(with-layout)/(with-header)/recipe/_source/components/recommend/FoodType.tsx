"use client";

const foodTypes = ["한식", "중식", "일식", "양식"] as const;
export type FoodTypes = (typeof foodTypes)[number] | "all";

interface Props {
  handleClickItem: (type: FoodTypes) => void;
  selectedType: FoodTypes | undefined;
}

export const FoodType = ({ handleClickItem, selectedType }: Props) => {
  return (
    <div className="p-3 bg-foundation-secondary rounded-xl">
      <div className="label-s text-content-secondary mb-3">음식 종류</div>
      <div className="grid grid-cols-2 gap-3">
        {foodTypes.map((type) => (
          <input
            type="button"
            key={type}
            aria-label={type}
            className={`py-2 w-full flex items-center justify-center border  rounded-lg hover:cursor-pointer ${selectedType === type ? "border-foundation-primary bg-scale-yellowgreen-100" : "border-border-default"}`}
            value={type}
            onClick={() => handleClickItem(type)}
          ></input>
        ))}
      </div>
    </div>
  );
};
