import BaseIcon from "./BaseIcon";
import { StrokeIconProps } from "./types/icon";

const ArrowRightIcon = ({ stroke, ...props }: StrokeIconProps) => {
  return (
    <BaseIcon {...props}>
      <path
        d="M10.25 17L14.3072 12.9428C14.7516 12.4984 14.9739 12.2761 14.9739 12C14.9739 11.7239 14.7516 11.5016 14.3072 11.0572L10.25 7"
        className={`stroke-${stroke}`}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </BaseIcon>
  );
};

export default ArrowRightIcon;
