import BaseIcon from "./BaseIcon";

import { FillIconProps } from "./types/icon";

const ExitIcon = ({ fill, ...props }: FillIconProps) => {
  return (
    <BaseIcon {...props}>
      <g clipPath="url(#clip0_518_11995)">
        <path
          d="M6.46873 11.5C6.46873 12.6 7.35747 13.5 8.44371 13.5H12.8874V15.78C12.8874 17.01 11.9098 18 10.6952 18H6.19223C4.97762 18 4 17.01 4 15.78V7.22C4 5.99 4.97762 5 6.19223 5H10.6952C11.9098 5 12.8874 5.99 12.8874 7.22V9.5H8.44371C7.35747 9.5 6.46873 10.4 6.46873 11.5Z"
          className={`fill-${fill}`}
        />
        <path
          d="M18.8025 11.9899L16.5214 14.2999C16.0967 14.7299 15.3561 14.4199 15.3561 13.8099V12.4999H8.44367C7.90055 12.4999 7.45618 12.0499 7.45618 11.4999C7.45618 10.9499 7.90055 10.4999 8.44367 10.4999H15.3561V9.18989C15.3561 8.57989 16.0967 8.26989 16.5214 8.69989L18.8025 11.0099C19.0691 11.2799 19.0691 11.7199 18.8025 11.9899Z"
          className={`fill-${fill}`}
        />
      </g>
      <defs>
        <clipPath id="clip0_518_11995">
          <rect
            width="15"
            height="13"
            fill="white"
            transform="translate(4 5)"
          />
        </clipPath>
      </defs>
    </BaseIcon>
  );
};

export default ExitIcon;
