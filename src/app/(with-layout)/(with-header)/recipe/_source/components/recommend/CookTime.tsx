"use client";

const cookTimes = ["10분 미만", "20분", "30분", "1시간 이상"] as const;

export type CookTimes = (typeof cookTimes)[number] | "all";

interface Props {
  handleClickItem: (time: CookTimes) => void;
  selectedTime: CookTimes | undefined;
}

export const CookTime = ({ handleClickItem, selectedTime }: Props) => {
  return (
    <div className="p-3 bg-foundation-secondary rounded-xl">
      <div className="label-s text-content-secondary mb-3">요리시간</div>
      <div className="grid grid-cols-2 gap-3">
        {cookTimes.map((time) => (
          <input
            type="button"
            key={time}
            aria-label={time}
            className={`py-2 w-full flex items-center justify-center border  rounded-lg hover:cursor-pointer ${selectedTime === time ? "border-foundation-primary bg-scale-yellowgreen-100" : "border-border-default"}`}
            value={time}
            onClick={() => handleClickItem(time)}
          ></input>
        ))}
      </div>
    </div>
  );
};
