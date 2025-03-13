/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/no-children-prop */

"use client";

import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ChevronLeft, ChevronRight } from "lucide-react";
import * as React from "react";
import {
  CalendarMonth,
  DayPicker,
  labelNext,
  labelPrevious,
  Modifiers,
  useDayPicker,
  type DayPickerProps,
} from "react-day-picker";

export type CalendarProps = DayPickerProps & {
  /**
   * In the year view, the number of years to display at once.
   * @default 12
   */
  yearRange?: number;

  /**
   * Wether to show the year switcher in the caption.
   * @default true
   */
  showYearSwitcher?: boolean;

  monthsClassName?: string;
  monthCaptionClassName?: string;
  weekdaysClassName?: string;
  weekdayClassName?: string;
  monthClassName?: string;
  captionClassName?: string;
  captionLabelClassName?: string;
  buttonNextClassName?: string;
  buttonPreviousClassName?: string;
  navClassName?: string;
  monthGridClassName?: string;
  weekClassName?: string;
  dayClassName?: string;
  dayButtonClassName?: string;
  rangeStartClassName?: string;
  rangeEndClassName?: string;
  selectedClassName?: string;
  todayClassName?: string;
  outsideClassName?: string;
  disabledClassName?: string;
  rangeMiddleClassName?: string;
  hiddenClassName?: string;
};

type NavView = "days" | "month";

/**
 * A custom calendar component built on top of react-day-picker.
 * @param props The props for the calendar.
 * @default yearRange 12
 * @returns
 */
function Calendar({
  className,
  showOutsideDays = true,
  showYearSwitcher = true,
  numberOfMonths,
  ...props
}: CalendarProps) {
  const [navView, setNavView] = React.useState<NavView>("days");
  const [displayYears, setDisplayYears] = React.useState<number>(
    new Date().getFullYear()
  );

  const { onNextClick, onPrevClick } = props;

  const columnsDisplayed = navView === "month" ? 1 : numberOfMonths;

  const _monthsClassName = cn("relative flex", props.monthsClassName);
  const _monthCaptionClassName = cn(
    "relative mx-10 flex h-7 items-center justify-center",
    props.monthCaptionClassName
  );
  const _weekdaysClassName = cn(
    "flex justify-between gap-1 mb-2",
    props.weekdaysClassName
  );
  const _weekdayClassName = cn(
    "w-8 text-sm font-normal text-muted-foreground",
    props.weekdayClassName
  );
  const _monthClassName = cn("w-full", props.monthClassName);
  const _captionClassName = cn(
    "relative flex items-center justify-center pt-1",
    props.captionClassName
  );
  const _captionLabelClassName = cn(
    "truncate text-sm font-medium",
    props.captionLabelClassName
  );
  const buttonNavClassName = buttonVariants({
    variant: "outline",
    className:
      "absolute h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100",
  });
  const _buttonNextClassName = cn(
    buttonNavClassName,
    "right-0",
    props.buttonNextClassName
  );
  const _buttonPreviousClassName = cn(
    buttonNavClassName,
    "left-0",
    props.buttonPreviousClassName
  );
  const _navClassName = cn("flex items-start", props.navClassName);
  const _monthGridClassName = cn("mx-auto mt-4", props.monthGridClassName);
  const _weekClassName = cn(
    "mt-1 flex justify-between gap-1 w-max items-start",
    props.weekClassName
  );
  const _dayClassName = cn("", props.dayClassName);
  const _dayButtonClassName = cn(
    buttonVariants({ variant: "ghost" }),
    "size-8 rounded-md p-0 font-normal transition-none aria-selected:opacity-100",
    props.dayButtonClassName
  );
  const buttonRangeClassName =
    "bg-accent [&>button]:bg-primary [&>button]:text-primary-foreground [&>button]:hover:bg-primary [&>button]:hover:text-primary-foreground";
  const _rangeStartClassName = cn(
    buttonRangeClassName,
    "day-range-start rounded-s-md",
    props.rangeStartClassName
  );
  const _rangeEndClassName = cn(
    buttonRangeClassName,
    "day-range-end rounded-e-md",
    props.rangeEndClassName
  );
  const _rangeMiddleClassName = cn(
    "bg-accent !text-foreground [&>button]:bg-transparent [&>button]:!text-foreground [&>button]:hover:bg-transparent [&>button]:hover:!text-foreground",
    props.rangeMiddleClassName
  );
  const _selectedClassName = cn(
    "[&>button]:bg-primary [&>button]:text-primary-foreground [&>button]:hover:bg-primary [&>button]:hover:text-primary-foreground",
    props.selectedClassName
  );
  const _todayClassName = cn(
    "[&>button]:bg-accent [&>button]:text-accent-foreground",
    props.todayClassName
  );
  const _outsideClassName = cn(
    "day-outside text-muted-foreground opacity-50 aria-selected:bg-accent/50 aria-selected:text-muted-foreground aria-selected:opacity-30",
    props.outsideClassName
  );
  const _disabledClassName = cn(
    "text-muted-foreground opacity-50",
    props.disabledClassName
  );
  const _hiddenClassName = cn("invisible flex-1", props.hiddenClassName);

  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      className={cn("p-3 border-none", className)}
      style={{
        width: 248.8 * (columnsDisplayed ?? 1) + "px",
      }}
      classNames={{
        months: _monthsClassName,
        month_caption: _monthCaptionClassName,
        weekdays: _weekdaysClassName,
        weekday: _weekdayClassName,
        month: _monthClassName,
        caption: _captionClassName,
        caption_label: _captionLabelClassName,
        button_next: _buttonNextClassName,
        button_previous: _buttonPreviousClassName,
        nav: _navClassName,
        month_grid: _monthGridClassName,
        week: _weekClassName,
        day: _dayClassName,
        day_button: _dayButtonClassName,
        range_start: _rangeStartClassName,
        range_middle: _rangeMiddleClassName,
        range_end: _rangeEndClassName,
        selected: _selectedClassName,
        today: _todayClassName,
        outside: _outsideClassName,
        disabled: _disabledClassName,
        hidden: _hiddenClassName,
      }}
      components={{
        Chevron: ({ orientation }) => {
          const Icon = orientation === "left" ? ChevronLeft : ChevronRight;
          return <Icon className="h-4 w-4" />;
        },
        Nav: ({ className }) => (
          <Nav
            className={className}
            displayYears={displayYears}
            navView={navView}
            setDisplayYears={setDisplayYears}
            onPrevClick={onPrevClick}
          />
        ),
        CaptionLabel: (props) => (
          <CaptionLabel
            showYearSwitcher={showYearSwitcher}
            navView={navView}
            setNavView={setNavView}
            displayYears={displayYears}
            {...props}
          />
        ),
        MonthGrid: ({ className, children, ...props }) => (
          <MonthGrid
            children={children}
            className={className}
            displayYears={displayYears}
            navView={navView}
            setNavView={setNavView}
            {...props}
          />
        ),
        Day: ({ className, day, modifiers, children }) => (
          <Day
            date={day.date}
            modifiers={modifiers}
            className={className}
            children={children}
          />
        ),
        DayButton: ({ day, modifiers, children, ...props }) => (
          <DayButton
            date={day.date}
            modifiers={modifiers}
            children={children}
            {...props}
          />
        ),

        MonthCaption: ({ calendarMonth, displayIndex, children }) => (
          <MonthCaption
            calendarMonth={calendarMonth}
            displayIndex={displayIndex}
            children={children}
          />
        ),
      }}
      numberOfMonths={columnsDisplayed}
      {...props}
    />
  );
}
Calendar.displayName = "Calendar";

function Nav({
  className,
  navView,
  displayYears,
  setDisplayYears,
  onPrevClick,
  onNextClick,
}: {
  className?: string;
  navView: NavView;
  displayYears: number;
  setDisplayYears: React.Dispatch<React.SetStateAction<number>>;
  onPrevClick?: (date: Date) => void;
  onNextClick?: (date: Date) => void;
}) {
  const { nextMonth, previousMonth, goToMonth } = useDayPicker();

  const handlePreviousClick = React.useCallback(() => {
    if (!previousMonth) return;
    if (navView === "month") {
      setDisplayYears((prev) => prev - 1);
      onPrevClick?.(new Date(displayYears - 1, 1, 1));
      return;
    }
    goToMonth(previousMonth);
    onPrevClick?.(previousMonth);
  }, [
    previousMonth,
    goToMonth,
    navView,
    onPrevClick,
    setDisplayYears,
    displayYears,
  ]);

  const handleNextClick = React.useCallback(() => {
    if (!nextMonth) return;
    if (navView === "month") {
      setDisplayYears((prev) => prev + 1);
      onNextClick?.(new Date(displayYears));
      return;
    }
    goToMonth(nextMonth);
    onNextClick?.(nextMonth);
  }, [
    goToMonth,
    nextMonth,
    navView,
    onNextClick,
    setDisplayYears,
    displayYears,
  ]);
  return (
    <nav className={cn("flex items-center", className)}>
      <Button
        variant="outline"
        className="border-none shadow-none text-content-tertiary absolute right-6 h-7 w-7 bg-transparent p-0 opacity-80 hover:opacity-100"
        type="button"
        aria-label={
          navView === "month"
            ? `Go to the before year`
            : labelPrevious(previousMonth)
        }
        onClick={handlePreviousClick}
      >
        <ChevronLeft className="h-4 w-4" />
      </Button>

      <Button
        variant="outline"
        className="border-none shadow-none text-content-tertiary absolute right-0 h-7 w-7 bg-transparent p-0 opacity-80 hover:opacity-100"
        type="button"
        aria-label={
          navView === "month" ? `Go to the next year` : labelNext(nextMonth)
        }
        onClick={handleNextClick}
      >
        <ChevronRight className="h-4 w-4" />
      </Button>
    </nav>
  );
}

const MonthCaption = ({
  calendarMonth,
  displayIndex,
  children,
}: {
  calendarMonth: CalendarMonth;
  displayIndex: number;
  children: React.ReactNode;
}) => {
  const date = `${calendarMonth.date.getFullYear()}. ${calendarMonth.date.getMonth() + 1}월`;
  return <div className="">{children}</div>;
};
function CaptionLabel({
  children,
  showYearSwitcher,
  navView,
  setNavView,
  displayYears,
  ...props
}: {
  showYearSwitcher?: boolean;
  navView: NavView;
  setNavView: React.Dispatch<React.SetStateAction<NavView>>;
  displayYears: number;
} & React.HTMLAttributes<HTMLSpanElement>) {
  if (!showYearSwitcher) return <span {...props}>{children}</span>;
  return (
    <Button
      className=" h-7 truncate paragraph-m text-content-tertiary"
      variant="ghost"
      size="sm"
      onClick={() => setNavView((prev) => (prev === "days" ? "month" : "days"))}
    >
      {navView === "days" ? children : displayYears}
    </Button>
  );
}

function MonthGrid({
  className,
  children,
  displayYears,
  navView,
  setNavView,
  ...props
}: {
  className?: string;
  children: React.ReactNode;
  displayYears: number;

  navView: NavView;
  setNavView: React.Dispatch<React.SetStateAction<NavView>>;
} & React.TableHTMLAttributes<HTMLTableElement>) {
  if (navView === "month") {
    return (
      <YearGrid
        displayYears={displayYears}
        setNavView={setNavView}
        className={className}
        {...props}
      />
    );
  }
  return (
    <table className={className} {...props}>
      {children}
    </table>
  );
}

function YearGrid({
  className,
  displayYears,
  setNavView,
  ...props
}: {
  className?: string;
  displayYears: number;

  setNavView: React.Dispatch<React.SetStateAction<NavView>>;
} & React.HTMLAttributes<HTMLDivElement>) {
  const { goToMonth } = useDayPicker();

  return (
    <div
      className={cn("grid grid-cols-3 gap-y-3 gap-x-4 mt-4 w-72 ")}
      {...props}
    >
      {Array.from({ length: 12 }, (_, i) => {
        return (
          <Button
            key={i}
            className={cn(
              "h-8 w-full rounded-lg label-xs text-content-secondary border border-border-default bg-foundation-secondary hover:bg-scale-yellowgreen-100 hover:text-foundation-primary hover:border-foundation-primary"
            )}
            variant="ghost"
            onClick={() => {
              setNavView("days");
              goToMonth(new Date(displayYears, i));
            }}
          >
            {i + 1}월
          </Button>
        );
      })}
    </div>
  );
}
const weekend = [0, 6];

const getTextColorClass = (isWeekend: boolean, isOutside: boolean) => {
  if (isOutside && isWeekend) return "text-scale-red-200";
  if (isOutside) return "text-content-quinary";
  if (isWeekend) return "text-foundation-negative";
  return "text-content-secondary";
};
const checkSelected = (children: React.ReactNode) => {
  if (!React.isValidElement(children)) return;

  const props = children.props as { "aria-label"?: string };
  const ariaLabel = props["aria-label"]?.split(" ");
  return ariaLabel?.includes("selected");
};
const Day = ({
  date,
  modifiers,
  children,
}: {
  date: Date;
  modifiers: Modifiers;
  className?: string;
  children: React.ReactNode;
}) => {
  const isWeekend = weekend.includes(date.getDay());
  const isOutside = modifiers.outside;

  const textColorClass = getTextColorClass(isWeekend, isOutside);
  const isSelected = checkSelected(children);
  return (
    <th className={cn(`h-8 w-8 heading-s  ${textColorClass} `)}>{children}</th>
  );
};
const DayButton = ({
  date,
  modifiers,
  children,
  ...props
}: {
  date: Date;
  modifiers: Modifiers;
  children: React.ReactNode;
}) => {
  // const isSelected = modifiers.
  const isSelected = modifiers.selected;
  return (
    <div
      {...props}
      className={` w-full h-full  flex justify-center items-center rounded-full hover:cursor-pointer hover:text-foundation-primary  ${isSelected ? "bg-foundation-primary hover:text-foundation-secondary text-foundation-secondary" : ""}`}
    >
      {children}
    </div>
  );
};

const WeekDay = ({
  attributes,
}: {
  attributes: React.ThHTMLAttributes<HTMLTableCellElement>;
}) => {
  const weekend = React.useMemo(() => ["토요일", "일요일"], []);
  const isWeekend = weekend.includes(attributes["aria-label"] as string);

  return (
    <th
      className={`w-8 label-s ${isWeekend ? "text-foundation-negative" : ""}`}
    >
      {attributes.children}
    </th>
  );
};

export { Calendar };
