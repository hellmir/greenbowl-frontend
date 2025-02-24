import BaseIcon from "./BaseIcon";

import { FillIconProps } from "./types/icon";

const NoteIcon = ({ fill, ...props }: FillIconProps) => {
  return (
    <BaseIcon {...props}>
      <path
        d="M15 5H9C6.79 5 5 6.79 5 9V15C5 17.21 6.79 19 9 19H15C17.21 19 19 17.21 19 15V9C19 6.79 17.21 5 15 5ZM15.37 15.37H8.62C8.28 15.37 8 15.1 8 14.75C8 14.4 8.28 14.12 8.62 14.12H15.38C15.72 14.12 16 14.4 16 14.75C16 15.1 15.72 15.37 15.37 15.37ZM15.37 12.63H8.62C8.28 12.63 8 12.35 8 12C8 11.65 8.28 11.37 8.62 11.37H15.38C15.72 11.37 16 11.65 16 12C16 12.35 15.72 12.63 15.38 12.63H15.37ZM15.37 9.88H8.62C8.28 9.88 8 9.6 8 9.25C8 8.9 8.28 8.63 8.62 8.63H15.38C15.72 8.63 16 8.9 16 9.25C16 9.6 15.72 9.88 15.37 9.88Z"
        className={`fill-${fill}`}
      />
    </BaseIcon>
  );
};

export default NoteIcon;
