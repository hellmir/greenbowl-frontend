"use client";

import { Dispatch, SetStateAction, useState } from "react";
import { Calendar } from "../ui/calendar";
import { ko } from "react-day-picker/locale";

const formatCaption = (date: Date) => {
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  return `${year}.${month.toString().padStart(2, "0")}월`;
};

const formatDate = (date: Date) =>
  `${date.getFullYear()}.${(date.getMonth() + 1).toString().padStart(2, "0")}.${date.getDate().toString().padStart(2, "0")}`;

interface Props {
  date: Date;
  handleChangeExpirationDate: (date: Date) => void;
  setActive: Dispatch<SetStateAction<boolean>>;
}

const CalendarContainer = ({
  date,
  handleChangeExpirationDate,
  setActive,
}: Props) => {
  const fullDate = formatDate(date);
  const [selectedDate, setSelectedDate] = useState<Date>(date);

  return (
    <div className="px-4 py-4 ">
      <div className=" heading-l text-content-secondary w-full flex justify-center mb-3">
        {fullDate}
      </div>
      <Calendar
        dayButtonClassName="hover:text-foundation-primary"
        locale={ko}
        fixedWeeks={true}
        mode="single"
        className="rounded-md border !w-auto p-0"
        aria-describedby={undefined}
        formatters={{
          formatCaption: (date) => formatCaption(date),
        }}
        selected={date}
        onDayClick={setSelectedDate}
        defaultMonth={date}
      />
      <div className="mt-3 w-full flex justify-between gap-2">
        <div
          className=" cursor-pointer py-2 w-full flex justify-center items-center rounded-lg border-border-default border label-xs text-content-secondary"
          onClick={() => setActive(false)}
        >
          취소
        </div>
        <div
          className="cursor-pointer  py-2 w-full flex justify-center items-center rounded-lg border-border-default border label-xs text-content-secondary"
          onClick={() => {
            handleChangeExpirationDate(selectedDate);
            setActive(false);
          }}
        >
          확인
        </div>
      </div>
    </div>
  );
};

export default CalendarContainer;
