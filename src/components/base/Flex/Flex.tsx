import { FC, ReactNode } from 'react';

export interface FlexProps {
  children?: ReactNode;
  direction?: 'row' | 'row-reverse' | 'column' | 'column-reverse';
  wrap?: 'nowrap' | 'wrap' | 'wrap-reverse';
  gap?: number;
  justifyContent?:
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'space-between'
    | 'space-around'
    | 'space-evenly';
  alignContent?:
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'space-between'
    | 'space-around'
    | 'space-evenly';
  alignItems?: 'flex-start' | 'flex-end' | 'center' | 'stretch' | 'baseline';
}

export const Flex: FC<FlexProps> = (props) => {
  const {
    children,
    direction,
    justifyContent,
    alignContent,
    alignItems,
    gap,
    ...omittedProps
  } = props;

  const innerStyle = {
    display: 'flex',
    flexDirection: direction,
    justifyContent,
    alignContent,
    alignItems,
    gap,
    ...omittedProps,
  };

  return <div css={innerStyle}>{children}</div>;
};
