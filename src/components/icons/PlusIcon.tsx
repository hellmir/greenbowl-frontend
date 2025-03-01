import BaseIcon from "./BaseIcon";
import { StrokeIconProps } from "./types/icon";

const PlusIcon = ({ stroke, ...props }: StrokeIconProps) => {
  return (
    <BaseIcon {...props}>
      <path
        d="M5 12H19"
        className={`stroke-${stroke}`}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 5V19"
        className={`stroke-${stroke}`}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </BaseIcon>
  );
};

export default PlusIcon;
