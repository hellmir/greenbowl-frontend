"use client";

import { BaseIconProps } from "./types/icon";

const BaseIcon = ({
  height = 24,
  width = 24,
  children,
  onClick,
}: BaseIconProps) => {
  return (
    <svg
      width={width}
      height={height}
      fill="none"
      viewBox={`0 0 ${width} ${height}`}
      xmlns="http://www.w3.org/2000/svg"
      className={`hover:cursor-pointer`}
      onClick={() => onClick?.()}
    >
      {children}
    </svg>
  );
};

export default BaseIcon;
