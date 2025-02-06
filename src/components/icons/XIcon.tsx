import BaseIcon from "./BaseIcon";
import { StrokeIconProps } from "./types/icon";

const XIcon = ({ stroke, ...props }: StrokeIconProps) => {
  return (
    <BaseIcon {...props}>
      <path
        d="M18.75 5.25L5.25 18.75"
        className={`stroke-${stroke}`}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M18.75 18.75L5.25 5.25"
        className={`stroke-${stroke}`}
        stroke="#868686"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </BaseIcon>
  );
};

export default XIcon;
