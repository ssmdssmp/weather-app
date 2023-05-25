export type TFlexWrapper = {
  width?: string;
  height?: string;
  direction?: 'row' | 'column';
  bgColor?: string;
  justify?:
    | 'flex-start'
    | 'center'
    | 'flex-end'
    | 'space-between'
    | 'space-around';
  align?: 'flex-start' | 'center' | 'flex-end';
  gap?: string;
  wrap?: 'nowrap' | 'wrap' | 'wrap-reverse' | 'inherit' | 'initial' | 'unset';
};

export type TStyledText = {
  color?: string;
  size?: number;
  weight?: string;
};
