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
}

const CalendarContainer = ({ date, handleChangeExpirationDate }: Props) => {
  const fullDate = formatDate(date);

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
        onDayClick={handleChangeExpirationDate}
        defaultMonth={date}
      />
    </div>
  );
};

export default CalendarContainer;
