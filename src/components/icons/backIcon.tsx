import BaseIcon from "./BaseIcon";
import { StrokeIconProps } from "./types/icon";

const BackIcon = ({ stroke, ...props }: StrokeIconProps) => {
  return (
    <BaseIcon {...props}>
      <path
        d="M15 19.5L8.91421 13.4142C8.24755 12.7475 7.91421 12.4142 7.91421 12C7.91421 11.5858 8.24755 11.2525 8.91421 10.5858L15 4.5"
        className={`stroke-${stroke}`}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </BaseIcon>
  );
};

export default BackIcon;
