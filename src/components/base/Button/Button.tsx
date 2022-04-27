import { CSSProperties, FC, ReactNode } from 'react';

export interface ButtonProps extends CSSProperties {
  children: ReactNode;
}

export const Button: FC<ButtonProps> = (props) => {
  const { children, ...otherProps } = props;

  return (
    <button type="button" css={{ ...otherProps }}>
      {children}
    </button>
  );
};
