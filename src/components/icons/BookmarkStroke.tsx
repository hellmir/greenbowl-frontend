import BaseIcon from "./BaseIcon";
import { StrokeIconProps } from "./types/icon";

const BookmarkStrokeIcon = ({ stroke, ...props }: StrokeIconProps) => {
  return (
    <BaseIcon {...props}>
      <path
        d="M18 17.3915C18 18.9871 18 19.7848 17.4848 20.0704C16.9695 20.356 16.293 19.9331 14.94 19.0875L13.06 17.9125C12.5445 17.5903 12.2868 17.4292 12 17.4292C11.7132 17.4292 11.4555 17.5903 10.94 17.9125L9.06 19.0875C7.70697 19.9331 7.03046 20.356 6.51523 20.0704C6 19.7848 6 18.9871 6 17.3915V4.5C6 4.30109 6.07902 4.11032 6.21967 3.96967C6.36032 3.82902 6.55109 3.75 6.75 3.75H17.25C17.4489 3.75 17.6397 3.82902 17.7803 3.96967C17.921 4.11032 18 4.30109 18 4.5V17.3915Z"
        className={`stroke-${stroke}`}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </BaseIcon>
  );
};

export default BookmarkStrokeIcon;
