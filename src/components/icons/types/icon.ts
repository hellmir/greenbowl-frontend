export interface BaseIconProps {
  height?: number;
  width?: number;
  children?: React.ReactNode;
  onClick?: () => void;
}

export interface StrokeIconProps extends BaseIconProps {
  stroke?: string;
}
export interface FillIconProps extends BaseIconProps {
  fill?: string;
}

export interface FillAndStrokeIconProps extends BaseIconProps {
  stroke?: string;
  fill?: string;
}
