"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@/components/ui/dialog";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";

import CalendarContainer from "../calendar/CalendarContainer";

interface Props {
  active: boolean;
  setActive: React.Dispatch<React.SetStateAction<boolean>>;
  date: Date;

  handleChangeExpirationDate: (date: Date) => void;
}

const CalendarModal = ({
  date,
  handleChangeExpirationDate,
  active,
  setActive,
}: Props) => {
  return (
    <Dialog open={active} onOpenChange={setActive}>
      <DialogContent
        aria-describedby={undefined}
        className="w-auto rounded-2xl sm:rounded-2xl p-0 top-[50%]"
      >
        <CalendarContainer
          date={date}
          handleChangeExpirationDate={handleChangeExpirationDate}
          setActive={setActive}
        />
      </DialogContent>
      <VisuallyHidden>
        <DialogTitle />
        <DialogDescription />
      </VisuallyHidden>
    </Dialog>
  );
};

export default CalendarModal;
