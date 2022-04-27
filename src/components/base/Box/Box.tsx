import { FC } from 'react';

export interface BoxProps {
  children: React.ReactNode;
}

export const Box: FC<BoxProps> = (props) => {
  const { children } = props;

  return <div>{children}</div>;
};
