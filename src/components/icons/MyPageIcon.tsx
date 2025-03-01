import BaseIcon from "./BaseIcon";

import { FillIconProps } from "./types/icon";

const MyPageIcon = ({ fill, ...props }: FillIconProps) => {
  return (
    <BaseIcon {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.25 12C14.9424 12 17.125 9.81739 17.125 7.125C17.125 4.43261 14.9424 2.25 12.25 2.25C9.55761 2.25 7.375 4.43261 7.375 7.125C7.375 9.81739 9.55761 12 12.25 12ZM20.3659 19.5082C20.5157 20.323 19.8303 21 19.0019 21H12.2519H5.5019C4.67348 21 3.98806 20.323 4.13787 19.5082C4.43821 17.8747 5.22741 16.3572 6.41827 15.1664C7.96545 13.6192 10.0639 12.75 12.2519 12.75C14.4399 12.75 16.5384 13.6192 18.0855 15.1664C19.2764 16.3572 20.0656 17.8747 20.3659 19.5082Z"
        className={`fill-${fill}`}
      />
    </BaseIcon>
  );
};

export default MyPageIcon;
