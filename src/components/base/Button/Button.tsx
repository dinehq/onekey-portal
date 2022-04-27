import { FC, ReactNode } from 'react';

export interface ButtonProps {
  children: ReactNode;
}

export const Button: FC<ButtonProps> = (props) => {
  const { children } = props;

  return <div>Button {children}</div>;
};
