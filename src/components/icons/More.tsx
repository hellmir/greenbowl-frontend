import BaseIcon from "./BaseIcon";

import { FillIconProps } from "./types/icon";

const MoreIcon = ({ fill, ...props }: FillIconProps) => {
  return (
    <BaseIcon {...props}>
      <circle cx="12" cy="5.6" r="1.6" className={`fill-${fill}`} />
      <circle cx="12" cy="11.9999" r="1.6" className={`fill-${fill}`} />
      <circle cx="12" cy="18.4" r="1.6" className={`fill-${fill}`} />
    </BaseIcon>
  );
};

export default MoreIcon;
